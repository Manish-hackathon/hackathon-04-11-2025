import { User, Bell, Shield, Database, Palette, Globe } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your preferences and system configuration</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">Admin User</h3>
              <p className="text-gray-400 text-sm">admin@disaster-response.io</p>
            </div>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white hover:from-cyan-500 hover:to-blue-500 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-semibold text-white">Notifications</h2>
            </div>
            <div className="space-y-4">
              {[
                { label: 'High Priority Incidents', enabled: true },
                { label: 'Sensor Alerts', enabled: true },
                { label: 'AI Insights', enabled: false },
                { label: 'Daily Reports', enabled: true },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300">{item.label}</span>
                  <button
                    className={`w-12 h-6 rounded-full transition-colors ${
                      item.enabled ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        item.enabled ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-semibold text-white">Security</h2>
            </div>
            <div className="space-y-4">
              <button className="w-full px-4 py-3 bg-gray-800 border border-cyan-500/30 rounded-lg text-white hover:bg-gray-700 transition-colors text-left">
                Change Password
              </button>
              <button className="w-full px-4 py-3 bg-gray-800 border border-cyan-500/30 rounded-lg text-white hover:bg-gray-700 transition-colors text-left">
                Enable Two-Factor Authentication
              </button>
              <button className="w-full px-4 py-3 bg-gray-800 border border-cyan-500/30 rounded-lg text-white hover:bg-gray-700 transition-colors text-left">
                Manage API Keys
              </button>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-semibold text-white">Appearance</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'Cyan', color: 'bg-cyan-500' },
                { name: 'Blue', color: 'bg-blue-500' },
                { name: 'Purple', color: 'bg-purple-500' },
              ].map((theme) => (
                <button
                  key={theme.name}
                  className="p-4 bg-gray-800 border border-cyan-500/30 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className={`w-full h-12 ${theme.color} rounded-lg mb-2`} />
                  <span className="text-white text-sm">{theme.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-semibold text-white">Data Management</h2>
            </div>
            <div className="space-y-4">
              <button className="w-full px-4 py-3 bg-gray-800 border border-cyan-500/30 rounded-lg text-white hover:bg-gray-700 transition-colors text-left">
                Export All Data
              </button>
              <button className="w-full px-4 py-3 bg-gray-800 border border-cyan-500/30 rounded-lg text-white hover:bg-gray-700 transition-colors text-left">
                Clear Cache
              </button>
              <button className="w-full px-4 py-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 transition-colors text-left">
                Delete All Historical Data
              </button>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-semibold text-white">System</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">Language</span>
                <select className="px-3 py-1 bg-gray-700 border border-cyan-500/30 rounded text-white focus:outline-none focus:border-cyan-500">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">Timezone</span>
                <select className="px-3 py-1 bg-gray-700 border border-cyan-500/30 rounded text-white focus:outline-none focus:border-cyan-500">
                  <option>UTC-5 (EST)</option>
                  <option>UTC-8 (PST)</option>
                  <option>UTC+0 (GMT)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
