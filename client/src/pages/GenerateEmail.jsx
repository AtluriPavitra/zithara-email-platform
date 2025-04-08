import { useState } from 'react';
import API from '../api/api';

export default function GenerateEmail() {
  const [product, setProduct] = useState('');
  const [audience, setAudience] = useState('');
  const [email, setEmail] = useState('');

  const generate = async () => {
    const res = await API.post('/campaigns/generate', { product, audience });
    setEmail(res.data.email);
  };

  return (
    <div>
      <input onChange={e => setProduct(e.target.value)} placeholder="Product" />
      <input onChange={e => setAudience(e.target.value)} placeholder="Audience" />
      <button onClick={generate}>Generate Email</button>
      <pre>{email}</pre>
    </div>
  );
}
