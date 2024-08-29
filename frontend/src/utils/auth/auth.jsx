import React, {useState, useEffect} from 'react'





function setAuthToken(refreshToken, accessToken, id) {
  localStorage.setItem('refresh_token', refreshToken);
  localStorage.setItem('access_token', accessToken);
  localStorage.setItem('user_id', id);
}





function getAccessToken() {

    const [auth, setAuth] = useState();
 
    useEffect(() => {

        const checkAuth = async () => {
          const token = await localStorage.getItem('access_token')
          setAuth(token)
        }
        
        checkAuth();
    }, [])

    return(auth)
}


function getRefreshToken() {

  const [auth, setAuth] = useState();

  useEffect(() => {

      const checkAuth = async () => {
        const token = await localStorage.getItem('refresh_token')
        setAuth(token)
      }
      
      checkAuth();
  }, [])

  return(auth)
}

// 
function isAuthenticated() {

  const [auth, setAuth] = useState();

  useEffect(() => {

      const checkAuth = async () => {
        const token = await localStorage.getItem('access_token')
        setAuth(token == null ? false : true)
      }
      
      checkAuth();

  }, [])

  return(auth)
}






export {isAuthenticated, getAccessToken, getRefreshToken, setAuthToken}

