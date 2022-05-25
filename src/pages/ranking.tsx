import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { fauna } from '../services/fauna';
import { query as q } from 'faunadb';
import { Container } from '../styles/ranking.styles';

export default function RankingPage() {
  return (
    <>
      <Head>
        <title>Ranking | moveit</title>
      </Head>

      <main>
        <Container>Ranking</Container>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (req) => {
  const users = await fauna.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('users'))),
      q.Lambda((x) => q.Get(x))
    )
  );

  return {
    props: {}
  };
};
