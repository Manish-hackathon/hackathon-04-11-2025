import { useState } from 'react';
import CityMap from '../components/CityMap';
import Modal from '../components/Modal';

export default function MapPage() {
  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const markers = [
    { id: '1', type: 'incident', lat: 40.7, lng: -74.0, label: 'Fire Incident', severity: 'high', status: 'Active - 3 units responding' },
    { id: '2', type: 'incident', lat: 40.75, lng: -73.95, label: 'Flood Warning', severity: 'medium', status: 'Monitoring' },
    { id: '3', type: 'sensor', lat: 40.72, lng: -73.98, label: 'Water Level Sensor', status: 'Normal' },
    { id: '4', type: 'sensor', lat: 40.68, lng: -74.02, label: 'Air Quality Sensor', status: 'Normal' },
    { id: '5', type: 'incident', lat: 40.77, lng: -73.92, label: 'Gas Leak', severity: 'high', status: 'Emergency Response Active' },
    { id: '6', type: 'sensor', lat: 40.65, lng: -73.96, label: 'Fire Detection Sensor', status: 'Normal' },
    { id: '7', type: 'responder', lat: 40.71, lng: -73.99, label: 'Fire Station Alpha', status: '2 units available' },
    { id: '8', type: 'incident', lat: 40.73, lng: -74.05, label: 'Traffic Accident', severity: 'low', status: 'Resolved' },
  ];

  const handleMarkerClick = (marker: any) => {
    setSelectedMarker(marker);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">City Map</h1>
          <p className="text-gray-400">Real-time visualization of incidents and sensors</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-800 border border-cyan-500/30 rounded-lg text-white hover:bg-gray-700 transition-colors">
            Filter
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white hover:from-cyan-500 hover:to-blue-500 transition-colors">
            Refresh
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Total Markers</div>
          <div className="text-2xl font-bold text-white">{markers.length}</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Active Incidents</div>
          <div className="text-2xl font-bold text-red-400">{markers.filter(m => m.type === 'incident').length}</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Online Sensors</div>
          <div className="text-2xl font-bold text-green-400">{markers.filter(m => m.type === 'sensor').length}</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Response Units</div>
          <div className="text-2xl font-bold text-cyan-400">{markers.filter(m => m.type === 'responder').length}</div>
        </div>
      </div>

      <div className="h-[600px]">
        <CityMap markers={markers} onMarkerClick={handleMarkerClick} />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Marker Details"
        maxWidth="lg"
      >
        {selectedMarker && (
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm">Type</label>
              <p className="text-white font-semibold capitalize">{selectedMarker.type}</p>
            </div>
            <div>
              <label className="text-gray-400 text-sm">Label</label>
              <p className="text-white font-semibold">{selectedMarker.label}</p>
            </div>
            <div>
              <label className="text-gray-400 text-sm">Status</label>
              <p className="text-white">{selectedMarker.status}</p>
            </div>
            {selectedMarker.severity && (
              <div>
                <label className="text-gray-400 text-sm">Severity</label>
                <p className={`font-semibold ${
                  selectedMarker.severity === 'high' ? 'text-red-400' :
                  selectedMarker.severity === 'medium' ? 'text-yellow-400' :
                  'text-cyan-400'
                }`}>
                  {selectedMarker.severity.toUpperCase()}
                </p>
              </div>
            )}
            <div>
              <label className="text-gray-400 text-sm">Coordinates</label>
              <p className="text-white">Lat: {selectedMarker.lat}, Lng: {selectedMarker.lng}</p>
            </div>
            <div className="pt-4 flex gap-2">
              <button className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white hover:from-cyan-500 hover:to-blue-500 transition-colors">
                View Details
              </button>
              <button className="px-4 py-2 bg-gray-800 border border-cyan-500/30 rounded-lg text-white hover:bg-gray-700 transition-colors">
                Navigate
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
