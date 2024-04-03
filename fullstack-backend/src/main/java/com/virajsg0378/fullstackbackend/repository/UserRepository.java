package com.virajsg0378.fullstackbackend.repository;

import com.virajsg0378.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
