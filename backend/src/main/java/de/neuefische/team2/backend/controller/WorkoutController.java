package de.neuefische.team2.backend.controller;

import de.neuefische.team2.backend.models.Workout;
import de.neuefische.team2.backend.service.WorkoutService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/workouts")
public class WorkoutController {
    private WorkoutService workoutService;

    @GetMapping("")
    public List<Workout> getAllWorkouts() {
        return workoutService.getAllWorkouts();
    }
}
