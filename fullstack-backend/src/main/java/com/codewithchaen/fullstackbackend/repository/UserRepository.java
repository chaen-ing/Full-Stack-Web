package com.codewithchaen.fullstackbackend.repository;

import com.codewithchaen.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
