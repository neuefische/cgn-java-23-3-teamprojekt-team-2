package de.neuefische.team2.backend.service;

import de.neuefische.team2.backend.exceptions.NoSuchWorkout;
import de.neuefische.team2.backend.models.Weekday;
import de.neuefische.team2.backend.models.Workout;
import de.neuefische.team2.backend.repository.WorkoutRepo;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WorkoutServiceTest {
    private final WorkoutRepo mockWorkoutRepo = mock(WorkoutRepo.class);
    private final WorkoutService workoutService = new WorkoutService(mockWorkoutRepo);

    @Test
    void getAllWorkouts() {
    }

    @Test
    void addWorkout() {
    }

    @Test
    void getWorkoutById_whenIdIsValid_thenReturnWorkout() {
        //GIVEN
        Workout expected = Workout.builder()
                .id("1")
                .day(Weekday.FRIDAY)
                .workoutName("Test Workout")
                .description("Test description")
                .plan("Test plan")
                .build();
        //WHEN
        when(mockWorkoutRepo.findById(expected.id())).thenReturn(Optional.of(expected));

        //THEN
        Workout actual = workoutService.getWorkoutById(expected.id());
        verify(mockWorkoutRepo).findById(expected.id());
        assertEquals(expected,actual);
    }

    @Test
    void getWorkoutById_whenIdIsInvalid_thenThrowError() {
        assertThrows(NoSuchWorkout.class, () -> workoutService.getWorkoutById("1"));
        verify(mockWorkoutRepo).findById("1");
    }
}