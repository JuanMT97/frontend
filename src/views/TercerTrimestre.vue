<template>
  <div>
    <h2>
      <span>Tercer Trimestre</span>
    </h2>
    <hr/>
    <div class="container">
        <div class="row mt-4">
        <div class="col text-left">
        <form>
          <div class="card">
            <h4 class="card-header text-center">Bloque 0. Datos de los encuestadores y las embarazadas</h4>
            <div class="card-body">
              <h5 class="card-title">Datos Encuestadores</h5>
              <hr/>
              <div class="form-row">                             
                <div class="form-group col-md-4">
                  <label for="inputNyAEncuestador1">Nombre y apellido Encuestador 1</label>
                  <input type="text" v-model="encuesta.nombreApellidoEncuestador1" class="form-control">
                </div>
                <div class="form-group col-md-4">
                  <label for="telefonoEncuestador1">Teléfono</label>
                  <input type="number" v-model="encuesta.telefonoEncuestador1" class="form-control">
                </div> 
                <div class="form-group col-md-4">
                  <label for="emailEncuestador1">Email</label>
                  <input type="text" v-model="encuesta.emailEncuestador1" class="form-control" placeholder="email@example.com">
                </div>
              </div>
              <div class="form-row">                             
                <div class="form-group col-md-4">
                <label for="inputNyAEncuestador2">Nombre y apellido Encuestador 2</label>
                <input type="text" v-model="encuesta.nombreApellidoEncuestador2" class="form-control">
                </div>
                <div class="form-group col-md-4">
                <label for="telefonoEncuestador2">Teléfono</label>
                <input type="number" v-model="encuesta.telefonoEncuestador2" class="form-control">
                </div>
                <div class="form-group col-md-4">
                <label for="emailEncuestador2">Email</label>
                <input type="text" v-model="encuesta.emailEncuestador2" class="form-control" placeholder="email@example.com">
                </div>
              </div> 
              <div class="form-row">                             
                <div class="form-group col-md-6">
                <label for="fechaRelevamiento">Fecha del relevamiento</label>
                <input type="date" v-model="encuesta.fechaRelevamiento" class="form-control">
                </div>
                <div class="form-group col-md-6">
                <label for="lugarRelevamiento">Lugar del relevamiento</label>
                <input type="text" v-model="encuesta.lugarRelevamiento" class="form-control">
                </div>
              </div>
              <h5 class="card-title">Embarazadas 3er trimestre</h5>
              <hr/>
              <div class="form-row">                             
                <div class="form-group col-md-4">
                <label for="inputNyAEmbarazada">Nombre y apellido</label>
                <input type="text" v-model="encuesta.nombreApellido" class="form-control" >
                </div>
                <div class="form-group col-md-4">
                <label for="DNIEmbarazada">DNI</label>
                <input type="number" v-model="encuesta.dni" class="form-control">
                </div>
                <div class="form-group col-md-4">
                <label for="FechaNacimiento">Fecha de nacimiento</label>
                <input type="date" v-model="encuesta.fechaNacimiento" class="form-control" >
                </div>
              </div>
              <div class="form-group">
                <label for="domicilio">Domicilio/barrio</label>
                <input type="text" v-model="encuesta.domicilioBarrio" class="form-control" >
              </div>
              <div class="form-row">                             
                <div class="form-group col-md-4">
                <label for="telefonoEmbarazada">Teléfono</label>
                <input type="number" v-model="encuesta.telefono" class="form-control" >
                </div>
                <div class="form-group col-md-4">
                <label for="ultimaMenstruacion">Fecha de última menstruación</label>
                <input type="date" v-model="encuesta.fechaUltimaMenstruacion" class="form-control" >
                </div>
                <div class="form-group col-md-4">
                <label for="SemanasGestación">Semanas de gestación</label>
                <input type="number" v-model="encuesta.semanasGestacion" class="form-control" >
                </div>
              </div>
              <div class="form-group">
                <label for="observacionesBloque0">Observaciones</label>
                <input type="text" v-model="encuesta.observacionesBloque0" class="form-control" >
              </div>
            </div>
          </div>
          <div class="card">
            <h4 class="card-header text-center">Bloque 3. Antropometría embarazada</h4>
            <div class="card-body">
              <h6 class="card-title">Ahora vamos a hacer algunas mediciones para conocer su peso, su altura y otros datos de su composición corporal.</h6>
              <hr/>
              <div class="form-row">                             
                <div class="form-group col-md-4">
                <label for="peso">3.1 Peso (kg)</label>
                <input type="number" :step="0.1" v-model="encuesta.pesoKG" class="form-control" >
                </div>
                <div class="form-group col-md-4">
                <label for="ropa">Ropa</label>
                <input type="text" v-model="encuesta.ropaAlPesar" class="form-control" >
                <small>Especificar la ropa que tiene puesta al momento de tomar el peso.</small>
                </div>
                <div class="form-group col-md-4">
                <label for="talla">3.2 Talla (cm)</label>
                <input type="number" v-model="encuesta.talla" class="form-control">
                </div>
              </div>
              <div class="form-row">                             
                <div class="form-group col-md-6">
                <label for="tallaSentada">3.3 Talla sentada (cm)</label>
                <input type="number" v-model="encuesta.tallaSentada" class="form-control" >
                </div>
                <div class="form-group col-md-6">
                <label for="perimetroBraquial">3.4 Perímetro braquial (cm)</label>
                <input type="number" v-model="encuesta.perimetroBraquial" class="form-control" >
                <small> Las mediciones entre 3.4 y 3.8 tomarlas del lado derecho del cuerpo. </small>
                </div>
              </div>
              <div class="form-row">                             
                <div class="form-group col-md-6">
                <label for="pliegueTricipital">3.5 Pliegue tricipital (cm)</label>
                <input type="number" v-model="encuesta.pliegueTricipital" class="form-control" >
                </div>
                <div class="form-group col-md-6">
                <label for="pliegueBicipital">3.6 Pliegue bicipital (cm)</label>
                <input type="number" v-model="encuesta.pliegueBicipital" class="form-control">
                </div>
              </div>
              <div class="form-row">                             
                <div class="form-group col-md-6">
                <label for="pliegueSubescapular">3.7 Pliegue subescapular (cm)</label>
                <input type="number" v-model="encuesta.pliegueSubescapular" class="form-control">
                </div>
                <div class="form-group col-md-6">
                <label for="pliegueSuprailíaco">3.8 Pliegue suprailíaco (cm)</label>
                <input type="number" v-model="encuesta.pliegueSuprailiaco" class="form-control" >
                </div>
              </div>
              <div class="form-group">
                <label for="observacionesBloque3">Observaciones</label>
                <input type="text" v-model="encuesta.observacionesBloque3" class="form-control" >
              </div>
            </div>
          </div>
          <div class="card">
            <h4 class="card-header text-center">Bloque 4. Inseguridad alimentaria y datos nutricionales (continuación)</h4>
            <div class="card-body">
              <h5 class="card-title">4.9 Recordatorio 24 horas</h5>
              <hr/>
              <p>Ahora necesito que me cuente qué comió durante todo el día de ayer, desde la mañana hasta la noche.</p>
              <table class="table">
                <thead>
                  <tr>
                    <th class="col-md-2"><h6>Hora del día</h6></th>
                    <th class="col-md-7"><h6>Tipo de alimento</h6></th>
                    <th class="col-md-2"><h6>Cantidad</h6></th>
                    <th class="col-md-1"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input class="form-control" v-model="recordatorio.horaDia" type="time"></td>
                    <td><input class="form-control" v-model="recordatorio.tipoAlimento" type="text" ></td>
                    <td><input class="form-control" v-model="recordatorio.cantidad" type="number"></td>
                    <td><button @click="agregarRecordatorio()" class="btn btn-info" type="button" title="Nuevo"> <i class="fas fa-plus fa-1x"></i></button></td>
                  </tr>
                  <tr v-for="recordatorio in recordatorios" :key="recordatorio._id">  
                    <td>{{ recordatorio.horaDia }}</td>
                    <td>{{ recordatorio.tipoAlimento }}</td>
                    <td>{{ recordatorio.cantidad }}</td>
                    <td>
                      <button
                        class="btn btn-danger"
                        title="Eliminar recordatorio"
                        type="button"
                        @click="borrarRecordatorio(recordatorio)"
                      ><i class="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table> 
              <div class="form-group">
                <label for="observacionesBloque4">Observaciones</label>
                <input type="text" v-model="encuesta.observacionesBloque4" class="form-control" >
              </div>
              <div class="btn-group" >
                <div v-if="editar === false"> 
                  <button class="btn btn-primary" type="button" @click="enviarEncuesta()">Agregar</button>&nbsp;&nbsp;
                </div>
                <div v-else>
                  <button class="btn btn-primary" type="button" @click="enviarEncuesta()">Actualizar</button>&nbsp;&nbsp;
                </div>
                <button class="btn btn-secondary" type="button" @click="clean()">Limpiar</button>
              </div>
            </div>           
          </div>         
        </form>
        <div class="card">
          <h4 class="card-header text-center">Encuestas realizadas</h4>
          <div class="card-body">
            <table class="table table-striped text-center">
                <thead>
                  <tr class="bg-secondary text-light">
                    <th>Nombre y apellido embarazada</th>
                    <th>DNI</th>
                    <th>Fecha relevamiento</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody> <!-- Acá irian las encuestas que realizó encuestador logueado -->
                  <tr v-for="encuesta in encuestas" :key="encuesta._id">
                    <td>{{ encuesta.nombreApellido }}</td>
                    <td>{{ encuesta.dni }}</td>
                    <td>{{ encuesta.fechaRelevamiento | formatDate}}</td>
                    <td>
                      <div class="btn-group" role="group">
                        <button
                          class="btn btn-primary"
                          title="Ver"
                          @click="verEncuesta(encuesta._id)">
                          <i class="fas fa-eye"></i>
                        </button>
                        <button
                          class="btn btn-secondary"
                          title="Editar"
                          @click="editarEncuesta(encuesta._id)"
                        ><i class="fas fa-pencil-alt"></i>
                        </button>
                        <button
                          class="btn btn-danger"
                          title="Eliminar"
                          @click="btnBorrar(encuesta._id)"
                        ><i class="fas fa-trash-alt"></i>
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
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

