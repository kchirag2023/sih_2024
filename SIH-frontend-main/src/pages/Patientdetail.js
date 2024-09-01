import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function PatientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [patient, setPatient] = useState({
    doctorName: '',
    doctorEmail: '',
    patientEmail: '',
    age: '',
    dateOfBirth: '',
    alcoholic: false,
    smokes: false,
    weight: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch patient details by ID
    const fetchPatient = async () => {
      try {
        const response = await axios.get(`/patients/${id}`);
        setPatient(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching patient details');
        setLoading(false);
      }
    };

    fetchPatient();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPatient({
      ...patient,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/patients/${id}`, patient);
      alert('Patient details updated successfully');
      navigate('/');
    } catch (err) {
      setError('Error updating patient details');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold">Edit Patient Details</h1>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Doctor Name</label>
          <input
            type="text"
            name="doctorName"
            value={patient.doctorName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Doctor Email</label>
          <input
            type="email"
            name="doctorEmail"
            value={patient.doctorEmail}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Patient Email</label>
          <input
            type="email"
            name="patientEmail"
            value={patient.patientEmail}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Age</label>
          <input
            type="number"
            name="age"
            value={patient.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={patient.dateOfBirth.split('T')[0]} // Handle date format
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Alcoholic</label>
          <input
            type="checkbox"
            name="alcoholic"
            checked={patient.alcoholic}
            onChange={handleChange}
            className="mr-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Smokes</label>
          <input
            type="checkbox"
            name="smokes"
            checked={patient.smokes}
            onChange={handleChange}
            className="mr-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={patient.weight}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default PatientDetail;
