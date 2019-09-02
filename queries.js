const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "andela19961",
  port: 5433
});
const getUsers = (request, response) => {
  pool.query('SELECT * FROM public."Users";', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getAllRegate = (request, response) => {
  pool.query('SELECT * FROM public."Regate";', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    'SELECT * FROM "Users" WHERE "ID" = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const createUser = (request, response) => {
  const { name, surname, username, email, password } = request.body;
  const ID = "SERIAL";

  pool.query(
    'INSERT INTO "Users" (name,surname,username,ID, email,password) VALUES ($1, $2,$3,$4,$5,$6)',
    [name, surname, username, ID, email, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
};
const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    'UPDATE "Users" SET name = $1,surname = $2,username = $3, email = $5,password = $6 WHERE ID = $4',
    [name, surname, username, email, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};
const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM "Users" WHERE ID = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};
const getAllNews = (request, response) => {
  pool.query('SELECT * FROM public."News";', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAllRegate,
  getAllNews
};
