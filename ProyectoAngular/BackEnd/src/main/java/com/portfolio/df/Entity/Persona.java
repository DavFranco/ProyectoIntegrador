package com.portfolio.df.Entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con la longitud")
    private String nombre;
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con la longitud")
    private String apellido;
    
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con la longitud")
    private String img;
    
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con la longitud")
    private String profesion;
    
    @NotNull
    @Size(min=1, max=2000, message="No cumple con la longitud")
    private String descripcion;
    
    //vinculaciones
    @OneToMany( fetch = FetchType.LAZY, mappedBy = "id")
    private List<Experiencia> experienciaList;
    
    @OneToMany( fetch = FetchType.LAZY, mappedBy = "id")
    private List<Educacion> educacionList;
    
    @OneToMany( fetch = FetchType.LAZY, mappedBy = "id")
    private List<Skill> skillList;
    
   
    

}
