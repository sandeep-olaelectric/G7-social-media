package com.example.userapi.controllers;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.userapi.entities.User;
import com.example.userapi.repositories.UserRepository;

@RestController
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/sign-up")
	public String signUpUser(@RequestBody User user) {
		userRepository.save(user);
		return "sign-up successful";
	}
	
	@GetMapping("/get-users")
	public List<User> getUsers(){
		return userRepository.findAll();
	}

}
