package com.example.userapi.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.userapi.entities.User;

public interface UserRepository extends MongoRepository<User, Integer> {

}
