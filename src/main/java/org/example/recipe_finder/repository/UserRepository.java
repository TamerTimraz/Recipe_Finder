package org.example.recipe_finder.repository;

import org.example.recipe_finder.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    boolean existsByUsername(String username);
    boolean existsByPassword(String password);
}
