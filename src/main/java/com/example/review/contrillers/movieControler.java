package com.example.review.contrillers;


import com.example.review.entity.Movie;
import com.example.review.payloads.MovieDTO;
import com.example.review.services.movieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/")
@CrossOrigin("http://localhost:5173")
public class movieControler {

    @Autowired
    private movieService movieservice;

    @PostMapping("User/{userId}/Movie")
    public ResponseEntity<MovieDTO> createMovie(@RequestBody MovieDTO moviedto,@PathVariable Integer userId){
        MovieDTO createdMovie =  this.movieservice.createMoive(moviedto,userId);

        return new ResponseEntity<MovieDTO>(createdMovie, HttpStatus.CREATED);
    }
}
