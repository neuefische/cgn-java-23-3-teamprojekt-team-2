import {TypeHome} from "../interfaces/types.ts";
import WorkoutCard from "../components/home/WorkoutCard.tsx";

function Home (props: TypeHome){

    return (
        <main>
            {props.workouts.map(workout => <WorkoutCard key={workout.id} workout={workout} /> )}
        </main>
    );
}

export default Home;