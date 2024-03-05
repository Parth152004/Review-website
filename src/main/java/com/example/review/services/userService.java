package com.example.review.services;

import com.example.review.payloads.userDTO;

import java.util.List;


public interface userService {

    userDTO CreateUser(userDTO user);
    public List<userDTO> getAllUser();
}
