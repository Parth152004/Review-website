package com.example.review.services;

import com.example.review.entity.Movie;
import com.example.review.payloads.MovieDTO;

import java.util.List;

public interface movieService {
    MovieDTO createMoive(MovieDTO moviedto,Integer userId);

    void deleteMovie(Integer Movieid);

    List<Movie> getAllMovie();

    Movie getMoviebyId(Integer Movieid);

    List<Movie> getMoviebyUser(Integer Userid);
}
