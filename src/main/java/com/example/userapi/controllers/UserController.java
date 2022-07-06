package com.example.userapi.controllers;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.userapi.entities.LoginRequest;
import com.example.userapi.entities.MessageResponse;
import com.example.userapi.entities.SignupRequest;
import com.example.userapi.entities.User;
import com.example.userapi.repositories.UserRepository;


@RestController
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	
	@PostMapping("/sign-up")
	public Map<String,String> signUpUser(@RequestBody SignupRequest signupRequest) {
		
		
		HashMap<String,String> message = new HashMap<>();
		
		// validating all the inputs received in sign up request.
		if(signupRequest.getEmail()==null) {
			message.put("flag", "false");
			message.put("message","email field is empty");
			return message;
		}
		
		if(signupRequest.getName()==null) {
			message.put("flag", "false");
			message.put("message","name field is empty");
			return message;
		}
		
		if(signupRequest.getPassword()==null) {
			message.put("flag", "false");
			message.put("message","password field is empty");
			return message;
		}
		
		if(signupRequest.getUsername()==null) {
			message.put("flag", "false");
			message.put("message","username field is empty");
			return message;
		}
		
		// validating email id whether email is already in use.
		
		
		 if(userRepository.existsByEmail(signupRequest.getEmail()).size()>0) {
			 System.out.println(userRepository.existsByEmail(signupRequest.getEmail()));
			 message.put("flag", "false");
			 message.put("message", "Account already exists with that email!");
			 return message;
		 }
		// validating email id whether user name is already in use.	
		 if(userRepository.existsByUsername(signupRequest.getUsername()).size()>0) {
			 System.out.println(userRepository.existsByUsername(signupRequest.getUsername()));
			 message.put("flag", "false");
			 message.put("message", "Account already exists with that user name!");
			 return message;
		 }
		

		User user = new User();
		
		user.setName(signupRequest.getName());
		
		user.setUserName(signupRequest.getUsername());
		
		user.setEmail(signupRequest.getEmail());
		
		user.setPassword(signupRequest.getPassword());
		
		userRepository.save(user);
		message.put("flag", "true");
		message.put("message","sign-up successful" );
		return message;
	}
	
	
	
	@GetMapping("/get-users")
	public List<User> getUsers(){
		return userRepository.findAll();
	}
	
	//@GetMapping("")
	
	@PostMapping("/login")
	public Map<String,String> loginUser(@RequestBody LoginRequest loginRequest) {
		
		HashMap<String,String> message = new HashMap<>();
				
		// validating fields in login request.
		if(loginRequest.getEmail()==null) {
			message.put("flag", "false");
			message.put("message","email field is empty");
			return message;
		}
		
		if(loginRequest.getPassword()==null) {
			message.put("flag", "false");
			message.put("message","password field is empty");
			return message;
		}
		
		// validating email id whether user exists or not.
		
		List<User> emailUsers = userRepository.existsByEmail(loginRequest.getEmail());
		 if(emailUsers.size()==0) {
			 
			 message.put("flag", "false");
			 message.put("message", "Account doesn't exist with that email!");
			 return message;
		 }
		
		 //authenticating user with email & password.
		 //System.out.println(emailUsers);
		 System.out.println(loginRequest.getPassword());
		 System.out.println(emailUsers.get(0).getPassword());
		 
		 
		if(emailUsers.get(0).getPassword().equals(loginRequest.getPassword())) {
			message.put("flag", "true");
			message.put("message", "Login successful:)");
			return message;
		}
		else {
			message.put("flag", "false");
			message.put("message", "Passwords doesn't match:(");
			return message;

		}
		
		
	}

}
