package com.example.review.contrillers;


import com.example.review.entity.Movie;
import com.example.review.entity.User;
import com.example.review.payloads.MovieDTO;
import com.example.review.payloads.userDTO;
import com.example.review.repositories.movieRepo;
import com.example.review.services.movieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin("http://localhost:5173")
public class movieControler {

    @Autowired
    private movieService movieservice;

    @Autowired
    private movieRepo movierepo;

    @PostMapping("User/{userId}/Movie")
    public ResponseEntity<MovieDTO> createMovie(@RequestBody MovieDTO moviedto,@PathVariable Integer userId){
        MovieDTO createdMovie =  this.movieservice.createMoive(moviedto,userId);

        return new ResponseEntity<MovieDTO>(createdMovie, HttpStatus.CREATED);
    }
    @GetMapping("/User/Movies")
    public ResponseEntity<List<MovieDTO>> getMovies() {
        List<Movie> movies = movierepo.findAll(); // Assuming movieRepository is your JPA repository
        List<MovieDTO> movieDTOs = new ArrayList<>();
        for (Movie movie : movies) {
            movieDTOs.add(movieTodto(movie)); // Convert Movie objects to MovieDTO objects
        }
        return new ResponseEntity<>(movieDTOs, HttpStatus.ACCEPTED); // Return list of MovieDTOs
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
