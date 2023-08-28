package com.moodTrackerProject.moodTrackerProject.controller;

import com.moodTrackerProject.moodTrackerProject.DBAccess.StressService;
import com.moodTrackerProject.moodTrackerProject.model.Stress;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/stress")
public class StressController {
    private StressService stressService;

    // Constructor injection of StressService
    public StressController(StressService stressService) {
        this.stressService = stressService;
    }

    /**
     * Get all stress submissions associated with a user.
     *
     * @param username The username of the user.
     * @return ResponseEntity containing a list of stress submissions.
     */
    @GetMapping
    public ResponseEntity<Optional<List<Stress>>> getAllMoodSubmits(@RequestParam String username) {
        Optional<List<Stress>> userStress = stressService.getAllStressSubmitsOnUser(username);
        return new ResponseEntity<Optional<List<Stress>>>(userStress, HttpStatus.OK);
    }

    /**
     * Submit a new stress level entry for a user.
     *
     * @param payload A list containing the stress level and username.
     * @return ResponseEntity containing the submitted stress level entry.
     */
    @PostMapping
    public ResponseEntity<Stress> submitNewStress(@RequestBody List<String> payload) {
        String stressLevel = payload.get(0);
        String username = payload.get(1);
        return new ResponseEntity<Stress>(stressService.submitNewStressLevel(stressLevel, username), HttpStatus.CREATED);
    }
}
