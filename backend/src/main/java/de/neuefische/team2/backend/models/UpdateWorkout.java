package de.neuefische.team2.backend.models;

import lombok.Builder;

@Builder
public record UpdateWorkout(
        Weekday day,
        String workoutName,
        String description,
        String plan
) {
}
