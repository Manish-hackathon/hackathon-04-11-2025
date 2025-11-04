import { Brain, TrendingUp, AlertCircle } from 'lucide-react';

interface AIInsightCardProps {
  title: string;
  insight: string;
  confidence: number;
  priority: 'high' | 'medium' | 'low';
  timestamp?: string;
}

export default function AIInsightCard({ title, insight, confidence, priority, timestamp }: AIInsightCardProps) {
  const priorityColors = {
    high: 'border-red-500/50 bg-red-500/5',
    medium: 'border-yellow-500/50 bg-yellow-500/5',
    low: 'border-cyan-500/50 bg-cyan-500/5',
  };

  const priorityBadgeColors = {
    high: 'bg-red-500/20 text-red-400',
    medium: 'bg-yellow-500/20 text-yellow-400',
    low: 'bg-cyan-500/20 text-cyan-400',
  };

  return (
    <div className={`border ${priorityColors[priority]} rounded-xl p-5 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all`}>
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <Brain className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-white font-semibold">{title}</h4>
            <span className={`px-2 py-1 rounded text-xs font-medium ${priorityBadgeColors[priority]}`}>
              {priority.toUpperCase()}
            </span>
          </div>
          {timestamp && (
            <p className="text-gray-500 text-xs">{timestamp}</p>
          )}
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4">{insight}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-cyan-400" />
          <span className="text-gray-400 text-sm">Confidence:</span>
          <span className="text-cyan-400 font-semibold text-sm">{confidence}%</span>
        </div>
        <div className="flex-1 ml-4 bg-gray-800 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${confidence}%` }}
          />
        </div>
      </div>
    </div>
  );
}
