import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'core' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registration successful');
      navigate('/login');
    } catch (err) {
      console.error('Registration Error:', err.response?.data || err.message);
      alert(`Registration failed: ${err.response?.data?.error || 'Please try again.'}`);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-4">Register for Zithara</h3>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            required
            minLength={6}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Role</label>
          <select
            className="form-select"
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="core">Core</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success w-100">Register</button>
        <div className="text-center mt-3">
          <small>Already have an account? <a href="/login">Login</a></small>
        </div>
      </form>
    </div>
  );
};

export default Register;

