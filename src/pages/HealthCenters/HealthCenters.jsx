import { useState } from 'react';
import './HealthCenters.css';

function HealthCenters() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState('all');

  const healthCenters = [
    {
      id: 1,
      name: "City General Hospital",
      address: "123 Healthcare Ave, City",
      services: ["Emergency", "Primary Care", "Specialist Care"],
      rating: 4.5,
      distance: "2.3 miles"
    },
    {
      id: 2,
      name: "Community Health Clinic",
      address: "456 Wellness St, City",
      services: ["Primary Care", "Vaccination"],
      rating: 4.2,
      distance: "1.5 miles"
    },
    {
      id: 3,
      name: "Specialist Medical Center",
      address: "789 Medical Blvd, City",
      services: ["Specialist Care", "Diagnostics"],
      rating: 4.8,
      distance: "3.1 miles"
    }
  ];

  const filteredCenters = healthCenters.filter(center => {
    const matchesSearch = center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         center.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesService = selectedService === 'all' || center.services.includes(selectedService);
    return matchesSearch && matchesService;
  });

  return (
    <div className="health-centers">
      <header className="centers-header">
        <h1>Find Healthcare Centers</h1>
        <div className="search-filters">
          <input
            type="text"
            placeholder="Search by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="all">All Services</option>
            <option value="Emergency">Emergency Care</option>
            <option value="Primary Care">Primary Care</option>
            <option value="Specialist Care">Specialist Care</option>
            <option value="Vaccination">Vaccination</option>
            <option value="Diagnostics">Diagnostics</option>
          </select>
        </div>
      </header>

      <div className="centers-grid">
        {filteredCenters.map(center => (
          <div key={center.id} className="center-card">
            <h2>{center.name}</h2>
            <p className="address">{center.address}</p>
            <div className="center-details">
              <div className="services">
                <h3>Services:</h3>
                <ul>
                  {center.services.map(service => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
              <div className="center-info">
                <span className="rating">⭐ {center.rating}</span>
                <span className="distance">📍 {center.distance}</span>
              </div>
            </div>
            <button className="direction-button">Get Directions</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthCenters;