import { useState } from 'react';
import API from '../api';

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/auth/register', form);
    window.location.href = '/login';
  };

  return (
    <div className="container mt-5 col-md-4">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="text" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="form-control mb-2" type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="form-control mb-2" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
