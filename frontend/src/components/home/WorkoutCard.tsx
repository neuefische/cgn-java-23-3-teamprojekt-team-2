import {TypeWorkoutCard} from "../../interfaces/types.ts";
import "./WorkoutCard.css";

function WorkoutCard (props: TypeWorkoutCard) {

    return (
        <section className={"workout-card card-shadow"}>
            <div className={"workout-card-header"}>
                <h3>{props.workout.workoutName}</h3>
                <p>{props.workout.plan}</p>
                <p className={"workout-day"}>{props.workout.day}</p>
            </div>
                <p className={"description"}>{props.workout.description}</p>
        </section>
    );
}

export default WorkoutCard;