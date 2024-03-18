let accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaWNrIiwiaWF0IjoxNzEwNjMyMjUxLCJleHAiOjE3MTA2MzI1NTF9.CJ6vkwuVOBpCa3O11WC3-K4vv-4DnMDViN84v1bnFXo';
let refreshToken = 'eyJhbGciOiJIUzI1NiJ9.eyJpc1JlZnJlc2hUb2tlbiI6dHJ1ZSwic3ViIjoibmljayIsImlhdCI6MTcxMDc3MjA2OSwiZXhwIjoxNzEwODU4NDY5fQ.1NWX8j5z6-ke3g2yVXcKM5zduYnXrfSk65yM44CNKTw';

export const setTokens = (newAccessToken, newRefreshToken) => {
    accessToken = newAccessToken;
    refreshToken = newRefreshToken;
};

const refreshTokenRequest = async () => {
    try {
        const res = await fetch('http://169.155.57.78/v1/auth/refresh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                refreshToken
            })
        });

        if (!res.ok) {
            throw new Error('Failed to refresh token');
        }

        const data = await res.json();
        setTokens(data.accessToken, data.refreshToken);
    } catch (error) {
        console.error('Error refreshing token:', error);
        throw error;
    }
};

export const fetchAllData = async () => {
    try {
        const res = await fetch('http://169.155.57.78/v1/tasks', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        if (res.status === 401) {
            await refreshTokenRequest();
            return fetchAllData();
        }

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
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify(formData)
        });

        if (res.status === 401) {
            await refreshTokenRequest();
            return createData(formData);
        }

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
              Authorization: `Bearer ${accessToken}`
          }
      });

      if (res.status === 401) {
          await refreshTokenRequest();
          return await deleteData(taskId);
      }

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

export const getData = async (taskId) => {
  try {
    const res = await fetch(`http://169.155.57.78/v1/tasks/${taskId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

export const updateTask = async (taskId, updatedTask) => {
    try {
      const res = await fetch(`http://169.155.57.78/v1/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(updatedTask)
      });
  
      if (res.status === 401) {
        await refreshTokenRequest();
        return await updateTask(taskId, updatedTask);
      }
  
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
  
      const jsonData = await res.json();
      return jsonData;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  };
  
  