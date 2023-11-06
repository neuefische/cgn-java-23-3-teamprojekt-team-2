package de.neuefische.team2.backend.models;

import lombok.Builder;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Builder
@Document(collection = "workout")
public record Workout(
        @Id
        String id,
        @Field("workout_day")
        Weekday day,
        @Field("workout_name")
        String workoutName,
        @Field("workout_description")
        String description,
        @Field("workout_plan")
        String plan
) {
}
