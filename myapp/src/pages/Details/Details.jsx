import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../../fetch/fetchData';
import { Link } from 'react-router-dom';
import './Details.css'


const Details = () => {
    const { taskId } = useParams();
    const [task, setTask] = useState(null);
    console.log(taskId)

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const data = await getData(taskId);
                setTask(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching task:', error);
            }
        };

        fetchTask();
    }, [taskId]);

    return (
        <div className='mainDiv-Details'>
            <Link to={'/'} >Back to SignIn</Link>
            <Link to={'/main'} >Back to Main</Link>

            Details of {taskId} id
            {task && (
                <div key={task.id}>
                    <h1>Title : {task.title} </h1>
                    <h2>Status {task.status}</h2>
                    <h2>Description : {task.description}</h2>
                </div>
            )}
        </div>
    );
};

export default Details;
