<template>
  <div>
    <div class="row" style="margin-left: 100px; margin-right:100px;" >

			<div class="parrafoizq col-md-6">
				<h1 class="col-md-12"><b>¿Cómo adoptar?</b></h1>
				<p class="col-md-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro optio facere veritatis, doloremque officia ab quos vitae, et fuga magnam, minus totam animi iusto harum delectus tenetur nihil? Modi, quasi!</p>
				
				
			</div>

			<div class="parrafoder col-md-6">
			    <div class="boton col-md-6 text-center">
			    	<a href="#" @click="adoptarGeneral" class="btn btn-success" role="button"><b>¡Quiero adoptar!</b></a>
			    </div>
				
				
				

			</div>
			
				<div v-for="perro in perros" class="col-md-3 text-center">
					<div class="card col-md-12" style="width: 18rem;">
					  <img @click="adoptarEspecifico" :src=perro.url class="card-img-top" alt="...">
					  <div class="card-body">
					    <h5 class="card-title text-center"><b>{{perro.nombre}}</b></h5>
					    <p class="card-text">{{perro.descripcion}}</p>
					   
					  </div>
				   </div>
				</div>

				
				<modal v-if="abierto" name="adoptar" :clickToClose="false" height="auto" :scrollable="true">
				  	<formulario
				  	v-bind:tipo_adopcion=this.tipo_adopcion></formulario>
				  	<div class="panel-footer">
				  	<button v-on:click="cerrar" type="button" class="btn btn-default">Cerrar</button>
				  	</div>
				</modal>

		</div>
  </div>
</template>
<script>
	import axios from 'axios';
	import Formulario from './Formulario'
  	export default{
    	data(){
	      return{
	      	perros: [],
	      	abierto: false,
	      	tipo_adopcion: ''
	      }
	    },
	    created: function(){
	    	axios.get('http://localhost:3000/mascotas')
            .then(response => {
                this.perros = response.data;
                console.log(this.perros);     
            });
	    },
	    methods:{
	    	adoptarGeneral: function(){
	    		this.abierto = true;
	    		this.tipo_adopcion = 1;
	    		this.$modal.show('adoptar');
	    	},
	    	adoptarEspecifico: function(){
	    		this.abierto = true;
	    		this.tipo_adopcion = 2;
	    		this.$modal.show('adoptar');
	    	},
	    	cerrar: function(){
	    		this.abierto = false;
	    		this.$modal.hide('adoptar');
	    	}
	    },
	    components: {
			'formulario': Formulario
		}
	  }
</script>