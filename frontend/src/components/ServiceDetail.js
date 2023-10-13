import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    axios.get(`/api/services/${id}`)
      .then((response) => {
        setService(response.data);
      })
      .catch((error) => {
        console.error('Error fetching service details:', error);
      });
  }, [id]);

  return (
  );
}

export default ServiceDetail;
