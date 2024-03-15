import React, { useState, useEffect } from 'react';

const Fetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcxMDQ5NzY0NCwiZXhwIjoxNzEwNTAwNjQ0fQ.igi7cibbTY1O-mb4lFL1VKNglwIaYCPO6jeqdqHjrjM'; 
        const res = await fetch('http://169.155.57.78/v1/tasks', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await res.json();
        setData(jsonData.content);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetching();
  }, []);

  return (
    <div>
      <h2>Data:</h2>
      <div>
        {data.map((item) => {
          return  <div key={item.id}>
           <h2>Id : {item.id}</h2>
           <h1>Title : {item.title}</h1>
           <h2>Status : {item.status}</h2>
           <h2>Created at :{item.createdAt}</h2>
            </div>
        })}
      </div>
    </div>
  );
};

export default Fetching