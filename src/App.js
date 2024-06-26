import { Detector } from 'react-detect-offline';
import './App.css';
import NavigationStack from './Components/Navigationstack/navigation';
import { WifiOff } from 'lucide-react';



function App() {




  return (
    <>

      <Detector render={({ online }) => (
        online ?

          <>

              <NavigationStack />
          </>
          :

          <>
            <div className='flex flex-col border-2 w-full h-screen justify-center items-center'>
              <div>

              <WifiOff/>
              </div>
              <p>No internet Connection</p>
              <p>Please make sure you connect to Internet</p>
            </div>

          </>

      )} />
    </>

    // <NavigationStack/>



  )
}

export default App


