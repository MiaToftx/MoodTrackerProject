// Import necessary dependencies and styles
import './App.css';
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Register from './components/register/Register';
import Login from './components/login/Login';

// Define the main App component
function App() {
  // State variables to store data
  const [allMoods, setMoods] = useState("");  
  const [allStress, setStress] = useState("");
  const [allGoodThings, setGoodThings] = useState("");
  const [currentUser, setUser] = useState("");

  // Function to fetch and set all mood submissions by the current user
  const getAllMoodSubmitsByUser = async () => {
    try {
      const response = await api.get("/moods/allMoods?username=" + currentUser);
      setMoods(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to submit a new mood
  const submitNewMood = async (mood) => {
    if (currentUser !== "") {
      let payload = [mood, currentUser];
      try {
        await api.post("/moods", payload);
        getAllMoodSubmitsByUser(currentUser); // Update the data after submitting a new mood
      } catch (error) {
        console.log(error);
      }
    } else {
      window.alert("Register or login to start submitting your moods");
    }
  };

  // Function to fetch and set all stress submissions by the current user
  const getAllStressSubmitsByUser = async () => {
    try{
      const response = await api.get("/stress?username=" + currentUser);
      setStress(response.data);
    }
    catch(error) {
      console.log(error);
    }
  };

  // Function to submit a new stress level
  const submitNewStress = async (stressLevel) => {
    if(currentUser != "") {
      let payload = [stressLevel, currentUser];
      try {
        const response = await api.post("/stress", payload);
        getAllStressSubmitsByUser(currentUser); // Update the data after submitting a new stress level
      }
      catch(error) {
        console.log(error);
      }
    }
    else {
      window.alert("Register or login to start submitting your stress levels")
    }
  };

  // Function to fetch and set all goodThing submissions by the current user
  const getAllGoodThingSubmitsByUser = async () => {
    try{
      const response = await api.get("/goodThings?username=" + currentUser)
      setGoodThings(response.data)
    }
    catch(error) {
      console.log(error);
    }
  };

  // Function to submit a new good thing
  const submitNewGoodThing = async (goodThing) => {
    if(currentUser != "") {
      let payload = [goodThing, currentUser];
      try {
        const response = await api.post("/goodThings", payload);
        getAllGoodThingSubmitsByUser(currentUser); // Update the data after submitting a new good thing
      }
      catch(error) {
        console.log(error);
      }
    }
    else {
      window.alert("Register or login to start submitting good things")
    }
  };

  // Function to register a new user
  const registerNewUser = async (username, password) => {
    let payload = [username, password];
    try {
      await api.post("/users", payload);
      setUser(username);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to log in a user
  const userLogin = async (username, password) => {
    let payload = [username, password];
    try {
      let response = await api.post("/users/login", payload);
      if (response) {
        setUser(username);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Effect to fetch data when currentUser changes
  useEffect(() => {
    getAllMoodSubmitsByUser(currentUser);
    getAllStressSubmitsByUser(currentUser);
    getAllGoodThingSubmitsByUser(currentUser)
  }, [currentUser]);

  // Return the JSX content of the App component
  return (
    <div className="App">
      <Header /> {/* Render the header */}
      <Routes> {/* Define route mappings */}
        {/* Route to the Home component */}
        <Route path="/" element={<Home
          submitNewMood={submitNewMood}
          allMoods={allMoods}
          submitNewStress={submitNewStress}
          allStress={allStress}
          submitNewGoodThing={submitNewGoodThing}
          allGoodThings={allGoodThings}
          currentUser={currentUser}
        />}/>
        {/* Route to the Register component */}
        <Route path="/register" element={<Register registerNewUser={registerNewUser}/>}/>
        {/* Route to the Login component */}
        <Route path="/login" element={<Login userLogin={userLogin}/>}/>
      </Routes>
    </div>
  );
}

export default App; // Export the App component
