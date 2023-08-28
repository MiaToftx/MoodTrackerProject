package com.moodTrackerProject.moodTrackerProject.DBAccess;

import com.moodTrackerProject.moodTrackerProject.model.Mood;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MoodRepository extends MongoRepository<Mood, ObjectId> {
    /**
     * Find mood submissions by mood type.
     *
     * @param mood The mood type to search for.
     * @return A list of mood submissions matching the specified mood type.
     */
    Optional<List<Mood>> findMoodsByMood(String mood);

    /**
     * Find all mood submissions by username.
     *
     * @param username The username of the user.
     * @return A list of mood submissions associated with the specified username.
     */
    Optional<List<Mood>> findAllByUsername(String username);
}
