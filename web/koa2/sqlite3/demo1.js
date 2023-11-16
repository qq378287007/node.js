//npm install sqlite3 -g

const sqlite3 = require('sqlite3').verbose();

// 创建数据库连接
const db = new sqlite3.Database('mydatabase.db');

// 创建表
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER
  )`);

// 插入数据
db.run(`INSERT INTO users (name, age) VALUES ('John Doe', 25)`);
db.run(`INSERT INTO users (name, age) VALUES ('Tom', 26)`);
db.run(`INSERT INTO users (name, age) VALUES ('Jack', 29)`);

// 查询数据
db.all(`SELECT * FROM users`, (err, rows) => {
    if (err) {
        console.error(err);
    } else {
        console.log(rows);
    }
});

// 更新数据
db.run(`UPDATE users SET age = 30 WHERE name = 'John Doe'`);

// 删除数据
db.run(`DELETE FROM users WHERE name = 'John Doe'`);

// 关闭数据库连接
db.close();
