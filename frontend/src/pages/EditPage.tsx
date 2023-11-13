import "./EditPage.css";
import {useLocation} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function EditPage() {
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

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    return (
        <div id={"page-edit"}>
            <h2>Edit Page</h2>
            <form onSubmit={handleSubmit}>
                <div className={"input-field"}>
                    <label>
                        Workout Name
                        <input
                            type={"text"}
                            value={name}
                            onChange={(event)=>setName(event.target.value)}
                        />
                    </label>
                </div>

                <div className={"input-field"}>
                    <label>
                        Workout Description
                        <input
                            type={"text"}
                            value={description}
                            onChange={(event)=>{setDescription(event.target.value)}}
                        />
                    </label>
                </div>

                <div className={"input-field"}>
                    <label>
                        Workout Plan
                        <input
                            type={"text"}
                            value={plan}
                            onChange={(event)=>{setPlan(event.target.value)}}
                        />
                    </label>
                </div>
                <input type={"submit"}/>
            </form>

        </div>
    )
}

export default EditPage;