package de.neuefische.team2.backend.service;

import de.neuefische.team2.backend.exceptions.NoSuchWorkout;
import de.neuefische.team2.backend.models.Weekday;
import de.neuefische.team2.backend.models.Workout;
import de.neuefische.team2.backend.repository.WorkoutRepo;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WorkoutServiceTest {
    private final WorkoutRepo mockWorkoutRepo = mock(WorkoutRepo.class);
    private final WorkoutService workoutService = new WorkoutService(mockWorkoutRepo);

    @Test
    void getAllWorkouts_whenNoWorkoutIsInList_thenReturnEmptyList() {
        when(mockWorkoutRepo.findAll()).thenReturn(List.of());
        List<Workout> actual = workoutService.getAllWorkouts();
        verify(mockWorkoutRepo).findAll();
        assertTrue(actual.isEmpty());
    }

    @Test
    void getAllWorkouts_whenOneWorkoutIsInList_thenReturnList() {
        Workout workout = Workout.builder()
                .id("1")
                .day(Weekday.FRIDAY)
                .workoutName("Test Workout")
                .description("Test description")
                .plan("Test plan")
                .build();
        List<Workout> expected = List.of(workout);
        when(mockWorkoutRepo.findAll()).thenReturn(expected);
        List<Workout> actual = workoutService.getAllWorkouts();
        verify(mockWorkoutRepo).findAll();
        assertEquals(expected,actual);
    }

    @Test
    void getWorkoutById_whenIdIsValid_thenReturnWorkout() {
        Workout expected = Workout.builder()
                .id("1")
                .day(Weekday.FRIDAY)
                .workoutName("Test Workout")
                .description("Test description")
                .plan("Test plan")
                .build();
        when(mockWorkoutRepo.findById(expected.id())).thenReturn(Optional.of(expected));
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