import React, { useState, useEffect } from 'react';
import { fetchAllData, deleteData } from '../../fetch/fetchData';
import { Link } from 'react-router-dom';
import './FetchingData.css'
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
  }, [data]);

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



  return (
    <div className='mainDiv'>
      <h2>Data:</h2>
      <div className='fetch-div'>
        {data.map((item) => (
          <div key={item.id} className='data-div'>
            <h2>Id : {item.id}</h2>
            <h1>Title : {item.title}</h1>
            <h2>Status : 
                {item.status}
            </h2>
            <h3>For more info please click <Link to={`/details/${item.id}`}>here</Link></h3>
            <h2>Created at :{item.createdAt}</h2>
            <button onClick={() => handleDelete(item.id)}>Delete Task</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchingAllData;