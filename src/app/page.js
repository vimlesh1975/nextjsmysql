'use client';

import { useEffect, useState } from 'react';

const ApiData = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    fetch('/api')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the response as JSON
        const jsonData = await response.json();
        setData(jsonData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <h2>API Data</h2>
      <button onClick={getData}>Get Data</button>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ApiData;
