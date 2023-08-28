package com.moodTrackerProject.moodTrackerProject.DBAccess;

import com.moodTrackerProject.moodTrackerProject.model.Stress;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StressService {
    private StressRepository stressRepository;

    // Constructor injection of StressRepository
    public StressService(StressRepository stressRepository) {
        this.stressRepository = stressRepository;
    }

    /**
     * Get all stress submissions associated with a user.
     *
     * @param username The username of the user.
     * @return A list of stress submissions associated with the specified username.
     */
    public Optional<List<Stress>> getAllStressSubmitsOnUser(String username) {
        return stressRepository.findAllByUsername(username);
    }

    /**
     * Submit a new stress level entry for a user.
     *
     * @param stressLevel The stress level value.
     * @param username The username of the user.
     * @return The newly submitted stress level entry.
     */
    public Stress submitNewStressLevel(String stressLevel, String username) {
        Stress newStress = new Stress(stressLevel, username);
        return stressRepository.insert(newStress);
    }
}
