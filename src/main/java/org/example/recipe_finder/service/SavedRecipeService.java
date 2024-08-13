package org.example.recipe_finder.service;

import org.example.recipe_finder.model.SavedRecipe;
import org.example.recipe_finder.repository.SavedRecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SavedRecipeService {

    private final SavedRecipeRepository savedRecipeRepository;

    @Autowired
    public SavedRecipeService(SavedRecipeRepository savedRecipeRepository) {
        this.savedRecipeRepository = savedRecipeRepository;
    }

    public List<SavedRecipe> findRecipesByUserId(Long userId){
        return savedRecipeRepository.findByUserId(userId);
    }

    public SavedRecipe saveRecipe(SavedRecipe savedRecipe){
        return savedRecipeRepository.save(savedRecipe);
    }
}
