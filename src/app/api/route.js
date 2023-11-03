import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: 'localhost',
    port: 3306,
    database: 'sakila',
    user: 'root',
    password: 'root',
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

export async function GET(req, res) {
  const aa = await excuteQuery({ query: 'SELECT * FROM `actor` limit 2' });
  return new Response(JSON.stringify(aa));
}
