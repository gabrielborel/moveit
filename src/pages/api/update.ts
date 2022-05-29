import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { fauna } from '../../services/fauna';
import { query as q } from 'faunadb';

type faunaUser = {
  ref: any;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { challengesCompleted, level, currentExperience } = req.body;

    const data = { level, currentExperience, challengesCompleted };

    try {
      const session = await getSession({ req });

      const user: faunaUser = await fauna.query(
        q.Get(q.Match(q.Index('user_by_email'), q.Casefold(session.user.email)))
      );

      console.log(user);

      await fauna.query(q.Update(q.Ref(user.ref), { data }));

      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
    }
  }
};
