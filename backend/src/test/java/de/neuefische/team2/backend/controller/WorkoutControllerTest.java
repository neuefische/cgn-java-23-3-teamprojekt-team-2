package de.neuefische.team2.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.team2.backend.models.Weekday;
import de.neuefische.team2.backend.models.Workout;
import de.neuefische.team2.backend.repository.WorkoutRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
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
    private static final String BASE_URI = "/api/workouts";

    @Test
    @DirtiesContext
    void addWorkout() throws Exception {
        Workout workout = Workout.builder()
                .id("1")
                .day(Weekday.WEDNESDAY)
                .workoutName("New workout")
                .description("New description")
                .plan("New plan")
                .build();
        String workoutAsJson = objectMapper.writeValueAsString(workout);
        mockMvc.perform(post(BASE_URI)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(workoutAsJson))
                .andExpect(status().isOk())
                .andExpect(content().json(workoutAsJson));
    }

    @Test
    @DirtiesContext
    void addWorkout_whenJustOneFieldIsFilledOut_thenReturnNullForEmptyFields() throws Exception {
        Workout workout = Workout.builder()
                .id("1")
                .day(null)
                .workoutName(null)
                .description(null)
                .plan(null)
                .build();
        String workoutAsJson = objectMapper.writeValueAsString(workout);
        mockMvc.perform(post(BASE_URI)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(workoutAsJson))
                .andExpect(status().isOk())
                .andExpect(content().json(workoutAsJson));
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
        mockMvc.perform(get(BASE_URI + "/" +workout.id()))
                .andExpect(status().isOk())
                .andExpect(content().json(workoutAsJson));
    }

    @Test
    @DirtiesContext
    void getWorkoutById_invalidId_thenThrowException() throws Exception {
        mockMvc.perform(get(BASE_URI + "/invalidId"))
                .andExpect(status().isNotFound())
                .andExpect(content().string("There is no workout with this id"));
    }
}