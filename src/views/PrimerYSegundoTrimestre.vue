<template>
  <div>
    <h2>
      <span>Primer y Segundo Trimestre</span>
    </h2>
    <hr/>
    <div class="container">
      <!-- <div class="row">
        <div class="col text-left">
          <button @click="btnAlta" class="btn btn-info" title="Nuevo">
            <i class="fas fa-plus fa-1x"></i>&nbsp;&nbsp;Agregar encuesta
          </button>
        </div>
      </div> -->
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
                  <input type="email" v-model="encuesta.emailEncuestador1" class="form-control" placeholder="email@example.com">
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
                <input type="email" v-model="encuesta.emailEncuestador2" class="form-control" placeholder="email@example.com">
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
              <h5 class="card-title">Embarazadas 1er y 2do trimestre</h5>
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
                <label for="fechaMenstruacion">Fecha de última menstruacion</label>
                <input type="date" v-model="encuesta.fechaUltimaMenstruacion" class="form-control" >
                </div>
                <div class="form-group col-md-4">
                <label for="semanasGestacionEmbarazada">Semanas de gestación</label>
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
            <h4 class="card-header text-center">Bloque 1. Antecedentes de salud</h4>
            <div class="card-body">
              <h6 class="card-title">Ahora le voy a preguntar sobre algunos datos sobre su salud, las enfermedades que ha tenido o tiene y algunos hábitos.</h6>
              <hr/>
              <form>
              <label >1.1 ¿Ha sido diagnosticada con alguna de las siguientes enfermedades?</label>
                <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">Diabetes</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.diabetes" id="diabetes1" value="Si">
                        <label class="form-check-label" for="diabetes">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.diabetes" id="diabetes2" value="No">
                        <label class="form-check-label" for="diabetes">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.diabetes" id="diabetes3" value="NS/NC">
                        <label class="form-check-label" for="diabetes">
                          NS/NC
                        </label>
                      </div>
                  </div>
                  <div class="col-7">
                    <legend class="col-form-label">Enfermedad renal</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.enfermedadRenal" id="enfermedadRenal1" value="Si">
                        <label class="form-check-label" for="enfermedadRenal">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.enfermedadRenal" id="enfermedadRenal2" value="No">
                        <label class="form-check-label" for="enfermedadRenal">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.enfermedadRenal" id="enfermedadRenal3" value="NS/NC">
                        <label class="form-check-label" for="enfermedadRenal">
                          NS/NC
                        </label>
                      </div>
                  </div>
                  <div class="col-7">
                    <legend class="col-form-label">Hipertension</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.hipertension" id="hipertension1" value="Si">
                        <label class="form-check-label" for="hipertension">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.hipertension" id="hipertension2" value="No">
                        <label class="form-check-label" for="hipertension">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.hipertension" id="hipertension3" value="NS/NC">
                        <label class="form-check-label" for="hipertension">
                          NS/NC
                        </label>
                      </div>
                  </div>
                  <div class="col-7">
                    <legend class="col-form-label">Colesterol - Trigliceridos altos</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.colesterolTrigliceridosAltos" id="colesterol1" value="Si">
                        <label class="form-check-label" for="colesterol">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.colesterolTrigliceridosAltos" id="colesterol2" value="No">
                        <label class="form-check-label" for="colesterol">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.colesterolTrigliceridosAltos" id="colesterol3" value="NS/NC">
                        <label class="form-check-label" for="colesterol">
                          NS/NC
                        </label>
                      </div>
                  </div>
                  <div class="col-7">
                    <legend class="col-form-label">Asma o EPOC</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.asmaEPOC" id="asma1" value="Si">
                        <label class="form-check-label" for="asma">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.asmaEPOC" id="asma2" value="No">
                        <label class="form-check-label" for="asma">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.asmaEPOC" id="asma3" value="NS/NC">
                        <label class="form-check-label" for="asma">
                          NS/NC
                        </label>
                      </div>
                  </div>
                  <div class="col-7">
                    <legend class="col-form-label">COVID-19</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.covid19" id="covid1" value="Si">
                        <label class="form-check-label" for="covid">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.covid19" id="covid2" value="No">
                        <label class="form-check-label" for="covid">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.covid19" id="covid3" value="NS/NC">
                        <label class="form-check-label" for="covid">
                          NS/NC
                        </label>
                      </div>
                  </div>
                  <div class="col-7">
                    <legend class="col-form-label">Anemia</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.anemia" id="anemia1" value="Si">
                        <label class="form-check-label" for="anemia">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.anemia" id="anemia2" value="No">
                        <label class="form-check-label" for="anemia">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.anemia" id="anemia3" value="NS/NC">
                        <label class="form-check-label" for="anemia">
                          NS/NC
                        </label>
                      </div>
                  </div>
                  <div class="col-7">
                    <legend class="col-form-label">¿Otra enfermedad crónica?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.enfermedadCronica" id="enfermedadCronica1" value="Si">
                        <label class="form-check-label" for="enfermedadCronica">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.enfermedadCronica" id="enfermedadCronica2" value="No">
                        <label class="form-check-label" for="enfermedadCronica">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.enfermedadCronica" id="enfermedadCronica3" value="NS/NC">
                        <label class="form-check-label" for="enfermedadCronica">
                          NS/NC
                        </label>
                      </div>
                  </div>
                </div>
                <div class="form-group">
                <div>
                <small>Si contesta afirmativamente:</small>
                </div>
                <label for="cualEnfermedadCronica">¿Cúal?</label>
                <input type="text" v-model="encuesta.cualEnfermedadCronica" class="form-control" >
              </div>
              </form>
              <hr/>
              <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">1.2 ¿Consume algún medicamento?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.consumeMedicamento" id="consumeMedicamento1" value="Si">
                        <label class="form-check-label" for="consumeMedicamento">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.consumeMedicamento" id="consumeMedicamento2" value="No">
                        <label class="form-check-label" for="consumeMedicamento">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.consumeMedicamento" id="consumeMedicamento3" value="NS/NC">
                        <label class="form-check-label" for="consumeMedicamento">
                          NS/NC
                        </label>
                      </div>
                  </div>
                </div>
                <div class="form-group">
                <div>
                <small>Si contesta afirmativamente:</small>
                </div>
                <label for="observacionesBloque0">¿Cúal?</label>
                <input type="text" v-model="encuesta.cualConsumeMedicamento" class="form-control" >
                </div>
              <hr/>
              <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">1.3 Antes o durante el embarazo, ¿consumió algún complejo vitaminico o suplemento?</legend>
                    <small>Aquí se puede ejemplificar preguntando por suplementación de hierro, ácido folico, vitamina D.</small>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.consumeComplejoVitaminicoSuplemento" id="consumeComplejoVitaminicoSuplemento1" value="Si">
                        <label class="form-check-label" for="consumeComplejoVitaminicoSuplemento">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.consumeComplejoVitaminicoSuplemento" id="consumeComplejoVitaminicoSuplemento2" value="No">
                        <label class="form-check-label" for="consumeComplejoVitaminicoSuplemento">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.consumeComplejoVitaminicoSuplemento" id="consumeComplejoVitaminicoSuplemento3" value="NS/NC">
                        <label class="form-check-label" for="consumeComplejoVitaminicoSuplemento">
                          NS/NC
                        </label>
                      </div>
                  </div>
                </div>
                <div class="form-group">
                <div>
                <small>Si contesta afirmativamente:</small>
                </div>
                <label for="cualConsumeComplejoVitaminicoSuplemento">¿Cúal?</label>
                <input type="text" v-model="encuesta.cualConsumeComplejoVitaminicoSuplemento" class="form-control" >
                </div>
              <hr/>
              <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">1.4 ¿Actualmente fuma?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.fumaActual" id="fumaActual1" value="No, nunca">
                        <label class="form-check-label" for="fumaActual">
                          No, nunca
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.fumaActual" id="fumaActual2" value="Algunas veces">
                        <label class="form-check-label" for="fumaActual">
                          Algunas veces
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.fumaActual" id="fumaActual3" value="Todos los dias">
                        <label class="form-check-label" for="fumaActual">
                          Todos los dias
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.fumaActual" id="fumaActual4" value="NS/NC">
                        <label class="form-check-label" for="fumaActual">
                          NS/NC
                        </label>
                      </div>
                  </div>
                </div>
                <hr/>
                <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">1.5 ¿Fumaba antes de estar embarazada?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.fumaAntes" id="fumaAntes1" value="No, nunca">
                        <label class="form-check-label" for="fumaAntes">
                          No, nunca
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.fumaAntes" id="fumaAntes2" value="Algunas veces">
                        <label class="form-check-label" for="fumaAntes">
                          Algunas veces
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.fumaAntes" id="fumaAntes3" value="Todos los dias">
                        <label class="form-check-label" for="fumaAntes">
                          Todos los dias
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.fumaAntes" id="fumaAntes4" value="NS/NC">
                        <label class="form-check-label" for="fumaAntes">
                          NS/NC
                        </label>
                      </div>
                  </div>
                </div>
                <hr/>
                <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">1.6 ¿Actualmente consume bebidas alcoholicas?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.alcoholActual" id="alcoholActual1" value="No, nunca">
                        <label class="form-check-label" for="alcoholActual">
                          No, nunca
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.alcoholActual" id="alcoholActual2" value="Algunas veces">
                        <label class="form-check-label" for="alcoholActual">
                          Algunas veces
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.alcoholActual" id="alcoholActual3" value="Todos los dias">
                        <label class="form-check-label" for="alcoholActual">
                          Todos los dias
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.alcoholActual" id="alcoholActual4" value="NS/NC">
                        <label class="form-check-label" for="alcoholActual">
                          NS/NC
                        </label>
                      </div>
                  </div>
                </div>
                <hr/>
                <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">1.7 ¿Estuvo embarazada antes?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.embarazoAntes" id="embarazoAntes1" value="Si">
                        <label class="form-check-label" for="embarazoAntes">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.embarazoAntes" id="embarazoAntes2" value="No">
                        <label class="form-check-label" for="embarazoAntes">
                          No
                        </label>
                      </div>
                  </div>
                </div>
                <div class="form-group">
                <div>
                <small>Si contesta afirmativamente:</small>
                </div>
                <label for="cuantosEmbarazosAntes">¿Cuántas veces?</label>
                <input type="number" v-model="encuesta.cuantosEmbarazoAntes" class="form-control" >
                </div>
              <hr/>
                <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">1.8 ¿Tiene hijos?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.hijos" id="hijos1" value="Si">
                        <label class="form-check-label" for="hijos">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.hijos" id="hijos2" value="No">
                        <label class="form-check-label" for="hijos">
                          No
                        </label>
                      </div>
                  </div>
                </div>
                <div class="form-group">
                <div>
                <small>Si contesta afirmativamente:</small>
                </div>
                <label for="cuantosHijos">¿Cuántos?</label>
                <input type="number" v-model="encuesta.cuantosHijos" class="form-control" >
                </div>
              <hr/>
              <div class="form-group">
                <label for="observacionesBloque1">Observaciones</label>
                <input type="text" v-model="encuesta.observacionesBloque1" class="form-control" >
              </div>
            </div>
          </div>
          <div class="card">
            <h4 class="card-header text-center">Bloque 2. Datos socio-ambientales</h4>
            <div class="card-body">
              <h6 class="card-title">Ahora le voy a preguntar sobre algunos datos sobre el lugar donde vive, con quiénes vive y los ingresos que reciben.</h6>
              <hr/>
              <div class="form-row">                             
                <div class="form-group col-md-6">
                <label for="pais">2.1 ¿En que pais nació?</label>
                <input type="text" v-model="encuesta.pais" class="form-control" >
                </div>
                <div class="form-group col-md-6">
                <label for="provincia">2.2 ¿En que provincia nació?</label>
                <input type="text" v-model="encuesta.provincia" class="form-control" >
                </div>
              </div>
              <div class="form-row">                             
                <div class="form-group col-md-6">
                <label for="personasVivienda">2.3 ¿Cuántas personas viven normalmente en su vivienda?</label>
                <input type="number" v-model="encuesta.personasVivienda" class="form-control" >
                </div>
                <div class="form-group col-md-6">
                <label for="habitacionesVivienda">2.4 ¿Cuántas habitaciones tiene su vivienda?</label>
                <input type="number" v-model="encuesta.habitacionesVivienda" class="form-control" >
                </div>
              </div>
              <hr/>
              <div class="form-row">
                <div class="col-7">
                  <legend class="col-form-label">2.5 ¿El desague del inodoro tiene conexión a cloaca?</legend>
                </div>
                <div class="col">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="encuesta.desagueCloaca" id="desagueCloaca1" value="Si">
                      <label class="form-check-label" for="desagueCloaca">
                        Si
                      </label>
                    </div>
                </div>
                <div class="col">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="encuesta.desagueCloaca" id="desagueCloaca2" value="No">
                      <label class="form-check-label" for="desagueCloaca">
                        No
                      </label>
                    </div>
                </div>
                <div class="col">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="encuesta.desagueCloaca" id="desagueCloaca3" value="NS/NC">
                      <label class="form-check-label" for="desagueCloaca">
                        NS/NC
                      </label>
                    </div>
                </div>
              </div>
              <hr/>
              <div class="form-row">
                <div class="col-7">
                  <legend class="col-form-label">2.6 ¿Tiene conexión a la red de agua potable dentro de su vivienda?</legend>
                </div>
                <div class="col">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="encuesta.aguaPotable" id="aguaPotable1" value="Si">
                      <label class="form-check-label" for="aguaPotable">
                        Si
                      </label>
                    </div>
                </div>
                <div class="col">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="encuesta.aguaPotable" id="aguaPotable2" value="No">
                      <label class="form-check-label" for="aguaPotable">
                        No
                      </label>
                    </div>
                </div>
                <div class="col">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="encuesta.aguaPotable" id="aguaPotable3" value="NS/NC">
                      <label class="form-check-label" for="aguaPotable">
                        NS/NC
                      </label>
                    </div>
                </div>
              </div>
              <hr/>
              <div class="form-row">
                <div class="col-7">
                  <legend class="col-form-label">2.7 ¿Tiene conexión a la red eléctrica en su vivienda?</legend>
                </div>
                <div class="col">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="encuesta.redElectrica" id="redElectrica1" value="Si">
                      <label class="form-check-label" for="redElectrica">
                        Si
                      </label>
                    </div>
                </div>
                <div class="col">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="encuesta.redElectrica" id="redElectrica2" value="No">
                      <label class="form-check-label" for="redElectrica">
                        No
                      </label>
                    </div>
                </div>
                <div class="col">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="encuesta.redElectrica" id="redElectrica3" value="NS/NC">
                      <label class="form-check-label" for="redElectrica">
                        NS/NC
                      </label>
                    </div>
                </div>
              </div>
              <hr/>
              <div class="form-row">
                <div class="col-7">
                  <legend class="col-form-label">2.8 ¿Utiliza gas natural para cocinar?</legend>
                </div>
                <div class="col">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="encuesta.gasNatural" id="gasNatural1" value="Si">
                      <label class="form-check-label" for="gasNatural">
                        Si
                      </label>
                    </div>
                </div>
                <div class="col">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="encuesta.gasNatural" id="gasNatural2" value="No">
                      <label class="form-check-label" for="gasNatural">
                        No
                      </label>
                    </div>
                </div>
                <div class="col">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="encuesta.gasNatural" id="gasNatural3" value="NS/NC">
                      <label class="form-check-label" for="gasNatural">
                        NS/NC
                      </label>
                    </div>
                </div>
              </div>
              <hr/>
              <div class="form-group">
                <label for="nivelEducativo">2.9 ¿Cuál es el nivel educativo máximo que ha alcanzado?</label>
                <select class="form-control" v-model="encuesta.nivelEducativo" id="nivelEducativoSelect">
                  <option>Primario incompleto</option>
                  <option>Primario completo</option>
                  <option>Secundario incompleto</option>
                  <option>Secundario completo</option>
                  <option>Universitario incompleto</option>
                  <option>Universitario completo</option>
                </select>
              </div>
              <hr/>
              <div class="form-group">
                <label for="empleo">2.10 Respecto a su empleo, actualmente se encuentra:</label>
                <select class="form-control" v-model="encuesta.empleo" id="empleoSelect">
                  <option>Desempleada</option>
                  <option>Empleada en relación de dependencia registrada</option>
                  <option>Empleada en relación de dependencia no registrada</option>
                  <option>Trabajando por cuenta propia</option>
                  <option>Trabajando como monotributista</option>
                  <option>Trabajando como autonomo</option>
                </select>
              </div>
              <hr/>
              <div class="form-row">
                <div class="col-7">
                  <legend class="col-form-label">2.11 ¿Recibe alguna asistencia económica del estado?</legend>
                </div>
                <div class="col">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="encuesta.asistenciaEstado" id="asistenciaEstado1" value="Si">
                      <label class="form-check-label" for="asistenciaEstado">
                        Si
                      </label>
                    </div>
                </div>
                <div class="col">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="encuesta.asistenciaEstado" id="asistenciaEstado2" value="No">
                      <label class="form-check-label" for="asistenciaEstado">
                        No
                      </label>
                    </div>
                </div>
              </div>
              <div class="form-group">
                <div>
                <small>Si contesta afirmativamente:</small>
                </div>
                <label for="cualAsistenciaEstado">¿Cuál?</label>
                <select class="form-control" v-model="encuesta.cualAsistenciaEstado" id="cualAsistenciaEstadoSelect">
                  <option>AUH</option>
                  <option>Pensión</option>
                  <option>Plan social</option>
                  <option>Otro</option>
                </select>
              </div>
              <hr/>
              <form>
              <label >2.12 En el último mes recibio:</label>
                <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">¿Bolsón o caja de alimentos?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.recibioBolson" id="recibioBolson1" value="Si">
                        <label class="form-check-label" for="recibioBolson">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.recibioBolson" id="recibioBolson2" value="No">
                        <label class="form-check-label" for="recibioBolson">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col-7">
                    <legend class="col-form-label">¿Tickets o bonos para la compra de alimentos?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.recibioTickets" id="recibioTickets1" value="Si">
                        <label class="form-check-label" for="recibioTickets">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.recibioTickets" id="recibioTickets2" value="No">
                        <label class="form-check-label" for="recibioTickets">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col-7">
                    <legend class="col-form-label">¿Tarjeta alimentar?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.recibioTarjeta" id="recibioTarjeta1" value="Si">
                        <label class="form-check-label" for="recibioTarjeta">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.recibioTarjeta" id="recibioTarjeta2" value="No">
                        <label class="form-check-label" for="recibioTarjeta">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col-7">
                    <legend class="col-form-label">¿Leche fluida o en polvo?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.recibioLeche" id="recibioLeche1" value="Si">
                        <label class="form-check-label" for="recibioLeche">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.recibioLeche" id="recibioLeche2" value="No">
                        <label class="form-check-label" for="recibioLeche">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col-7">
                    <legend class="col-form-label">¿Otra forma de asistencia alimentaria?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.recibioOtra" id="recibioOtra1" value="Si">
                        <label class="form-check-label" for="recibioOtra">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.recibioOtra" id="recibioOtra2" value="No">
                        <label class="form-check-label" for="recibioOtra">
                          No
                        </label>
                      </div>
                  </div>
                </div>
                <div class="form-group">
                <div>
                <small>Si contesta afirmativamente:</small>
                </div>
                <label for="cualUltimoMesRecibio">¿Cúal?</label>
                <input type="text" v-model="encuesta.cualUltimoMesRecibio" class="form-control" >
              </div>
              </form>
              <hr/>
              <div class="form-group">
                <label for="ingresoIndividual">2.13 ¿Podría indicar cuál de estos tramos se ubica su ingreso individual en el hogar el último mes en pesos?</label>
                <select class="form-control" v-model="encuesta.ingresoIndividual" id="ingresoIndividualSelect">
                  <option>0 - 2.000</option>
                  <option>2.200 - 4.400</option>
                  <option>4.400 - 6.600</option>
                  <option>6.600 - 13.000</option>
                  <option>13.000 - 25.000</option>
                  <option>Más de 25.000</option>
                </select>
              </div>
              <hr/>
              <div class="form-group">
                <label for="ingresoTotal">2.14 ¿Podría indicar en cuál de estos tramos se ubica el ingreso total mensual del hogar en pesos?</label>
                <select class="form-control" v-model="encuesta.ingresoTotal" id="ingresoTotalSelect">
                  <option>0 - 16.000</option>
                  <option>16.000 - 38.000</option>
                  <option>38.000 - 60.000</option>
                  <option>Más de 60.000</option>
                </select>
              </div>
              <hr/>
              <form>
                <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">2.15 Durante la pandemia, ¿el hogar recibió el IFE?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.recibioIFE" id="recibioIFE1" value="Si">
                        <label class="form-check-label" for="recibioIFE">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.recibioIFE" id="recibioIFE2" value="No">
                        <label class="form-check-label" for="recibioIFE">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.recibioIFE" id="recibioIFE3" value="NS/NC">
                        <label class="form-check-label" for="recibioIFE">
                          NS/NC
                        </label>
                      </div>
                  </div>
                </div>
              </form>
              <hr/>
              <div class="form-group">
                <label for="observacionesBloque2">Observaciones</label>
                <input type="text" v-model="encuesta.observacionesBloque2" class="form-control" >
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
                <label for="pliegueTricipal">3.5 Pliegue tricipal (cm)</label>
                <input type="number" v-model="encuesta.pliegueTricipital" class="form-control" >
                </div>
                <div class="form-group col-md-6">
                <label for="pliegueBicipal">3.6 Pliegue bicipal (cm)</label>
                <input type="number" v-model="encuesta.pliegueBicipital" class="form-control">
                </div>
              </div>
              <div class="form-row">                             
                <div class="form-group col-md-6">
                <label for="pliegueSubescapular">3.7 Pliegue subescapular (cm)</label>
                <input type="number" v-model="encuesta.pliegueSubescapular" class="form-control" >
                </div>
                <div class="form-group col-md-6">
                <label for="pliegueSuprailiaco">3.8 Pliegue suprailíaco (cm)</label>
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
            <h4 class="card-header text-center">Bloque 4. Inseguridad alimentaria y datos nutricionales.</h4>
            <div class="card-body">
              <h6 class="card-title">Ahora vamos a hacer algunas preguntas sobre las comidas y sus hábitos alimentarios.</h6>
              <hr/>
              <h5 class="card-title">Cuestionario Escala Inseguridad Alimentaria basada en la Experiencia</h5>
              <small>Durante los últimos doce meses, ha habido algún momento en que:</small>
              <div class="form-group">
              </div>
              <form>
                <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">4.1 ¿Usted se haya preocupado por no tener suficientes alimentos para comer por falta de dinero u otros recursos?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.preocupadoSuficienteAlimentos" id="preocupadoSuficienteAlimentos1" value="Si">
                        <label class="form-check-label" for="preocupadoSuficienteAlimentos">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.preocupadoSuficienteAlimentos" id="preocupadoSuficienteAlimentos2" value="No">
                        <label class="form-check-label" for="preocupadoSuficienteAlimentos">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.preocupadoSuficienteAlimentos" id="preocupadoSuficienteAlimentos3" value="NS/NC">
                        <label class="form-check-label" for="preocupadoSuficienteAlimentos">
                          NS/NC
                        </label>
                      </div>
                  </div>
                </div>
              </form>
              <hr/>
              <form>
                <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">4.2 ¿Hubo alguna vez en que usted no haya podido comer alimentos saludables y nutritivos por falta de dinero u otros recursos?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.podidoAlimentos" id="podidoAlimentos1" value="Si">
                        <label class="form-check-label" for="podidoAlimentos">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.podidoAlimentos" id="podidoAlimentos2" value="No">
                        <label class="form-check-label" for="podidoAlimentos">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.podidoAlimentos" id="podidoAlimentos3" value="NS/NC">
                        <label class="form-check-label" for="podidoAlimentos">
                          NS/NC
                        </label>
                      </div>
                  </div>
                </div>
              </form>
              <hr/>
              <form>
                <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">4.3 ¿Hubo alguna vez en que usted haya comido poca variedad de alimentos por falta de dinero u otros recursos?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.comidoPocaVariedad" id="comidoPocaVariedad1" value="Si">
                        <label class="form-check-label" for="comidoPocaVariedad">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.comidoPocaVariedad" id="comidoPocaVariedad2" value="No">
                        <label class="form-check-label" for="comidoPocaVariedad">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.comidoPocaVariedad" id="comidoPocaVariedad3" value="NS/NC">
                        <label class="form-check-label" for="comidoPocaVariedad">
                          NS/NC
                        </label>
                      </div>
                  </div>
                </div>
              </form>
              <hr/>
              <form>
                <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">4.4 ¿Hubo alguna vez en que usted haya tenido que dejar de desayunar, almorzar o cenar porque no había suficiente dinero u otros recursos para obtener alimentos?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.dejarDesayunoAlmuerzoCena" id="dejarDesayunoAlmuerzoCena1" value="Si">
                        <label class="form-check-label" for="dejarDesayunoAlmuerzoCena">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.dejarDesayunoAlmuerzoCena" id="dejarDesayunoAlmuerzoCena2" value="No">
                        <label class="form-check-label" for="dejarDesayunoAlmuerzoCena">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.dejarDesayunoAlmuerzoCena" id="dejarDesayunoAlmuerzoCena3" value="NS/NC">
                        <label class="form-check-label" for="dejarDesayunoAlmuerzoCena">
                          NS/NC
                        </label>
                      </div>
                  </div>
                </div>
              </form>
              <hr/>
              <form>
                <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">4.5 ¿Hubo alguna vez en que usted haya comido menos de lo que pensaba que debía comer por falta de dinero u otros recursos?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.comidoMenos" id="comidoMenos1" value="Si">
                        <label class="form-check-label" for="comidoMenos">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.comidoMenos" id="comidoMenos2" value="No">
                        <label class="form-check-label" for="comidoMenos">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.comidoMenos" id="comidoMenos3" value="NS/NC">
                        <label class="form-check-label" for="comidoMenos">
                          NS/NC
                        </label>
                      </div>
                  </div>
                </div>
              </form>
              <hr/>
              <form>
                <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">4.6 ¿Hubo alguna vez en que su hogar se haya quedado sin alimentos por falta de dinero u otros recursos?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.sinAlimentos" id="sinAlimentos1" value="Si">
                        <label class="form-check-label" for="sinAlimentos">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.sinAlimentos" id="sinAlimentos2" value="No">
                        <label class="form-check-label" for="sinAlimentos">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.sinAlimentos" id="sinAlimentos3" value="NS/NC">
                        <label class="form-check-label" for="sinAlimentos">
                          NS/NC
                        </label>
                      </div>
                  </div>
                </div>
              </form>
              <hr/>
              <form>
                <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">4.7 ¿Hubo alguna vez en que usted haya sentido hambre pero no comió porque no había suficiente dinero u otros recursos para obtener alimentos?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.sentidoHambre" id="sentidoHambre1" value="Si">
                        <label class="form-check-label" for="sentidoHambre">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.sentidoHambre" id="sentidoHambre2" value="No">
                        <label class="form-check-label" for="sentidoHambre">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.sentidoHambre" id="sentidoHambres3" value="NS/NC">
                        <label class="form-check-label" for="sentidoHambre">
                          NS/NC
                        </label>
                      </div>
                  </div>
                </div>
              </form>
              <hr/>
              <form>
                <div class="form-row">
                  <div class="col-7">
                    <legend class="col-form-label">4.8 ¿Hubo alguna vez en que usted haya dejado de comer todo un día por falta de dinero u otros recursos?</legend>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.dejadoComer" id="dejadoComer1" value="Si">
                        <label class="form-check-label" for="dejadoComer">
                          Si
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.dejadoComer" id="dejadoComer2" value="No">
                        <label class="form-check-label" for="dejadoComer">
                          No
                        </label>
                      </div>
                  </div>
                  <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="encuesta.dejadoComer" id="dejadoComer3" value="NS/NC">
                        <label class="form-check-label" for="dejadoComer">
                          NS/NC
                        </label>
                      </div>
                  </div>
                </div>
              </form>
              <hr/>
              <div class="form-group">
                <label for="observacionesBloque4Parte1">Observaciones</label>
                <input type="text" v-model="encuesta.observacionesBloque4Parte1" class="form-control" >
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
                <label for="observacionesBloque4Parte2">Observaciones</label>
                <input type="text" v-model="encuesta.observacionesBloque4Parte2" class="form-control" >
              </div> 
            </div>
          </div>
          <div class="card">
            <h4 class="card-header text-center">Bloque 4. Inseguridad alimentaria y datos nutricionales (continuación)</h4>
            <div class="card-body">
              <h6 class="card-title">Ahora vamos a hacer algunas preguntas sobre las comidas y sus hábitos alimentarios.</h6>
              <hr/>
              <h5 class="card-title">Historia alimentaria (comidas semanales)</h5>
              <small>Durante los últimos 7 dias, cuántas veces realizó las siguientes comidas:</small>
              <div class="form-group">
              </div>
              <div class="form-row">                             
                <div class="form-group col-md-6">
                <label for="desayuno">4.10 Desayuno (veces)</label>
                <input type="number" v-model="encuesta.desayuno" class="form-control">
                </div>
                <div class="form-group col-md-6">
                <label for="almuerzo">4.11 Almuerzo (veces)</label>
                <input type="number" v-model="encuesta.almuerzo" class="form-control">
                </div>
              </div>
              <div class="form-row">                             
                <div class="form-group col-md-6">
                <label for="merienda">4.12 Merienda (veces)</label>
                <input type="number" v-model="encuesta.merienda" class="form-control">
                </div>
                <div class="form-group col-md-6">
                <label for="cena">4.13 Cena (veces)</label>
                <input type="number" v-model="encuesta.cena" class="form-control">
                </div>
              </div>
              <div class="form-group">
                <label for="frecuenciaConsumo">4.14 Durante los últimos 7 días, ¿con que frecuencia consumió algún alimento o bebida en otros momentos del día?</label>
                <select class="form-control" v-model="encuesta.frecuenciaConsumo" id="frecuenciaConsumoSelect">
                  <option>Nunca</option>
                  <option>Algunas veces</option>
                  <option>Casi todos los dias</option>
                  <option>Siempre/todos los dias</option>
                  <option>NS/NC</option>
                </select>
                <small>Solo en caso de responder afirmativamente la pregunta 4.14, pasar a la 4.15.</small>
              </div>
                <fieldset class="form-group">
                <div class="form-group">
                  <label for="alimentoBebidas">4.15 Durante los últimos 7 días ¿Qué alimentos/bebidas consumió en esas ocasiones fuera de las comidas principales?</label>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="encuesta.golosinas" id="opcion1" true-value="Si" false-value="No">
                      <label class="form-check-label" for="opcion1">
                        Golosinas, dulces, galletitas dulces, amasados de pastelería, facturas, cereales con azúcar
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="encuesta.panBlanco" id="opcion2" true-value="Si" false-value="No">
                      <label class="form-check-label" for="opcion2">
                        Pan blanco, galletitas saladas
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="encuesta.pan" id="opcion3" true-value="Si" false-value="No">
                      <label class="form-check-label" for="opcion3">
                        Pan y otros cereales integrales, semillas
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="encuesta.copetin" id="opcion4" true-value="Si" false-value="No">
                      <label class="form-check-label" for="opcion4">
                        Productos de copetín o snacks salados
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="encuesta.frutas" id="opcion5" true-value="Si" false-value="No">
                      <label class="form-check-label" for="opcion5">
                        Frutas
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="encuesta.lacteos" id="opcion6" true-value="Si" false-value="No">
                      <label class="form-check-label" for="opcion6">
                        Lácteos (leche, yogurt o quesos)
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="encuesta.bebidas" id="opcion7" true-value="Si" false-value="No">
                      <label class="form-check-label" for="opcion7">
                        Bebidas azucaradas (jugos, gaseosas, infusiones con azúcar, etc)
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="encuesta.otros" id="opcion8" true-value="Si" false-value="No">
                      <label class="form-check-label" for="opcion8">
                        Otros
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="encuesta.nsnc" id="opcion9" true-value="Si" false-value="No">
                      <label class="form-check-label" for="opcion9">
                        NS/NC
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <hr/>
              <div class="form-group">
                <label for="observacionesBloque4Parte3">Observaciones</label>
                <input type="text" v-model="encuesta.observacionesBloque4Parte3" class="form-control" >
              </div>
            </div>
          </div>
          <div class="card">
            <h4 class="card-header text-center">Bloque 4. Inseguridad alimentaria y datos nutricionales (continuación)</h4>
            <div class="card-body">
              <h6 class="card-title">Ahora vamos a hacer algunas preguntas sobre las comidas y sus hábitos alimentarios.</h6>
              <hr/>
              <h5 class="card-title">Historia alimentaria (Alimentos últimos 3 meses)</h5>
              <small>En general, tomando como referencia los últimos tres meses, ¿cuántas veces al mes consumió...</small>
              <div class="form-group">
              </div>
              <div class="form-group">
                <label for="consumioLeche">4.16. ... leche, yogur o quesos?</label>
                <select class="form-control" v-model="encuesta.consumioLeche" id="consumioLecheSelect">
                  <option>Nunca o menos de 1 vez al mes</option>
                  <option>1 vez por semana</option>
                  <option>2 a 4 veces por semana</option>
                  <option>5 a 6 veces por semana</option>
                  <option>1 vez al día</option>
                  <option>Entre 2 y 3 veces al día</option>
                  <option>Entre 4 y 5 veces al día</option>
                  <option>6 veces o más por día</option>
                </select>
              </div>
              <div class="form-group">
                <label for="consumioFrutasFrescas">4.17. ... frutas frescas (solas o en preparaciones)?</label>
                <select class="form-control" v-model="encuesta.consumioFrutasFrescas" id="consumioFrutasFrescasSelect">
                  <option>Nunca o menos de 1 vez al mes</option>
                  <option>1 vez por semana</option>
                  <option>2 a 4 veces por semana</option>
                  <option>5 a 6 veces por semana</option>
                  <option>1 vez al día</option>
                  <option>Entre 2 y 3 veces al día</option>
                  <option>Entre 4 y 5 veces al día</option>
                  <option>6 veces o más por día</option>
                </select>
              </div>
              <div class="form-group">
                <label for="consumioVerduras">4.18. ...verduras (solas o en preparaciones) sin contar papa y batata?</label>
                <select class="form-control" v-model="encuesta.consumioVerduras" id="consumioVerdurasSelect">
                  <option>Nunca o menos de 1 vez al mes</option>
                  <option>1 vez por semana</option>
                  <option>2 a 4 veces por semana</option>
                  <option>5 a 6 veces por semana</option>
                  <option>1 vez al día</option>
                  <option>Entre 2 y 3 veces al día</option>
                  <option>Entre 4 y 5 veces al día</option>
                  <option>6 veces o más por día</option>
                </select>
              </div>
              <div class="form-group">
                <label for="consumioPapa">4.19. ... papa, batata, cereales refinados como arroz blanco, pastas, tartas, empanadas o pan blanco?</label>
                <select class="form-control" v-model="encuesta.consumioPapa" id="consumioPapaSelect">
                  <option>Nunca o menos de 1 vez al mes</option>
                  <option>1 vez por semana</option>
                  <option>2 a 4 veces por semana</option>
                  <option>5 a 6 veces por semana</option>
                  <option>1 vez al día</option>
                  <option>Entre 2 y 3 veces al día</option>
                  <option>Entre 4 y 5 veces al día</option>
                  <option>6 veces o más por día</option>
                </select>
              </div>
              <div class="form-group">
                <label for="consumioCereales">4.20. ...cereales integrales, legumbres (por ejemplo lentejas, garbanzos, porotos) o pan integral o de salvado?</label>
                <select class="form-control" v-model="encuesta.consumioCereales" id="consumioCerealesSelect">
                  <option>Nunca o menos de 1 vez al mes</option>
                  <option>1 vez por semana</option>
                  <option>2 a 4 veces por semana</option>
                  <option>5 a 6 veces por semana</option>
                  <option>1 vez al día</option>
                  <option>Entre 2 y 3 veces al día</option>
                  <option>Entre 4 y 5 veces al día</option>
                  <option>6 veces o más por día</option>
                </select>
              </div>
              <div class="form-group">
                <label for="consumioEmbutidos">4.21. ... embutidos y fiambres (jamón, salame, chorizo, salchicha, etc)?</label>
                <select class="form-control" v-model="encuesta.consumioEmbutidos" id="consumioEmbutidosSelect">
                  <option>Nunca o menos de 1 vez al mes</option>
                  <option>1 vez por semana</option>
                  <option>2 a 4 veces por semana</option>
                  <option>5 a 6 veces por semana</option>
                  <option>1 vez al día</option>
                  <option>Entre 2 y 3 veces al día</option>
                  <option>Entre 4 y 5 veces al día</option>
                  <option>6 veces o más por día</option>
                </select>
              </div>
              <hr/>
              <div class="form-group">
                <label for="observacionesBloque4Parte4">Observaciones</label>
                <input type="text" v-model="encuesta.observacionesBloque4Parte4" class="form-control" >
              </div>
            </div>
          </div>
          <div class="card">
            <h4 class="card-header text-center">Bloque 4. Inseguridad alimentaria y datos nutricionales (continuación)</h4>
            <div class="card-body">
              <h5 class="card-title">Historia alimentaria (Alimentos últimos 3 meses)</h5>
              <small>En general, tomando como referencia los últimos tres meses, ¿cuántas veces al mes consumió...</small>
              <div class="form-group">
              </div>
              <div class="form-group">
                <label for="consumioCarne">4.22. ... carne roja (por ejemplo de vaca), carne de ave o huevos?</label>
                <select class="form-control" v-model="encuesta.consumioCarne" id="consumioCarneSelect">
                  <option>Nunca o menos de 1 vez al mes</option>
                  <option>1 vez por semana</option>
                  <option>2 a 4 veces por semana</option>
                  <option>5 a 6 veces por semana</option>
                  <option>1 vez al día</option>
                  <option>Entre 2 y 3 veces al día</option>
                  <option>Entre 4 y 5 veces al día</option>
                  <option>6 veces o más por día</option>
                </select>
              </div>
              <div class="form-group">
                <label for="consumioPescado">4.23. ... pescado fresco o enlatado?</label>
                <select class="form-control" v-model="encuesta.consumioPescado" id="consumioPescadoSelect">
                  <option>Nunca o menos de 1 vez al mes</option>
                  <option>1 vez por semana</option>
                  <option>2 a 4 veces por semana</option>
                  <option>5 a 6 veces por semana</option>
                  <option>1 vez al día</option>
                  <option>Entre 2 y 3 veces al día</option>
                  <option>Entre 4 y 5 veces al día</option>
                  <option>6 veces o más por día</option>
                </select>
              </div>
              <div class="form-group">
                <label for="consumioAceites">4.24. ... aceites vegetales (como girasol, maíz, soja, girasol alto oleico, oliva y canola)?</label>
                <select class="form-control" v-model="encuesta.consumioAceites" id="consumioAceitesSelect">
                  <option>Nunca o menos de 1 vez al mes</option>
                  <option>1 vez por semana</option>
                  <option>2 a 4 veces por semana</option>
                  <option>5 a 6 veces por semana</option>
                  <option>1 vez al día</option>
                  <option>Entre 2 y 3 veces al día</option>
                  <option>Entre 4 y 5 veces al día</option>
                  <option>6 veces o más por día</option>
                </select>
              </div>
              <div class="form-group">
                <label for="consumioFrutasSecas">4.25. ... frutas secas sin salar (como maní, nueces, almendras, avellanas, castañas, etc.) o semillas sin salar (chía, girasol, sésamo, lino, etc.)?</label>
                <select class="form-control" v-model="encuesta.consumioFrutasSecas" id="consumioFrutasSecasSelect">
                  <option>Nunca o menos de 1 vez al mes</option>
                  <option>1 vez por semana</option>
                  <option>2 a 4 veces por semana</option>
                  <option>5 a 6 veces por semana</option>
                  <option>1 vez al día</option>
                  <option>Entre 2 y 3 veces al día</option>
                  <option>Entre 4 y 5 veces al día</option>
                  <option>6 veces o más por día</option>
                </select>
              </div>
              <div class="form-group">
                <label for="consumioProductosCopetin">4.26. ... productos de copetín (papas fritas, palitos de maíz, etc.)?</label>
                <select class="form-control" v-model="encuesta.consumioProductosCopetin" id="consumioProductosCopetinSelect">
                  <option>Nunca o menos de 1 vez al mes</option>
                  <option>1 vez por semana</option>
                  <option>2 a 4 veces por semana</option>
                  <option>5 a 6 veces por semana</option>
                  <option>1 vez al día</option>
                  <option>Entre 2 y 3 veces al día</option>
                  <option>Entre 4 y 5 veces al día</option>
                  <option>6 veces o más por día</option>
                </select>
              </div>
              <div class="form-group">
                <label for="consumioGolosinas">4.27. ... golosinas (caramelos, alfajores, chupetines, chicles, barras de cereal, etc.)?</label>
                <select class="form-control" v-model="encuesta.consumioGolosinas" id="consumioGolosinasSelect">
                  <option>Nunca o menos de 1 vez al mes</option>
                  <option>1 vez por semana</option>
                  <option>2 a 4 veces por semana</option>
                  <option>5 a 6 veces por semana</option>
                  <option>1 vez al día</option>
                  <option>Entre 2 y 3 veces al día</option>
                  <option>Entre 4 y 5 veces al día</option>
                  <option>6 veces o más por día</option>
                </select>
              </div>
              <hr/>
              <div class="form-group">
                <label for="observacionesBloque4Parte5">Observaciones</label>
                <input type="text" v-model="encuesta.observacionesBloque4Parte5" class="form-control" >
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
            <table class="table table-striped">
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
                    <td>{{ encuesta.fechaRelevamiento }}</td>
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
  nombreApellido, dni, fechaNacimiento, domicilioBarrio, telefono, fechaUltimaMenstruacion, semanasGestacion, observacionesBloque0,
  diabetes, enfermedadRenal, hipertension, colesterolTrigliceridosAltos, asmaEPOC, covid19, anemia, enfermedadCronica, cualEnfermedadCronica,
  consumeMedicamento, cualConsumeMedicamento, consumeComplejoVitaminicoSuplemento, cualConsumeComplejoVitaminicoSuplemento, fumaActual, fumaAntes, alcoholActual, embarazoAntes, cuantosEmbarazoAntes, hijos, cuantosHijos, observacionesBloque1,
  pais, provincia, personasVivienda, habitacionesVivienda, desagueCloaca, aguaPotable, redElectrica, gasNatural, nivelEducativo, empleo, asistenciaEstado, cualAsistenciaEstado, recibioBolson, recibioTickets, recibioTarjeta, recibioLeche, recibioOtra, cualUltimoMesRecibio, ingresoIndividual, ingresoTotal, recibioIFE, observacionesBloque2,
  pesoKG, ropaAlPesar, talla, tallaSentada, perimetroBraquial, pliegueTricipital, pliegueBicipital, pliegueSubescapular, pliegueSuprailiaco, observacionesBloque3,
  preocupadoSuficienteAlimentos, podidoAlimentos, comidoPocaVariedad, dejarDesayunoAlmuerzoCena, comidoMenos, sinAlimentos, sentidoHambre, dejadoComer, observacionesBloque4Parte1,
  Recordatorio24hs, observacionesBloque4Parte2,
  desayuno, almuerzo, merienda, cena, frecuenciaConsumo,
  golosinas, panBlanco, pan, copetin, frutas, lacteos, bebidas, otros, nsnc, observacionesBloque4Parte3,
  consumioLeche, consumioFrutasFrescas, consumioVerduras, consumioPapa, consumioCereales, consumioEmbutidos, observacionesBloque4Parte4,
  consumioCarne, consumioPescado, consumioAceites, consumioFrutasSecas, consumioProductosCopetin, consumioGolosinas, observacionesBloque4Parte5) {
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
    this.diabetes = diabetes;
    this.enfermedadRenal = enfermedadRenal;
    this.hipertension = hipertension;
    this.colesterolTrigliceridosAltos = colesterolTrigliceridosAltos;
    this.asmaEPOC = asmaEPOC;
    this.covid19 = covid19;
    this.anemia = anemia;
    this.enfermedadCronica = enfermedadCronica;
    this.cualEnfermedadCronica = cualEnfermedadCronica;
    this.consumeMedicamento = consumeMedicamento;
    this.cualConsumeMedicamento = cualConsumeMedicamento;
    this.consumeComplejoVitaminicoSuplemento = consumeComplejoVitaminicoSuplemento;
    this.cualConsumeComplejoVitaminicoSuplemento = cualConsumeComplejoVitaminicoSuplemento;
    this.fumaActual = fumaActual;
    this.fumaAntes = fumaAntes;
    this.alcoholActual = alcoholActual;
    this.embarazoAntes = embarazoAntes;
    this.cuantosEmbarazoAntes = cuantosEmbarazoAntes;
    this.hijos = hijos;
    this.cuantosHijos = cuantosHijos;
    this.observacionesBloque1 = observacionesBloque1;
    this.pais = pais;
    this.provincia = provincia;
    this.personasVivienda = personasVivienda;
    this.habitacionesVivienda = habitacionesVivienda;
    this.desagueCloaca = desagueCloaca;
    this.aguaPotable = aguaPotable;
    this.redElectrica = redElectrica;
    this.gasNatural = gasNatural;
    this.nivelEducativo = nivelEducativo;
    this.empleo = empleo;
    this.asistenciaEstado = asistenciaEstado;
    this.cualAsistenciaEstado = cualAsistenciaEstado;
    this.recibioBolson = recibioBolson;
    this.recibioTickets = recibioTickets;
    this.recibioTarjeta = recibioTarjeta;
    this.recibioLeche = recibioLeche;
    this.recibioOtra = recibioOtra;
    this.cualUltimoMesRecibio = cualUltimoMesRecibio;
    this.ingresoIndividual = ingresoIndividual;
    this.ingresoTotal = ingresoTotal;
    this.recibioIFE = recibioIFE;
    this.observacionesBloque2 = observacionesBloque2;
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
    this.preocupadoSuficienteAlimentos = preocupadoSuficienteAlimentos;
    this.podidoAlimentos = podidoAlimentos;
    this.comidoPocaVariedad = comidoPocaVariedad;
    this.dejarDesayunoAlmuerzoCena = dejarDesayunoAlmuerzoCena;
    this.comidoMenos = comidoMenos;
    this.sinAlimentos = sinAlimentos;
    this.sentidoHambre = sentidoHambre;
    this.dejadoComer = dejadoComer;
    this.observacionesBloque4Parte1 = observacionesBloque4Parte1;
    this.Recordatorio24hs = Recordatorio24hs;
    this.observacionesBloque4Parte2 = observacionesBloque4Parte2;
    this.desayuno = desayuno;
    this.almuerzo = almuerzo;
    this.merienda = merienda;
    this.cena = cena;
    this.frecuenciaConsumo = frecuenciaConsumo;
    this.golosinas = golosinas;
    this.panBlanco = panBlanco;
    this.pan = pan;
    this.copetin = copetin;
    this.frutas = frutas;
    this.lacteos = lacteos;
    this.bebidas = bebidas;
    this.otros = otros;
    this.nsnc = nsnc;
    this.observacionesBloque4Parte3 = observacionesBloque4Parte3;
    this.consumioLeche = consumioLeche;
    this.consumioFrutasFrescas = consumioFrutasFrescas;
    this.consumioVerduras = consumioVerduras;
    this.consumioPapa = consumioPapa;
    this.consumioCereales = consumioCereales;
    this.consumioEmbutidos = consumioEmbutidos;
    this.observacionesBloque4Parte4 = observacionesBloque4Parte4;
    this.consumioCarne = consumioCarne;
    this.consumioPescado = consumioPescado;
    this.consumioAceites = consumioAceites;
    this.consumioFrutasSecas = consumioFrutasSecas;
    this.consumioProductosCopetin = consumioProductosCopetin;
    this.consumioGolosinas = consumioGolosinas;
    this.observacionesBloque4Parte5 = observacionesBloque4Parte5;
    this.tipoEncuesta = "Primer y segundo trimestre";
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
          `${this.baseUrl}/encuestas1y2Trimestre`,
          JSON.stringify(this.encuesta),
          { headers }
        );
        Toast.fire({
          title: "¡Encuesta Agregada!",
        });
      } else {        
        this.encuesta.recordatorio24Horas = this.recordatorios;
        await this.axios.put(
        `${this.baseUrl}/encuestas1y2Trimestre/` + this.encuesta._id,
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
        `${this.baseUrl}/encuestas1y2Trimestre/user/` + this.$auth.user.email
      );
      this.encuestas = res.data;      
    },
    async verEncuesta(id){
      const res = await this.axios.get(
        `${this.baseUrl}/encuestas1y2Trimestre/` + id);
      this.encuesta = res.data;
      this.recordatorios = res.data.recordatorio24Horas;
      this.editar = false;
    },
    async editarEncuesta(id) { 
      const res = await this.axios.get(
        `${this.baseUrl}/encuestas1y2Trimestre/` + id);
      this.encuesta = res.data;
      this.recordatorios = res.data.recordatorio24Horas;
      this.editar = true;
    },
    async borrarEncuesta(id){
      await this.axios.delete(`${this.baseUrl}/encuestas1y2Trimestre/` + id);
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
