package com.portfolio.df.Controller;

import com.portfolio.df.Entity.Skill;
import com.portfolio.df.Service.SkillService;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/skill")
@CrossOrigin(origins = "http://localhost:4200")
public class SkillController {
    private final SkillService skillService;
    
    public SkillController (SkillService skillService){
        this.skillService = skillService;
    }
    @GetMapping("/traer")
    public ResponseEntity<List<Skill>> ObtenerSkill(){
        List<Skill> skills=skillService.getSkill();
        return new ResponseEntity<>(skills, HttpStatus.OK);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/crear")
    public ResponseEntity<Skill> crearSkill(@RequestBody Skill skill){
        Skill nuevaSkill=skillService.crearSkill(skill);
        return new ResponseEntity<>(nuevaSkill,HttpStatus.CREATED);
    }
    @PreAuthorize("hasRole('ADMIN')")   
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> borrarSkill(@PathVariable("id") Long id){
    skillService.borrarSkill(id);
    return new ResponseEntity<>(HttpStatus.OK);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/editar")
    public ResponseEntity<Skill> editarSkill(@RequestBody Skill skill){
        Skill editarSkill=skillService.editarSkill(skill);
        return new ResponseEntity<>(editarSkill,HttpStatus.OK);
    }
}
