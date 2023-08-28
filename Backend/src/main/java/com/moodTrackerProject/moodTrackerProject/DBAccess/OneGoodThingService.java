package com.moodTrackerProject.moodTrackerProject.DBAccess;

import com.moodTrackerProject.moodTrackerProject.model.OneGoodThing;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OneGoodThingService {
    private OneGoodThingRepository oneGoodThingRepository;

    // Constructor injection of OneGoodThingRepository
    public OneGoodThingService(OneGoodThingRepository oneGoodThingRepository) {
        this.oneGoodThingRepository = oneGoodThingRepository;
    }

    /**
     * Get all positive experience submissions associated with a user.
     *
     * @param username The username of the user.
     * @return A list of positive experience submissions associated with the specified username.
     */
    public Optional<List<OneGoodThing>> getAllGoodThingSubmitsOnUser(String username) {
        return oneGoodThingRepository.findAllByUsername(username);
    }

    /**
     * Submit a new positive experience entry for a user.
     *
     * @param goodThing The positive experience description.
     * @param username The username of the user.
     * @return The newly submitted positive experience entry.
     */
    public OneGoodThing submitNewGoodThing(String goodThing, String username) {
        OneGoodThing newGoodThing = new OneGoodThing(goodThing, username);
        return oneGoodThingRepository.insert(newGoodThing);
    }
}

