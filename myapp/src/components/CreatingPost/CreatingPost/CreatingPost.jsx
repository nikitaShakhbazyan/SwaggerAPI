import React from 'react'
import { useState } from 'react'
import { createData } from '../../../fetch/fetchData';
import './CreatingPost.css'


const CreatingPost = () => {
  const [data, setData] = useState({
    title:'',
    description:''
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createData(data); 
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = '/';
  };
  
  return (
    <div>
      <div className="creating-div">
      <button className='Logout-btn' onClick={handleLogout}>Logout</button>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div className='title-div'>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={data.title} onChange={handleChange} />
        </div>
        <div className='descr-div'>
          <label className='descr' htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={data.description} onChange={handleChange} />
        </div>
        <button type="submit">Create</button>
      </form>
      </div>
    </div>
  );
};

export default CreatingPost