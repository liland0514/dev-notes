/* -----------------------------
   1️⃣ 切換資料庫
----------------------------- */
USE database_name;
-- 範例
USE connecttest_db;

/* -----------------------------
   2️⃣ 查看資料庫 / 表格
----------------------------- */
-- 查看所有資料庫
SHOW DATABASES;

-- 查看當前資料庫的所有表格
SHOW TABLES;

-- 查看表格欄位結構
DESCRIBE table_name;
-- 範例
DESCRIBE new_table;

/* -----------------------------
   3️⃣ 選取資料 (SELECT)
----------------------------- */
-- 取出所有欄位
SELECT * FROM table_name;

-- 取出指定欄位
SELECT column1, column2 FROM table_name;

-- 取前 N 筆資料
SELECT * FROM table_name LIMIT 10;

-- 範例
SELECT id, name FROM users;

/* -----------------------------
   4️⃣ 新增資料 (INSERT)
----------------------------- */
-- 插入單筆
INSERT INTO table_name (column1, column2) VALUES (value1, value2);

-- 插入多筆
INSERT INTO table_name (column1, column2) VALUES 
(value1, value2),
(value3, value4);

-- 範例
INSERT INTO users (name, email) VALUES ('Alice', 'alice@test.com');

/* -----------------------------
   5️⃣ 更新資料 (UPDATE)
----------------------------- */
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;

-- 範例
UPDATE users
SET email = 'alice123@test.com'
WHERE id = 1;

/* -----------------------------
   6️⃣ 刪除資料 (DELETE)
----------------------------- */
DELETE FROM table_name WHERE condition;

-- 範例
DELETE FROM users WHERE id = 1;

/* -----------------------------
   7️⃣ 刪除表格 (DROP TABLE)
----------------------------- */
DROP TABLE IF EXISTS table_name;

-- 範例
DROP TABLE IF EXISTS new_table;

/* -----------------------------
   8️⃣ 建立表格 (CREATE TABLE)
----------------------------- */
CREATE TABLE table_name (
    id INT AUTO_INCREMENT PRIMARY KEY,
    column1 VARCHAR(255) NOT NULL,
    column2 INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 範例
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/* -----------------------------
   9️⃣ 查詢條件 / 排序
----------------------------- */
-- 條件查詢
SELECT * FROM users WHERE name = 'Alice';

-- 排序
SELECT * FROM users ORDER BY created_at DESC;

-- 範圍查詢
SELECT * FROM users WHERE id BETWEEN 1 AND 10;

-- 模糊查詢
SELECT * FROM users WHERE email LIKE '%@test.com';
