import { ArrowLeft, MapPin, Clock, AlertTriangle, Users, FileText, Image } from 'lucide-react';
import AIInsightCard from '../components/AIInsightCard';

export default function IncidentDetails() {
  const incident = {
    id: 'INC-001',
    type: 'Fire',
    location: 'Downtown Area, Block 5',
    severity: 'High',
    status: 'Active',
    reportedAt: '2024-11-04 14:32:15',
    description: 'Large fire detected in commercial building. Multiple floors affected. Smoke visible from surrounding areas.',
    responders: [
      { name: 'Fire Unit Alpha', status: 'On Scene', eta: 'Arrived' },
      { name: 'Fire Unit Beta', status: 'En Route', eta: '3 min' },
      { name: 'Medical Team 1', status: 'On Scene', eta: 'Arrived' },
    ],
    timeline: [
      { time: '14:32', event: 'Incident reported via sensor alert' },
      { time: '14:33', event: 'Fire Unit Alpha dispatched' },
      { time: '14:35', event: 'Fire Unit Beta dispatched' },
      { time: '14:37', event: 'Medical Team 1 dispatched' },
      { time: '14:40', event: 'Fire Unit Alpha arrived on scene' },
      { time: '14:42', event: 'Evacuation initiated - 50 people' },
      { time: '14:45', event: 'Medical Team 1 arrived on scene' },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">Incident Details</h1>
          <p className="text-gray-400">{incident.id} - {incident.type}</p>
        </div>
        <span className={`px-4 py-2 rounded-lg text-sm font-semibold ${
          incident.severity === 'High' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
          incident.severity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
          'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
        }`}>
          {incident.severity} Priority
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">{incident.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Reported At</p>
                  <p className="text-white font-medium">{incident.reportedAt}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Type</p>
                  <p className="text-white font-medium">{incident.type}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Response Units</p>
                  <p className="text-white font-medium">{incident.responders.length} Teams</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Description</p>
              <p className="text-white">{incident.description}</p>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Timeline</h2>
            <div className="space-y-4">
              {incident.timeline.map((entry, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${index === incident.timeline.length - 1 ? 'bg-cyan-500' : 'bg-gray-600'}`} />
                    {index !== incident.timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-700 mt-1" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-cyan-400 text-sm font-semibold">{entry.time}</p>
                    <p className="text-white mt-1">{entry.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Attachments</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                  <Image className="w-8 h-8 text-cyan-400 mb-2" />
                  <p className="text-white text-sm font-medium">Image {i}.jpg</p>
                  <p className="text-gray-400 text-xs">2.4 MB</p>
                </div>
              ))}
              <div key="doc" className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <FileText className="w-8 h-8 text-cyan-400 mb-2" />
                <p className="text-white text-sm font-medium">Report.pdf</p>
                <p className="text-gray-400 text-xs">156 KB</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Assigned Teams</h2>
            <div className="space-y-3">
              {incident.responders.map((responder, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-white font-medium">{responder.name}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className={`text-sm ${
                      responder.status === 'On Scene' ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {responder.status}
                    </span>
                    <span className="text-gray-400 text-sm">{responder.eta}</span>
                  </div>
                </div>
              ))}
              <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white hover:from-cyan-500 hover:to-blue-500 transition-colors">
                Assign New Team
              </button>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">AI Recommendations</h2>
            <div className="space-y-4">
              <AIInsightCard
                title="Evacuation Priority"
                insight="Prioritize floors 3-5. Wind direction may spread smoke to adjacent buildings."
                confidence={89}
                priority="high"
              />
              <AIInsightCard
                title="Resource Allocation"
                insight="Request additional medical support. Estimated 15+ people may need treatment."
                confidence={76}
                priority="medium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
