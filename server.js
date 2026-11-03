const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const students = [];
let nextStudentId = 1;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

app.post('/api/students', (req, res) => {
  if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
    return res.status(400).json({ error: 'Student information must be a JSON object.' });
  }

  const student = { ...req.body, id: nextStudentId++ };
  students.push(student);

  return res.status(201).json(student);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
