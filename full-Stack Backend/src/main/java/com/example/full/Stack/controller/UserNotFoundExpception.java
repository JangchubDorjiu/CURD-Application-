package com.example.full.Stack.controller;

public class UserNotFoundExpception extends RuntimeException {
    public UserNotFoundExpception(Long id) {
        super("Could not find the user with id " + id);
    }
}

