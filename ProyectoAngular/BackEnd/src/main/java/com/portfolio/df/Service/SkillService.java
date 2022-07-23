package com.portfolio.df.Service;

import com.portfolio.df.Entity.Skill;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portfolio.df.Repository.SkillRepository;

@Service
public class SkillService {
     private final SkillRepository skillRepository;
    
    @Autowired
    public SkillService(SkillRepository skillRepository){
        this.skillRepository = skillRepository;
    }
    
    public Skill crearSkill(Skill skill){
    return skillRepository.save(skill);
    }
    
    public List<Skill> getSkill(){
        return skillRepository.findAll();
    }
    
    public Skill editarSkill(Skill skill){
    return skillRepository.save(skill);
    }

    public void borrarSkill(Long id) {
        skillRepository.deleteById(id);
    }

    public Skill buscarSkill(Long id) {
        Skill skill = skillRepository.findById(id).orElse(null);
        return skill;
             
    }
    
}