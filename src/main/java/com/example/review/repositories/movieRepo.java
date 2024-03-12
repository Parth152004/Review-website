package com.example.review.repositories;

import com.example.review.entity.Movie;
import com.example.review.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface movieRepo extends JpaRepository<Movie,Integer> {
    List<Movie> findByUser(User user);

}
