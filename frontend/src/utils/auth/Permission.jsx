import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Permission(id) {
    const navigate = useNavigate();
    useEffect(() => {
        const checkAuth = async () => {
            const user_id = await localStorage.getItem('user_id')
            if(parseInt(user_id) == parseInt(id)) {
              ;
            }
            else {
              navigate("/")
            }
          }
          
          checkAuth();
    }, []) 
}

export default Permission;
