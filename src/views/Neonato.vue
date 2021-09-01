<template>
  <div>
    <h2>
      <span>Neonato</span>
    </h2>
    <hr />
    <div class="container">
      <div class="row mt-4">
        <div class="col text-left">
          <form>
            <div class="card">
              <h4 class="card-header text-center">
                Bloque 0. Datos de los encuestadores y participantes
              </h4>
              <div class="card-body">
                <h5 class="card-title">Datos Encuestadores</h5>
                <hr />
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputNyAEncuestador1"
                      >Nombre y apellido Encuestador 1</label
                    >
                    <input
                      type="text"
                      v-model="encuesta.nombreApellidoEncuestador1"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="telefonoEncuestador1">Teléfono</label>
                    <input
                      type="number"
                      v-model="encuesta.telefonoEncuestador1"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="emailEncuestador1">Email</label>
                    <input
                      type="text"
                      v-model="encuesta.emailEncuestador1"
                      class="form-control"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputNyAEncuestador2"
                      >Nombre y apellido Encuestador 2</label
                    >
                    <input
                      type="text"
                      v-model="encuesta.nombreApellidoEncuestador2"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="telefonoEncuestador2">Teléfono</label>
                    <input
                      type="number"
                      v-model="encuesta.telefonoEncuestador2"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="emailEncuestador2">Email</label>
                    <input
                      type="text"
                      v-model="encuesta.emailEncuestador2"
                      class="form-control"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="fechaRelevamiento"
                      >Fecha del relevamiento</label
                    >
                    <input
                      type="date"
                      v-model="encuesta.fechaRelevamiento"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="lugarRelevamiento"
                      >Lugar del relevamiento</label
                    >
                    <input
                      type="text"
                      v-model="encuesta.lugarRelevamiento"
                      class="form-control"
                    />
                  </div>
                </div>
                <h5 class="card-title">Madre y recien nacido</h5>
                <hr />
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputNyAEmbarazada">Nombre y apellido</label>
                    <input
                      type="text"
                      v-model="encuesta.nombreApellido"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="DNIEmbarazada">DNI</label>
                    <input
                      type="number"
                      v-model="encuesta.dni"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="FechaNacimiento">Fecha de nacimiento</label>
                    <input
                      type="date"
                      v-model="encuesta.fechaNacimiento"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="domicilio">Domicilio/barrio</label>
                  <input
                    type="text"
                    v-model="encuesta.domicilioBarrio"
                    class="form-control"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="telefonoEmbarazada">Teléfono</label>
                    <input
                      type="number"
                      v-model="encuesta.telefono"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="fechaNacimiento">Fecha de nacimiento</label>
                    <input
                      type="date"
                      v-model="encuesta.fechaNacimientoBebe"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="viaNacimiento">Via de nacimiento</label>
                    <fieldset class="form-group">
                      <div class="row">
                        <div class="col-sm-10">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              v-model="encuesta.viaNacimiento"
                              id="viaNacimiento1"
                              value="Parto Vaginal"
                            />
                            <label class="form-check-label" for="viaNacimiento">
                              Parto vaginal
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              v-model="encuesta.viaNacimiento"
                              id="viaNacimiento2"
                              value="Cesarea"
                            />
                            <label class="form-check-label" for="viaNacimiento">
                              Cesarea
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="lugarNacimiento">Lugar de nacimiento</label>
                    <input
                      type="text"
                      v-model="encuesta.lugarNacimiento"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="nombreBebe">Nombre niño/a</label>
                    <input
                      type="text"
                      v-model="encuesta.nombreBebe"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="observacionesBloque0">Observaciones</label>
                  <input
                    type="text"
                    v-model="encuesta.observacionesBloque0"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="card">
              <h4 class="card-header text-center">
                Bloque 5. Antropometría neonato
              </h4>
              <div class="card-body">
                <h6 class="card-title">
                  Ahora vamos a hacer algunas mediciones para conocer el peso,
                  largo y otros datos de la composición corporal del bebé.
                </h6>
                <hr />
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="peso">5.1 Peso (kg)</label>
                    <input
                      type="number"
                      :step="0.1"
                      v-model="encuesta.pesoKG"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="ropa">Ropa</label>
                    <input
                      type="text"
                      v-model="encuesta.ropaAlPesar"
                      class="form-control"
                    />
                    <small
                      >Especificar la ropa que tiene puesta al momento de tomar
                      el peso.</small
                    >
                  </div>
                  <div class="form-group col-md-4">
                    <label for="talla">5.2 Longitud (talla) (cm)</label>
                    <input
                      type="number"
                      v-model="encuesta.talla"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="perimetroCefalico"
                      >5.3 Perímetro cefálico (cm)</label
                    >
                    <input
                      type="number"
                      v-model="encuesta.perimetroCefalico"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="cincunsferenciaBrazo"
                      >5.4 Cincunsferencia del brazo (cm)</label
                    >
                    <input
                      type="number"
                      v-model="encuesta.circunsferenciaBrazo"
                      class="form-control"
                    />
                    <small>
                      La medida 5.4 tomar del lado derecho del cuerpo.
                    </small>
                  </div>
                </div>
                <h5 class="card-title">Datos de la madre</h5>
                <hr />
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputNyAMadre">Nombre y apellido</label>
                    <input
                      type="text"
                      v-model="encuesta.NombreApellidoMadre"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="DNIMadre">DNI</label>
                    <input
                      type="number"
                      v-model="encuesta.dniMadre"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="observacionesBloque5">Observaciones</label>
                  <input
                    type="text"
                    v-model="encuesta.observacionesBloque5"
                    class="form-control"
                  />
                </div>
                <div class="btn-group">
                  <div v-if="editar === false">
                    <button
                      class="btn btn-primary"
                      type="button"
                      @click="enviarEncuesta()"
                    >
                      Agregar</button
                    >&nbsp;&nbsp;
                  </div>
                  <div v-else>
                    <button
                      class="btn btn-primary"
                      type="button"
                      @click="enviarEncuesta()"
                    >
                      Actualizar</button
                    >&nbsp;&nbsp;
                  </div>
                  <button
                    class="btn btn-secondary"
                    type="button"
                    @click="clean()"
                  >
                    Limpiar
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div class="card">
            <h4 class="card-header text-center">Encuestas realizadas</h4>
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <tr class="bg-secondary text-light">
                    <th>Nombre y apellido embarazada</th>
                    <th>DNI</th>
                    <th>Fecha relevamiento</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="encuesta in encuestas" :key="encuesta._id">
                    <td>{{ encuesta.nombreApellido }}</td>
                    <td>{{ encuesta.dni }}</td>
                    <td>{{ encuesta.fechaRelevamiento | formatDate }}</td>
                    <td>
                      <div class="btn-group" role="group">
                        <button
                          class="btn btn-primary"
                          title="Ver"
                          @click="verEncuesta(encuesta._id)"
                        >
                          <i class="fas fa-eye"></i>
                        </button>
                        <button
                          class="btn btn-secondary"
                          title="Editar"
                          @click="editarEncuesta(encuesta._id)"
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
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

