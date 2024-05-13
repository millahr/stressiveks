import promisePool from '../utils/database.mjs';

const listAllEntries = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM DiaryEntries');
    // console.log('rows', rows);
    return rows;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const listAllEntriesByUserId = async (user_id) => {
  try {
    const sql = 'SELECT * FROM DiaryEntries WHERE user_id=?';
    console.log(user_id)
    const params = [user_id];
    const [rows] = await promisePool.query(sql, params);
    if (rows.length === 0) {
      return {error: 404, message: 'user not found'};
    }
    console.log('rows', rows);
    return rows;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const findEntryById = async (userId) => {
  try {
    const [rows] = await promisePool.query(
      'SELECT * FROM DiaryEntries WHERE user_id = ?',
      [userId],
    );
    // console.log('rows', rows);
    return rows[0];
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const addEntry = async (entry) => {
  const sql = `INSERT INTO DiaryEntries
               (user_id, entry_date, title, notes, HRVData, mood)
               VALUES (?, ?, ?, ?, ?, ?)`;
  const params = [
    entry.user_id,
    entry.entry_date,
    entry.title,
    entry.notes,
    entry.HRVData,
    entry.mood,
  ];
  try {
    const rows = await promisePool.query(sql, params);
    // console.log('rows', rows);
    return {entry_id: rows[0].insertId};
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};


export {
  listAllEntries,
  listAllEntriesByUserId,
  findEntryById,
  addEntry,
};