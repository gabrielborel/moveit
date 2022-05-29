import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { query as q } from 'faunadb';
import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ],
  callbacks: {
    signIn: async ({ user }) => {
      const { email, name, image } = user;

      const newUserData = {
        name,
        email,
        image,
        challengesCompleted: 0,
        level: 1,
        currentExperience: 0
      };

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(email)))
            ),
            q.Create(q.Collection('users'), {
              data: newUserData
            }),
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email)))
          )
        );

        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    }
  },
  secret: process.env.NEXTAUTH_SECRET
});
