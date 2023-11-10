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
            role={"button"}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-labelledby={`workoutName-${props.workout.id}`}
            className={"workout-card"}
        >
            <h3 id={`workoutName-${props.workout.id}`}>{props.workout.workoutName}</h3>
            <p>{props.workout.plan}</p>
            <p>{props.workout.day}</p>
            <p>{props.workout.description}</p>
        </section>
    );
}

export default WorkoutCard;