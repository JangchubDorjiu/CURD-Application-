package com.example.full.Stack.controller;
import com.example.full.Stack.model.User;
// Replace 'model' with the actual package
import com.example.full.Stack.exception.UserNotFoundException;
import com.example.full.Stack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    // Injecting the user repository interfaces
    @Autowired
    private UserRepository userRepository; // Correct variable name

    @PostMapping("/user")
        // Return user
    User newUser(@RequestBody User newUser) { // Correct variable name
        return userRepository.save(newUser);
    }
    // TO get user from the database
    @GetMapping("/users")
        List<User> getAllusers(){
        return userRepository.findAll();
    }
    @GetMapping("user/{id}")
    User getUserByid(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(( )-> {
                    return new UserNotFoundExpception(id);
                });
    }
    @PutMapping("/user/{id}")
        User updateUser (@RequestBody User newUser,@PathVariable Long id){
        return userRepository.findById(id)
                .map(user ->{
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(( )-> {
                    return new UserNotFoundExpception(id);
                });
    }
    @DeleteMapping("/user/{id}")
        String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundExpception(id);
        }
        userRepository.deleteById(id);
        return "user with id"+id+" has been deleted success";
    }
}
