import Header from "./components/header/Header.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import {Workout} from "./interfaces/types.ts";
import AddWorkoutPage from "./pages/AddWorkoutPage.tsx";
import DetailsPage from "./pages/DetailsPage.tsx";
import EditPage from "./pages/EditPage.tsx";

function App() {
    const[workouts, setWorkouts] = useState<Workout[]>([]);

    function fetchData() {
        axios.get('/api/workouts')
            .then(response => {
                setWorkouts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => fetchData(), []);

  return (
    <>
        <Header />
        <div className={"container"}>
            <Routes>
                <Route path={"/"} element={<Home workouts={workouts} setWorkouts={setWorkouts}/>} />
                <Route path={"/workouts/add"} element={<AddWorkoutPage setWorkouts={fetchData} />} />
                <Route path={"/workout/:id"} element={<DetailsPage />} />
                <Route path={"/workout/:id/edit"} element={<EditPage onWorkoutChange={fetchData}/>} />
            </Routes>
        </div>
    </>
  );
}

export default App;
