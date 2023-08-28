package com.moodTrackerProject.moodTrackerProject.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "moods")
public class Mood {
    @Id
    private ObjectId id; //Is automatically created in DB
    @Field
    private String mood;
    @Field
    private String username;

    public Mood(String mood, String username) {
        this.mood = mood;
        this.username = username;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getMood() {
        return mood;
    }

    public void setMood(String mood) {
        this.mood = mood;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
