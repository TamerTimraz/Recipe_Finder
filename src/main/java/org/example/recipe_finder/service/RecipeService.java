package org.example.recipe_finder.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class RecipeService {

    @Value("${spoonacular.api.key}")
    private String apiKey;

    private final String SPOONACULAR_BASE_URL = "https://api.spoonacular.com/recipes";

    public String searchRecipes(String query) {
        RestTemplate restTemplate = new RestTemplate();

        String url = UriComponentsBuilder.fromHttpUrl(SPOONACULAR_BASE_URL + "/complexSearch")
                .queryParam("query", query)
                .queryParam("number", 10)
                .queryParam("apiKey", apiKey)
                .toUriString();

        return restTemplate.getForObject(url, String.class);
    }
}
