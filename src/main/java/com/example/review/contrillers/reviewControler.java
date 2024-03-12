package com.example.review.contrillers;

import com.example.review.entity.Movie;
import com.example.review.entity.Review;
import com.example.review.entity.User;
import com.example.review.payloads.MovieDTO;
import com.example.review.payloads.reviewDTO;
import com.example.review.payloads.userDTO;
import com.example.review.repositories.reviewRepo;
import com.example.review.services.reviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin("http://localhost:5173")
public class reviewControler {

    @Autowired
    private reviewRepo reviewrepo;

    @Autowired
    private reviewService reviewservice;

    @PostMapping("User/{userId}/Movie/{movieId}")
    public ResponseEntity<reviewDTO> createReview(@RequestBody reviewDTO reviewdto, @PathVariable Integer userId,@PathVariable Integer movieId){
        reviewDTO createdreview = this.reviewservice.createreview(reviewdto,userId,movieId);

        return new ResponseEntity<reviewDTO>(createdreview, HttpStatus.CREATED);
    }

    @GetMapping("/movies/{movieId}/reviews")
    public ResponseEntity<List<reviewDTO>> getReviewsByMovieId(@PathVariable Integer movieId) {
        List<Review> reviews = this.reviewrepo.findByMovieId(movieId);

        List<reviewDTO> reviewDTOS = new ArrayList<>();
        for (Review review : reviews) {
            reviewDTOS.add(reviewTodto(review)); // Convert Movie objects to MovieDTO objects
        }
        return ResponseEntity.ok(reviewDTOS); // Return reviews or an appropriate HTTP status code
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
    public userDTO userTodto(User user){
        userDTO userdto= new userDTO();
        userdto.setId(user.getUser_id());
        userdto.setEmail(user.getEmail());
        userdto.setName(user.getName());
        userdto.setPassword(user.getPassword());
        return userdto;
    }
}
