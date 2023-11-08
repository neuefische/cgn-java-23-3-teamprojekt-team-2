type Workout = {
    id:string,
    day: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY",
    workoutName:string,
    description:string,
    plan:string
}

type TypeHome = {
    workouts: Workout[]
}
