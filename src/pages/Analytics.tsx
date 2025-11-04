import { BarChart3, TrendingUp, Download } from 'lucide-react';
import Chart from '../components/Chart';

export default function Analytics() {
  const incidentTrend = [
    { label: 'Jan', value: 45 },
    { label: 'Feb', value: 52 },
    { label: 'Mar', value: 38 },
    { label: 'Apr', value: 61 },
    { label: 'May', value: 55 },
    { label: 'Jun', value: 48 },
  ];

  const responseTimeData = [
    { label: 'Week 1', value: 5.2 },
    { label: 'Week 2', value: 4.8 },
    { label: 'Week 3', value: 4.5 },
    { label: 'Week 4', value: 4.2 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
          <p className="text-gray-400">Data insights and performance metrics</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white hover:from-cyan-500 hover:to-blue-500 transition-colors flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Total Incidents (6M)</div>
          <div className="text-2xl font-bold text-white">299</div>
          <div className="text-green-400 text-sm mt-1">↓ 12% from last period</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Avg Response Time</div>
          <div className="text-2xl font-bold text-white">4.2m</div>
          <div className="text-green-400 text-sm mt-1">↓ 18% improvement</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Resolution Rate</div>
          <div className="text-2xl font-bold text-white">94.3%</div>
          <div className="text-green-400 text-sm mt-1">↑ 3.2% increase</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">AI Accuracy</div>
          <div className="text-2xl font-bold text-white">89.7%</div>
          <div className="text-cyan-400 text-sm mt-1">↑ 5.1% increase</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Incident Trend (6 Months)</h2>
          <Chart data={incidentTrend} type="bar" color="cyan" />
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Response Time Trend (4 Weeks)</h2>
          <Chart data={responseTimeData} type="line" color="green" />
        </div>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="w-6 h-6 text-cyan-400" />
          <h2 className="text-xl font-semibold text-white">Power BI Dashboard Embed</h2>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-8 border-2 border-dashed border-cyan-500/30 min-h-[500px] flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Power BI Dashboard</h3>
            <p className="text-gray-400 mb-4">Connect your Power BI workspace to display interactive reports</p>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white hover:from-cyan-500 hover:to-blue-500 transition-colors">
              Configure Integration
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Incident Types Distribution</h2>
          <div className="space-y-3">
            {[
              { type: 'Fire', count: 89, percentage: 30 },
              { type: 'Flood', count: 67, percentage: 22 },
              { type: 'Medical', count: 56, percentage: 19 },
              { type: 'Traffic', count: 45, percentage: 15 },
              { type: 'Other', count: 42, percentage: 14 },
            ].map((item) => (
              <div key={item.type}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">{item.type}</span>
                  <span className="text-white font-semibold">{item.count} ({item.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Performance Metrics</h2>
          <div className="space-y-4">
            {[
              { label: 'First Response Time', value: '3.8 min', trend: 'down', color: 'green' },
              { label: 'Incident Closure Rate', value: '94.3%', trend: 'up', color: 'green' },
              { label: 'False Alarm Rate', value: '5.2%', trend: 'down', color: 'green' },
              { label: 'Resource Utilization', value: '82.1%', trend: 'up', color: 'cyan' },
              { label: 'AI Prediction Accuracy', value: '89.7%', trend: 'up', color: 'cyan' },
            ].map((metric) => (
              <div key={metric.label} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">{metric.label}</span>
                <div className="flex items-center gap-2">
                  <span className={`text-${metric.color}-400 font-semibold`}>{metric.value}</span>
                  <span className={`text-${metric.color}-400 text-xs`}>
                    {metric.trend === 'up' ? '↑' : '↓'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
