package de.neuefische.team2.backend.models;

import lombok.Builder;
import org.springframework.data.mongodb.core.mapping.Field;

@Builder
public record UpdateWorkout(
        Weekday day,
        String workoutName,
        String description,
        String plan
) {
}
