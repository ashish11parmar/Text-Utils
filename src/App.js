import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React,{ useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';



function App() {
    const [mode, setmode] = useState('light');
    const [alert, setalert] = useState(null);

    const showAlert = (message, type) =>{
        setalert({
            msg: message,
            type: type
        })

        setTimeout(() => {
            setalert(null);
        }, 2000);
    }

    const darkmode = () =>{

        if(mode === 'light'){
            setmode('dark');
            document.body.style.backgroundColor = '#032136';
            showAlert("Dark mode is enabled", "success");
        }
        else{
            setmode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("light mode is enabled", "success");
        }
    }

    const greenmode = () =>{

        if(mode === 'light'){
            setmode('dark');
            document.body.style.backgroundColor = '#064209';
            showAlert("green mode is enabled", "success");
        }
        else{
            setmode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("green mode is disabled", "success");
        }
    }

    

    return ( 
    <>
    <Navbar title="Textutils" about="About Us" Mode={mode} Darkmode={darkmode} greenmode = {greenmode}/>
    <Alert Alert={alert} showAlert={showAlert}/>
    <Form/>

    </>
    );

}

export default App;