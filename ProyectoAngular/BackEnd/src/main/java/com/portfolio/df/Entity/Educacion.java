package com.portfolio.df.Entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Educacion implements Serializable {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con la longitud")
    private String nombreEscuela;
    
    @NotNull
    //@Size( min = 4, max = 4, message = "No cumple con la longitud")
    private int fechaInicio;
    
    @NotNull
    //@Size( min = 4, max = 4, message = "No cumple con la longitud")
    private int fechaFin;
    
    @NotNull
    @Size( min = 1, max = 50, message = "No cumple con la longitud")
    private String carrera;
    
    @NotNull
    @Size( min = 1, max = 50, message = "No cumple con la longitud")
    private String imgEscuela;

}
