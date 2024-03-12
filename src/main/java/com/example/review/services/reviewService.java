package com.example.review.services;

import com.example.review.entity.Review;
import com.example.review.payloads.reviewDTO;

import java.util.List;

public interface reviewService {
    reviewDTO createreview(reviewDTO reviewdto,Integer userId,Integer movieId);


}
