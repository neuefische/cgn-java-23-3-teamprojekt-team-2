package de.neuefische.team2.backend.exceptions;

public class NoSuchWorkout extends RuntimeException{
    public NoSuchWorkout() {
        super("There is no workout with this id");
    }

    public NoSuchWorkout(String message) {
        super(message);
    }

}
