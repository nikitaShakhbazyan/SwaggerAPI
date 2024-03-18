import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getData, updateTask } from '../../fetch/fetchData';
import './Details.css';

const Details = () => {
    const { taskId } = useParams();
    const [task, setTask] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const data = await getData(taskId);
                setTask(data);
            } catch (error) {
                console.error('Error fetching task:', error);
            }
        };

        fetchTask();
    }, [taskId]);

    const handleStatusChange = async (status) => {
        try {
            if (task) {
                const updatedTask = { ...task, status: status };
                await updateTask(taskId, updatedTask);
                setTask(updatedTask);
                setShowModal(true);
            }
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='mainDiv-Details'>
            <div className='btn-div'>
                <Link className='btn' to={'/'}>Logout</Link>
            </div>
           <h2> Details of {taskId} id</h2>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close" onClick={closeModal}>&times;</button>
                        <h3>Now you changed a task {taskId} status! Better will be logout and rest! It's enough for today, you did a really good job!!</h3>
                        <Link className='btn' to={'/'}>Logout</Link>

                    </div>
                </div>
            )}
            {task && (
                <div key={task.id}>
                    <h1>Title : {task.title} </h1>
                    <h2>Status {task.status}</h2>
                    <h2>Description : {task.description}</h2>
                    <button onClick={() => handleStatusChange('PENDING')}>PENDING</button>
                    <button onClick={() => handleStatusChange('IN_PROGRESS')}>IN_PROGRESS</button>
                    <button onClick={() => handleStatusChange('COMPLETED')}>COMPLETED</button>
                </div>
            )}
          
        </div>
    );
};

export default Details;
