import React from 'react'
import { useState } from 'react'
import { createData } from './fetch/fetchData';

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
  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={data.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={data.description} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatingPost