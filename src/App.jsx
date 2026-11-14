import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Faculty from './components/faculty';
import Contact from './components/contact';
import NotFound from './components/notFound';
import Nav from './components/nav';
import Signup from './components/signup';

const App = () =>{


    return (
    
        <>

            <Nav/>
        
            <Routes>
            
                <Route path = "/" element = {<Home/>}></Route>
                <Route path = "/about" element = {<About/>}></Route>
                <Route path = "/services" element = {<Services/>}></Route>
                <Route path = "/faculty" element = {<Faculty/>}></Route>
                <Route path = "/contact" element = {<Contact/>}></Route>
                <Route path = "/signup" element = {<Signup/>}></Route>
                <Route path = "/*" element = {<NotFound/>}></Route>
        
            </Routes>
        
        
        </>

    )
}


export default App;