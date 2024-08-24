package org.example.recipe_finder.controller;

import org.example.recipe_finder.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/recipes")
@CrossOrigin(origins = "http://localhost:3000")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @GetMapping("/search")
    public String searchRecipes(@RequestParam String query) {
        return recipeService.searchRecipes(query);
    }

}
