<template>
  <div>
    <h1>
      <span>Panel de usuario</span>
    </h1>
    <hr/>
    <div class="container">
      <div class="row">
        <div class="col text-left">
          <h2 class="text-left text-dark">Encuestas </h2>
        </div>
        <div class="col text-right">
          <button @click="btnAlta" class="btn btn-info" title="Nuevo">
            <i class="fas fa-plus fa-1x"></i>&nbsp;&nbsp;Agregar encuesta
          </button>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-12">
          <table class="table table-striped">
            <thead>
              <tr class="bg-primary text-light">
                <th>DNI</th>
                <th>Nombre</th>
                <th>Fecha de nacimiento</th>
                <th>Peso</th>
                <th>Altura</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="encuesta in encuestas" :key="encuesta._id">
                <td>{{ encuesta.dni }}</td>
                <td>{{ encuesta.nombre }}</td>
                <td>{{ encuesta.fechaNacimiento | formatDate }}</td>
                <td>{{ encuesta.peso }}</td>
                <td>{{ encuesta.altura }}</td>
                <td>
                  <div class="btn-group" role="group">
                    <button
                      class="btn btn-secondary"
                      title="Editar"
                      @click="btnEditar(encuesta._id)"
                    >
                      <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button
                      class="btn btn-danger"
                      title="Eliminar"
                      @click="btnBorrar(encuesta._id)"
                    >
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import Swal from "sweetalert2";

class Encuesta {
  constructor(dni, nombre, fechaNacimiento, peso, altura, email) {
    this.dni = dni;
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.peso = peso;
    this.altura = altura;
    this.email = email;
  }
}

export default {
  data() {
    return {
      encuesta: new Encuesta(),
      encuestas: [],
      edit: false,
      encuestaToEdit: "",
      baseUrl: "https://backendtpf.herokuapp.com", //url del backend
    };
  },
  created() {
    this.getEncuestas();
  },
  methods: {
    async sendEncuesta() {
      const headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      if (this.edit === false) {
        this.encuesta.email = this.$auth.user.email;
        await this.axios.post(
          `${this.baseUrl}/encuestas`,
          JSON.stringify(this.encuesta),
          { headers }
        );
        this.getEncuestas();
      } else {
        await this.axios.put(
          `${this.baseUrl}/encuestas/` + this.encuestaToEdit,
          JSON.stringify(this.encuesta),
          { headers }
        );
        this.getEncuestas();
        this.edit = false;
      }

      this.encuesta = new Encuesta();
    },
    async addEncuesta() {
      const headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      this.encuesta.email = this.$auth.user.email;
      await this.axios.post(
        `${this.baseUrl}/encuestas`,
        JSON.stringify(this.encuesta),
        { headers }
      );
      this.getEncuestas();
      this.encuesta = new Encuesta();
    },
    async getEncuestas() {
      const res = await this.axios.get(
        `${this.baseUrl}/encuestas/user/` + this.$auth.user.email
      );
      this.encuestas = res.data;
    },
    async deleteEncuesta(id) {
      await this.axios.delete(`${this.baseUrl}/encuestas/` + id);
      this.getEncuestas();
    },
    async editEncuesta(id) {
      const headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      await this.axios.put(
        `${this.baseUrl}/encuestas/` + id,
        JSON.stringify(this.encuesta),
        { headers }
      );
      this.getEncuestas();
    },

    //BOTONES
    btnAlta: async function () {
      const { value: formValues } = await Swal.fire({
        title: "Nueva Encuesta",
        html: '<div class="row"><label class="col-sm-3 col-form-label">DNI</label><div class="col-sm-7"><input id="dni" type="text" v-model="encuesta.dni"placeholder="Insert DNI"class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Nombre</label><div class="col-sm-7"><input id="nombre" type="text"v-model="encuesta.nombre"placeholder="Insert nombre"class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Fecha de nacimiento</label><div class="col-sm-7"><input id="fechaNacimiento"type="date"v-model="encuesta.fechaNacimiento"placeholder="Insert fecha"class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Peso</label><div class="col-sm-7"><input id="peso"type="number":step="0.1"v-model="encuesta.peso"placeholder="Insert peso"class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Altura</label><div class="col-sm-7"><input id="altura"type="number":step="0.1"v-model="encuesta.altura"placeholder="Insert altura"class="form-control"></div></div>',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        preConfirm: () => {
          return [
            this.encuesta.dni = document.getElementById("dni").value,
            this.encuesta.nombre = document.getElementById("nombre").value,
            this.encuesta.fechaNacimiento = document.getElementById("fechaNacimiento").value,
            this.encuesta.peso = document.getElementById("peso").value,
            this.encuesta.altura = document.getElementById("altura").value,
          ];
        },
      });
      if (formValues) {
        this.addEncuesta();
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
        });
        Toast.fire({
          type: "success",
          title: "¡Encuesta Agregada!",
        });
      }
    },
    btnBorrar:function(id){        
      Swal.fire({
        title: '¿Estás seguro de borrar la encuesta?',         
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor:'#d33',
        cancelButtonColor:'#3085d6',
        confirmButtonText: 'Borrar'
      }).then((result) => {
        if (result.value) {            
          this.deleteEncuesta(id);             
          Swal.fire(
            '¡Eliminada!',
            'La encuesta ha sido borrada.',
            'success'
          );
        }
      });                
    },
    btnEditar:async function(id){
      const res = await this.axios.get(`${this.baseUrl}/encuestas/` + id);
      this.encuesta = new Encuesta(
        res.data.dni,
        res.data.nombre,
        res.data.fechaNacimiento,
        res.data.peso,
        res.data.altura,
        res.data.email
      );                            
      await Swal({
      title: 'Editar Encuesta',
      html:
      '<div class="row"><label class="col-sm-3 col-form-label">DNI</label><div class="col-sm-7"><input id="dni" value="'+this.encuesta.dni+'" type="text" v-model="encuesta.dni" placeholder="Insert DNI"class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Nombre</label><div class="col-sm-7"><input id="nombre" value="'+this.encuesta.nombre+'" type="text" v-model="encuesta.nombre" placeholder="Insert nombre"class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Fecha de nacimiento</label><div class="col-sm-7"><input id="fechaNacimiento" value="'+this.encuesta.fechaNacimiento+'" type="date" v-model="encuesta.fechaNacimiento"placeholder="Insert fecha" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Peso</label><div class="col-sm-7"><input id="peso" value="'+this.encuesta.peso+'" type="number" :step="0.1" v-model="encuesta.peso" placeholder="Insert peso"class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Altura</label><div class="col-sm-7"><input id="altura" value="'+this.encuesta.altura+'" type="number" :step="0.1" v-model="encuesta.altura"placeholder="Insert altura" class="form-control"></div></div>',
      width: '2000px',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Actualizar",
      cancelButtonText: "Cancelar",                         
      }).then((result) => {
        if (result.value) {                                             
          this.encuesta.dni = document.getElementById("dni").value,
          this.encuesta.nombre = document.getElementById("nombre").value,
          this.encuesta.fechaNacimiento = document.getElementById("fechaNacimiento").value,
          this.encuesta.peso = document.getElementById("peso").value,
          this.encuesta.altura = document.getElementById("altura").value,                   

          this.editEncuesta(id);
          Swal.fire(
            '¡Actualizada!',
            'La encuesta ha sido actualizada.',
            'success'
          )                  
        }
      });
        
    },    
  },
};
</script>
