import "./EditPage.css";
import {NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {WorkoutChange} from "../interfaces/types.ts";

function EditPage(props: WorkoutChange) {
    const navigate:NavigateFunction = useNavigate();
    const location = useLocation();
    const workout = location.state.workout;

    const [day, setDay] = useState(workout.day)
    const [name,setName] = useState<string>(workout.workoutName)
    const [description,setDescription] = useState<string>(workout.description)
    const [plan,setPlan] = useState<string>(workout.plan)

    function handleSubmit(event:React.FormEvent<HTMLFormElement>):void {
        event.preventDefault();
        axios.put(`/api/workouts/${workout.id}`,{
            day: day,
            workoutName: name,
            description: description,
            plan: plan
        })
            .then(()=> {
                props.onWorkoutChange();
                navigate(`/workout/${workout.id}`);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    return (
        <>
            <h2>Edit Page</h2>
            <form onSubmit={handleSubmit}>
                <div className={"input-field"}>
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
                </div>

                <div className={"input-field"}>
                    <label>
                        Workout Name
                        <input
                            type={"text"}
                            value={name}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setName(event.target.value)}
                        />
                    </label>
                </div>

                <div className={"input-field"}>
                    <label>
                        Workout Description
                        <input
                            type={"text"}
                            value={description}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{setDescription(event.target.value)}}
                        />
                    </label>
                </div>

                <div className={"input-field"}>
                    <label>
                        Workout Plan
                        <input
                            type={"text"}
                            value={plan}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{setPlan(event.target.value)}}
                        />
                    </label>
                </div>
                <input type={"submit"}/>
            </form>
        </>
    )
}

export default EditPage;