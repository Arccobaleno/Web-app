const db = require('./database');

// Create items table if not exists
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

const getAllItems = (callback) => {
  db.all('SELECT * FROM items', [], callback);
};

const addItem = (item, callback) => {
  db.run(
    `INSERT INTO items (name, description) VALUES (?, ?)`,
    [item.name, item.description],
    callback
  );
};

const updateItem = (id, item, callback) => {
  db.run(
    `UPDATE items SET name = ?, description = ? WHERE id = ?`,
    [item.name, item.description, id],
    callback
  );
};

const partialUpdateItem = (id, fields, callback) => {
  const setClause = Object.keys(fields)
    .map((key) => `${key} = ?`)
    .join(', ');
  const values = [...Object.values(fields), id];
  db.run(`UPDATE items SET ${setClause} WHERE id = ?`, values, callback);
};

const deleteItem = (id, callback) => {
  db.run(`DELETE FROM items WHERE id = ?`, [id], callback);
};

module.exports = { getAllItems, addItem, updateItem, partialUpdateItem, deleteItem };
