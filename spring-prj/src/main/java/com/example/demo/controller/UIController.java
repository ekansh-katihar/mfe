package com.example.demo.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RestController
public class UIController {
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/logo")
    public Map<String, String> getLogo() {
        return Collections.singletonMap("logo", "MFEs");
    }
}