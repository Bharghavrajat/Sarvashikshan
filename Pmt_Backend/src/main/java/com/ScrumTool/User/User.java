package com.ScrumTool.User;

import java.util.ArrayList;
import java.util.List;

import com.ScrumTool.Invitation.Invitation;
import com.ScrumTool.Project.Project;
import com.ScrumTool.ProjectUserRole.ProjectUserRole;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Users_Table")

public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "User_Id")
	private long userId;
	
	@Column(name = "User_First_Name")
	private String userFirstName;

	@Column(name = " User_Last_Name")
	private String userlastName;

	@Column(name = "EmailId")
	private String emailId;

	@Column(name = "Password")
	private String password;

	@Column(name = "Contact_Number")
	private String contactNumber;

	@Column(name = "Company_Name")
	private String companyName;

	@Column(name = "Country_Code")
	private String countrycode;

	@JsonIgnore
	@OneToMany(mappedBy = "createdBy", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Project> projects = new ArrayList<>();
	
	@JsonIgnore
	@OneToMany(mappedBy = "invitedBy", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Invitation> invitation = new ArrayList<>();

	@JsonIgnore
	@OneToMany(mappedBy = "userId", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ProjectUserRole> projectUserRole = new ArrayList<>();

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getUserFirstName() {
		return userFirstName;
	}

	public void setUserFirstName(String userFirstName) {
		this.userFirstName = userFirstName;
	}

	public String getUserlastName() {
		return userlastName;
	}

	public void setUserlastName(String userlastName) {
		this.userlastName = userlastName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getCountrycode() {
		return countrycode;
	}

	public void setCountrycode(String countrycode) {
		this.countrycode = countrycode;
	}

	public List<Project> getProjects() {
		return projects;
	}

	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}

	public List<Invitation> getInvitation() {
		return invitation;
	}

	public void setInvitation(List<Invitation> invitation) {
		this.invitation = invitation;
	}

	public List<ProjectUserRole> getProjectUserRole() {
		return projectUserRole;
	}

	public void setProjectUserRole(List<ProjectUserRole> projectUserRole) {
		this.projectUserRole = projectUserRole;
	}

	public User(long userId, String userFirstName, String userlastName, String emailId, String password,
			String contactNumber, String companyName, String countrycode, List<Project> projects,
			List<Invitation> invitation, List<ProjectUserRole> projectUserRole) {
		super();
		this.userId = userId;
		this.userFirstName = userFirstName;
		this.userlastName = userlastName;
		this.emailId = emailId;
		this.password = password;
		this.contactNumber = contactNumber;
		this.companyName = companyName;
		this.countrycode = countrycode;
		this.projects = projects;
		this.invitation = invitation;
		this.projectUserRole = projectUserRole;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
