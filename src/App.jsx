import  RoutesApp  from "./routes"
import Footer from "./components/footer/footer";
import { lazy } from 'react';
const Header = lazy(() => import('./components/header/header'));

function App() {

  
  

  return (
    <>
    <Header/>

    <RoutesApp/>

    <Footer/>

    </>
  )
}

export default App
