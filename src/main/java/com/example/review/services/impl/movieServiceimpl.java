package com.example.review.services.impl;

import com.example.review.entity.Movie;
import com.example.review.entity.User;
import com.example.review.exception.ResourceNotFoundException;
import com.example.review.payloads.MovieDTO;
import com.example.review.payloads.userDTO;
import com.example.review.repositories.movieRepo;
import com.example.review.repositories.userRepo;
import com.example.review.services.movieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.review.services.impl.userServiceimpl;

import java.util.List;

@Service
public class movieServiceimpl implements movieService{

    @Autowired
    private movieRepo movierepo;

    @Autowired
    private userRepo userrepo;


    @Override
    public MovieDTO createMoive(MovieDTO moviedto,Integer userId) {
        User user = this.userrepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","Id",userId));

        Movie movie = this.dtoTomovie(moviedto);

        movie.setMovieimage(moviedto.getImage());
        movie.setUser(user);

        Movie moive = this.movierepo.save(movie);
        return this.movieTodto(movie);
    }

    @Override
    public void deleteMovie(Integer Movieid) {

    }

    @Override
    public List<Movie> getAllMovie() {
        List<Movie> movies =  this.movierepo.findAll();
        return movies;
    }

    @Override
    public Movie getMoviebyId(Integer Movieid) {
        return null;
    }

    @Override
    public List<Movie> getMoviebyUser(Integer Userid) {
        return null;
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
