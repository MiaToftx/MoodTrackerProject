package com.moodTrackerProject.moodTrackerProject.DBAccess;

import com.moodTrackerProject.moodTrackerProject.model.Mood;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MoodService {
    private MoodRepository moodRepository;

    // Constructor injection of MoodRepository
    public MoodService(MoodRepository moodRepository) {
        this.moodRepository = moodRepository;
    }

    /**
     * Get all mood submissions associated with a user.
     *
     * @param username The username of the user.
     * @return A list of mood submissions associated with the specified username.
     */
    public Optional<List<Mood>> getAllMoodSubmitsOnUser(String username) {
        return moodRepository.findAllByUsername(username);
    }

    /**
     * Submit a new mood entry for a user.
     *
     * @param mood The mood value.
     * @param username The username of the user.
     * @return The newly submitted mood entry.
     */
    public Mood submitNewMood(String mood, String username) {
        Mood newMood = new Mood(mood, username);
        return moodRepository.insert(newMood);
    }
}



