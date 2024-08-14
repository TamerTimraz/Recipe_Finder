package org.example.recipe_finder.controller;

import org.example.recipe_finder.model.SavedRecipe;
import org.example.recipe_finder.service.SavedRecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/saved_recipes")
public class SavedRecipeController {

    private final SavedRecipeService savedRecipeService;

    @Autowired
    public SavedRecipeController(SavedRecipeService savedRecipeService) {
        this.savedRecipeService = savedRecipeService;
    }

    @PostMapping("/save")
    public SavedRecipe addSavedRecipe(@RequestBody SavedRecipe savedRecipe) {
        return savedRecipeService.saveRecipe(savedRecipe);
    }

    @GetMapping("/user/{user_id}")
    public List<SavedRecipe> getSavedRecipesByUserId(@PathVariable Long user_id) {
        return savedRecipeService.findRecipesByUserId(user_id);
    }
}
