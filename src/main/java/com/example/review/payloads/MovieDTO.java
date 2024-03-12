package com.example.review.payloads;

import com.example.review.entity.User;

public class MovieDTO {
    private Long id;
    private String Name;
    private String Dispcription;

    private String Image;
    private userDTO user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public userDTO getUser() {
        return user;
    }

    public void setUser(userDTO user) {
        this.user = user;
    }

    public String getImage() {
        return Image;
    }

    public void setImage(String image) {
        Image = image;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getDispcription() {
        return Dispcription;
    }

    public void setDispcription(String dispcription) {
        Dispcription = dispcription;
    }
}
