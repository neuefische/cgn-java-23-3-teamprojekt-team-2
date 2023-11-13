export type Workout = {
    id:string,
    day: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY",
    workoutName:string,
    description:string,
    plan:string
}

export type TypeHome = {
    workouts: Workout[],
    setWorkouts: ((value: Workout[]) => void)
}

export type TypeWorkoutCard = {
    workout: Workout
}

export type WorkoutChange = {
    onWorkoutChange: () => void
}