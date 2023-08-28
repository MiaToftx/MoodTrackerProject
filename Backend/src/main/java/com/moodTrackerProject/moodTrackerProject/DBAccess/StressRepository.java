package com.moodTrackerProject.moodTrackerProject.DBAccess;

import com.moodTrackerProject.moodTrackerProject.model.Stress;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StressRepository extends MongoRepository<Stress, ObjectId> {
    /**
     * Find all stress submissions by username.
     *
     * @param username The username of the user.
     * @return A list of stress submissions associated with the specified username.
     */
    Optional<List<Stress>> findAllByUsername(String username);
}

