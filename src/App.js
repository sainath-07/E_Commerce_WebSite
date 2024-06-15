import { Detector } from 'react-detect-offline';
import './App.css';
import NavigationStack from './Components/Navigationstack/navigation';
import { useAuth0 } from "@auth0/auth0-react";
import LoginForm from './Pages/Auth0/Loginform';


function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <>

      <Detector render={({ online }) => (
        online ?

          <>
            <div >

              <NavigationStack/>
            </div>
          </>
          :

          <>
            <div className='flex flex-col border-2 w-full h-screen justify-center items-center'>
              <div>

                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/wi-fi-disconnected.png" alt="wi-fi-disconnected" />
              </div>
              <p>No internet Connection</p>
              <p>Please make sure you connect to Internet</p>
            </div>

          </>

      )} />

    </>
  )
}

export default App