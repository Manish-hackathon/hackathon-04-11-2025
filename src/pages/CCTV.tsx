import VideoPlayer from '../components/VideoPlayer';

export default function CCTV() {
  const cameras = [
    { id: 'CAM-001', title: 'Downtown Intersection', location: 'Main St & 5th Ave', status: 'online' as const, thumbnail: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 'CAM-002', title: 'East River Bridge', location: 'Highway 101 East', status: 'online' as const, thumbnail: 'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 'CAM-003', title: 'Central Park', location: 'Park Entrance', status: 'offline' as const },
    { id: 'CAM-004', title: 'Industrial Zone', location: 'Warehouse District', status: 'online' as const, thumbnail: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 'CAM-005', title: 'Shopping Mall', location: 'Downtown Mall Entrance', status: 'online' as const, thumbnail: 'https://images.pexels.com/photos/264595/pexels-photo-264595.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 'CAM-006', title: 'Train Station', location: 'Central Station Platform', status: 'online' as const, thumbnail: 'https://images.pexels.com/photos/1591382/pexels-photo-1591382.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">CCTV Surveillance</h1>
          <p className="text-gray-400">Live feeds from city-wide camera network</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white hover:from-cyan-500 hover:to-blue-500 transition-colors">
          View All Feeds
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Total Cameras</div>
          <div className="text-2xl font-bold text-white">{cameras.length}</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Online</div>
          <div className="text-2xl font-bold text-green-400">{cameras.filter(c => c.status === 'online').length}</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
          <div className="text-gray-400 text-sm mb-1">Offline</div>
          <div className="text-2xl font-bold text-red-400">{cameras.filter(c => c.status === 'offline').length}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cameras.map((camera) => (
          <VideoPlayer
            key={camera.id}
            title={camera.title}
            location={camera.location}
            status={camera.status}
            thumbnailUrl={camera.thumbnail}
          />
        ))}
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Camera Controls</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="px-4 py-3 bg-gray-800 border border-cyan-500/30 rounded-lg text-white hover:bg-gray-700 transition-colors">
            Take Snapshot
          </button>
          <button className="px-4 py-3 bg-gray-800 border border-cyan-500/30 rounded-lg text-white hover:bg-gray-700 transition-colors">
            Start Recording
          </button>
          <button className="px-4 py-3 bg-gray-800 border border-cyan-500/30 rounded-lg text-white hover:bg-gray-700 transition-colors">
            Export Footage
          </button>
        </div>
      </div>
    </div>
  );
}
