import {Workout} from "../interfaces/types.ts";
import "./AddWorkoutPage.css";
import React, {useState} from "react";
import axios from "axios";
type Props = {
    setWorkouts: () => void
}

function AddWorkoutPage (props: Props) {

    const [day,setDay] = useState("");
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [plan,setPlan] = useState("");

    function addWorkout() {

        if (day) {
            const newWorkoutData: Workout = {
                day: day,
                workoutName: name,
                description: description,
                plan: plan,
            };

            axios.post('/api/workouts', newWorkoutData)
                .then(response => {
                    props.setWorkouts()
                    setName("");
                    setDescription("");
                    setPlan("");
                })
                .catch(error => {
                    console.error('Error adding data:', error);
                });
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addWorkout();
    };

    function handleChange(event) {
        setDay(event.target.value);
    }

    return (
        <main>
            <div className={"add-workout"}>
                <h4>Add...
                    <br/>
                    <span className={"style-orange"}>Your</span> new workout</h4>
                <form onSubmit={handleSubmit}>
                    <label>
                        Day
                        <select
                            value={day}
                            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setDay(event.target.value)}
                        >
                            <option value={"MONDAY"}>MONDAY</option>
                            <option value={"TUESDAY"}>TUESDAY</option>
                            <option value={"WEDNESDAY"}>WEDNESDAY</option>
                            <option value={"THURSDAY"}>THURSDAY</option>
                            <option value={"FRIDAY"}>FRIDAY</option>
                            <option value={"SATURDAY"}>SATURDAY</option>
                            <option value={"SUNDAY"}>SUNDAY</option>
                        </select>
                    </label>
                <div className={"input-wrapper"}>
                    <label>
                        Workout name:
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </label>
                    <label>
                        Description:
                        <input
                            type="text"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </label>
                    <label>
                        Plan:
                        <input
                            type="text"
                            value={plan}
                            onChange={(event) => setPlan(event.target.value)}
                        />
                    </label>
                </div>

                    <br></br>
                    <button type="submit">Add workout</button>
                </form>
            </div>
        </main>
    )
}

export default AddWorkoutPage;