class Recordatorio24hs{
  constructor(horaDia, tipoAlimento, cantidad) {
    this.horaDia = horaDia;
    this.tipoAlimento = tipoAlimento;
    this.cantidad = cantidad;
  }
}

class Encuesta {
  constructor(nombreApellidoEncuestador1, telefonoEncuestador1, emailEncuestador1, nombreApellidoEncuestador2, telefonoEncuestador2, emailEncuestador2, fechaRelevamiento, lugarRelevamiento,
  nombreApellido, dni,fechaNacimiento, domicilioBarrio, telefono, fechaUltimaMenstruacion, semanasGestacion, observacionesBloque0, pesoKG, ropaAlPesar, talla, tallaSentada, perimetroBraquial,
  pliegueTricipital, pliegueBicipital, pliegueSubescapular, pliegueSuprailiaco, observacionesBloque3, recordatorio24Horas, observacionesBloque4) {
    this.nombreApellidoEncuestador1 = nombreApellidoEncuestador1;
    this.telefonoEncuestador1 = telefonoEncuestador1;
    this.emailEncuestador1 = emailEncuestador1;
    this.nombreApellidoEncuestador2 = nombreApellidoEncuestador2;
    this.telefonoEncuestador2 = telefonoEncuestador2;
    this.emailEncuestador2 = emailEncuestador2;
    this.fechaRelevamiento = fechaRelevamiento;
    this.lugarRelevamiento = lugarRelevamiento;
    this.nombreApellido = nombreApellido;
    this.dni = dni;
    this.fechaNacimiento = fechaNacimiento;
    this.domicilioBarrio = domicilioBarrio;
    this.telefono = telefono;
    this.fechaUltimaMenstruacion = fechaUltimaMenstruacion;
    this.semanasGestacion = semanasGestacion;
    this.observacionesBloque0 = observacionesBloque0;
    this.pesoKG = pesoKG;
    this.ropaAlPesar = ropaAlPesar;
    this.talla = talla;
    this.tallaSentada = tallaSentada;
    this.perimetroBraquial = perimetroBraquial;
    this.pliegueTricipital = pliegueTricipital;
    this.pliegueBicipital = pliegueBicipital;
    this.pliegueSubescapular = pliegueSubescapular;
    this.pliegueSuprailiaco = pliegueSuprailiaco;
    this.observacionesBloque3 = observacionesBloque3;
    this.recordatorio24Horas = recordatorio24Horas;
    this.observacionesBloque4 = observacionesBloque4;
    this.tipoEncuesta = "Tercer trimestre";
  }
}

