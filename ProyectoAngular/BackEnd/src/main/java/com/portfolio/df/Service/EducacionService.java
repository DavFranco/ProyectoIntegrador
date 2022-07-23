package com.portfolio.df.Service;

import com.portfolio.df.Entity.Educacion;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portfolio.df.Repository.EducacionRepository;

@Service
@Transactional
public class EducacionService {
    
    private final EducacionRepository educacionRepository;
    
    @Autowired
    public EducacionService(EducacionRepository educacionRepository){
        this.educacionRepository = educacionRepository;
    }
    
    public Educacion crearEducacion(Educacion educacion){
    return educacionRepository.save(educacion);
    }
    
    public List<Educacion> getEducacion(){
        return educacionRepository.findAll();
    }
    
    public Educacion editarEducacion(Educacion educacion){
    return educacionRepository.save(educacion);
    }

    public void borrarEducacion(Long id) {
        educacionRepository.deleteById(id);
    }

    public Educacion buscardEducacion(Long id) {
        Educacion educacion = educacionRepository.findById(id).orElse(null);
        return educacion;
             
    }
}
