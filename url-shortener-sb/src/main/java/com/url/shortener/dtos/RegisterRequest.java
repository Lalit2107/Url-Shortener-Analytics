package com.url.shortener.dtos;

import lombok.Data;
import lombok.Getter;

import java.util.Set;

@Data
public class RegisterRequest {
    @Getter
    private String username;
    private String email;
    private Set<String> role;
    @Getter
    private String password;

}
