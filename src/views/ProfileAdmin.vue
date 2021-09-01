<template>
  <div>
    <h2>
      <span>Panel de administracion</span>
    </h2>
    <hr />
    <div class="container">
      <div class="row mt-4">
        <div class="col text-left">
          <div class="card">
            <h4 class="card-header text-center">Usuarios</h4>
            <div class="card-body">
              <table class="table table-striped text-center">
                <thead>
                  <tr class="bg-secondary text-light">
                    <th>Email</th>
                    <th>Administrador</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="usuario in usuarios" :key="usuario._id">
                    <td>{{ usuario.email }}</td>
                    <td v-if="usuario.admin">Si</td>
                    <td v-else>No</td>
                    <td>
                      <div class="btn-group" role="group">
                        <button
                          class="btn btn-success"
                          title="Brindar permisos"
                          @click="btnAltaAdmin(usuario._id)"
                        >
                          <i class="fas fa-plus fa-1x"></i>
                        </button>
                        <button
                          class="btn btn-secondary"
                          title="Eliminar permisos"
                          @click="btnBorrarAdmin(usuario._id)"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                        <button
                          class="btn btn-danger"
                          title="Eliminar usuario"
                          @click="btnBorrarUsuario(usuario._id)"
                        >
                          <i class="fas fa-user-times"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card">
            <h4 class="card-header text-center">Encuestas</h4>
            <div class="card-body">              
                    <div class="input-group">
                      <div class="form-outline w-50">
                        <input
                          id="search-input"
                          type="search"
                          class="form-control"
                          placeholder="Buscar por encuestador"
                        />
                      </div>
                    <button
                      @click="getEncuestasEncuestador()"
                      id="search-button"
                      type="button"
                      class="btn btn-primary"
                    >
                      <i class="fas fa-search"></i>
                    </button>
                  <div class="col text-right">
                    <button @click="downloadEncuestas()" class="btn btn-success" title="Exportar encuestas a CSV">
                      <i class="fas fa-file-excel"></i> 
                    </button>        
                  </div>
              </div>
              <p></p>
              <table class="table table-striped text-center">
                <thead>
                  <tr class="bg-secondary text-light">
                    <th>Email encuestador 1</th>
                    <th>Email encuestador 2</th>
                    <th>DNI embarazada</th>
                    <th>Tipo encuesta</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="encuesta in encuestas" :key="encuesta._id">
                    <td>{{ encuesta.emailEncuestador1 }}</td>
                    <td>{{ encuesta.emailEncuestador2 }}</td>
                    <td>{{ encuesta.dni }}</td>
                    <td>{{ encuesta.tipoEncuesta }}</td>
                    <td>
                      <button
                        @click="btnAbrirEncuesta(encuesta)"
                        class="btn btn-primary"
                      >
                        <i class="fas fa-eye"></i>
                      </button>
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
  constructor(emailEncuestador1, emailEncuestador2, dni, tipoEncuesta) {
    this.emailEncuestador1 = emailEncuestador1;
    this.emailEncuestador2 = emailEncuestador2;
    this.dni = dni;
    this.tipoEncuesta = tipoEncuesta;
  }
}

class Usuario {
  constructor(email, admin) {
    this.email = email;
    this.admin = admin;
  }
}

