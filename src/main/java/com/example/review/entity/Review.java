package com.example.review.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
@Entity
public class Review {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private int Review_id;

    private int rating;

    private String comment;

    @ManyToOne
    private User user;  // Changed from List<User>

    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movie;

    public int getReview_id() {
        return Review_id;
    }

    public void setReview_id(int review_id) {
        Review_id = review_id;
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


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }
}
