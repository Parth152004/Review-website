package com.example.review.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class userDTO {

    private int id;
    private String name;
    private String email;
    private String password;

}
