package com.portfolio.df.Controller;

import com.portfolio.df.Entity.Persona;
import com.portfolio.df.Service.PersonaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/persona")
@CrossOrigin
public class PersonaController {
    private final PersonaService personaService;
    
    public PersonaController(PersonaService personaService){
        this.personaService =personaService;
    }
    
    @GetMapping("/id/{id}")
    public ResponseEntity<Persona> ObtenerPersona(@PathVariable("id") Long id){
        Persona persona=personaService.buscarPersona(id);
        return new ResponseEntity<>(persona, HttpStatus.OK);
    }
    
    
    @PutMapping("/editar")
    public ResponseEntity<Persona> EditarPersona(@RequestBody Persona persona){
        Persona editarPersona=personaService.editarPersona(persona);
        return new ResponseEntity<>(editarPersona,HttpStatus.OK);
    }
    
    @GetMapping("/persona/traer/perfil")
    public Persona findPersona(){
        return personaService.buscarPersona((long)1);
    }
    }
