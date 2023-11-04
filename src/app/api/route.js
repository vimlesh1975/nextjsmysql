import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: '192.168.15.111',
    port: 3306,
    database: 'c1news',
    user: 'itmaint',
    password: 'itddkchn',
  },
});
const excuteQuery = async ({ query, values }) => {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
};

export async function POST(req, res) {
  const body = await req.json();
  const aa = await excuteQuery({ query: body.query });
  return new Response(JSON.stringify(aa));
}
