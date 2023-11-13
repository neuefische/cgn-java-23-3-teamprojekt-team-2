package de.neuefische.team2.backend.service;

import de.neuefische.team2.backend.exceptions.NoSuchWorkout;
import de.neuefische.team2.backend.models.UpdateWorkout;
import de.neuefische.team2.backend.models.Workout;
import de.neuefische.team2.backend.repository.WorkoutRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class WorkoutService {
    private WorkoutRepo workoutRepo;

    public List<Workout> getAllWorkouts() {
        return workoutRepo.findAll();
    }

    public Workout addWorkout(Workout workout) {
        return workoutRepo.save(workout);
    }

    public Workout getWorkoutById(String id) {
        return workoutRepo.findById(id).orElseThrow(NoSuchWorkout::new);
    }

    public Workout updateWorkout(String id, UpdateWorkout updateWorkout) {
        getWorkoutById(id);
        Workout workoutToUpdate = Workout.builder()
                .id(id)
                .day(updateWorkout.day())
                .workoutName(updateWorkout.workoutName())
                .description(updateWorkout.description())
                .plan(updateWorkout.plan())
                .build();

        return workoutRepo.save(workoutToUpdate);
    }
}