export default {
  data() {
    return {
      encuesta: new Encuesta(),
      encuestas: [],
      usuarios: [],
      // url del backend
      baseUrl: "https://backendtpf.herokuapp.com", 
      usuario: new Usuario(),
    };
  },
  created() {
    this.getEncuestas();
    this.getUsuarios();
  },
  methods: {
    async getEncuestas() {
      const res1 = await this.axios.get(
        `${this.baseUrl}/encuestas3Trimestre/encuestas`
      );
      this.encuestas = res1.data;
      const res2 = await this.axios.get(
        `${this.baseUrl}/encuestas1y2Trimestre/encuestas`
      );
      this.encuestas = this.encuestas.concat(res2.data);
      const res3 = await this.axios.get(
        `${this.baseUrl}/encuestasNeonato/encuestas`
      );
      this.encuestas = this.encuestas.concat(res3.data);
    },
    async getUsuarios() {
      const res = await this.axios.get(`${this.baseUrl}/usuarios`);
      this.usuarios = res.data;
    },
    getRecordatorios(recordatorio24Horas) {
      var salida = "";
      for (var i = 0; i < recordatorio24Horas.length; i++) {
        salida +=
          "{Hora del día: " +
          recordatorio24Horas[i].horaDia +
          ", Tipo de alimento: " +
          recordatorio24Horas[i].tipoAlimento +
          ", Cantidad: " +
          recordatorio24Horas[i].cantidad +
          "}";
      }
      return salida;
    },
    async downloadEncuestas() {
      // Genera un archivo .csv separando los datos con ;
      var FileSaver = require("file-saver");
      var texto1y2Trimestre =
        "Encuestas Primer y Segundo Trimestre \n nombreApellidoEncuestador1; telefonoEncuestador1; emailEncuestador1; nombreApellidoEncuestador2; telefonoEncuestador2; emailEncuestador2; fechaRelevamiento; lugarRelevamiento; nombreApellido; dni; fechaNacimiento; domicilioBarrio; telefono; fechaUltimaMenstruacion; semanasGestacion; observacionesBloque0; diabetes; enfermedadRenal; hipertension; colesterolTrigliceridosAltos; asmaEPOC; covid19; anemia; enfermedadCronica; cualEnfermedadCronica; consumeMedicamento; cualConsumeMedicamento; consumeComplejoVitaminicoSuplemento; cualConsumeComplejoVitaminicoSuplemento; fumaActual; fumaAntes; alcoholActual; embarazoAntes; cuantosEmbarazoAntes; hijos; cuantosHijos; observacionesBloque1; pais; provincia; personasVivienda; habitacionesVivienda; desagueCloaca; aguaPotable; redElectrica; gasNatural; nivelEducativo; empleo; asistenciaEstado; cualAsistenciaEstado; recibioBolson; recibioTickets; recibioTarjeta; recibioLeche; recibioOtra; cualUltimoMesRecibio; ingresoIndividual; ingresoTotal; recibioIFE; observacionesBloque2; pesoKG; ropaAlPesar; talla; tallaSentada; perimetroBraquial; pliegueTricipital; pliegueBicipital; pliegueSubescapular; pliegueSuprailiaco; observacionesBloque3; preocupadoSuficienteAlimentos; podidoAlimentos; comidoPocaVariedad; dejarDesayunoAlmuerzoCena; comidoMenos; sinAlimentos; sentidoHambre; dejadoComer; observacionesBloque4Parte1; recordatorio24Horas; observacionesBloque4Parte2; desayuno; almuerzo; merienda; cena; frecuenciaConsumo; golosinas; panBlanco; pan; copetin; frutas; lacteos; bebidas; otros; nsnc; observacionesBloque4Parte3; consumioLeche; consumioFrutasFrescas; consumioVerduras; consumioPapa; consumioCereales; consumioEmbutidos; observacionesBloque4Parte4; consumioCarne; consumioPescado; consumioAceites; consumioFrutasSecas; consumioProductosCopetin; consumioGolosinas; observacionesBloque4Parte5 \n";
      var texto3Trimestre =
        "Encuestas Tercer Trimestre \n nombreApellidoEncuestador1; telefonoEncuestador1; emailEncuestador1; nombreApellidoEncuestador2; telefonoEncuestador2; emailEncuestador2; fechaRelevamiento; lugarRelevamiento; nombreApellido; dni; fechaNacimiento; domicilioBarrio; telefono; fechaUltimaMenstruacion; semanasGestacion; observacionesBloque0; pesoKG; ropaAlPesar; talla; tallaSentada; perimetroBraquial; pliegueTricipital; pliegueBicipital; pliegueSubescapular; pliegueSuprailiaco; observacionesBloque3; recordatorio24Horas; observacionesBloque4 \n";
      var textoNeonato =
        "Encuestas Neonato \n nombreApellidoEncuestador1; telefonoEncuestador1; emailEncuestador1; nombreApellidoEncuestador2; telefonoEncuestador2; emailEncuestador2; fechaRelevamiento; lugarRelevamiento; nombreApellido; dni; fechaNacimiento; domicilioBarrio; telefono; fechaNacimientoBebe; viaNacimiento; lugarNacimiento; nombreBebe; observacionesBloque0; pesoKG; ropaAlPesar; talla; perimetroCefalico; circunsferenciaBrazo; NombreApellidoMadre; dniMadre; observacionesBloque5 \n";

      for (var index in this.encuestas) {
        if (
          this.encuestas[index].tipoEncuesta == "Primer y segundo trimestre"
        ) {
          const res = await this.axios.get(
            `${this.baseUrl}/encuestas1y2Trimestre/` + this.encuestas[index]._id
          );
          texto1y2Trimestre +=
            res.data.nombreApellidoEncuestador1 +
            "; " +
            res.data.telefonoEncuestador1 +
            "; " +
            res.data.emailEncuestador1 +
            "; " +
            res.data.nombreApellidoEncuestador2 +
            "; " +
            res.data.telefonoEncuestador2 +
            "; " +
            res.data.emailEncuestador2 +
            "; " +
            res.data.fechaRelevamiento +
            "; " +
            res.data.lugarRelevamiento +
            "; " +
            res.data.nombreApellido +
            ";" +
            res.data.dni +
            ";" +
            res.data.fechaNacimiento +
            ";" +
            res.data.domicilioBarrio +
            ";" +
            res.data.telefono +
            "; " +
            res.data.fechaUltimaMenstruacion +
            ";" +
            res.data.semanasGestacion +
            ";" +
            res.data.observacionesBloque0 +
            ";" +
            res.data.diabetes +
            ";" +
            res.data.enfermedadRenal +
            ";" +
            res.data.hipertension +
            ";" +
            res.data.colesterolTrigliceridosAltos +
            ";" +
            res.data.asmaEPOC +
            ";" +
            res.data.covid19 +
            ";" +
            res.data.anemia +
            ";" +
            res.data.enfermedadCronica +
            ";" +
            res.data.cualEnfermedadCronica +
            ";" +
            res.data.consumeMedicamento +
            ";" +
            res.data.cualConsumeMedicamento +
            ";" +
            res.data.consumeComplejoVitaminicoSuplemento +
            ";" +
            res.data.cualConsumeComplejoVitaminicoSuplemento +
            ";" +
            res.data.fumaActual +
            ";" +
            res.data.fumaAntes +
            ";" +
            res.data.alcoholActual +
            ";" +
            res.data.embarazoAntes +
            ";" +
            res.data.cuantosEmbarazoAntes +
            ";" +
            res.data.hijos +
            ";" +
            res.data.cuantosHijos +
            ";" +
            res.data.observacionesBloque1 +
            ";" +
            res.data.pais +
            ";" +
            res.data.provincia +
            ";" +
            res.data.personasVivienda +
            ";" +
            res.data.habitacionesVivienda +
            ";" +
            res.data.desagueCloaca +
            ";" +
            res.data.aguaPotable +
            ";" +
            res.data.redElectrica +
            ";" +
            res.data.gasNatural +
            ";" +
            res.data.nivelEducativo +
            ";" +
            res.data.empleo +
            ";" +
            res.data.asistenciaEstado +
            ";" +
            res.data.cualAsistenciaEstado +
            ";" +
            res.data.recibioBolson +
            ";" +
            res.data.recibioTickets +
            ";" +
            res.data.recibioTarjeta +
            ";" +
            res.data.recibioLeche +
            ";" +
            res.data.recibioOtra +
            ";" +
            res.data.cualUltimoMesRecibio +
            ";" +
            res.data.ingresoIndividual +
            ";" +
            res.data.ingresoTotal +
            ";" +
            res.data.recibioIFE +
            ";" +
            res.data.observacionesBloque2 +
            ";" +
            res.data.pesoKG +
            ";" +
            res.data.ropaAlPesar +
            "; " +
            res.data.talla +
            "; " +
            res.data.tallaSentada +
            ";" +
            res.data.perimetroBraquial +
            ";" +
            res.data.pliegueTricipital +
            ";" +
            res.data.pliegueBicipital +
            ";" +
            res.data.pliegueSubescapular +
            ";" +
            res.data.pliegueSuprailiaco +
            ";" +
            res.data.observacionesBloque3 +
            ";" +
            res.data.preocupadoSuficienteAlimentos +
            ";" +
            res.data.podidoAlimentos +
            ";" +
            res.data.comidoPocaVariedad +
            ";" +
            res.data.dejarDesayunoAlmuerzoCena +
            ";" +
            res.data.comidoMenos +
            ";" +
            res.data.sinAlimentos +
            ";" +
            res.data.sentidoHambre +
            ";" +
            res.data.dejadoComer +
            ";" +
            res.data.observacionesBloque4Parte1 +
            ";" +
            this.getRecordatorios(res.data.recordatorio24Horas) +
            ";" +
            res.data.observacionesBloque4Parte2 +
            ";" +
            res.data.desayuno +
            ";" +
            res.data.almuerzo +
            ";" +
            res.data.merienda +
            ";" +
            res.data.cena +
            ";" +
            res.data.frecuenciaConsumo +
            ";" +
            res.data.golosinas +
            ";" +
            res.data.panBlanco +
            ";" +
            res.data.pan +
            ";" +
            res.data.copetin +
            ";" +
            res.data.frutas +
            ";" +
            res.data.lacteos +
            ";" +
            res.data.bebidas +
            ";" +
            res.data.otros +
            ";" +
            res.data.nsnc +
            ";" +
            res.data.observacionesBloque4Parte3 +
            ";" +
            res.data.consumioLeche +
            ";" +
            res.data.consumioFrutasFrescas +
            ";" +
            res.data.consumioVerduras +
            ";" +
            res.data.consumioPapa +
            ";" +
            res.data.consumioCereales +
            ";" +
            res.data.consumioEmbutidos +
            ";" +
            res.data.observacionesBloque4Parte4 +
            ";" +
            res.data.consumioCarne +
            ";" +
            res.data.consumioPescado +
            ";" +
            res.data.consumioAceites +
            ";" +
            res.data.consumioFrutasFrescas +
            ";" +
            res.data.consumioProductosCopetin +
            ";" +
            res.data.consumioGolosinas +
            ";" +
            res.data.observacionesBloque4Parte5 +
            "\n";
        }
        if (this.encuestas[index].tipoEncuesta == "Tercer trimestre") {
          const res = await this.axios.get(
            `${this.baseUrl}/encuestas3Trimestre/` + this.encuestas[index]._id
          );
          texto3Trimestre +=
            res.data.nombreApellidoEncuestador1 +
            "; " +
            res.data.telefonoEncuestador1 +
            "; " +
            res.data.emailEncuestador1 +
            "; " +
            res.data.nombreApellidoEncuestador2 +
            "; " +
            res.data.telefonoEncuestador2 +
            "; " +
            res.data.emailEncuestador2 +
            "; " +
            res.data.fechaRelevamiento +
            "; " +
            res.data.lugarRelevamiento +
            "; " +
            res.data.nombreApellido +
            ";" +
            res.data.dni +
            ";" +
            res.data.fechaNacimiento +
            ";" +
            res.data.domicilioBarrio +
            ";" +
            res.data.telefono +
            "; " +
            res.data.fechaUltimaMenstruacion +
            ";" +
            res.data.semanasGestacion +
            ";" +
            res.data.observacionesBloque0 +
            ";" +
            res.data.pesoKG +
            ";" +
            res.data.ropaAlPesar +
            "; " +
            res.data.talla +
            "; " +
            res.data.tallaSentada +
            ";" +
            res.data.perimetroBraquial +
            ";" +
            res.data.pliegueTricipital +
            ";" +
            res.data.pliegueBicipital +
            ";" +
            res.data.pliegueSubescapular +
            ";" +
            res.data.pliegueSuprailiaco +
            ";" +
            res.data.observacionesBloque3 +
            ";" +
            this.getRecordatorios(res.data.recordatorio24Horas) +
            ";" +
            res.data.observacionesBloque4 +
            "\n";
        }
        if (this.encuestas[index].tipoEncuesta == "Neonato") {
          const res = await this.axios.get(
            `${this.baseUrl}/encuestasNeonato/` + this.encuestas[index]._id
          );
          textoNeonato +=
            res.data.nombreApellidoEncuestador1 +
            ";" +
            res.data.telefonoEncuestador1 +
            ";" +
            res.data.emailEncuestador1 +
            ";" +
            res.data.nombreApellidoEncuestador2 +
            ";" +
            res.data.telefonoEncuestador2 +
            ";" +
            res.data.emailEncuestador2 +
            ";" +
            res.data.fechaRelevamiento +
            ";" +
            res.data.lugarRelevamiento +
            ";" +
            res.data.nombreApellido +
            ";" +
            res.data.dni +
            ";" +
            res.data.fechaNacimiento +
            ";" +
            res.data.domicilioBarrio +
            ";" +
            res.data.telefono +
            ";" +
            res.data.fechaNacimientoBebe +
            ";" +
            res.data.viaNacimiento +
            ";" +
            res.data.lugarNacimiento +
            ";" +
            res.data.nombreBebe +
            ";" +
            res.data.observacionesBloque0 +
            ";" +
            res.data.pesoKG +
            ";" +
            res.data.ropaAlPesar +
            ";" +
            res.data.talla +
            ";" +
            res.data.perimetroCefalico +
            ";" +
            res.data.circunsferenciaBrazo +
            ";" +
            res.data.NombreApellidoMadre +
            ";" +
            res.data.dniMadre +
            ";" +
            res.data.observacionesBloque5 +
            "\n";
        }
      }
      var texto =
        texto1y2Trimestre + "\n" + texto3Trimestre + "\n" + textoNeonato;
      var blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
      FileSaver.saveAs(blob, "Encuestas.csv");
    },
    async addAdmin(id) {
      const headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      await this.axios.put(
        `${this.baseUrl}/usuarios/` + id,
        JSON.stringify({ admin: true }),
        { headers }
      );
      this.getUsuarios();
    },
    async deleteUsuario(id) {
      await this.axios.delete(`${this.baseUrl}/usuarios/` + id);
      this.getUsuarios();
    },
    async deleteAdmin(id) {
      const headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      await this.axios.put(
        `${this.baseUrl}/usuarios/` + id,
        JSON.stringify({ admin: false }),
        { headers }
      );
      this.getUsuarios();
    },
    async getEncuestasEncuestador() {
      const email = document.getElementById("search-input").value;
      if (email == "") {
        this.getEncuestas();
      } else {
        const res1 = await this.axios.get(
          `${this.baseUrl}/encuestas3Trimestre/encuestas/` + email
        );
        this.encuestas = res1.data;
        const res2 = await this.axios.get(
          `${this.baseUrl}/encuestas1y2Trimestre/encuestas/` + email
        );
        this.encuestas = this.encuestas.concat(res2.data);
        const res3 = await this.axios.get(
          `${this.baseUrl}/encuestasNeonato/encuestas/` + email
        );
        this.encuestas = this.encuestas.concat(res3.data);
      }
    },
    btnAltaAdmin (id) {
      // Alerta que se activa al intentar otorgar permisos de administrador a otro usuario
      Swal.fire({
        title: "¿Estás seguro de dar permisos de administrador al usuario?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Conceder Permiso",
      }).then((result) => {
        if (result.value) {
          this.addAdmin(id);
          Swal.fire(
            "¡Confirmado!",
            "El usuario ha recibido permisos de administrador.",
            "success"
          );
        }
      });
    },    
    btnBorrarAdmin (id) {
      // Alerta que se activa al intentar quitar permisos de administrador a otro usuario
      Swal.fire({
        title: "¿Estás seguro de borrar el administrador?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Borrar",
      }).then((result) => {
        if (result.value) {
          this.deleteAdmin(id);
          Swal.fire(
            "¡Eliminada!",
            "El administrador ha sido borrado.",
            "success"
          );
        }
      });
    },
    btnBorrarUsuario: function (id) {
      // Alerta que se activa al intentar eliminar otro usuario
      Swal.fire({
        title: "¿Estás seguro de borrar el usuario?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Borrar",
      }).then((result) => {
        if (result.value) {
          this.deleteUsuario(id);
          Swal.fire("¡Eliminada!", "El usuario ha sido borrado.", "success");
        }
      });
    },    
    async btnAbrirEncuesta(encuesta) {
      if (encuesta.tipoEncuesta == "Primer y segundo trimestre") {
        var res = await this.axios.get(
          `${this.baseUrl}/encuestas1y2Trimestre/` + encuesta._id
        );
        var recordatorios1y2Trimestre = "";
        for (var j = 0; j < res.data.recordatorio24Horas.length; j++) {
          recordatorios1y2Trimestre +=
            "<b>Hora del día: </b>" +
            res.data.recordatorio24Horas[j].horaDia +
            ", <b>Tipo de alimento: </b>" +
            res.data.recordatorio24Horas[j].tipoAlimento +
            ",<b> Cantidad: </b>" +
            res.data.recordatorio24Horas[j].cantidad +
            "<br/>";
        }
        // Alerta que se activa al abrir una encuesta del primer y segundo trimestre
        await Swal.fire({
          title: "Encuesta Primer y Segundo Trimestre",
          html:
            '<form> <div class="card"> <h4 class="card-header text-center">Bloque 0. Datos de los encuestadores y las embarazadas</h4> <div class="card-body"> <h5 class="card-title">Datos Encuestadores</h5> <hr /> <div class="form-row"> <div class="form-group col-md-4"> <label for="inputNyAEncuestador1">Nombre y apellido Encuestador 1</label> <input type="text" value="' +
            res.data.nombreApellidoEncuestador1 +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="telefonoEncuestador1">Teléfono</label> <input type="number" value="' +
            res.data.telefonoEncuestador1 +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="emailEncuestador1">Email</label> <input type="email" value="' +
            res.data.emailEncuestador1 +
            '" class="form-control" readonly> </div> </div> <div class="form-row"> <div class="form-group col-md-4"> <label for="inputNyAEncuestador2">Nombre y apellido Encuestador 2</label> <input type="text" value="' +
            res.data.nombreApellidoEncuestador2 +
            '" class="form-control" readonly > </div> <div class="form-group col-md-4"> <label for="telefonoEncuestador2">Teléfono</label> <input type="number" value="' +
            res.data.telefonoEncuestador2 +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="emailEncuestador2">Email</label> <input type="email" value="' +
            res.data.emailEncuestador2 +
            '" class="form-control" readonly> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="fechaRelevamiento">Fecha del relevamiento</label> <input type="date" value="' +
            res.data.fechaRelevamiento +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="lugarRelevamiento">Lugar del relevamiento</label> <input type="text" value="' +
            res.data.lugarRelevamiento +
            '" class="form-control" readonly> </div> </div> <h5 class="card-title">Embarazadas 1er y 2do trimestre</h5> <hr /> <div class="form-row"> <div class="form-group col-md-4"> <label for="inputNyAEmbarazada">Nombre y apellido</label> <input type="text" value="' +
            res.data.nombreApellido +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="DNIEmbarazada">DNI</label> <input type="number" value="' +
            res.data.dni +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="FechaNacimiento">Fecha de nacimiento</label> <input type="date" value="' +
            res.data.fechaNacimiento +
            '" class="form-control" readonly> </div> </div> <div class="form-group"> <label for="domicilio">Domicilio/barrio</label> <input type="text" value="' +
            res.data.domicilioBarrio +
            '" class="form-control" readonly> </div> <div class="form-row"> <div class="form-group col-md-4"> <label for="telefonoEmbarazada">Teléfono</label> <input type="number" value="' +
            res.data.telefono +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="fechaMenstruacion">Fecha de última menstruacion</label> <input type="date" value="' +
            res.data.fechaUltimaMenstruacion +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="semanasGestacionEmbarazada">Semanas de gestación</label> <input type="number" value="' +
            res.data.semanasGestacion +
            '" class="form-control" readonly> </div> </div> <div class="form-group"> <label for="observacionesBloque0">Observaciones</label> <input type="text" value="' +
            res.data.observacionesBloque0 +
            '" class="form-control" readonly> </div> </div> </div> <div class="card"> <h4 class="card-header text-center">Bloque 1. Antecedentes de salud</h4> <div class="card-body"> <h6 class="card-title">Ahora le voy a preguntar sobre algunos datos sobre su salud, las enfermedades que ha tenido o tiene y algunos hábitos.</h6> <hr /> <form> <label>1.1 ¿Ha sido diagnosticada con alguna de las siguientes enfermedades?</label> <div class="form-row"> <div class="form-group col-md-4"> <label for="diabetes">Diabetes</label> <input type="text" value="' +
            res.data.diabetes +
            '" class="form-control" readonly> <label for="enfermedadRenal">Enfermedad Renal</label> <input type="text" value="' +
            res.data.enfermedadRenal +
            '" class="form-control" readonly> <label for="hipertension">Hipertension</label> <input type="text" value="' +
            res.data.hipertension +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="colesterol">Colesterol - Trigliceridos altos</label> <input type="text" value="' +
            res.data.colesterolTrigliceridosAltos +
            '" class="form-control" readonly> <label for="asma">Asma o EPOC</label> <input type="text" value="' +
            res.data.asmaEPOC +
            '" class="form-control" readonly> <label for="covid">COVID-19</label> <input type="text" value="' +
            res.data.covid19 +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="anemia">Anemia</label> <input type="text" value="' +
            res.data.anemia +
            '" class="form-control" readonly> </div> <label for="enfermedadCronica">¿Otra enfermedad crónica?</label> <input type="text" value="' +
            res.data.enfermedadCronica +
            '" class="form-control" readonly> </div> <div class="form-group"> <div> <small>Si contesta afirmativamente:</small> </div> <label for="cualEnfermedadCronica">¿Cúal?</label> <input type="text" value="' +
            res.data.cualEnfermedadCronica +
            '" class="form-control" readonly> </div> </form> <hr /> <label>1.2 ¿Consume algún medicamento?</label> <input type="text" value="' +
            res.data.consumeMedicamento +
            '" class="form-control" readonly> <div class="form-group"> <div> <small>Si contesta afirmativamente:</small> </div> <label for="observacionesBloque0">¿Cúal?</label> <input type="text" value="' +
            res.data.cualConsumeMedicamento +
            '" class="form-control" readonly> </div> <hr /> <label>1.3 Antes o durante el embarazo, ¿consumió algún complejo vitaminico o suplemento?</label> <div class="form-group"> </div> <small>Aquí se puede ejemplificar preguntando por suplementación de hierro, ácido folico, vitamina D.</small> <input type="text" value="' +
            res.data.consumeComplejoVitaminicoSuplemento +
            '" class="form-control" readonly> <div class="form-group"> <div> <small>Si contesta afirmativamente:</small> </div> <label for="cualConsumeComplejoVitaminicoSuplemento">¿Cúal?</label> <input type="text" value="' +
            res.data.cualConsumeComplejoVitaminicoSuplemento +
            '" class="form-control" readonly> </div> <hr /> <div class="form-row"> <div class="form-group col-md-4"> <label>1.4 ¿Actualmente fuma?</label> <input type="text" value="' +
            res.data.fumaActual +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label>1.5 ¿Fumaba antes de estar embarazada?</label> <input type="text" value="' +
            res.data.fumaAntes +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label>1.6 ¿Actualmente consume bebidas alcoholicas?</label> <input type="text" value="' +
            res.data.alcoholActual +
            '" class="form-control" readonly> </div> </div> <hr /> <label>1.7 ¿Estuvo embarazada antes?</label> <input type="text" value="' +
            res.data.embarazoAntes +
            '" class="form-control" readonly> <div class="form-group"> <div> <small>Si contesta afirmativamente:</small> </div> <label for="cuantosEmbarazosAntes">¿Cuántas veces?</label> <input type="number" value="' +
            res.data.cuantosEmbarazoAntes +
            '" class="form-control" readonly> </div> <hr /> <label>1.8 ¿Tiene hijos?</label> <input type="text" value="' +
            res.data.hijos +
            '" class="form-control" readonly> <div class="form-group"> <div> <small>Si contesta afirmativamente:</small> </div> <label for="cuantosHijos">¿Cuántos?</label> <input type="number" value="' +
            res.data.cuantosHijos +
            '" class="form-control" readonly> </div> <hr /> <div class="form-group"> <label for="observacionesBloque1">Observaciones</label> <input type="text" value="' +
            res.data.observacionesBloque1 +
            '" class="form-control" readonly> </div> </div> </div> <div class="card"> <h4 class="card-header text-center">Bloque 2. Datos socio-ambientales</h4> <div class="card-body"> <h6 class="card-title">Ahora le voy a preguntar sobre algunos datos sobre el lugar donde vive, con quiénes vive y los ingresos que reciben.</h6> <hr /> <div class="form-row"> <div class="form-group col-md-6"> <label for="pais">2.1 ¿En que pais nació?</label> <input type="text" value="' +
            res.data.pais +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="provincia">2.2 ¿En que provincia nació?</label> <input type="text" value="' +
            res.data.provincia +
            '" class="form-control" readonly> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="personasVivienda">2.3 ¿Cuántas personas viven normalmente en su vivienda?</label> <input type="number" value="' +
            res.data.personasVivienda +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="habitacionesVivienda">2.4 ¿Cuántas habitaciones tiene su vivienda?</label> <input type="number" value="' +
            res.data.habitacionesVivienda +
            '" class="form-control" readonly> </div> </div> <hr /> <div class="form-row"> <div class="form-group col-md-6"> <label for="desagueCloaca">2.5 ¿El desague del inodoro tiene conexión a cloaca?</label> <input type="text" value="' +
            res.data.desagueCloaca +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="aguaPotable">2.6 ¿Tiene conexión a la red de agua potable dentro de su vivienda?</label> <input type="text" value="' +
            res.data.aguaPotable +
            '" class="form-control" readonly> </div> </div> <hr /> <div class="form-row"> <div class="form-group col-md-6"> <label for="redElectrica">2.7 ¿Tiene conexión a la red eléctrica en su vivienda?</label> <input type="text" value="' +
            res.data.redElectrica +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="gasNatural">2.8 ¿Utiliza gas natural para cocinar?</label> <input type="text" value="' +
            res.data.gasNatural +
            '" class="form-control" readonly> </div> </div> <hr /> <div class="form-row"> <div class="form-group col-md-6"> <label for="nivelEducativo">2.9 ¿Cuál es el nivel educativo máximo que ha alcanzado?</label> <input type="text" value="' +
            res.data.nivelEducativo +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="empleo">2.10 Respecto a su empleo, actualmente se encuentra:</label> <input type="text" value="' +
            res.data.empleo +
            '" class="form-control" readonly> </div> </div> <hr /> <div class="form-group"> <label for="asistenciaEstado">2.11 ¿Recibe alguna asistencia económica del estado?</label> <input type="text" value="' +
            res.data.asistenciaEstado +
            '" class="form-control" readonly> </div> <div class="form-group"> <div> <small>Si contesta afirmativamente:</small> </div> <label for="cualAsistenciaEstado">¿Cuál?</label> <input type="text" value="' +
            res.data.cualAsistenciaEstado +
            '" class="form-control" readonly> </div> <hr /> <form> <label>2.12 En el último mes recibio:</label> <div class="form-row"> <div class="form-group col-md-6"> <label for="recibioBolson">¿Bolsón o caja de alimentos?</label> <input type="text" value="' +
            res.data.recibioBolson +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="recibioTickets">¿Tickets o bonos para la compra de alimentos?</label> <input type="text" value="' +
            res.data.recibioTickets +
            '" class="form-control" readonly> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="recibioTarjeta">¿Tarjeta alimentar?</label> <input type="text" value="' +
            res.data.recibioTarjeta +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="recibioLeche">¿Leche fluida o en polvo?</label> <input type="text" value="' +
            res.data.recibioLeche +
            '" class="form-control" readonly> </div> </div> <label for="recibioOtra">¿Otra forma de asistencia alimentaria?</label> <input type="text" value="' +
            res.data.recibioOtra +
            '" class="form-control" readonly> <div class="form-group"> <div> <small>Si contesta afirmativamente:</small> </div> <label for="cualUltimoMesRecibio">¿Cúal?</label> <input type="text" value="' +
            res.data.cualUltimoMesRecibio +
            '" class="form-control" readonly> </div> </form> <hr /> <div class="form-row"> <div class="form-group col-md-6"> <label for="ingresoIndividual">2.13 ¿Podría indicar cuál de estos tramos se ubica su ingreso individual en el hogar el último mes en pesos?</label> <input type="text" value="' +
            res.data.ingresoIndividual +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="ingresoTotal">2.14 ¿Podría indicar en cuál de estos tramos se ubica el ingreso total mensual del hogar en pesos?</label> <input type="text" value="' +
            res.data.ingresoTotal +
            '" class="form-control" readonly> </div> </div> <div class="form-group"> <label for="recibioIFE">2.15 Durante la pandemia, ¿el hogar recibió el IFE?</label> <input type="text" value="' +
            res.data.recibioIFE +
            '" class="form-control" readonly> </div> <hr /> <hr /> <div class="form-group"> <label for="observacionesBloque2">Observaciones</label> <input type="text" value="' +
            res.data.observacionesBloque2 +
            '" class="form-control" readonly> </div> </div> </div> <div class="card"> <h4 class="card-header text-center">Bloque 3. Antropometría embarazada</h4> <div class="card-body"> <h6 class="card-title">Ahora vamos a hacer algunas mediciones para conocer su peso, su altura y otros datos de su composición corporal.</h6> <hr /> <div class="form-row"> <div class="form-group col-md-4"> <label for="peso">3.1 Peso (kg)</label> <input type="number" :step="0.1" value="' +
            res.data.pesoKG +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="ropa">Ropa</label> <input type="text" value="' +
            res.data.ropaAlPesar +
            '" class="form-control" readonly> <small>Especificar la ropa que tiene puesta al momento de tomar el peso.</small> </div> <div class="form-group col-md-4"> <label for="talla">3.2 Talla (cm)</label> <input type="number" value="' +
            res.data.talla +
            '" class="form-control" readonly> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="tallaSentada">3.3 Talla sentada (cm)</label> <input type="number" value="' +
            res.data.tallaSentada +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="perimetroBraquial">3.4 Perímetro braquial (cm)</label> <input type="number" value="' +
            res.data.perimetroBraquial +
            '" class="form-control" readonly> <small> Las mediciones entre 3.4 y 3.8 tomarlas del lado derecho del cuerpo. </small> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="pliegueTricipal">3.5 Pliegue tricipal (cm)</label> <input type="number" value="' +
            res.data.pliegueTricipital +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="pliegueBicipal">3.6 Pliegue bicipal (cm)</label> <input type="number" value="' +
            res.data.pliegueBicipital +
            '" class="form-control" readonly> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="pliegueSubescapular">3.7 Pliegue subescapular (cm)</label> <input type="number" value="' +
            res.data.pliegueSubescapular +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="pliegueSuprailiaco">3.8 Pliegue suprailíaco (cm)</label> <input type="number" value="' +
            res.data.pliegueSuprailiaco +
            '" class="form-control" readonly> </div> </div> <div class="form-group"> <label for="observacionesBloque3">Observaciones</label> <input type="text" value="' +
            res.data.observacionesBloque3 +
            '" class="form-control" readonly> </div> </div> </div> <div class="card"> <h4 class="card-header text-center">Bloque 4. Inseguridad alimentaria y datos nutricionales.</h4> <div class="card-body"> <h6 class="card-title">Ahora vamos a hacer algunas preguntas sobre las comidas y sus hábitos alimentarios.</h6> <hr /> <h5 class="card-title">Cuestionario Escala Inseguridad Alimentaria basada en la Experiencia</h5> <small>Durante los últimos doce meses, ha habido algún momento en que:</small> <div class="form-group"> </div> <form> <div class="form-row"> <div class="form-group col-md-6"> <label for="preocupadoSuficienteAlimentos">4.1 ¿Usted se haya preocupado por no tener suficientes alimentos para comer por falta de dinero u otros recursos?</label> <input type="text" value="' +
            res.data.preocupadoSuficienteAlimentos +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="podidoAlimentos">4.2 ¿Hubo alguna vez en que usted no haya podido comer alimentos saludables y nutritivos por falta de dinero u otros recursos?</label> <input type="text" value="' +
            res.data.podidoAlimentos +
            '" class="form-control" readonly> </div> </div> </form> <hr /> <form> <div class="form-row"> <div class="form-group col-md-6"> <label for="comidoPocaVariedad">4.3 ¿Hubo alguna vez en que usted haya comido poca variedad de alimentos por falta de dinero u otros recursos?</label> <input type="text" value="' +
            res.data.comidoPocaVariedad +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="dejarDesayunoAlmuerzoCena">4.4 ¿Hubo alguna vez en que usted haya tenido que dejar de desayunar, almorzar o cenar porque no había suficiente dinero u otros recursos para obtener alimentos?</label> <input type="text" value="' +
            res.data.dejarDesayunoAlmuerzoCena +
            '" class="form-control" readonly> </div> </div> </form> <hr /> <form> <div class="form-row"> <div class="form-group col-md-6"> <label for="comidoMenos">4.5 ¿Hubo alguna vez en que usted haya comido menos de lo que pensaba que debía comer por falta de dinero u otros recursos?</label> <input type="text" value="' +
            res.data.comidoMenos +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="sinAlimentos">4.6 ¿Hubo alguna vez en que su hogar se haya quedado sin alimentos por falta de dinero u otros recursos?</label> <input type="text" value="' +
            res.data.sinAlimentos +
            '" class="form-control" readonly> </div> </div> </form> <hr /> <form> <div class="form-row"> <div class="form-group col-md-6"> <label for="sentidoHambre">4.7 ¿Hubo alguna vez en que usted haya sentido hambre pero no comió porque no había suficiente dinero u otros recursos para obtener alimentos?</label> <input type="text" value="' +
            res.data.sentidoHambre +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="dejadoComer">4.8 ¿Hubo alguna vez en que usted haya dejado de comer todo un día por falta de dinero u otros recursos?</label> <input type="text" value="' +
            res.data.dejadoComer +
            '" class="form-control" readonly> </div> </div> <div class="form-group"> <label for="observacionesBloque4Parte1">Observaciones</label> <input type="text" value="' +
            res.data.observacionesBloque4Parte1 +
            '" class="form-control" readonly> </div> </div> </div> <div class="card"> <h4 class="card-header text-center">Bloque 4. Inseguridad alimentaria y datos nutricionales (continuación)</h4> <div class="card-body"> <h5 class="card-title">4.9 Recordatorio 24 horas</h5> <hr /> <p>Ahora necesito que me cuente qué comió durante todo el día de ayer, desde la mañana hasta la noche.</p> <div class="card"> <div class="card-body"> ' +
            recordatorios1y2Trimestre +
            ' </div> </div> <div class="form-group"> <label for="observacionesBloque4Parte2">Observaciones</label> <input type="text" value="' +
            res.data.observacionesBloque4Parte2 +
            '" class="form-control" readonly> </div> </div> </div> <div class="card"> <h4 class="card-header text-center">Bloque 4. Inseguridad alimentaria y datos nutricionales (continuación)</h4> <div class="card-body"> <h6 class="card-title">Ahora vamos a hacer algunas preguntas sobre las comidas y sus hábitos alimentarios.</h6> <hr /> <h5 class="card-title">Historia alimentaria (comidas semanales)</h5> <small>Durante los últimos 7 dias, cuántas veces realizó las siguientes comidas:</small> <div class="form-group"> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="desayuno">4.10 Desayuno (veces)</label> <input type="number" value="' +
            res.data.desayuno +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="almuerzo">4.11 Almuerzo (veces)</label> <input type="number" value="' +
            res.data.almuerzo +
            '" class="form-control" readonly> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="merienda">4.12 Merienda (veces)</label> <input type="number" value="' +
            res.data.merienda +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="cena">4.13 Cena (veces)</label> <input type="number" value="' +
            res.data.cena +
            '" class="form-control" readonly> </div> </div> <div class="form-group"> <label for="frecuenciaConsumo">4.14 Durante los últimos 7 días, ¿con que frecuencia consumió algún alimento o bebida en otros momentos del día?</label> <input type="text" value="' +
            res.data.frecuenciaConsumo +
            '" class="form-control" readonly> <small>Solo en caso de responder afirmativamente la pregunta 4.14, pasar a la 4.15.</small> </div> <fieldset class="form-group"> <div class="form-group"> <label for="alimentoBebidas">4.15 Durante los últimos 7 días ¿Qué alimentos/bebidas consumió en esas ocasiones fuera de las comidas principales?</label> <div class="form-row"> <label for="golosinas">Golosinas, dulces, galletitas dulces, amasados de pastelería, facturas, cereales con azúcar</label> <input type="text" value="' +
            res.data.golosinas +
            '" class="form-control" readonly> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="panBlanco">Pan blanco, galletitas saladas</label> <input type="text" value="' +
            res.data.panBlanco +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="pan">Pan y otros cereales integrales, semillas</label> <input type="text" value="' +
            res.data.pan +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="copetin">Productos de copetín o snacks salados</label> <input type="text" value="' +
            res.data.copetin +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="frutas">Frutas</label> <input type="text" value="' +
            res.data.frutas +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="lacteos">Lácteos (leche, yogurt o quesos)</label> <input type="text" value="' +
            res.data.lacteos +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="bebidas">Bebidas azucaradas (jugos, gaseosas, infusiones con azúcar, etc)</label> <input type="text" value="' +
            res.data.bebidas +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="otros">Otros</label> <input type="text" value="' +
            res.data.otros +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="nsnc">NS/NC</label> <input type="text" value="' +
            res.data.nsnc +
            '" class="form-control" readonly> </div> </div> </div> </fieldset> <hr /> <div class="form-group"> <label for="observacionesBloque4Parte3">Observaciones</label> <input type="text" value="' +
            res.data.observacionesBloque4Parte3 +
            '" class="form-control" readonly> </div> </div> </div> <div class="card"> <h4 class="card-header text-center">Bloque 4. Inseguridad alimentaria y datos nutricionales (continuación)</h4> <div class="card-body"> <h6 class="card-title">Ahora vamos a hacer algunas preguntas sobre las comidas y sus hábitos alimentarios.</h6> <hr /> <h5 class="card-title">Historia alimentaria (Alimentos últimos 3 meses)</h5> <small>En general, tomando como referencia los últimos tres meses, ¿cuántas veces al mes consumió...</small> <div class="form-group"> </div> <div class="form-row"> <label for="consumioLeche">4.16. ... leche, yogur o quesos?</label> <input type="text" value="' +
            res.data.consumioLeche +
            '" class="form-control" readonly> <label for="consumioFrutasFrescas">4.17. ... frutas frescas (solas o en preparaciones)?</label> <input type="text" value="' +
            res.data.consumioFrutasFrescas +
            '" class="form-control" readonly> </div> <div class="form-row"> <label for="consumioVerduras">4.18. ...verduras (solas o en preparaciones) sin contar papa y batata?</label> <input type="text" value="' +
            res.data.consumioVerduras +
            '" class="form-control" readonly> <label for="consumioPapa">4.19. ... papa, batata, cereales refinados como arroz blanco, pastas, tartas, empanadas o pan blanco?</label> <input type="text" value="' +
            res.data.consumioPapa +
            '" class="form-control" readonly> </div> <div class="form-row"> <label for="consumioCereales">4.20. ...cereales integrales, legumbres (por ejemplo lentejas, garbanzos, porotos) o pan integral o de salvado?</label> <input type="text" value="' +
            res.data.consumioCereales +
            '" class="form-control" readonly> <label for="consumioEmbutidos">4.21. ... embutidos y fiambres (jamón, salame, chorizo, salchicha, etc)?</label> <input type="text" value="' +
            res.data.consumioEmbutidos +
            '" class="form-control" readonly> </div> <hr /> <div class="form-row"> <label for="observacionesBloque4Parte4">Observaciones</label> <input type="text" value="' +
            res.data.observacionesBloque4Parte4 +
            '" class="form-control" readonly> </div> </div> </div> <div class="card"> <h4 class="card-header text-center">Bloque 4. Inseguridad alimentaria y datos nutricionales (continuación)</h4> <div class="card-body"> <h5 class="card-title">Historia alimentaria (Alimentos últimos 3 meses)</h5> <small>En general, tomando como referencia los últimos tres meses, ¿cuántas veces al mes consumió...</small> <div class="form-group"> </div> <div class="form-row"> <label for="consumioCarne">4.22. ... carne roja (por ejemplo de vaca), carne de ave o huevos?</label> <input type="text" value="' +
            res.data.consumioCarne +
            '" class="form-control" readonly> <label for="consumioPescado">4.23. ... pescado fresco o enlatado?</label> <input type="text" value="' +
            res.data.consumioPescado +
            '" class="form-control" readonly> </div> <div class="form-row"> <label for="consumioAceites">4.24. ... aceites vegetales (como girasol, maíz, soja, girasol alto oleico, oliva y canola)?</label> <input type="text" value="' +
            res.data.consumioAceites +
            '" class="form-control" readonly> <label for="consumioFrutasSecas">4.25. ... frutas secas sin salar (como maní, nueces, almendras, avellanas, castañas, etc.) o semillas sin salar (chía, girasol, sésamo, lino, etc.)?</label> <input type="text" value="' +
            res.data.consumioFrutasSecas +
            '" class="form-control" readonly> </div> <div class="form-row"> <label for="consumioProductosCopetin">4.26. ... productos de copetín (papas fritas, palitos de maíz, etc.)?</label> <input type="text" value="' +
            res.data.consumioProductosCopetin +
            '" class="form-control" readonly> </div> <div class="form-row"> <label for="consumioGolosinas">4.27. ... golosinas (caramelos, alfajores, chupetines, chicles, barras de cereal, etc.)?</label> <input type="text" value="' +
            res.data.consumioGolosinas +
            '" class="form-control" readonly> </div> </div> <hr /> <div class="form-group"> <label for="observacionesBloque4Parte5">Observaciones</label> <input type="text" value="' +
            res.data.observacionesBloque4Parte5 +
            '" class="form-control" readonly> </div> </div> </div> </form>',
          focusConfirm: false,
          showConfirmButton: true,
          width: 1300,
          confirmButtonText: "Cerrar",
        });
      } else if (encuesta.tipoEncuesta == "Tercer trimestre") {
        res = await this.axios.get(
          `${this.baseUrl}/encuestas3Trimestre/` + encuesta._id
        );
        var recordatorios3Trimestre = "";
        for (var i = 0; i < res.data.recordatorio24Horas.length; i++) {
          recordatorios3Trimestre +=
            "<b>Hora del día: </b>" +
            res.data.recordatorio24Horas[i].horaDia +
            ", <b>Tipo de alimento: </b>" +
            res.data.recordatorio24Horas[i].tipoAlimento +
            ",<b> Cantidad: </b>" +
            res.data.recordatorio24Horas[i].cantidad +
            "<br/>";
        }
        // Alerta que se activa al abrir una encuesta del tercer trimestre
        await Swal.fire({
          title: "Encuesta Tercer Trimestre",
          html:
            '<form> <div class="card"> <h4 class="card-header text-center">Bloque 0. Datos de los encuestadores y las embarazadas</h4> <div class="card-body"> <h5 class="card-title">Datos Encuestador</h5> <hr/> <div class="form-row"> <div class="form-group col-md-4"> <label for="inputNyAEncuestador1">Nombre y apellido Encuestador 1</label> <input type="text" value="' +
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
            '" class="form-control" readonly> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="fechaRelevamiento">Fecha del relevamiento</label> <input type="date" value="' +
            res.data.fechaRelevamiento +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="lugarRelevamiento">Lugar del relevamiento</label> <input type="text" value="' +
            res.data.lugarRelevamiento +
            '" class="form-control" readonly> </div> </div> <h5 class="card-title">Embarazadas 3er trimestre</h5> <hr/> <div class="form-row"> <div class="form-group col-md-4"> <label for="inputNyAEmbarazada">Nombre y apellido</label> <input type="text" value="' +
            res.data.nombreApellido +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="DNIEmbarazada">DNI</label> <input type="number" value="' +
            res.data.dni +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="FechaNacimiento">Fecha de nacimiento</label> <input type="date" value="' +
            res.data.fechaNacimiento +
            '" class="form-control" readonly> </div> </div> <div class="form-group"> <label for="domicilio">Domicilio/barrio</label> <input type="text" value="' +
            res.data.domicilioBarrio +
            '" class="form-control" readonly> </div> <div class="form-row"> <div class="form-group col-md-4"> <label for="telefonoEmbarazada">Teléfono</label> <input type="number" value="' +
            res.data.telefono +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="ultimaMenstruacion">Fecha de última menstruación</label> <input type="date" value="' +
            res.data.fechaUltimaMenstruacion +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="SemanasGestación">Semanas de gestación</label> <input type="number" value="' +
            res.data.semanasGestacion +
            '" class="form-control" readonly> </div> </div> <div class="form-group"> <label for="observacionesBloque0">Observaciones</label> <input type="text" value="' +
            res.data.observacionesBloque0 +
            '" class="form-control" readonly> </div> </div> </div> <div class="card"> <h4 class="card-header text-center">Bloque 3. Antropometría embarazada</h4> <div class="card-body"> <h6 class="card-title">Ahora vamos a hacer algunas mediciones para conocer su peso, su altura y otros datos de su composición corporal.</h6> <hr/> <div class="form-row"> <div class="form-group col-md-4"> <label for="peso">3.1 Peso (kg)</label> <input type="number" :step="0.1" value="' +
            res.data.pesoKG +
            '" class="form-control" readonly> </div> <div class="form-group col-md-4"> <label for="ropa">Ropa</label> <input type="text" value="' +
            res.data.ropaAlPesar +
            '" class="form-control" readonly> <small>Especificar la ropa que tiene puesta al momento de tomar el peso.</small> </div> <div class="form-group col-md-4"> <label for="talla">3.2 Talla (cm)</label> <input type="number" value="' +
            res.data.talla +
            '" class="form-control" readonly> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="tallaSentada">3.3 Talla sentada (cm)</label> <input type="number" value="' +
            res.data.tallaSentada +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="perimetroBraquial">3.4 Perímetro braquial (cm)</label> <input type="number" value="' +
            res.data.perimetroBraquial +
            '" class="form-control" readonly> <small> Las mediciones entre 3.4 y 3.8 tomarlas del lado derecho del cuerpo. </small> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="pliegueTricipital">3.5 Pliegue tricipital (cm)</label> <input type="number" value="' +
            res.data.pliegueTricipital +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="pliegueBicipital">3.6 Pliegue bicipital (cm)</label> <input type="number" value="' +
            res.data.pliegueBicipital +
            '" class="form-control" readonly> </div> </div> <div class="form-row"> <div class="form-group col-md-6"> <label for="pliegueSubescapular">3.7 Pliegue subescapular (cm)</label> <input type="number" value="' +
            res.data.pliegueSubescapular +
            '" class="form-control" readonly> </div> <div class="form-group col-md-6"> <label for="pliegueSuprailíaco">3.8 Pliegue suprailíaco (cm)</label> <input type="number" value="' +
            res.data.pliegueSuprailiaco +
            '" class="form-control" readonly> </div> </div> <div class="form-group"> <label for="observacionesBloque3">Observaciones</label> <input type="text" value="' +
            res.data.observacionesBloque3 +
            '" class="form-control" readonly> </div> </div> </div> <div class="card"> <h4 class="card-header text-center">Bloque 4. Inseguridad alimentaria y datos nutricionales (continuación)</h4> <div class="card-body"> <h5 class="card-title">4.9 Recordatorio 24 horas</h5> <hr/> <p>Ahora necesito que me cuente qué comió durante todo el día de ayer, desde la mañana hasta la noche.</p> <div class="card"> <div class="card-body"> ' +
            recordatorios3Trimestre +
            ' </div> </div> <div class="form-group"> <label for="observacionesBloque4">Observaciones</label> <input type="text" value="' +
            res.data.observacionesBloque4 +
            '" class="form-control" readonly> </div> </div> </div> </form>',
          focusConfirm: false,
          showConfirmButton: true,
          width: 1300,
          confirmButtonText: "Cerrar",
        });
      } else {
        res = await this.axios.get(
          `${this.baseUrl}/encuestasNeonato/` + encuesta._id
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
      }
    },
  },
};
</script>
