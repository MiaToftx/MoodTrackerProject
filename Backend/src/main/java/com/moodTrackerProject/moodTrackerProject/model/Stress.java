package com.moodTrackerProject.moodTrackerProject.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "stress")
public class Stress {
    @Id
    private ObjectId id;
    @Field
    private String stressLevel;
    @Field
    private String username;

    public Stress(String stressLevel, String username) {
        this.stressLevel = stressLevel;
        this.username = username;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getStressLevel() {
        return stressLevel;
    }

    public void setStressLevel(String stressLevel) {
        this.stressLevel = stressLevel;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
