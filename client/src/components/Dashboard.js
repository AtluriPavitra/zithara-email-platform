import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from 'recharts';

const openRateData = [
  { name: 'Campaign A', value: 65 },
  { name: 'Campaign B', value: 45 },
  { name: 'Campaign C', value: 78 },
];

const pieData = [
  { name: 'Opens', value: 400 },
  { name: 'Clicks', value: 300 },
  { name: 'Unsubscribes', value: 100 },
];

const COLORS = ['#28a745', '#007bff', '#dc3545'];

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-center mb-4">📊 Zithara Campaign Dashboard</h2>

      <div className="card p-3 mb-4 shadow-sm">
        <h5>About Zithara</h5>
        <p>
          <strong>Zithara.ai</strong> is an AI-powered customer analytics and engagement platform
          that empowers retail brands to build smarter, personalized campaigns using cutting-edge AI.
          This dashboard allows admins and core users to launch campaigns and track key metrics like open rate, click-through rate, and performance trends.
        </p>
      </div>

      <div className="row">
        {/* Bar Chart Card */}
        <div className="col-md-6 mb-4">
          <div className="card p-3 shadow-sm">
            <h5>📈 Open Rate Comparison</h5>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={openRateData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#007bff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart Card */}
        <div className="col-md-6 mb-4">
          <div className="card p-3 shadow-sm">
            <h5>📊 Engagement Overview</h5>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card bg-light p-3 text-center border-0 shadow-sm">
            <h6>Total Campaigns</h6>
            <p className="h4 text-primary">12</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card bg-light p-3 text-center border-0 shadow-sm">
            <h6>Avg Open Rate</h6>
            <p className="h4 text-success">63%</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card bg-light p-3 text-center border-0 shadow-sm">
            <h6>Click Rate</h6>
            <p className="h4 text-info">22%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



  