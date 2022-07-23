package com.portfolio.df.Service;

import com.portfolio.df.Entity.Experiencia;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portfolio.df.Repository.ExperienciaRepository;
import javax.transaction.Transactional;

@Service
@Transactional
public class ExperienciaService {
    private final ExperienciaRepository experienciaRepository;
    
    @Autowired
    public ExperienciaService(ExperienciaRepository experienciaRepository){
        this.experienciaRepository = experienciaRepository;
    }
    
    public Experiencia crearExperiencia(Experiencia experiencia){
    return experienciaRepository.save(experiencia);
    }
    
    public List<Experiencia> getExperiencia(){
        return experienciaRepository.findAll();
    }
    
    public Experiencia editarExperiencia(Experiencia experiencia){
    return experienciaRepository.save(experiencia);
    }

    public void borrarExperiencia(Long id) {
        experienciaRepository.deleteById(id);
    }

    public Experiencia buscarExperiencia(Long id) {
        Experiencia experiencia = experienciaRepository.findById(id).orElse(null);
        return experiencia;
             
    }
    
}
