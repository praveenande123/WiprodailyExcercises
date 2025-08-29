package com.wipro.user_service.security;


import java.util.Collections;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.wipro.user_service.entity.User;
import com.wipro.user_service.repository.UserRepository;



@Service
public class CustomUserDetailsService implements UserDetailsService{

		public final UserRepository userRepo;
		
		public CustomUserDetailsService(UserRepository userRepo)
		{
			this.userRepo= userRepo;
		}
		 @Override
		 public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		        User user = userRepo.findByUsername(username);

		        if (user == null) {
		            throw new UsernameNotFoundException("User not found: " + username);
		        }

		        return new org.springframework.security.core.userdetails.User(
		                user.getUsername(),
		                user.getPassword(),
		                Collections.emptyList() // Optional: add roles/authorities here
		        );
		    }
		

}
