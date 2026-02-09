import mysql from 'mysql2/promise';

// Use a global variable to persist the pool across hot reloads in development
const globalForMysql = global as unknown as { pool: mysql.Pool };

export const pool =
    globalForMysql.pool ||
    mysql.createPool({
        uri: process.env.DATABASE_URL,
        connectionLimit: 10,
        waitForConnections: true,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0,
    });

if (process.env.NODE_ENV !== 'production') globalForMysql.pool = pool;

export default pool;
