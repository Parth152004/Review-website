package com.example.review.services.impl;

import com.example.review.entity.Movie;
import com.example.review.entity.Review;
import com.example.review.entity.User;
import com.example.review.exception.ResourceNotFoundException;
import com.example.review.payloads.MovieDTO;
import com.example.review.payloads.reviewDTO;
import com.example.review.payloads.userDTO;
import com.example.review.repositories.movieRepo;
import com.example.review.repositories.reviewRepo;
import com.example.review.repositories.userRepo;
import com.example.review.services.reviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class reviewServiceimpl implements reviewService {

    @Autowired
    private movieRepo movierepo;

    @Autowired
    private userRepo userrepo;

    @Autowired
    private reviewRepo reviewrepo;
    @Override
    public reviewDTO createreview(reviewDTO reviewdto, Integer userId, Integer movieId) {

        User user = this.userrepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId));
        Movie movie = this.movierepo.findById(movieId).orElseThrow(() -> new ResourceNotFoundException("Movie", "Id", movieId));

        Review reviewToSave = dtoToreview(reviewdto);
        reviewToSave.setMovie(movie);
        reviewToSave.setUser(user);

        Review savedReview = this.reviewrepo.save(reviewToSave); // No need to set ID manually

        return reviewTodto(savedReview);
    }



    public Review dtoToreview(reviewDTO reviewdto){
        Review review = new Review();

        review.setComment(reviewdto.getComment());
        review.setRating(reviewdto.getRating());

        return review;
    }
    public reviewDTO reviewTodto(Review review){
        reviewDTO reviewdto = new reviewDTO();

        reviewdto.setComment(review.getComment());
        reviewdto.setMovie(movieTodto(review.getMovie()));
        reviewdto.setRating(review.getRating());
        reviewdto.setUser(userTodto(review.getUser()));

        return reviewdto;
    }

    public MovieDTO movieTodto(Movie movie){
        MovieDTO moviedto = new MovieDTO();

        moviedto.setDispcription(movie.getDiscription());
        moviedto.setName(movie.getMovieName());
        moviedto.setUser(userTodto(movie.getUser()));
        moviedto.setImage(movie.getMovieimage());
        return moviedto;
    }

    public Movie dtoTomovie(MovieDTO moviedto){
        Movie movie = new Movie();

        movie.setDiscription(moviedto.getDispcription());
        movie.setMovieName(moviedto.getName());

        return movie;
    }
    public userDTO userTodto(User user){
        userDTO userdto= new userDTO();
        userdto.setId(user.getUser_id());
        userdto.setEmail(user.getEmail());
        userdto.setName(user.getName());
        userdto.setPassword(user.getPassword());
        return userdto;
    }
}
