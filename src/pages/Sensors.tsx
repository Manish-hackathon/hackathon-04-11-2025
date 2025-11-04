import { Activity, Droplets, Flame, Wind, Zap, ThermometerSun } from 'lucide-react';
import Chart from '../components/Chart';

export default function Sensors() {
  const sensors = [
    { id: 'SNR-001', type: 'Water Level', location: 'East River Bridge', status: 'normal', value: '2.4m', icon: Droplets, color: 'cyan' },
    { id: 'SNR-002', type: 'Fire Detection', location: 'Downtown Mall', status: 'normal', value: 'Clear', icon: Flame, color: 'red' },
    { id: 'SNR-003', type: 'Air Quality', location: 'Central Park', status: 'warning', value: 'AQI 85', icon: Wind, color: 'yellow' },
    { id: 'SNR-004', type: 'Water Level', location: 'West Canal', status: 'alert', value: '4.2m', icon: Droplets, color: 'red' },
    { id: 'SNR-005', type: 'Seismic', location: 'City Center', status: 'normal', value: '0.2 Richter', icon: Activity, color: 'green' },
    { id: 'SNR-006', type: 'Temperature', location: 'Industrial Zone', status: 'warning', value: '42°C', icon: ThermometerSun, color: 'yellow' },
    { id: 'SNR-007', type: 'Fire Detection', location: 'North Warehouse', status: 'normal', value: 'Clear', icon: Flame, color: 'green' },
    { id: 'SNR-008', type: 'Power Grid', location: 'Substation Alpha', status: 'normal', value: '98% Load', icon: Zap, color: 'cyan' },
  ];

  const waterLevelData = [
    { label: '00:00', value: 2.1 },
    { label: '04:00', value: 2.3 },
    { label: '08:00', value: 2.8 },
    { label: '12:00', value: 3.2 },
    { label: '16:00', value: 3.8 },
    { label: '20:00', value: 4.2 },
    { label: 'Now', value: 4.5 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'warning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'alert': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'cyan': return 'from-cyan-600 to-blue-600';
      case 'red': return 'from-red-600 to-pink-600';
      case 'green': return 'from-green-600 to-emerald-600';
      case 'yellow': return 'from-yellow-600 to-orange-600';
      default: return 'from-cyan-600 to-blue-600';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Sensors</h1>
        <p className="text-gray-400">Real-time monitoring of city-wide sensor network</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Total Sensors</div>
          <div className="text-2xl font-bold text-white">{sensors.length}</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Normal</div>
          <div className="text-2xl font-bold text-green-400">{sensors.filter(s => s.status === 'normal').length}</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Warnings</div>
          <div className="text-2xl font-bold text-yellow-400">{sensors.filter(s => s.status === 'warning').length}</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Alerts</div>
          <div className="text-2xl font-bold text-red-400">{sensors.filter(s => s.status === 'alert').length}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sensors.map((sensor) => {
          const Icon = sensor.icon;
          return (
            <div key={sensor.id} className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getIconColor(sensor.color)} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{sensor.type}</h3>
                    <p className="text-gray-400 text-sm">{sensor.location}</p>
                    <p className="text-gray-500 text-xs mt-1">{sensor.id}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-lg text-xs font-semibold border ${getStatusColor(sensor.status)}`}>
                  {sensor.status.toUpperCase()}
                </span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Current Reading</p>
                  <p className="text-white text-2xl font-bold">{sensor.value}</p>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white text-sm hover:from-cyan-500 hover:to-blue-500 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Water Level Trend (24h)</h2>
        <Chart data={waterLevelData} type="line" color="cyan" />
      </div>
    </div>
  );
}
