package com.portfolio.df.Service;

import com.portfolio.df.Entity.Persona;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portfolio.df.Repository.PersonaRepository;

@Service
@Transactional
public class PersonaService {
    
    private final PersonaRepository personaRepository;
    
    @Autowired
    public PersonaService(PersonaRepository personaRepository){
        this.personaRepository = personaRepository;
    }
    
    public Persona crearPersona(Persona persona){
    return personaRepository.save(persona);
    }
    
    public List<Persona> getPersona(){
        return personaRepository.findAll();
    }
    
    public Persona editarPersona(Persona persona){
    return personaRepository.save(persona);
    }


    public Persona buscarPersona(Long id) {
        return personaRepository.findById(id).orElse(null);
        
             
    }
}

