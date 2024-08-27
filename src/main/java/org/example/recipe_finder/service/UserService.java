package org.example.recipe_finder.service;

import org.example.recipe_finder.model.User;
import org.example.recipe_finder.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public String saveUser(User user) {
        if(userRepository.existsByUsername(user.getUsername())) {
            return "Username already exists.";
        }
        if(userRepository.existsByPassword(user.getPassword())) {
            return "Password already exists.";
        }
        userRepository.save(user);
        return "User registered successfully!";
    }
}
