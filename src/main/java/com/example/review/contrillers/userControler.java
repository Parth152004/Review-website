package com.example.review.contrillers;

import com.example.review.entity.User;
import com.example.review.payloads.userDTO;
import com.example.review.repositories.userRepo;
import com.example.review.services.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("http://localhost:5173")
public class userControler {

    @Autowired
    private userService userservice;

    @Autowired
    private userRepo userrepo;

    @PostMapping("/")
    public ResponseEntity<Object> createUser(@RequestBody userDTO userdto) {
        User storedUser = userrepo.findByEmail(userdto.getEmail());

        if (storedUser != null && storedUser.getEmail().equals(userdto.getEmail())) {
            // Create a Map with the error message
            Map<String, String> errorMap = new HashMap<>();
            errorMap.put("message", "User already exists");

            // Return ResponseEntity with CONFLICT status and the error Map
            return new ResponseEntity<>(errorMap, HttpStatus.CONFLICT);
        } else {
            // Proceed with user creation
            userDTO createduser = this.userservice.CreateUser(userdto);
            // Return ResponseEntity with CREATED status and the created userDTO
            return new ResponseEntity<>(createduser, HttpStatus.CREATED);
        }
    }


    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody User user) {
        // Retrieve user from the database based on the provided email
        User storedUser = userrepo.findByEmail(user.getEmail());

        if (storedUser != null && storedUser.getPassword().equals(user.getPassword())) {
            userDTO getuser = userTodto(storedUser);
            // Login successful
            return new ResponseEntity<>(getuser, HttpStatus.ACCEPTED);
        } else if (storedUser == null) {
            // Email not found
            Map<String, String> errorMap = new HashMap<>();
            errorMap.put("message", "User not found with this email");
            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        } else {
            // Email found, but password mismatch
            Map<String, String> errorMap = new HashMap<>();
            errorMap.put("message", "Incorrect password");
            return new ResponseEntity<>(errorMap, HttpStatus.CONFLICT);
        }
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