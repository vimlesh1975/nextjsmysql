// db.js
// import mysql from 'serverless-mysql';
// const db = mysql({
//   config: {
//     host: 'localhost',
//     port: 3306,
//     database: 'sakila',
//     user: 'root',
//     password: 'root',
//   },
// });
// export default async function excuteQuery({ query, values }) {
//   try {
//     const results = await db.query(query, values);
//     await db.end();
//     return results;
//   } catch (error) {
//     return { error };
//   }
// }

export function GET(req, res) {
  return new Response('Hello');
}
