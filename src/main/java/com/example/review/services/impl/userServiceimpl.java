package com.example.review.services.impl;

import com.example.review.entity.User;
import com.example.review.payloads.userDTO;
import com.example.review.repositories.userRepo;
import com.example.review.services.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class userServiceimpl implements userService {

    @Autowired
    private userRepo UserRepo;

    @Override
    public userDTO CreateUser(userDTO userdto) {
        User user = this.dtoToUser(userdto);
        User savedUser = this.UserRepo.save(user);
        return this.userTodto(savedUser);
    }
    public List<userDTO> getAllUser() {
        List<User> users = this.UserRepo.findAll(); // Use 'users' for clarity

        // Create an empty list to store the converted userDTOs
        List<userDTO> userDTOs = new ArrayList<>();

        // Iterate through the users list and convert each user to userDTO
        for (User user : users) {
            userDTO userDTO = userTodto(user); // Call userTodto to convert
            userDTOs.add(userDTO); // Add the converted userDTO to the list
        }

        return userDTOs;
    }
    public User dtoToUser(userDTO userdto){
        User user = new User();
        user.setUser_id(userdto.getId());
        user.setName(userdto.getName());
        user.setEmail(userdto.getEmail());
        user.setPassword(userdto.getPassword());

        return user;
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
