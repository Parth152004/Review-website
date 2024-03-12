package com.example.review.payloads;

import com.example.review.entity.Movie;
import com.example.review.entity.User;

public class reviewDTO {
    int id;
    int rating;
    String comment;

    userDTO user;

    MovieDTO movie;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }


    public userDTO getUser() {
        return user;
    }

    public void setUser(userDTO user) {
        this.user = user;
    }

    public MovieDTO getMovie() {
        return movie;
    }

    public void setMovie(MovieDTO movie) {
        this.movie = movie;
    }
}
