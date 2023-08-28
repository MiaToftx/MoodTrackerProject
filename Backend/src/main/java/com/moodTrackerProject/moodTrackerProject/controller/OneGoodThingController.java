package com.moodTrackerProject.moodTrackerProject.controller;

import com.moodTrackerProject.moodTrackerProject.DBAccess.OneGoodThingService;
import com.moodTrackerProject.moodTrackerProject.DBAccess.StressService;
import com.moodTrackerProject.moodTrackerProject.model.OneGoodThing;
import com.moodTrackerProject.moodTrackerProject.model.Stress;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/goodThings")
public class OneGoodThingController {
    private OneGoodThingService oneGoodThingService;

    // Constructor injection of OneGoodThingService
    public OneGoodThingController(OneGoodThingService oneGoodThingService) {
        this.oneGoodThingService = oneGoodThingService;
    }

    /**
     * Get all submissions of positive experiences associated with a user.
     *
     * @param username The username of the user.
     * @return ResponseEntity containing a list of positive experience submissions.
     */
    @GetMapping
    public ResponseEntity<Optional<List<OneGoodThing>>> getAllGoodThingSubmits(@RequestParam String username) {
        Optional<List<OneGoodThing>> goodThings = oneGoodThingService.getAllGoodThingSubmitsOnUser(username);
        return new ResponseEntity<Optional<List<OneGoodThing>>>(goodThings, HttpStatus.OK);
    }

    /**
     * Submit a new positive experience entry for a user.
     *
     * @param payload A list containing the positive experience and username.
     * @return ResponseEntity containing the submitted positive experience entry.
     */
    @PostMapping
    public ResponseEntity<OneGoodThing> submitNewGoodThing(@RequestBody List<String> payload) {
        String goodThing = payload.get(0);
        String username = payload.get(1);
        return new ResponseEntity<OneGoodThing>(oneGoodThingService.submitNewGoodThing(goodThing, username), HttpStatus.CREATED);
    }
}