class Encuesta {
  constructor(
    nombreApellidoEncuestador1,
    telefonoEncuestador1,
    emailEncuestador1,
    nombreApellidoEncuestador2,
    telefonoEncuestador2,
    emailEncuestador2,
    fechaRelevamiento,
    lugarRelevamiento,
    nombreApellido,
    dni,
    fechaNacimiento,
    domicilioBarrio,
    telefono,
    fechaNacimientoBebe,
    viaNacimiento,
    lugarNacimiento,
    nombreBebe,
    observacionesBloque0,
    pesoKG,
    ropaAlPesar,
    talla,
    perimetroCefalico,
    circunsferenciaBrazo,
    NombreApellidoMadre,
    dniMadre,
    observacionesBloque5
  ) {
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
    this.fechaNacimientoBebe = fechaNacimientoBebe;
    this.viaNacimiento = viaNacimiento;
    this.lugarNacimiento = lugarNacimiento;
    this.nombreBebe = nombreBebe;
    this.observacionesBloque0 = observacionesBloque0;
    this.pesoKG = pesoKG;
    this.ropaAlPesar = ropaAlPesar;
    this.talla = talla;
    this.perimetroCefalico = perimetroCefalico;
    this.circunsferenciaBrazo = circunsferenciaBrazo;
    this.NombreApellidoMadre = NombreApellidoMadre;
    this.dniMadre = dniMadre;
    this.observacionesBloque5 = observacionesBloque5;
    this.tipoEncuesta = "Neonato";
  }
}

