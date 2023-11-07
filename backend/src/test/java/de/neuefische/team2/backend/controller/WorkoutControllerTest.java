package de.neuefische.team2.backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.team2.backend.exceptions.NoSuchWorkout;
import de.neuefische.team2.backend.models.Weekday;
import de.neuefische.team2.backend.models.Workout;
import de.neuefische.team2.backend.repository.WorkoutRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@AutoConfigureMockMvc
class WorkoutControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private WorkoutRepo workoutRepo;
    @Autowired
    private ObjectMapper objectMapper;
    private final String baseURI = "/api/workouts";

    @Test
    void getAllWorkouts() {
    }

    @Test
    @DirtiesContext
    void getWorkoutById_validId_thenReturnWorkoutAsJson() throws Exception {
        Workout workout = Workout.builder()
                .id("1")
                .day(Weekday.MONDAY)
                .workoutName("Test")
                .description("Test description")
                .plan("Test plan")
                .build();
        String workoutAsJson = objectMapper.writeValueAsString(workout);
        workoutRepo.save(workout);
        mockMvc.perform(get(baseURI + "/" +workout.id()))
                .andExpect(status().isOk())
                .andExpect(content().json(workoutAsJson));
    }

    @Test
    @DirtiesContext
    void getWorkoutById_invalidId_thenThrowException() {
        assertThrows(Exception.class, () -> mockMvc.perform(get(baseURI + "/1")));
    }

    @Test
    void addWorkout() {
    }
}