import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './components/Sidebar';
import React from 'react'

import Home from './pages/Home'
import { useState, useEffect } from 'react';
import ViewClients from './pages/ViewClients'
import AddClient from './pages/AddClient'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Clientadd from './pages/Clientadd';
import Login from './pages/Login';


function App() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)


  useEffect(() => {
    setIsLoading(true);

    fetch(`http://127.0.0.1:8000/gym/clients`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => {
          setData(actualData);
          setIsLoading(false);
          setIsLoading(null);

        })
        .catch(err =>{
          setIsLoading(false);

          setError(err.message);


        })
        
   }, []);

   

   const deleteClient = async (id) => {
    try{
        await fetch (`http://127.0.0.1:8000/gym/deleteclients/${id}`,{
          method:'DELETE'
        })

        setData(data.filter((data) =>data.client_id !== id))
        // setTasks(tasks.filter((task) =>task.id !== id))
        toast.success('Client Deleted!', { autoClose:500})
      }
      catch(err){
      
        setError(err.message);

        toast.error('Client Not Deleted!', { autoClose:500})


      }

      }
  return (
    <div>
    <Router>
    <ToastContainer />

      <Sidebar/>
          <Routes>
                  <Route path='/'  exact element={<Home  />}/>
                  <Route path='/viewclients' element={<ViewClients  isLoading={isLoading} data={data}  error={error} onDelete={deleteClient}/>}/>
                  <Route path='/addclient' element={<AddClient/>} />
                  <Route path='/addmember' element={<Clientadd/>} />
                  <Route path='/messages' element={<Login/>} />


                  {/* <Route path="addclient/:teamId" element={<Clientadd />} /> */}



          </Routes>

    

    </Router>
      
    </div>
  );
}

export default App;
