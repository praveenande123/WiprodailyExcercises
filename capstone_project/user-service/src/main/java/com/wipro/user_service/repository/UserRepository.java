package com.wipro.user_service.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.user_service.entity.User;

public interface UserRepository extends JpaRepository<User,Long> {
	User findByUsername(String username);

}
