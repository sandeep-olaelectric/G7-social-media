package com.example.userapi.repositories;



import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.userapi.entities.User;

public interface UserRepository extends MongoRepository<User, String> {
	
	@Query("{'Email':?0}")
	List<User> existsByEmail(String email);
	
	@Query("{'UserName':?0}")
	List<User> existsByUsername(String username);
	
}
