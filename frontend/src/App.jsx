import { useState } from 'react'
import Header from '@layouts/Header/Header'
import Routing from '@utils/routing/Routing';
import Footer from '@components/layouts/Footer/Footer';
import Message from '@components/UI/Alert/Alert';

import Provider from '@utils/alert/Provider';


function App( ) {

  return (
    <>
      <Header />
      {/* <Loader/> */}
      {/* <Message severity="error">This is a custom alert component.</Message> */}

      <div style={{marginTop: "121px"}} className="w-full">
        <Provider/>
        <Routing/>
      </div>
      
      <Footer/>
    </>
  )
}

export default App;
