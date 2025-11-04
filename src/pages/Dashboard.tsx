import { AlertTriangle, Activity, Users, TrendingUp } from 'lucide-react';
import KPICard from '../components/KPICard';
import AIInsightCard from '../components/AIInsightCard';
import AlertBox from '../components/AlertBox';
import Chart from '../components/Chart';
import DataTable from '../components/DataTable';

export default function Dashboard() {
  const recentIncidents = [
    { id: 'INC-001', type: 'Fire', location: 'Downtown Area', severity: 'High', time: '5 min ago' },
    { id: 'INC-002', type: 'Flood', location: 'East District', severity: 'Medium', time: '15 min ago' },
    { id: 'INC-003', type: 'Gas Leak', location: 'West Plaza', severity: 'High', time: '32 min ago' },
  ];

  const activityData = [
    { label: 'Mon', value: 12 },
    { label: 'Tue', value: 19 },
    { label: 'Wed', value: 8 },
    { label: 'Thu', value: 15 },
    { label: 'Fri', value: 22 },
    { label: 'Sat', value: 17 },
    { label: 'Sun', value: 11 },
  ];

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'type', label: 'Type' },
    { key: 'location', label: 'Location' },
    {
      key: 'severity',
      label: 'Severity',
      render: (value: string) => (
        <span className={`px-2 py-1 rounded text-xs font-semibold ${
          value === 'High' ? 'bg-red-500/20 text-red-400' :
          value === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
          'bg-cyan-500/20 text-cyan-400'
        }`}>
          {value}
        </span>
      ),
    },
    { key: 'time', label: 'Time' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Real-time overview of disaster response operations</p>
      </div>

      <AlertBox
        type="warning"
        title="Active High-Priority Incidents"
        message="2 critical incidents require immediate attention in Downtown and West Plaza"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Active Incidents"
          value="23"
          change="+3 from yesterday"
          trend="up"
          icon={AlertTriangle}
          color="red"
        />
        <KPICard
          title="Response Teams"
          value="12"
          change="All deployed"
          trend="neutral"
          icon={Users}
          color="cyan"
        />
        <KPICard
          title="Sensors Online"
          value="156"
          change="98% operational"
          trend="up"
          icon={Activity}
          color="green"
        />
        <KPICard
          title="Avg Response Time"
          value="4.2m"
          change="-0.8m improvement"
          trend="down"
          icon={TrendingUp}
          color="yellow"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">AI Insights</h2>
          <div className="space-y-4">
            <AIInsightCard
              title="Flood Risk Prediction"
              insight="Heavy rainfall expected in East District within next 2 hours. Recommend preemptive evacuation of low-lying areas."
              confidence={87}
              priority="high"
              timestamp="2 minutes ago"
            />
            <AIInsightCard
              title="Traffic Pattern Anomaly"
              insight="Unusual traffic congestion detected near emergency route B-12. Consider alternate route for response vehicles."
              confidence={72}
              priority="medium"
              timestamp="8 minutes ago"
            />
            <AIInsightCard
              title="Resource Optimization"
              insight="Fire station capacity at 85%. Suggest reallocating 2 units from North to South district for balanced coverage."
              confidence={91}
              priority="low"
              timestamp="15 minutes ago"
            />
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Incident Activity (7 Days)</h2>
          <Chart data={activityData} type="bar" color="cyan" />
        </div>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Incidents</h2>
        <DataTable columns={columns} data={recentIncidents} />
      </div>
    </div>
  );
}
