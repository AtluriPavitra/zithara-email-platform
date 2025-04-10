import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import API from '../api';

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Static chart data for now
    setChartData([
      { date: 'Apr 01', openRate: 50, ctr: 12 },
      { date: 'Apr 02', openRate: 60, ctr: 14 },
      { date: 'Apr 03', openRate: 68, ctr: 18 },
      { date: 'Apr 04', openRate: 65, ctr: 17 },
      { date: 'Apr 05', openRate: 70, ctr: 20 },
    ]);

    // Fetch user's recent campaigns
    const fetchCampaigns = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await API.get('/campaigns', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCampaigns(res.data.reverse().slice(0, 5)); // Show 5 latest
      } catch (err) {
        console.error('Failed to load campaigns', err);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      <h3 className="mb-4">📈 Dashboard Overview</h3>

      {/* Stats Cards */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card p-3 shadow-sm">
            <h5>Open Rate</h5>
            <p className="text-success h4">65%</p>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card p-3 shadow-sm">
            <h5>Click Through Rate</h5>
            <p className="text-primary h4">18%</p>
          </div>
        </div>
      </div>

      {/* Campaign Performance Chart */}
      <div className="card p-4 shadow-sm mt-3">
        <h5>📊 Campaign Performance</h5>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="openRate" stroke="#28a745" name="Open Rate" />
            <Line type="monotone" dataKey="ctr" stroke="#007bff" name="CTR" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Campaigns */}
      <div className="card p-3 shadow-sm mt-4">
        <h5>📬 Recent Campaigns</h5>
        {campaigns.length === 0 ? (
          <p className="text-muted">No campaigns yet.</p>
        ) : (
          <ul className="list-group">
            {campaigns.map((c) => (
              <li key={c._id} className="list-group-item">
                <strong>{c.subject}</strong> – {c.recipients.length} recipients
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* AI Insights (Optional future upgrade) */}
      <div className="card p-3 shadow-sm mt-4">
        <h5>🧠 AI Insight</h5>
        <p className="text-muted">
          Your campaigns perform better mid-week. Try sending emails on Tuesdays or Wednesdays between 10–11 AM for higher engagement.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;


  