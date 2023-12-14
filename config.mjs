import pgPromise from 'pg-promise';

const pgp = pgPromise();

const connectionStr = {
  connectionString: "postgres://aguasol:6lzdiAVb3XowppG7DSLxbAeEfEQjWESP@dpg-clthss5a73kc73ejf3lg-a.oregon-postgres.render.com/aguasol_l11a",
  ssl: {
    rejectUnauthorized: false // Esto permite la conexión sin verificar el certificado SSL/TLS. Utilízalo con precaución en producción.
  }
};
//const connectionStr = "postgres://postgres:1234@localhost:5432/new_sol3";
export const db_pool = pgp(connectionStr);

try {
  db_pool.connect()
    .then(obj => {
      console.log("AGUA SOL DB CONNECTED !");
      obj.done();
    })
    .catch(err => {
      console.log("NO CONNECTED AGUA SOL:", err);
    });
} catch (err) {
  console.log(`ERROR CONFIGURATION: ${err}`);
}