import { MapPin, AlertTriangle, Flame, Droplets } from 'lucide-react';
import { useState } from 'react';

interface Marker {
  id: string;
  type: 'incident' | 'sensor' | 'responder';
  lat: number;
  lng: number;
  label: string;
  severity?: 'high' | 'medium' | 'low';
  status?: string;
}

interface CityMapProps {
  markers?: Marker[];
  onMarkerClick?: (marker: Marker) => void;
}

export default function CityMap({ markers = [], onMarkerClick }: CityMapProps) {
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);

  const getMarkerIcon = (type: string, severity?: string) => {
    if (type === 'incident') {
      return <AlertTriangle className="w-4 h-4" />;
    }
    if (type === 'sensor') {
      return <Droplets className="w-4 h-4" />;
    }
    return <MapPin className="w-4 h-4" />;
  };

  const getMarkerColor = (type: string, severity?: string) => {
    if (type === 'incident') {
      if (severity === 'high') return 'bg-red-500';
      if (severity === 'medium') return 'bg-yellow-500';
      return 'bg-cyan-500';
    }
    if (type === 'sensor') return 'bg-green-500';
    return 'bg-blue-500';
  };

  return (
    <div className="relative w-full h-full bg-gray-900 rounded-xl overflow-hidden border border-cyan-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="absolute top-4 left-4 right-4 flex gap-2 flex-wrap">
          <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-3 py-2 flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <span className="text-white text-sm">High Priority</span>
          </div>
          <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-3 py-2 flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="text-white text-sm">Medium Priority</span>
          </div>
          <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-3 py-2 flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-white text-sm">Sensors</span>
          </div>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          {markers.map((marker) => (
            <button
              key={marker.id}
              onClick={() => {
                setSelectedMarker(marker.id);
                onMarkerClick?.(marker);
              }}
              className={`
                absolute transition-all duration-300 hover:scale-125
                ${selectedMarker === marker.id ? 'scale-125 z-10' : 'z-0'}
              `}
              style={{
                left: `${(marker.lng + 180) * (100 / 360)}%`,
                top: `${(90 - marker.lat) * (100 / 180)}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="relative">
                <div className={`w-8 h-8 ${getMarkerColor(marker.type, marker.severity)} rounded-full flex items-center justify-center text-white shadow-lg`}>
                  {getMarkerIcon(marker.type, marker.severity)}
                </div>
                {marker.severity === 'high' && (
                  <div className="absolute inset-0 w-8 h-8 bg-red-500 rounded-full animate-ping opacity-75" />
                )}
                {selectedMarker === marker.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-900/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-3 py-2 whitespace-nowrap shadow-xl">
                    <p className="text-white text-sm font-medium">{marker.label}</p>
                    {marker.status && (
                      <p className="text-gray-400 text-xs mt-1">{marker.status}</p>
                    )}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-3 py-2">
        <p className="text-cyan-400 text-xs font-semibold">Live Map View</p>
        <p className="text-gray-400 text-xs">{markers.length} Active Markers</p>
      </div>
    </div>
  );
}
