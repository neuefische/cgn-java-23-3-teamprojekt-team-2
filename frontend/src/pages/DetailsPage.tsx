import "./DetailsPage.css";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Workout} from "../interfaces/types.ts";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";

function DetailsPage() {
    const {id} = useParams();
    const [workout, setWorkout] = useState<Workout>();
    const [error, setError] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(():void => {
        axios.get(`/api/workouts/${id}`)
            .then((response: AxiosResponse<Workout>):void => {
                setWorkout(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(true);
            });
    }, [id]);

    function handleClick() {
        workout && navigate(
            `/workout/${workout.id}/edit`,
            {state:{workout: workout}}
        );
    }

    if (isLoading) {
        return (
            <section className={"page-state"} >
                <p>Loading...</p>
            </section>
        )
    }

    if(error || !workout) {
        return (
            <section className={"page-state"}>
                <p>
                    <span>Oops!</span> This ID seems to be an invalid workout. <br/>
                    Looks like you've just attempted a '404 lift' – a
                    mysterious exercise only found in the deep web gym. <br />
                    For an actual workout, please jog back to the <Link to={"/"} >homepage</Link>!
                </p>
            </section>
        );
    }

    if(!isLoading) {
        return (
            <section className={"details-page"}>
                <div className={"details-page-header"}>
                    <h2>{workout.workoutName}</h2>
                    <p>{workout.day}</p>
                </div>
                <div className={"details-page-main"} >
                    <p className={"details-page-description"}>{workout.description}</p>
                    <p>{workout.plan}</p>
                    <button onClick={handleClick} className={"btn-edit"}>Edit</button>
                </div>
            </section>
        );
    }
}

export default DetailsPage;