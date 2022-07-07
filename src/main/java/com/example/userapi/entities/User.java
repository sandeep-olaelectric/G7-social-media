package com.example.userapi.entities;

//import org.springframework.data.annotation.Id;
import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "users")
public class User {

	@Id
	private String userId;
	
	private String email;
	private String userName;
	private String Password;
	private String Name;
	private String Gender;
	private int Age;
	private String Bio;
	private String ProfilePicLink;
	private Date DOB;//Date Of Birth
	private List<String> Followers;
	private List<String> Following;
	private List<String> RequestList;
	private List<String> PostId;
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getGender() {
		return Gender;
	}
	public void setGender(String gender) {
		Gender = gender;
	}
	public int getAge() {
		return Age;
	}
	public void setAge(int age) {
		Age = age;
	}
	public String getBio() {
		return Bio;
	}
	public void setBio(String bio) {
		Bio = bio;
	}
	public String getProfilePicLink() {
		return ProfilePicLink;
	}
	public void setProfilePicLink(String profilePicLink) {
		ProfilePicLink = profilePicLink;
	}
	public Date getDOB() {
		return DOB;
	}
	public void setDOB(Date dOB) {
		DOB = dOB;
	}
	public List<String> getFollowers() {
		return Followers;
	}
	public void setFollowers(List<String> followers) {
		Followers = followers;
	}
	public List<String> getFollowing() {
		return Following;
	}
	public void setFollowing(List<String> following) {
		Following = following;
	}
	public List<String> getRequestList() {
		return RequestList;
	}
	public void setRequestList(List<String> requestList) {
		RequestList = requestList;
	}
	public List<String> getPostId() {
		return PostId;
	}
	public void setPostId(List<String> postId) {
		PostId = postId;
	}
	@Override
	public String toString() {
		return "User [UserName=" + userName + ", email=" + email + ", Password=" + Password + ", Name=" + Name
				+ ", Gender=" + Gender + ", Age=" + Age + ", Bio=" + Bio + ", ProfilePicLink=" + ProfilePicLink
				+ ", DOB=" + DOB + ", Followers=" + Followers + ", Following=" + Following + ", RequestList="
				+ RequestList + ", PostId=" + PostId + "]";
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(String userName, String email, String password, String name, String gender, int age, String bio,
			String profilePicLink, Date dOB, List<String> followers, List<String> following, List<String> requestList,
			List<String> postId) {
		super();
		this.userName = userName;
		this.email = email;
		Password = password;
		Name = name;
		Gender = gender;
		Age = age;
		Bio = bio;
		ProfilePicLink = profilePicLink;
		DOB = dOB;
		Followers = followers;
		Following = following;
		RequestList = requestList;
		PostId = postId;
	}
	
	
}
