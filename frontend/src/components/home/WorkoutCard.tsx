import {TypeWorkoutCard} from "../../interfaces/types.ts";
import "./WorkoutCard.css";
import {useNavigate} from "react-router-dom";
import React from "react";

function WorkoutCard (props: TypeWorkoutCard) {
    const navigate = useNavigate();

    function handleClick():void {
        navigate(`/workout/${props.workout.id}`);
    }

    function handleKeyDown(event:React.KeyboardEvent):void {
        if(event.key === "Enter" || event.key === " ") {
            navigate(`/workout/${props.workout.id}`);
        }
    }

    return (
        <section 
            className={"workout-card card-shadow"} 
            role={"button"}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-labelledby={`workoutName-${props.workout.id}`
        >
            <div className={"workout-card-header"}>
                <h3 id={`workoutName-${props.workout.id}`}>{props.workout.workoutName}</h3>
                <p>{props.workout.plan}</p>
                <p className={"workout-day"}>{props.workout.day}</p>
            </div>
            <p className={"description"}>{props.workout.description}</p>
        </section>
    );
}

export default WorkoutCard;