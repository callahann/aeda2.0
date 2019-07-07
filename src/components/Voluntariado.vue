<template>
  <div>
   <div class="row" style="margin-left: 100px; margin-right:100px;" >
			<div class="col-md-12 text-center">
			<img src="../assets/images/voluntarios.jpg" alt="Campaña llegó el frío" style="width:100%; margin-top: 20px; margin-bottom: 50px;">
		
			
			</div>

			<div class="parrafoizq col-md-6">
				<h1 class="col-md-12"><b>¿Cómo ser voluntario?</b></h1>
				<p class="col-md-12 text-justify">Para ser voluntario de nuestra agrupación, solo debes enviarnos tus datos, luego, se te realizrá una inducción que consta de dos jornadas de trabajo en terreno, ya sea: labores de canil, aseo, alimentación, entre otras, donde puedes pasar a ser inmediatamente parte de la agrupación. <br>Si te interesa postular, debes demostrar poseer las cualidades necesarias para vivenciar hechos de toda índole con los perros, como lo son las peleas y tratamientos médicos delicados.</p>
				<img class="col-md-12" src="../assets/images/720x600.png" alt="Campaña llegó el frío" style="width:100%; margin-top: 20px; margin-bottom: 50px;">
				
			</div>
			<div class="parrafoder col-md-6">
			    <div class="boton col-md-6 text-center">
			    	<a href="#" class="btn btn-success" role="button"><b>¡Quiero inscribirme!</b></a>
			    </div>
				<h1 class="col-md-12 text-right" style="margin-top: 150px;"><b>¿Qué hace un voluntario?</b></h1>
				<p class="col-md-12 text-justify">
					Las labores de un voluntario son variadas, por la parte de los animales, se realizan tareas de canil, aseo, alimentación, paseos, baños, adopciones, colectas, rifas y reuniones de la agrupación<br>
					Nuestros colaboradores deben ser personas realmente comprometidas ya que, el voluntariado posee jornadas de trabajo exigentes.
				</p>
				
				

			</div>
			<div class="parrafoder col-md-12">
			<h1 class="col-md-6 text-left"><b>Testimonios</b></h1>

			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<!-- Carousel indicators -->
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>   
				<!-- Wrapper for carousel items -->
				<div class="carousel-inner">
					<div class="item carousel-item active">
						<div><i class="fas fa-quote-left" style="font-size: 40px;"></i></div>
						<p class="testimonial text-center">{{testimonios[0].texto}}</p>
						<p class="overview"><b>{{testimonios[0].nombre}}</b></p>
					</div>
					<div v-for="testimonio in testimonios.slice(1, 4)" class="item carousel-item ">
						<div><i class="fas fa-quote-left" style="font-size: 40px;"></i></div>
						<p class="testimonial text-center">{{testimonio.texto}}</p>
						<p class="overview"><b>{{testimonio.nombre}}</b></p>
					</div>
					
					
				</div>
				<!-- Carousel controls -->
				<a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
					<i class="fa fa-angle-left"></i>
				</a>
				<a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
					<i class="fa fa-angle-right"></i>
				</a>
			</div>
		


			</div> 


		</div>
  </div>
</template>
<style type="text/css">
h2 {
	color: #333;
	text-align: center;
	text-transform: uppercase;
	font-family: "Roboto", sans-serif;
	font-weight: bold;
	position: relative;
	margin: 30px 0 60px;
}
h2::after {
	content: "";
	width: 100px;
	position: absolute;
	margin: 0 auto;
	height: 3px;
	background: #8fbc54;
	left: 0;
	right: 0;
	bottom: -10px;
}

</style>
<script>
  import axios from 'axios';
  export default{
    data(){
      return{
      	testimonios:[]
      }
    },
     created: function(){
            axios.get('http://localhost:3000/testimoniosvoluntariado')
            .then(response => {
                this.testimonios = response.data;     
            });
	    },
  }
</script>