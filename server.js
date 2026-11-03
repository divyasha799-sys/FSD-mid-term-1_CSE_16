const express = require('express');

const app = express();
const PORT = 3000;

const students = [];
let nextStudentId = 1;

app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send('Hello from Express server!');
});

// GET - Display all students
app.get('/api/students', (req, res) => {
    res.status(200).json(students);
});

// POST - Create student
app.post('/api/students', (req, res) => {

    if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
        return res.status(400).json({
            error: 'Invalid student data'
        });
    }

    const student = {
        ...req.body,
        id: nextStudentId++
    };

    students.push(student);

    return res.status(201).json({
        message: 'Student created successfully',
        student: student
    });
});

// DELETE - Delete student using ID
app.delete('/api/students/:id', (req, res) => {

    const id = Number(req.params.id);

    // Check valid ID
    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            error: 'Invalid student ID'
        });
    }

    // Find student
    const index = students.findIndex(student => student.id === id);

    // If student does not exist
    if (index === -1) {
        return res.status(404).json({
            error: 'Student not found'
        });
    }

    // Delete student
    const deletedStudent = students.splice(index, 1)[0];

    return res.status(200).json({
        message: 'Student deleted successfully',
        student: deletedStudent
    });
});

// Start server on port 3000
app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});