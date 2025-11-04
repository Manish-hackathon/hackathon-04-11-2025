# AI-Driven Disaster Response System

A modern, futuristic web application for managing disaster response operations with AI-powered insights. Built with React, TypeScript, and TailwindCSS.

## Features

### Pages
1. **Dashboard** - Real-time overview with AI insights, active incidents, and statistics
2. **City Map** - Interactive visualization of incidents, sensors, and responders
3. **Incidents** - Complete incident management with filtering and status tracking
4. **Incident Details** - Detailed view with timeline, attachments, and AI recommendations
5. **Sensors** - Real-time monitoring of flood, fire, air quality, and seismic sensors
6. **CCTV** - Live camera feeds from city-wide surveillance network
7. **Analytics** - Performance metrics and data visualization with Power BI integration
8. **Login** - Secure authentication interface
9. **Settings** - User preferences and system configuration

### Components
- **Navbar** - Top navigation with search and notifications
- **Sidebar** - Collapsible menu with page navigation
- **KPI Cards** - Statistics cards with icons and trends
- **AI Insight Cards** - AI-powered recommendations with confidence scores
- **Data Tables** - Sortable and filterable data displays
- **City Map** - Interactive map with incident markers
- **Video Player** - CCTV feed viewer with controls
- **Charts** - Bar and line charts for data visualization
- **Alerts** - Contextual alert boxes
- **Modal** - Reusable modal dialogs

### Design Features
- Futuristic UI with neon blue/cyan theme
- Dark background with gradient effects
- Animated grid background
- Glowing elements and hover effects
- Fully responsive (mobile, tablet, desktop)
- Smooth transitions and animations
- Glass-morphism effects with backdrop blur

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be created in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
project/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── KPICard.tsx
│   │   ├── AIInsightCard.tsx
│   │   ├── AlertBox.tsx
│   │   ├── DataTable.tsx
│   │   ├── CityMap.tsx
│   │   ├── VideoPlayer.tsx
│   │   ├── Chart.tsx
│   │   └── Modal.tsx
│   ├── pages/           # Application pages
│   │   ├── Dashboard.tsx
│   │   ├── MapPage.tsx
│   │   ├── Incidents.tsx
│   │   ├── IncidentDetails.tsx
│   │   ├── Sensors.tsx
│   │   ├── CCTV.tsx
│   │   ├── Analytics.tsx
│   │   ├── Settings.tsx
│   │   └── Login.tsx
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Dependencies and scripts
```

## Mock Data

The application uses inline mock data for demonstration purposes. In a production environment, you would:

1. Replace mock data with API calls
2. Integrate with real sensor networks
3. Connect to actual CCTV feeds
4. Implement real-time WebSocket updates
5. Add authentication backend

## Customization

### Color Scheme
The default theme uses cyan/blue colors. To change colors, update the Tailwind classes:
- Primary: `cyan-500`, `cyan-600`
- Secondary: `blue-500`, `blue-600`
- Backgrounds: `gray-900`, `gray-800`

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add a menu item in `src/components/Sidebar.tsx`
3. Add a route case in `src/App.tsx`

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Optimized for 60fps animations
- Lazy loading ready
- Code splitting enabled
- Image optimization via Pexels CDN

## Future Enhancements

- Real-time WebSocket integration
- Database integration (Supabase ready)
- User authentication system
- Advanced filtering and search
- Export/import functionality
- Multi-language support
- Dark/light theme toggle
- Mobile app version
- PWA capabilities

## License

MIT

## Support

For issues and questions, please contact the development team.
