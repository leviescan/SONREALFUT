import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
 

  constructor() { }

  ngOnInit(): void {
  }

  activarButton() {

    $(document).ready(function() {

      // Check for click events on the navbar burger icon
      $(".navbar-burger").click(function() {
    
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          $(".navbar-burger").toggleClass("is-active");
          $(".navbar-menu").toggleClass("is-active");
    
      });
    });

   
  }

  showAlert() {

    Swal.fire({
      title: '<strong>Quienes somos</strong>',
  text: 'Somos: una organización sin ánimo de lucro dedicada a contribuir el desarrollo social de Colombia mediante el desarrollo de programas y proyectos social económico ambiental cultural, individual y colectivo como medio para transformar la sociedad y erradicar la pobreza.',
  width: '800px',
  imageUrl: 'assets/image/ta.jpeg',
  imageWidth: 800,
  imageHeight: 200,
  imageAlt: 'Custom image',
   background: 'rgb(241, 245, 245)',
   confirmButtonColor: '#3085d6',
  confirmButtonText: 'Gracias por conocernos!' ,
  showCloseButton: true,
      
      
    })
 
  }


  showAlertVi() {

    Swal.fire({
      title: ' <strong>Visión</strong>',
  text: 'Nuestra visión es: ser una organización responsable y comprometida con la justicia social y el desarrollo humano integral. Con identidad propia y caracterizada por el empoderamiento social dinámico y participativo con capacidad de adaptación al cambio y abierta a la coordinación de esfuerzos con otras organizaciones públicas y privadas para satisfacer los derechos fundamentales del ser humano',
  width: '800px',
  imageUrl: 'assets/image/ta.jpeg',
  imageWidth: 800,
  imageHeight: 200,
  imageAlt: 'Custom image',
   background: 'rgb(241, 245, 245)',
   confirmButtonColor: '#3085d6',
  confirmButtonText: 'Gracias por conocernos!' ,
  showCloseButton: true,
      
      
    })
 
  }

  showAlertMi() {

    Swal.fire({
      title: ' <strong>Misión</strong>',
  text: 'Nuestra misión es: promover los derechos fundamentales de las sociedades con enfoque diferencial y dignidad con plena igualdad de oportunidades partiendo del desarrollo integral , las capacidades individuales y colectivas como medio para transformar la sociedad y erradicar la vulnerabilidad',
  width: '800px',
  imageUrl: 'assets/image/ta.jpeg',
  imageWidth: 800,
  imageHeight: 200,
  imageAlt: 'Custom image',
   background: 'rgb(241, 245, 245)',
   confirmButtonColor: '#3085d6',
  confirmButtonText: 'Gracias por conocernos!' ,
  showCloseButton: true,
      
      
    })
 
  }


  showAlertVa() {

    Swal.fire({
      title: ' <strong>Principios y Valores</strong>',
  text: 'La fundación sonriéndole al futuro, es una manifestación de valores y solidaridad presentes en nuestra sociedad y debemos ser coherente con ellos.                Nuestra organización es movida por los siguientes valores: verdad , justicia y equidad            respeto ala diversidad cultural responsabilidad y solidaridad honestidad por el desarrollo de las capacidades humanas transparencia de calidad innovación y creatividad en la acción social.',
  width: '800px',
  imageUrl: 'assets/image/ta.jpeg',
  imageWidth: 800,
  imageHeight: 200,
  imageAlt: 'Custom image',
   background: 'rgb(241, 245, 245)',
   confirmButtonColor: '#3085d6',
  confirmButtonText: 'Gracias por conocernos!' ,
  showCloseButton: true,
      
      
    })
 
  }


  showAlertHi() {

    Swal.fire({
      title: ' <strong>Historia</strong>',
  text: 'Esta organización nace a partir de grandes y diversas necesidades que padecen los miembros de nuestras comunidades negras, indígenas, raicéales, palenqueros y afrodescendientes del pacifico colombiano y en especial el municipio de Tumaco. Conocedores de la difícil situación social y económica que se empezó a vivir en nuestros pueblos a causa de los conflictos por presencia de grupos armados, obligados a desplazamiento forzoso dejando sus tierras y su pan coger para el sustento de sus familias llegando a la cabecera municipal. Generando índices de pobreza multidimensional, del recrudecimiento del conflicto armado en la zona, han generado un alto desplazamiento hacia la zona urbana del municipio. En este sentido, se convierte el proceso en círculo vicioso que incrementa las zonas vulnerables e informales en la ciudad, en donde se mantienen las condiciones precarias, incluyendo temas de desnutrición, hacinamiento, inseguridad, enfermedades, analfabetismo, superando la capacidad técnica, de recursos y de respuesta desde la institucionalidad. Estas condiciones de incapacidad de respuesta institucional y olvido desde el Estado en algunas zonas.',
  width: '1000px',
  imageUrl: 'assets/image/ta.jpeg',
  imageWidth: 800,
  imageHeight: 200,
  imageAlt: 'Custom image',
   background: 'rgb(241, 245, 245)',
   confirmButtonColor: '#3085d6',
  confirmButtonText: 'Gracias por conocernos!' ,
  showCloseButton: true,
      
      
    })
 
  }

}
