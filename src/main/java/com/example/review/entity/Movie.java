package com.example.review.entity;

import jakarta.persistence.*;

@Entity
public class Movie {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer movieId;

    @Column(name = "MovieImage",length = 1000)
    private String movieimage;

    @Column(length = 100)
    private String movieName;

    @Column(length = 1000)
    private String Discription;

    @ManyToOne
    private User user;

    public Integer getMovieId() {
        return movieId;
    }

    public void setMovieId(Integer movieId) {
        this.movieId = movieId;
    }

    public String getMovieimage() {
        return movieimage;
    }

    public void setMovieimage(String movieimage) {
        this.movieimage = movieimage;
    }

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public String getDiscription() {
        return Discription;
    }

    public void setDiscription(String discription) {
        Discription = discription;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
