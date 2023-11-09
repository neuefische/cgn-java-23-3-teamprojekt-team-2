import {TypeWorkoutCard} from "../../interfaces/types.ts";
import "./WorkoutCard.css";
import {useNavigate} from "react-router-dom";

function WorkoutCard (props: TypeWorkoutCard) {
    const navigate = useNavigate();

    return (
        <section onClick={() => navigate("/workout/" + props.workout.id)} className={"workout-card"}>
            <h3>{props.workout.workoutName}</h3>
            <p>{props.workout.plan}</p>
            <p>{props.workout.day}</p>
            <p>{props.workout.description}</p>

        </section>
    );
}

export default WorkoutCard;