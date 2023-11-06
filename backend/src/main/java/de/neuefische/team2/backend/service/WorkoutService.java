package de.neuefische.team2.backend.service;

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
}