export default {
  data() {
    return {
      encuesta: new Encuesta(),
      encuestas: [],
      editar: false,
      // url del backend
      baseUrl: "https://backendtpf.herokuapp.com",
    };
  },
  created() {
    this.getEncuestas();
  },
  methods: {
    async enviarEncuesta() {
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
      if (this.editar == false) {
        await this.axios.post(
          `${this.baseUrl}/encuestasNeonato`,
          JSON.stringify(this.encuesta),
          { headers }
        );
        // Alerta de confirmación de encuesta agregada
        Toast.fire({
          title: "¡Encuesta Agregada!",
        });
      } else {
        await this.axios.put(
          `${this.baseUrl}/encuestasNeonato/` + this.encuesta._id,
          JSON.stringify(this.encuesta),
          { headers }
        );
        this.editar = false;
        // Alerta de confirmación de encuesta actualizada
        Toast.fire({
          title: "¡Encuesta Actualizada!",
        });
      }
      this.getEncuestas();
      this.encuesta = new Encuesta();
    },
    async getEncuestas() {
      const res = await this.axios.get(
        `${this.baseUrl}/encuestasNeonato/user/` + this.$auth.user.email
      );
      this.encuestas = res.data;
    },
    async verEncuesta(id) {
      const res = await this.axios.get(
          `${this.baseUrl}/encuestasNeonato/` + id
        );
      // Alerta que se activa al abrir una encuesta de neonato
      await Swal.fire({
        title: "Encuesta Neonato",
        html:
          '<form> <div class="card"> <h4 class="card-header text-center">Bloque 0. Datos de los encuestadores y participantes</h4> <div class="card-body"> <h5 class="card-title">Datos Encuestadores</h5> <hr /> <div class="form-row"> <div class="form-group col-md-4"> <label for="inputNyAEncuestador1">Nombre y apellido Encuestador 1</label> <input type="text" value="' +
          res.data.nombreApellidoEncuestador1 +
          '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="telefonoEncuestador1">Teléfono</label> <input type="number" value="' +
          res.data.telefonoEncuestador1 +
          '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="emailEncuestador1">Email</label> <input type="text" value="' +
          res.data.emailEncuestador1 +
          '" class="form-control" readonly > </div> </div> <div class="form-row"> <div class="form-group col-md-4"> <label for="inputNyAEncuestador2">Nombre y apellido Encuestador 2</label> <input type="text" value="' +
          res.data.nombreApellidoEncuestador2 +
          '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="telefonoEncuestador2">Teléfono</label> <input type="number" value="' +
          res.data.telefonoEncuestador2 +
          '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="emailEncuestador2">Email</label> <input type="text" value="' +
          res.data.emailEncuestador2 +
          '" class="form-control" readonly > </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="fechaRelevamiento">Fecha del relevamiento</label> <input type="date" value="' +
          res.data.fechaRelevamiento +
          '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="lugarRelevamiento">Lugar del relevamiento</label> <input type="text" value="' +
          res.data.lugarRelevamiento +
          '" class="form-control" readonly> </div> </div> <h5 class="card-title">Madre y recien nacido</h5> <hr /> <div class="form-row"> <div class="form-group col-md-4"> <label for="inputNyAEmbarazada">Nombre y apellido</label> <input type="text" value="' +
          res.data.nombreApellido +
          '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="DNIEmbarazada">DNI</label> <input type="number" value="' +
          res.data.dni +
          '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="FechaNacimiento">Fecha de nacimiento</label> <input type="date" value="' +
          res.data.fechaNacimiento +
          '" class="form-control" readonly> </div> </div> <div class="form-group"> <label for="domicilio">Domicilio/barrio</label> <input type="text" value="' +
          res.data.domicilioBarrio +
          '" class="form-control" readonly> </div> <div class="form-row"> <div class="form-group col-md-4"> <label for="telefonoEmbarazada">Teléfono</label> <input type="number" value="' +
          res.data.telefono +
          '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="fechaNacimiento">Fecha de nacimiento</label> <input type="date" value="' +
          res.data.fechaNacimientoBebe +
          '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="viaNacimiento">Via de nacimiento</label> <input type="text" value="' +
          res.data.viaNacimiento +
          '" class="form-control" readonly> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="lugarNacimiento">Lugar de nacimiento</label> <input type="text" value="' +
          res.data.lugarNacimiento +
          '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="nombreBebe">Nombre niño/a</label> <input type="text" value="' +
          res.data.nombreBebe +
          '" class="form-control" readonly> </div> </div> <div class="form-group"> <label for="observacionesBloque0">Observaciones</label> <input type="text" value="' +
          res.data.observacionesBloque0 +
          '" class="form-control" readonly> </div> </div> </div> <div class="card"> <h4 class="card-header text-center">Bloque 5. Antropometría neonato</h4> <div class="card-body"> <h6 class="card-title">Ahora vamos a hacer algunas mediciones para conocer el peso, largo y otros datos de la composición corporal del bebé.</h6> <hr /> <div class="form-row"> <div class="form-group col-md-4"> <label for="peso">5.1 Peso (kg)</label> <input type="number" :step="0.1" value="' +
          res.data.pesoKG +
          '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="ropa">Ropa</label> <input type="text" value="' +
          res.data.ropaAlPesar +
          '" class="form-control" readonly> <small>Especificar la ropa que tiene puesta al momento de tomar el peso.</small> </div> <div class="form-group col-md-4"> <label for="talla">5.2 Longitud (talla) (cm)</label> <input type="number" value="' +
          res.data.talla +
          '" class="form-control" readonly> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="perimetroCefalico">5.3 Perímetro cefálico (cm)</label> <input type="number" value="' +
          res.data.perimetroCefalico +
          '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="cincunsferenciaBrazo">5.4 Cincunsferencia del brazo (cm)</label> <input type="number" value="' +
          res.data.circunsferenciaBrazo +
          '" class="form-control" readonly> <small> La medida 5.4 tomar del lado derecho del cuerpo. </small> </div> </div> <h5 class="card-title">Datos de la madre</h5> <hr /> <div class="form-row"> <div class="form-group col-md-6"> <label for="inputNyAMadre">Nombre y apellido</label> <input type="text" value="' +
          res.data.NombreApellidoMadre +
          '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="DNIMadre">DNI</label> <input type="number" value="' +
          res.data.dniMadre +
          '" class="form-control" readonly> </div> </div> <div class="form-group"> <label for="observacionesBloque5">Observaciones</label> <input type="text" value="' +
          res.data.observacionesBloque5 +
          '" class="form-control" readonly> </div> </div> </div> </form>',
        focusConfirm: false,
        showConfirmButton: true,
        width: 1300,
        confirmButtonText: "Cerrar",
      });
    },
    async editarEncuesta(id) {
      const res = await this.axios.get(
        `${this.baseUrl}/encuestasNeonato/` + id
      );
      this.encuesta = res.data;
      this.editar = true;
    },
    async borrarEncuesta(id) {
      await this.axios.delete(`${this.baseUrl}/encuestasNeonato/` + id);
      this.getEncuestas();
    },
    clean() {
      this.encuesta = new Encuesta();
      this.editar = false;
    },    
    btnBorrar(id) {
      // Alerta que se activa al intentar borrar una encuesta
      Swal.fire({
        title: "¿Estás seguro de borrar la encuesta?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Borrar",
        cancelButtonText: "Cancelar",
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
