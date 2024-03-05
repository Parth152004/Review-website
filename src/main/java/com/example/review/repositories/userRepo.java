package com.example.review.repositories;

import com.example.review.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepo extends JpaRepository<User,Integer> {

    User findByEmail(String email);
}
