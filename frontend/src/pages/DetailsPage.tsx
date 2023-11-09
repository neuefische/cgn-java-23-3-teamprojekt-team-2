import "./DetailsPage.css";
import {Link, useParams} from "react-router-dom";
import {TypeDetailsPage, Workout} from "../interfaces/types.ts";

function DetailsPage(props:TypeDetailsPage) {
    const {id} = useParams();
    const workout:Workout = props.workouts.filter((workout:Workout):boolean => workout.id === id)[0];

    if(!workout) {
        return (
            <section className={"error-page"}>
                <p><span>Oops!</span> This ID seems to be an invalid workout. <br/>
                    Looks like you've just attempted a '404 lift' – a
                    mysterious exercise only found in the deep web gym. <br />
                    For an actual workout, please jog back to the <Link to={"/"} >homepage</Link>!
                </p>
            </section>
        );
    }

    return (
        <section className={"details-page"}>
            <div className={"details-page-header"}>
                <h2>{workout.workoutName}</h2>
                <p>{workout.day}</p>
            </div>
            <div className={"details-page-main"} >
                <p className={"details-page-description"}>{workout.description}</p>
                <p>{workout.plan}</p>
            </div>
        </section>
    );
}

export default DetailsPage;