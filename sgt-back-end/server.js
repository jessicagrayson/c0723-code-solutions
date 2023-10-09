import express from 'express';
import pg from 'pg';

// Create express app
const app = express();

// Use JSON middleware to parse request bodies
app.use(express.json());

// Create a pg database connection pool
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allows non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

// GET all rows from the grades table
app.get('/api/grades', async (req, res, next) => {
  try {
    // Query the database
    const sql = `
    select *
    from "grades";
    `;

    // Get results
    const result = await db.query(sql);
    const grades = result.rows;

    // If no grades found, return a 404 error
    if (!grades || grades.length === 0) {
      throw new ClientError(500, 'No grades found in the database');
    }

    // If successful, send the grades as JSON response
    res.json(grades);
    console.log('Grades successfully retrieved');
  } catch (error) {
    // If there's an error, pass it to the error handling middleware
    next(error);
  }
});

// GET row from gradeId
app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    // validate the inputs
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }
    const sql = `
      select *
        from "grades"
      where "gradeId" = $1
    `;
    const params = [gradeId];

    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

// POST (insert) a new grade into the "grades" table
app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    validateName(name);
    validateCourse(course);
    validateScore(score);
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
    `;
    // Execute the query w/ provided data
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const [grade] = result.rows;
    // If successful, send new grade JSON response
    res.status(201).json(grade);
  } catch (error) {
    // if there is an error, passes it to handler
    next(error);
  }
});

// PUT (update) a row in "grades" table
app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    // Validate input
    const gradeId = Number(req.params.gradeId);
    validateGradeId(gradeId);
    const { name, course, score } = req.body;
    // validateName(name);
    // validateCourse(course);

    const sql = `
    update "grades"
    set "name" = $2,
    "course" = $3,
    "score" = $4
    where "gradeId" = $1
    returning *
    `;

    // Set query params
    const params = [gradeId, name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];

    // If no grade is found, throws error
    if (!grade)
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    res.json(grade);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    validateGradeId(gradeId);
    const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    validateGrade(grade, gradeId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ error: message });
});

// Listen to the server on port 8080
app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});

// Validation functions
function validateName(name) {
  if (!name) {
    throw new ClientError(400, '"name" is required');
  }
}

function validateGradeId(gradeId) {
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    throw new ClientError(400, '"gradeId" must be a positive integer');
  }
}

function validateGrade(grade, gradeId) {
  if (!grade) {
    throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
  }
}

function validateCourse(course) {
  if (!course) {
    throw new ClientError(400, '"course" is required');
  }
}

function validateScore(score) {
  if (Number.isNaN(score) || score < 0 || score > 100) {
    throw new ClientError(400, '"score" must be between 0 and 100');
  }
}

// Define a custom error class DELETE THIS MAYBE?
class ClientError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}
