package com.example.userapi.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.userapi.entities.Post;

public interface PostRepository extends MongoRepository<Post,String>{
	

}
