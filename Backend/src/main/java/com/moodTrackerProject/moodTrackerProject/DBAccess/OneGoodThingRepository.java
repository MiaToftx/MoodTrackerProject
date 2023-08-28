package com.moodTrackerProject.moodTrackerProject.DBAccess;

import com.moodTrackerProject.moodTrackerProject.model.OneGoodThing;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OneGoodThingRepository extends MongoRepository<OneGoodThing, ObjectId> {
    /**
     * Find all positive experience submissions by username.
     *
     * @param username The username of the user.
     * @return A list of positive experience submissions associated with the specified username.
     */
    Optional<List<OneGoodThing>> findAllByUsername(String username);
}

