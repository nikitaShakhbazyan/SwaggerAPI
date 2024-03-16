const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaWNrIiwiaWF0IjoxNzEwNTQ4NzA3LCJleHAiOjE3MTA1NDkwMDd9.ltYgMQkpopYUOU8PGxtjXN4REzPGr69AlpQfpE3jCJI';

export const fetchAllData = async () => {
    try {
      const res = await fetch('http://169.155.57.78/v1/tasks', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await res.json();
      return jsonData.content;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  

  export const createData = async (formData) => {
    try {
      const res = await fetch('http://169.155.57.78/v1/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await res.json();
      return jsonData;
    } catch (error) {
      console.error('Error creating data:', error);
      throw error; 
    }
  };
  
  export const deleteData = async (taskId) => {
    try {
      const res = await fetch(`http://169.155.57.78/v1/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await res.json();
      return jsonData;
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error; 
    }
  };
  