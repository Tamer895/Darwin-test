import { useState, useEffect, Suspense } from 'react'
import Header from '@layouts/Header/Header'
import Routing from '@utils/routing/Routing';
import Footer from '@components/layouts/Footer/Footer';
import { HelmetProvider } from 'react-helmet-async';

import Provider from '@utils/alert/Provider';

import Snowfall from 'react-snowfall';
import Loading from '@components/layouts/Loading/Loading';


function App( ) {


  // console.log = function() {}
  // localStorage.removeItem("user");
  // localStorage.removeItem("refresh_token");
  // localStorage.removeItem("access_token");

  return (
    <HelmetProvider>
        {/* <Snowfall snowflakeCount={50} /> */}
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