export default {
  data() {
    return {
      recordatorios: [],
      recordatorio: new Recordatorio24hs(),
      encuesta: new Encuesta(),
      encuestas: [],
      editar: false,
      baseUrl: "http://localhost:3000", //url del backend
    };
  },
  created() {
    this.getEncuestas();
  },
  methods: {
    async enviarEncuesta(){
      const headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
      });
      if(this.editar == false){
        this.encuesta.recordatorio24Horas = this.recordatorios;
        await this.axios.post(
          `${this.baseUrl}/encuestas3Trimestre`,
          JSON.stringify(this.encuesta),
          { headers }
        );
        Toast.fire({
          title: "¡Encuesta Agregada!",
        });
      } else {        
        this.encuesta.recordatorio24Horas = this.recordatorios;
        await this.axios.put(
        `${this.baseUrl}/encuestas3Trimestre/` + this.encuesta._id,
        JSON.stringify(this.encuesta),
        { headers }
        );
        this.editar = false;
        Toast.fire({
          title: "¡Encuesta Actualizada!",
        });
      }
      this.getEncuestas();
      this.recordatorios = [];
      this.encuesta = new Encuesta();
    },
    async getEncuestas(){
      const res = await this.axios.get(
        `${this.baseUrl}/encuestas3Trimestre/user/` + this.$auth.user.email
      );
      this.encuestas = res.data;      
    },
    async verEncuesta(id){
      const res = await this.axios.get(
        `${this.baseUrl}/encuestas3Trimestre/` + id);
      this.encuesta = res.data;  
      this.recordatorios = res.data.recordatorio24Horas;
      this.editar = false;
    },
    async editarEncuesta(id) { 
      const res = await this.axios.get(
        `${this.baseUrl}/encuestas3Trimestre/` + id);
      this.encuesta = res.data;
      this.recordatorios = res.data.recordatorio24Horas;
      this.editar = true;
    },
    async borrarEncuesta(id){
      await this.axios.delete(`${this.baseUrl}/encuestas3Trimestre/` + id);
      this.getEncuestas();
    },
    agregarRecordatorio(){
      this.recordatorios.push(this.recordatorio);
      this.recordatorio = new Recordatorio24hs();
    },
    borrarRecordatorio(recordatorio){
      this.recordatorios.splice(this.recordatorios.indexOf(recordatorio), 1);     
    },
    clean(){
      this.encuesta = new Encuesta();
      this.recordatorios = [];
      this.editar = false;
    },
    btnBorrar(id){        
      Swal.fire({
        title: '¿Estás seguro de borrar la encuesta?',         
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor:'#d33',
        cancelButtonColor:'#3085d6',
        confirmButtonText: 'Borrar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {            
          this.borrarEncuesta(id);             
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
          });
          Toast.fire({
            title: "¡Encuesta Eliminada!",
          });
        }
      });                
    },
  },
};
</script>
