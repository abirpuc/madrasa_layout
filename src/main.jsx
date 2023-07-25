import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'jquery'; // Import jQuery
import 'owl.carousel/dist/owl.carousel.min'; // Import the owl.carousel plugin


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
