package com.example.demo.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import java.util.*;

@RestController
@CrossOrigin(origins = "*")
public class DataController {

    @GetMapping("/logo")
    public Map<String, String> getLogo() {
        return Collections.singletonMap("logo", "MFEs");
    }
    @GetMapping("/generatePoints")
    public List<Point> generatePoints(@RequestParam int param) {
        List<Point> points = new ArrayList<>();
        Random random = new Random();

        // Generate 10,000 points with X, Y in the range of 1 to 30
        for (int i = 0; i < param; i++) {
            int x = i + 1;  // Random number between 1 and 30
            int y = random.nextInt(30) + 1;  // Random number between 1 and 30
            points.add(new Point(x, y));
        }

        return points;
    }
}
class Point {
    private int x;
    private int y;

    // Constructor
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    // Getters and setters
    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }
}