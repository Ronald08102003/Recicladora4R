// db.js
const { Pool } = require('pg');

// Usamos variable de entorno DATABASE_URL (configurada en Render)
// Si no existe, puedes dejar tu URL de prueba local, pero en producción siempre debe venir de Render
const connectionString = process.env.DATABASE_URL || 
  'postgresql://postgres:h5BVoOWRqsvdl7lB@uncwomrludpermxhuxhq.supabase.co:5432/postgres';

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false } // necesario para Supabase
});

// Test de conexión (solo en local o logs de Render)
pool.connect()
  .then(() => console.log('✅ Conexión exitosa a la base de datos'))
  .catch((err) => console.error('❌ Error de conexión a la DB:', err.stack));

module.exports = pool;






