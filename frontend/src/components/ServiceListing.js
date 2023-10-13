import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ServiceListing() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/services')
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
      });
  }, []);

  return (
  );
}

export default ServiceListing;
