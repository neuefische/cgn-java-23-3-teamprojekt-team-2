import Header from "./components/header/Header.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";

function App() {

    const[workouts, setWorkouts] = useState<Workout[]>([]);

    useEffect(() => {
        axios.get('/api/workouts')
            .then(response => {
                setWorkouts(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

  return (
    <>
        <Header />
        <div className={"container"}>
            <Routes>
                <Route path={"/"} element={<Home />} />
            </Routes>
        </div>
    </>
  );
}

export default App
