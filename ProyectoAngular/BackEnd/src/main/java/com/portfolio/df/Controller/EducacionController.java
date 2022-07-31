package com.portfolio.df.Controller;

import com.portfolio.df.Entity.Educacion;
import com.portfolio.df.Service.EducacionService;
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
@CrossOrigin(origins = "https://frontdmf.web.app")
@RequestMapping("/educacion")
public class EducacionController {
    private final EducacionService educacionService;
    
    public EducacionController (EducacionService educacionService){
        this.educacionService = educacionService;
    }
    
    @GetMapping("/traer")
    public ResponseEntity<List<Educacion>> obtenerEducacion(){
        List<Educacion> educaciones=educacionService.getEducacion();
        return new ResponseEntity<>(educaciones, HttpStatus.OK);
    }
    
    @PostMapping("/crear")
    public ResponseEntity<Educacion> crearEducacion(@RequestBody Educacion educacion){
        Educacion nuevaEducacion=educacionService.crearEducacion(educacion);
        return new ResponseEntity<>(nuevaEducacion,HttpStatus.CREATED);
    }
     
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> borrarEducacion(@PathVariable("id") Long id){
    educacionService.borrarEducacion(id);
    return new ResponseEntity<>(HttpStatus.OK);
    }
    
    @PutMapping("/editar")
    public ResponseEntity<Educacion> editarEducacion(@RequestBody Educacion educacion){
        Educacion editarEducacion=educacionService.editarEducacion(educacion);
        return new ResponseEntity<>(editarEducacion,HttpStatus.OK);
    }
        
}
