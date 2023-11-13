import {Workout} from "../interfaces/types.ts";
import "./AddWorkoutPage.css";
import React, {useState} from "react";
import axios from "axios";
type Props = {
    setWorkouts: () => void
}

function AddWorkoutPage (props: Props) {

    const [day,setDay] = useState<"MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY">();
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
                <p>Add new workout </p>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Workout day</legend>
                        <label><input type="radio" name="weekday" value="MONDAY" onChange={handleChange} required={true}/> Mon </label>
                        <label><input type="radio" name="weekday" value="TUESDAY" onChange={handleChange} required={true}/> Tue </label>
                        <label><input type="radio" name="weekday" value="WEDNESDAY" onChange={handleChange} required={true}/> Wed </label>
                        <label><input type="radio" name="weekday" value="THURSDAY" onChange={handleChange} required={true}/> Thu </label>
                        <label><input type="radio" name="weekday" value="FRIDAY" onChange={handleChange} required={true}/> Fri </label>
                        <label><input type="radio" name="weekday" value="SATURDAY" onChange={handleChange} required={true}/> Sat </label>
                        <label><input type="radio" name="weekday" value="SUNDAY" onChange={handleChange} required={true}/> Sun </label>
                    </fieldset>
                    <br></br>

                    <label>
                        Workout name:
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </label>
                    <br></br>

                    <label>
                        Description:
                        <input
                            type="text"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </label>
                    <br></br>

                    <label>
                        Plan:
                        <input
                            type="text"
                            value={plan}
                            onChange={(event) => setPlan(event.target.value)}
                        />
                    </label>
                    <br></br>

                    <br></br>
                    <button type="submit">Add workout</button>
                </form>
            </div>
        </main>
    )
}

export default AddWorkoutPage;