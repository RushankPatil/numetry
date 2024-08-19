package crud.crud.controller;

import crud.crud.model.user;
import crud.crud.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")

public class userController {
    @Autowired
    userRepository repo;

    @PostMapping("/users")
    public String createNewUser(@RequestBody user u){
        if(!u.getName().matches("^[A-Za-z ]{4,}$")){
            return "name is invalid";
        }
        if(u.getEmail().length()<5 || !(u.getEmail().contains(".com"))||!(u.getEmail().contains("@"))){
            return "invalid email";
        }
        if(!u.getPhoneNumber().matches("^[789][0-9]{9}$")){
            return "invalid phone Number";
        }
        if(!u.getPassword().matches("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,20}$")){
            return "Password is too short";
        }
        repo.save(u);
        return "user added successfully";
    }


    @GetMapping("/users")
    public ResponseEntity<List<user>> getallusers(){
        List<user> ans=new ArrayList<>();
        repo.findAll().forEach(ans::add);
        return new ResponseEntity<List<user>>(ans, HttpStatus.OK);
    }


    @GetMapping("/users/{id}")
    public ResponseEntity<user> geriduserd(@PathVariable long id){
        Optional<user> e=repo.findById(id);
        if(e.isPresent()){
            return new ResponseEntity<user>(e.get(),HttpStatus.FOUND);
        }
        return new ResponseEntity<user>(HttpStatus.NOT_FOUND);
    }


    @PutMapping("/users/{id}")
    public String updateduser(@PathVariable long id,@RequestBody user u){
        Optional<user> e=repo.findById(id);
        if(e.isPresent()){
            user exist =e.get();
            exist.setName(u.getName());
            exist.setEmail(u.getEmail());
            exist.setPhoneNumber(u.getPhoneNumber());
            exist.setPassword(u.getPassword());
            repo.save(exist);
            return "updated";
        }else{
            return "id not found";
        }
    }
    @DeleteMapping("/users/{id}")
    public String deleteuserid(@PathVariable long id){
        repo.deleteById(id);
        return "user deleted";
    }
    @DeleteMapping("/users")
    public String deleteall(){
        repo.deleteAll();
        repo.resetAutoIncrement();
        return "all users deleted";

    }


}
