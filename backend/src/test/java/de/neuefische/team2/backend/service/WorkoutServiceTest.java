package de.neuefische.team2.backend.service;

import de.neuefische.team2.backend.exceptions.NoSuchWorkout;
import de.neuefische.team2.backend.models.UpdateWorkout;
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

    @Test
    void testAddWorkout() {
        //GIVEN
        Workout expected = new Workout("1", Weekday.TUESDAY, "Testworkout", "Testdescription", "Testplan");
        //WHEN
        when(mockWorkoutRepo.save(expected)).thenReturn(expected);
        //THEN
        Workout actual = workoutService.addWorkout(expected);
        verify(mockWorkoutRepo).save(expected);
        assertEquals(expected, actual);
    }
  
    @Test
    void updateWorkout_whenWorkoutIdExistsInDb_thenReturnUpdatedWorkout() {
        Workout workoutBefore = Workout.builder()
                .id("1")
                .day(Weekday.MONDAY)
                .workoutName("original")
                .description("original")
                .plan("original")
                .build();

        UpdateWorkout updateWorkout = UpdateWorkout.builder()
                .day(Weekday.FRIDAY)
                .workoutName("Test update")
                .description("Test update")
                .plan("Test update")
                .build();

        Workout expected = Workout.builder()
                .id("1")
                .day(Weekday.FRIDAY)
                .workoutName("Test update")
                .description("Test update")
                .plan("Test update")
                .build();

        when(mockWorkoutRepo.findById(workoutBefore.id())).thenReturn(Optional.of(workoutBefore));
        when(mockWorkoutRepo.save(any(Workout.class))).thenReturn(expected);
        Workout actual = workoutService.updateWorkout(expected.id(), updateWorkout);
        verify(mockWorkoutRepo).findById(workoutBefore.id());
        verify(mockWorkoutRepo).save(expected);
        assertEquals(expected,actual);
    }

    @Test
    void updateWorkout_whenWorkoutIdDoesNotExistsInDb_thenThrowException() {
        UpdateWorkout updateWorkout = UpdateWorkout.builder()
                .day(Weekday.FRIDAY)
                .workoutName("Test update")
                .description("Test update")
                .plan("Test update")
                .build();
        when(mockWorkoutRepo.findById("invalidId")).thenReturn(Optional.empty());
        assertThrows(NoSuchWorkout.class, () -> workoutService.updateWorkout("invalidId", updateWorkout));
        verify(mockWorkoutRepo).findById("invalidId");
        verify(mockWorkoutRepo,never()).save(any(Workout.class));
    }

    @Test
    void deleteWorkout() {
        String workoutId = "1";
        workoutService.deleteWorkout(workoutId);
        verify(mockWorkoutRepo).deleteById(workoutId);
    }
}