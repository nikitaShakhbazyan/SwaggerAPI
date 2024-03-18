import React, { useState, useEffect } from 'react';
import { fetchAllData, deleteData } from '../../fetch/fetchData';
import { Link } from 'react-router-dom';
import './FetchingData.css';

const FetchingAllData = () => {
  const [data, setData] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState('all');

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
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilteredStatus(e.target.value);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'PENDING':
        return 'orange';
      case 'IN_PROGRESS':
        return 'yellow';
      case 'COMPLETED':
        return 'green';
      default:
        return '';
    }
  };

  const filteredData = data.filter(item => filteredStatus === 'all' || item.status === filteredStatus);

  return (
    <div className='mainDiv'>
      <h2>Data:</h2>
      <div className='filter-div'>
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select id="statusFilter" value={filteredStatus} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="PENDING">Pending</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </select>
      </div>
      <div className='fetch-div'>
        {filteredData.map((item) => (
          <div key={item.id} className={`data-div ${getStatusColor(item.status)}`}>
            <h2>Id : {item.id}</h2>
            <h1>Title : {item.title}</h1>
            <h2>Status : {item.status}</h2> 
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
