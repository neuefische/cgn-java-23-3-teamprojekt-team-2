import {TypeWorkoutCard} from "../../interfaces/types.ts";
import "./WorkoutCard.css";

function WorkoutCard (props: TypeWorkoutCard) {

    return (
        <section className={"workout-card"}>
            <h3>{props.workout.workoutName}</h3>
            <p>{props.workout.plan}</p>
            <p>{props.workout.day}</p>
            <p>{props.workout.description}</p>
        </section>
    );
}

export default WorkoutCard;