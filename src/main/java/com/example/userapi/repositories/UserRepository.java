package com.example.userapi.repositories;



import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.userapi.entities.User;

public interface UserRepository extends MongoRepository<User, String> {
	
	@Query("{'Email':?0}")
	List<User> existsByEmail(String email);
	
	@Query("{'UserName':?0}")
	List<User> existsByUsername(String username);
	
	@Query("updateOne({'Email':?0},{$set:{UserName:?1,Name:?2,Password:?3,Gender:?4,Bio:?5,DOB:?6}})")
	void updateUser(String email, String username, String name, String password, String gender,String bio, Date dob);
	
}
