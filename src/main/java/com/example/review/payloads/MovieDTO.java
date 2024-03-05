package com.example.review.payloads;

import com.example.review.entity.User;

public class MovieDTO {
    private String Name;
    private String Dispcription;

    private String Image;
    private userDTO user;

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
