package com.virajsg.fullstackbackend.repository;

import com.virajsg.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
