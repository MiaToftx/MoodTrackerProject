package com.moodTrackerProject.moodTrackerProject.DBAccess;

import com.moodTrackerProject.moodTrackerProject.model.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private UserRepository userRepository;

    // Constructor injection of UserRepository
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Add a new user.
     *
     * @param username The username of the new user.
     * @param password The password of the new user.
     * @return The newly created user.
     */
    public User addNewUser(String username, String password) {
        User user = new User(username, password);
        return userRepository.insert(user);
    }

    /**
     * Find a user by their username and password.
     *
     * @param username The username of the user.
     * @param password The password of the user.
     * @return An optional containing the found user, if exists.
     */
    public Optional<User> findByUsernameAndPassword(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }
}

