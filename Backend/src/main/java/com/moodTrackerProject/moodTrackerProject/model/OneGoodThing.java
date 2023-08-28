package com.moodTrackerProject.moodTrackerProject.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "goodThings")
public class OneGoodThing {
    @Id
    private ObjectId id;
    @Field
    private String goodThing;
    @Field
    private String username;

    public OneGoodThing(String goodThing, String username) {
        this.goodThing = goodThing;
        this.username = username;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getGoodThing() {
        return goodThing;
    }

    public void setGoodThing(String goodThing) {
        this.goodThing = goodThing;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
