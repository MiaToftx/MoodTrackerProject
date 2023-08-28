package com.moodTrackerProject.moodTrackerProject.controller;

import com.moodTrackerProject.moodTrackerProject.DBAccess.MoodService;
import com.moodTrackerProject.moodTrackerProject.model.Mood;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/moods")
public class MoodController {
    private MoodService moodService;

    // Constructor injection of MoodService
    public MoodController(MoodService moodService) {
        this.moodService = moodService;
    }

    /**
     * Get all mood submissions associated with a user.
     *
     * @param username The username of the user.
     * @return ResponseEntity containing a list of mood submissions.
     */
    @GetMapping("/allMoods")
    public ResponseEntity<Optional<List<Mood>>> getAllMoodSubmitsOnUser(@RequestParam String username) {
        Optional<List<Mood>> userMoods = moodService.getAllMoodSubmitsOnUser(username);
        return new ResponseEntity<Optional<List<Mood>>>(userMoods, HttpStatus.OK);
    }

    /**
     * Submit a new mood entry for a user.
     *
     * @param payload A list containing mood and username.
     * @return ResponseEntity containing the submitted mood entry.
     */
    @PostMapping
    public ResponseEntity<Mood> submitNewMood(@RequestBody List<String> payload) {
        String mood = payload.get(0);
        String username = payload.get(1);
        return new ResponseEntity<Mood>(moodService.submitNewMood(mood, username), HttpStatus.CREATED);
    }
}
