package com.example.userapi.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.userapi.entities.EditPostRequest;
import com.example.userapi.entities.Post;
import com.example.userapi.repositories.PostRepository;
import com.example.userapi.repositories.UserRepository;

@RestController
public class PostController {
	
	@Autowired
	private PostRepository postRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	
	// create post 
	@PostMapping("/create-post")
	public Map<String,String> CreatePost(@RequestBody Post post){
		HashMap<String,String> message = new HashMap<>();
		
		if(post.getImage()==null) {
			message.put("flag", "false");
			message.put("message", "Post-Image can't be empty!");
		}
		
		
		postRepository.save(post);
		message.put("flag","true");
		message.put("message", "Posted succesfully!");
		return message;
	}
	
	@GetMapping("/all-posts")
	public List<Post> getAllPosts(){
		return postRepository.findAll();
	}
	
	// feed
	//@GetMapping("")

	// delete post
	@DeleteMapping("/delete-post/{postId}")
	public Map<String,String> DeletePost(@PathVariable String postId){
		HashMap<String,String> message = new HashMap<>();
	
		postRepository.deleteById(postId);
		message.put("flag","true");
		message.put("message", "Post deleted succesfully!");
		
		return message;
	}
	
	//edit post
	@PutMapping("/edit-post")
	public Map<String,String> EditPost(@RequestBody Post updatedPost){
		HashMap<String,String> message = new HashMap<>();
		
		//Optional<Post> oldPost = postRepository.findById(newPost.getPostId());
		
		postRepository.save(updatedPost);
		
		
		message.put("flag","true");
		message.put("message", "Post updated succesfully!");
		return message;
	}
	
}
