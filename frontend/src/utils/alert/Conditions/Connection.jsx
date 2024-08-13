import React, {useState, useEffect} from 'react'
import Alert from "@components/UI/Alert/Alert"

export default function Connection() {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
      const handleOnlineStatus = () => {
        setShowAlert(!navigator.onLine);
      };
  
      window.addEventListener('online', handleOnlineStatus);
      window.addEventListener('offline', handleOnlineStatus);
  
      // Check initial connection status
      handleOnlineStatus();
  
      return () => {
        window.removeEventListener('online', handleOnlineStatus);
        window.removeEventListener('offline', handleOnlineStatus);
      };
    }, []);



  if(!showAlert) {
    return (
      null
    )
  }

  return(
    <Alert severity="warning">
      You're currently offline. Please check your internet connection
    </Alert>
  )
}
