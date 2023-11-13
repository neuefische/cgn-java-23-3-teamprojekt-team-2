package de.neuefische.team2.backend.controller;

import de.neuefische.team2.backend.exceptions.NoSuchWorkout;
import de.neuefische.team2.backend.models.UpdateWorkout;
import de.neuefische.team2.backend.models.Workout;
import de.neuefische.team2.backend.service.WorkoutService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}")
    public Workout getWorkoutById(@PathVariable String id) {
        return workoutService.getWorkoutById(id);
    }

    @PostMapping("")
    public Workout addWorkout(@RequestBody Workout workout) {
        return workoutService.addWorkout(workout);
    }

    @PutMapping("/{id}")
    public Workout updateWorkout(@PathVariable String id, @RequestBody UpdateWorkout updateWorkout) {
        return workoutService.updateWorkout(id, updateWorkout);
    }

    @ExceptionHandler(NoSuchWorkout.class)
    public ResponseEntity<String> handleNoSuchWorkoutException(NoSuchWorkout e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }
}
