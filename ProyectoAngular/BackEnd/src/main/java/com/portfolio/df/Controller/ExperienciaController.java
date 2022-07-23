package com.portfolio.df.Controller;

import com.portfolio.df.Entity.Experiencia;
import com.portfolio.df.Service.ExperienciaService;
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
@RequestMapping("/experiencia")
@CrossOrigin(origins = "http://localhost:4200")
public class ExperienciaController {
     private final ExperienciaService experienciaService;
    
    public ExperienciaController (ExperienciaService experienciaService){
        this.experienciaService = experienciaService;
    }
    @GetMapping("/traer")
    public ResponseEntity<List<Experiencia>> ObtenerExperiencia(){
        List<Experiencia> experiencias=experienciaService.getExperiencia();
        return new ResponseEntity<>(experiencias, HttpStatus.OK);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/crear")
    public ResponseEntity<Experiencia> crearExperiencia(@RequestBody Experiencia experiencia){
        Experiencia nuevaExperiencia=experienciaService.crearExperiencia(experiencia);
        return new ResponseEntity<>(nuevaExperiencia,HttpStatus.CREATED);
    }
    @PreAuthorize("hasRole('ADMIN')") 
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> borrarExperiencia(@PathVariable("id") Long id){
    experienciaService.borrarExperiencia(id);
    return new ResponseEntity<>(HttpStatus.OK);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/editar")
    public ResponseEntity<Experiencia> EditarExperiencia(@RequestBody Experiencia experiencia){
        Experiencia editarExperiencia=experienciaService.editarExperiencia(experiencia);
        return new ResponseEntity<>(editarExperiencia,HttpStatus.OK);
    }
        
}
