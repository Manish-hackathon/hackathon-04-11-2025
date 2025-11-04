import { useState } from 'react';
import { Filter, Search, Download } from 'lucide-react';
import DataTable from '../components/DataTable';

export default function Incidents() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [severityFilter, setSeverityFilter] = useState('all');

  const incidents = [
    { id: 'INC-001', type: 'Fire', location: 'Downtown Area, Block 5', severity: 'High', status: 'Active', time: '2024-11-04 14:32', responders: 3 },
    { id: 'INC-002', type: 'Flood', location: 'East District, River Road', severity: 'Medium', status: 'Monitoring', time: '2024-11-04 14:15', responders: 2 },
    { id: 'INC-003', type: 'Gas Leak', location: 'West Plaza, Building 12', severity: 'High', status: 'Active', time: '2024-11-04 13:58', responders: 4 },
    { id: 'INC-004', type: 'Earthquake', location: 'Central District', severity: 'Medium', status: 'Resolved', time: '2024-11-04 12:45', responders: 0 },
    { id: 'INC-005', type: 'Air Quality', location: 'North Zone', severity: 'Low', status: 'Monitoring', time: '2024-11-04 11:20', responders: 0 },
    { id: 'INC-006', type: 'Fire', location: 'South Industrial Park', severity: 'Medium', status: 'Active', time: '2024-11-04 10:15', responders: 2 },
    { id: 'INC-007', type: 'Traffic', location: 'Highway 101', severity: 'Low', status: 'Resolved', time: '2024-11-04 09:30', responders: 0 },
  ];

  const columns = [
    { key: 'id', label: 'Incident ID' },
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
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <span className={`px-2 py-1 rounded text-xs font-semibold ${
          value === 'Active' ? 'bg-green-500/20 text-green-400' :
          value === 'Monitoring' ? 'bg-blue-500/20 text-blue-400' :
          'bg-gray-500/20 text-gray-400'
        }`}>
          {value}
        </span>
      ),
    },
    { key: 'time', label: 'Time' },
    { key: 'responders', label: 'Units' },
  ];

  const filteredIncidents = incidents.filter(incident => {
    if (statusFilter !== 'all' && incident.status.toLowerCase() !== statusFilter) return false;
    if (severityFilter !== 'all' && incident.severity.toLowerCase() !== severityFilter) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Incidents</h1>
          <p className="text-gray-400">Manage and track all emergency incidents</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white hover:from-cyan-500 hover:to-blue-500 transition-colors flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Total Incidents</div>
          <div className="text-2xl font-bold text-white">{incidents.length}</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Active</div>
          <div className="text-2xl font-bold text-red-400">{incidents.filter(i => i.status === 'Active').length}</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Monitoring</div>
          <div className="text-2xl font-bold text-blue-400">{incidents.filter(i => i.status === 'Monitoring').length}</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Resolved</div>
          <div className="text-2xl font-bold text-green-400">{incidents.filter(i => i.status === 'Resolved').length}</div>
        </div>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by ID, type, or location..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="monitoring">Monitoring</option>
              <option value="resolved">Resolved</option>
            </select>
            <select
              value={severityFilter}
              onChange={(e) => setSeverityFilter(e.target.value)}
              className="px-4 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="all">All Severity</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>

        <DataTable columns={columns} data={filteredIncidents} onRowClick={(row) => console.log('View incident:', row)} />
      </div>
    </div>
  );
}
