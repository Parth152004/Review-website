package com.example.review.repositories;

import com.example.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface reviewRepo extends JpaRepository<Review,Integer> {
    List<Review> findByMovieId(Integer movieId);
}
