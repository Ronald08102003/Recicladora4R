// db.js
const { Pool } = require('pg');

// URL de conexión a PostgreSQL (Supabase)
// En Render debe venir de la variable de entorno DATABASE_URL
const connectionString = process.env.DATABASE_URL || 
  'postgresql://postgres:h5BVoOWRqsvdl7lB@uncwomrludpermxhuxhq.supabase.co:5432/postgres';

// Configuración del Pool
const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false } // obligatorio para conexiones externas como Render/Supabase
});

// Test de conexión (solo para logs)
pool.connect()
  .then(() => console.log('✅ Conexión exitosa a la base de datos de Recicladora 4R'))
  .catch((err) => console.error('❌ Error de conexión a la DB:', err.stack));

module.exports = pool;





