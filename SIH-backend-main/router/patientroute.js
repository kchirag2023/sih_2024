const express = require('express');
const Patient = require('../models/patient'); // Path to your Patient model
const router = express.Router();

// Fetch a patient by ID
router.get('/patients/:id', async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id).populate('reports');
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json(patient);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update a patient by ID
router.put('/patients/:id', async (req, res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json(patient);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
