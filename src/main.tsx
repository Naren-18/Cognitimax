import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { getBuildTimestamp } from './lib/cache-busting'

// Log the build timestamp for debugging purposes
console.log(`Application starting. Build: ${getBuildTimestamp()}`);

// Clear any cached data if needed
if (window.localStorage) {
  // Optional: clear specific cached data on new builds
  // localStorage.removeItem('cached-config');
}

createRoot(document.getElementById("root")!).render(<App />);
