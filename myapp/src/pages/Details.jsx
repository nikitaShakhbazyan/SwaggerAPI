import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getData } from '../fetch/fetchData';

const Details = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const taskData = await getData(taskId); 
        setTask(taskData);
      } catch (error) {
        console.error('Error fetching task data:', error);
      }
    };

    fetchTask();
  }, [taskId]);

  return (
    <div>
      <Link to={'/main'}> Back to Main</Link>
      {task && (
        <>
        <div key={task.id} className='data-div'>
            <h2>Id : {task.id}</h2>
            <h1>Title : {task.title}</h1>
            <h2>Status : 
                {task.status}
            </h2>
            <h2>Created at :{task.createdAt}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export { Details };
