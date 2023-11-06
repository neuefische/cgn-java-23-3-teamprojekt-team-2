package de.neuefische.team2.backend.repository;

import de.neuefische.team2.backend.models.Workout;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkoutRepo extends MongoRepository <Workout, String> {

}
