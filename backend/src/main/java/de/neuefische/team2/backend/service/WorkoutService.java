package de.neuefische.team2.backend.service;

import de.neuefische.team2.backend.repository.WorkoutRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class WorkoutService {
    private WorkoutRepo workoutRepo;

}
