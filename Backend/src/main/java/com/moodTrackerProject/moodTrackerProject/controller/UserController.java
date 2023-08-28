package com.moodTrackerProject.moodTrackerProject.controller;

import com.moodTrackerProject.moodTrackerProject.DBAccess.UserService;
import com.moodTrackerProject.moodTrackerProject.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;

    // Constructor injection of UserService
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Register a new user.
     *
     * @param payload A list containing username and password.
     * @return ResponseEntity containing the registered user.
     */
    @PostMapping
    public ResponseEntity<User> registerNewUser(@RequestBody List<String> payload) {
        String username = payload.get(0);
        String password = payload.get(1);
        return new ResponseEntity<User>(userService.addNewUser(username, password), HttpStatus.CREATED);
    }

    /**
     * Log in a user.
     *
     * @param payload A list containing username and password.
     * @return ResponseEntity containing the logged-in user if successful, or a 404 status if not found.
     */
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody List<String> payload) {
        String username = payload.get(0);
        String password = payload.get(1);

        Optional<User> loggedInUser = userService.findByUsernameAndPassword(username, password);

        if (loggedInUser.isPresent()) {
            // An HTTP response with a status code 200 (OK) and the user object.
            return ResponseEntity.ok(loggedInUser.get());
        } else {
            // An HTTP response with a status code 404 (Not Found) and no content.
            return ResponseEntity.notFound().build();
        }
    }
}
