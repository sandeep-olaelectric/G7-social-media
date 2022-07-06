package com.example.userapi.entities;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "posts")
public class Post {
	@Id
	private String postId;
	
	private String Caption;
	private String Image;
	private Date postDate;
	private int likeCount;
	private int commentCount;
	private String authorEmail;
	private List<String> likeList;
	//private List<String> ;
	public String getPostId() {
		return postId;
	}
	public void setPostId(String postId) {
		this.postId = postId;
	}
	public String getCaption() {
		return Caption;
	}
	public void setCaption(String caption) {
		Caption = caption;
	}
	public String getImage() {
		return Image;
	}
	public void setImage(String image) {
		Image = image;
	}
	public Date getPostDate() {
		return postDate;
	}
	public void setPostDate(Date postDate) {
		this.postDate = postDate;
	}
	public int getLikeCount() {
		return likeCount;
	}
	public void setLikeCount(int likeCount) {
		this.likeCount = likeCount;
	}
	public int getCommentCount() {
		return commentCount;
	}
	public void setCommentCount(int commentCount) {
		this.commentCount = commentCount;
	}
	public List<String> getLikeList() {
		return likeList;
	}
	public void setLikeList(List<String> likeList) {
		this.likeList = likeList;
	}
		public String getAuthorEmail() {
		return authorEmail;
	}
	public void setAuthorEmail(String authorEmail) {
		this.authorEmail = authorEmail;
	}
	public Post() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Post(String postId, String caption, String image, Date postDate, int likeCount, int commentCount,
			String authorEmail, List<String> likeList) {
		super();
		this.postId = postId;
		Caption = caption;
		Image = image;
		this.postDate = postDate;
		this.likeCount = likeCount;
		this.commentCount = commentCount;
		this.authorEmail = authorEmail;
		this.likeList = likeList;
	}
	@Override
	public String toString() {
		return "Post [postId=" + postId + ", Caption=" + Caption + ", Image=" + Image + ", postDate=" + postDate
				+ ", likeCount=" + likeCount + ", commentCount=" + commentCount + ", authorEmail=" + authorEmail
				+ ", likeList=" + likeList + "]";
	}
	
	
	

}
