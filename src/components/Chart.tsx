interface ChartProps {
  data: { label: string; value: number }[];
  type: 'bar' | 'line';
  color?: string;
}

export default function Chart({ data, type, color = 'cyan' }: ChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));

  const colorClasses = {
    cyan: 'bg-cyan-500',
    red: 'bg-red-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
  };

  return (
    <div className="w-full">
      {type === 'bar' && (
        <div className="flex items-end justify-between gap-2 h-48">
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-gray-800 rounded-t-lg overflow-hidden relative group">
                <div
                  className={`${colorClasses[color as keyof typeof colorClasses] || colorClasses.cyan} transition-all duration-500 hover:opacity-80 relative`}
                  style={{ height: `${(item.value / maxValue) * 192}px` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 px-2 py-1 rounded text-xs text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.value}
                </div>
              </div>
              <span className="text-gray-400 text-xs text-center">{item.label}</span>
            </div>
          ))}
        </div>
      )}

      {type === 'line' && (
        <div className="relative h-48">
          <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>

            {data.map((item, index) => {
              if (index === 0) return null;
              const prevItem = data[index - 1];
              const x1 = ((index - 1) / (data.length - 1)) * 500;
              const y1 = 200 - (prevItem.value / maxValue) * 200;
              const x2 = (index / (data.length - 1)) * 500;
              const y2 = 200 - (item.value / maxValue) * 200;

              return (
                <line
                  key={index}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#06b6d4"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              );
            })}

            <polyline
              points={data.map((item, index) => {
                const x = (index / (data.length - 1)) * 500;
                const y = 200 - (item.value / maxValue) * 200;
                return `${x},${y}`;
              }).join(' ')}
              fill="url(#lineGradient)"
              stroke="none"
            />

            {data.map((item, index) => {
              const x = (index / (data.length - 1)) * 500;
              const y = 200 - (item.value / maxValue) * 200;
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#06b6d4"
                  className="hover:r-6 transition-all"
                />
              );
            })}
          </svg>
          <div className="flex justify-between mt-2">
            {data.map((item, index) => (
              <span key={index} className="text-gray-400 text-xs">{item.label}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
