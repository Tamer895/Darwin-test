import { useState, useEffect } from 'react'
import Header from '@layouts/Header/Header'
import Routing from '@utils/routing/Routing';
import Footer from '@components/layouts/Footer/Footer';
import { HelmetProvider } from 'react-helmet-async';

import Provider from '@utils/alert/Provider';


function App( ) {

  // useEffect(() => {
  //   localStorage.removeItem('access_token');
  //   localStorage.removeItem('refresh_token');
  //   localStorage.removeItem('user_id');
  // }, []);

  return (
    <HelmetProvider>
      <Header />
      {/* <Loader/> */}
      {/* <Message severity="error">This is a custom alert component.</Message> */}

      <div style={{marginTop: "121px"}} className="w-full">
        <Provider/>
        <Routing/>
      </div>
      
      <Footer/>
    </HelmetProvider>
  )
}

export default App;
