const env = process.env;

const config = {
  host: env.DB_HOST || "localhost", // donde está alojado. Localhost es la dirección de la máquina.
  user: env.DB_USER || "focyl",
  password: env.DB_PASSWORD || "focyl",
  database: env.DB_NAME || "tiendaonline",
  debug: false,
  connectionLimit: env.DB_CONN_LIMIT || 100,
};

module.exports = config;
