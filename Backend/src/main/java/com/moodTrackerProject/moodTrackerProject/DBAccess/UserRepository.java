package com.moodTrackerProject.moodTrackerProject.DBAccess;

import com.moodTrackerProject.moodTrackerProject.model.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, ObjectId> {
    /**
     * Find a user by their username and password.
     *
     * @param username The username of the user.
     * @param password The password of the user.
     * @return An optional containing the found user, if exists.
     */
    Optional<User> findByUsernameAndPassword(String username, String password);
}

