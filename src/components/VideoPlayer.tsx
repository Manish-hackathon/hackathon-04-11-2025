import { Camera, Download, Maximize } from 'lucide-react';

interface VideoPlayerProps {
  title: string;
  location: string;
  status: 'online' | 'offline';
  thumbnailUrl?: string;
}

export default function VideoPlayer({ title, location, status, thumbnailUrl }: VideoPlayerProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all group">
      <div className="relative aspect-video bg-gray-800">
        {thumbnailUrl ? (
          <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Camera className="w-12 h-12 text-gray-600" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <button className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <Maximize className="w-4 h-4" />
              <span className="text-sm">View Full</span>
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="absolute top-4 left-4">
          <div className={`px-2 py-1 rounded text-xs font-semibold ${
            status === 'online'
              ? 'bg-green-500/80 text-white'
              : 'bg-red-500/80 text-white'
          }`}>
            <div className="flex items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${status === 'online' ? 'bg-white animate-pulse' : 'bg-white'}`} />
              {status.toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white font-semibold mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{location}</p>
      </div>
    </div>
  );
}
