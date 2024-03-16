import React, { useState, useEffect } from 'react';
import { fetchAllData, deleteData } from '../fetch/fetchData';
import './FetchingData.css';
import { Link } from 'react-router-dom';

const FetchingAllData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await fetchAllData();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await deleteData(taskId);
      setData(prevData => prevData.filter(item => item.id !== taskId));
      const updatedData = data.filter(item => item.id !== taskId);
      setData(updatedData);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleChangeStatus = async (taskId) => {
    try {
      const updatedData = data.map(item => {
        if (item.id === taskId) {
          return { ...item, status: !item.status };
        }
        return item;
      });
      setData(updatedData);
    } catch (error) {
      console.error('Error changing task status:', error);
    }
  };

  return (
    <div>
      <h2>Data:</h2>
      <div>
        {data.map((item) => (
          <div key={item.id} style={{ border: '2px solid red' }}>
            <h2>Id : {item.id}</h2>
            <h1>Title : {item.title}</h1>
            <h2>Status : 
              <span
                className={item.status ? "greenStatus" : "redStatus"}
                onClick={() => handleChangeStatus(item.id)}
                style={{ cursor: 'pointer' }}
              >
                {item.status ? "DONE" : "PENDING"}
              </span>
            </h2>
            <h3>For more info please click <Link to={'/'}>here</Link></h3>
            <h2>Created at :{item.createdAt}</h2>
            <button onClick={() => handleDelete(item.id)}>Delete Task</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchingAllData;
