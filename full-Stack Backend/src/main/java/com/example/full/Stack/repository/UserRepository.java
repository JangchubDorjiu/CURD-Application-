package com.example.full.Stack.repository;

import com.example.full.Stack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
