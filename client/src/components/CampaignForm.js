import { useState } from 'react';
import API from '../api';

const CampaignForm = () => {
  const [subject, setSubject] = useState('');
  const [recipients, setRecipients] = useState('');
  const [personalization, setPersonalization] = useState({ name: '', offerCode: '' });
  const [loading, setLoading] = useState(false);

  const createCampaign = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('Please log in to create a campaign.');
      return;
    }

    setLoading(true);

    try {
      await API.post(
        '/campaigns',
        {
          subject: subject.trim(),
          recipients: recipients.split(',').map((email) => email.trim()),
          personalization,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('✅ Campaign created successfully!');
      setSubject('');
      setRecipients('');
      setPersonalization({ name: '', offerCode: '' });
    } catch (error) {
      console.error('Campaign creation error:', error);
      alert(`❌ Failed to create campaign: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h4>Create Email Campaign</h4>
      <input
        className="form-control my-2"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        className="form-control my-2"
        placeholder="Recipients (comma-separated)"
        value={recipients}
        onChange={(e) => setRecipients(e.target.value)}
      />
      <input
        className="form-control my-2"
        placeholder="Recipient Name"
        value={personalization.name}
        onChange={(e) =>
          setPersonalization({ ...personalization, name: e.target.value })
        }
      />
      <input
        className="form-control my-2"
        placeholder="Offer Code"
        value={personalization.offerCode}
        onChange={(e) =>
          setPersonalization({ ...personalization, offerCode: e.target.value })
        }
      />
      <button
        className="btn btn-primary mt-2"
        onClick={createCampaign}
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Campaign'}
      </button>
    </div>
  );
};

export default CampaignForm;


