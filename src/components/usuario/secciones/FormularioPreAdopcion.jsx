import { Field, ErrorMessage } from "formik";

import { AuthFormErrorMessage } from "src/components/auth/formularios/AuthFormErrorMessage";
import { PreAdopcionConstants } from "../adoptante/formularioPreAdopcion/PreAdopcionConstants";

const FormularioPreAdopcion = (props) => {
    return (
        <div>
            <p className='alert alert-warning border-warning'><strong>AVISO:</strong> Para poder postularse, es necesario que completes este formulario para brindarle información a los refugios sobre tu persona y te tengan en consideración.</p>
            <img className="img-fluid" width={300} src="/img/gato_guiñando_ojo.png" alt="gato_guiñando_ojo"/>
            <div className="card marco-formulario">
                <div className="row">
                    <div className="col-6 pt-2 text-start"><img src="/img/usuarios/perro.png" width={48} alt="perro" /></div>
                    <div className="col-6 pt-2 text-end"><img src="/img/usuarios/gato.png" width={48} alt="gato" /></div>
                </div>
                <div className="card-body py-0">
                    <h2 className="title fs-2">Formulario de pre-adopción</h2>
                    <hr/>
                    <p className="fw-bold">Tus respuestas serán evaluadas por los responsables del refugio y, en base a su criterio, tu solicitud de adopción será aceptada o rechazada.</p>
                            <div className="col">
                                <div className="row form-field justify-content-center">
                                    <div className="col-12 col-md-7">
                                        <label className="form-label" htmlFor="motivo">¿Cuál fue el motivo de la decisión de adoptar? *</label>
                                        <Field as="textarea" 
                                            id="motivo"
                                            name="motivo"
                                            className="form-control"
                                            rows={3}
                                            placeholder="Máximo 200 caracteres..."
                                        ></Field>
                                        <ErrorMessage name="motivo">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                    </div>
                                </div>
                                <div className="form-field">
                                    <p>¿Alguna vez tuvo a cargo alguna mascota? *</p>
                                    <div className="form-check form-check-inline">
                                            <Field className="form-check-input" type="radio" name="tuvoMascota" id="tuvo_mascota_si" value="true"></Field>
                                            <label className="form-check-label" htmlFor="tuvo_mascota_si">Si</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="tuvoMascota" id="tuvo_mascota_no" value="false"></Field>
                                        <label className="form-check-label" htmlFor="tuvo_mascota_no">No</label>
                                    </div>
                                    <ErrorMessage name="tuvoMascota">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                </div>
                                
                                <div className="form-field">
                                    <p>¿Posee mascotas actualmente? *</p>	
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="tieneMascotas" id="tiene_mascotas_si" value="true"></Field>
                                        <label className="form-check-label" htmlFor="tiene_mascotas_si">Si</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="tieneMascotas" id="tiene_mascotas_no" value="false"></Field>
                                        <label className="form-check-label" htmlFor="tiene_mascotas_no">No</label>
                                    </div>
                                    <ErrorMessage name="tieneMascotas">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                </div>
                                <div className="row form-field justify-content-center">
                                    <div className="col-12 col-md-7">
                                        <label className="form-label" htmlFor="motivo">Descripción de sus mascotas (opcional):</label>
                                        <Field as="textarea"
                                            id="descripcion_mascotas"
                                            name="descripcionMascotas"
                                            className="form-control"
                                            rows={3}
                                            placeholder="Máximo 200 caracteres..."
                                        />
                                        <ErrorMessage name="descripcionMascotas">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                    </div>
                                </div>
                                <div className="form-field">
                                    <p>¿Convive con más personas? *</p>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="viveSolo" id="vive_solo_si" value="true" />
                                        <label className="form-check-label" htmlFor="vive_solo_si">Si</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="viveSolo" id="vive_solo_no" value="false" />
                                        <label className="form-check-label" htmlFor="vive_solo_no">No</label>
                                    </div>
                                    <ErrorMessage name="viveSolo">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                </div>
                                <div className="form-field">
                                    <p>¿Existen veterinarias cerca de su zona? *</p>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="tieneVeterinariaCerca" id="tiene_veterinaria_cerca_si" value="true" />
                                        <label className="form-check-label" htmlFor="tiene_veterinaria_cerca_si">Si</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="tieneVeterinariaCerca" id="tiene_veterinaria_cerca_no" value="false" />
                                        <label className="form-check-label" htmlFor="tiene_veterinaria_cerca_no">No</label>
                                    </div>
                                    <ErrorMessage name="tieneVeterinariaCerca">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                </div>
                                <div className="form-field">
                                    <p>¿Cuál es el tipo de vivienda? *</p>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="viveEnCasa" id="vive_en_casa" value="true" />
                                        <label className="form-check-label" htmlFor="vive_en_casa">Casa</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="viveEnCasa" id="vive_en_departamento" value="false" />
                                        <label className="form-check-label" htmlFor="vive_en_departamento">Departamento</label>
                                    </div>
                                    <ErrorMessage name="viveEnCasa">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                </div>
                                <div className="form-field">
                                    <p>¿Cuántos ambientes tiene su hogar? *</p>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="cantidadDeAmbientes" id="cantidad_de_ambientes_2" value="2" />
                                        <label className="form-check-label" htmlFor="cantidad_de_ambientes_2">2</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="cantidadDeAmbientes" id="cantidad_de_ambientes_3" value="3" />
                                        <label className="form-check-label" htmlFor="cantidad_de_ambientes_3">3</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="cantidadDeAmbientes" id="cantidad_de_ambientes_4+" value="4"/>
                                        <label className="form-check-label" htmlFor="cantidad_de_ambientes_4+">4 o más</label>
                                    </div>
                                    <ErrorMessage name="cantidadDeAmbientes">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                </div>
                                <div className="form-field row justify-content-center">
                                    <p>Su hogar tiene... *</p>
                                    <div className="text-start col-auto">
                                        <div className="form-check">
                                            <Field className="form-check-input" type="checkbox" id="hogar_tiene_patio" name="hogarTiene" value={PreAdopcionConstants.caracteristicasHogar.tienePatio} />
                                            <label className="form-check-label" htmlFor="hogar_tiene_patio">Patio</label>
                                        </div>
                                        <div className="form-check">
                                            <Field className="form-check-input" type="checkbox" id="hogar_tiene_balcon" name="hogarTiene" value={PreAdopcionConstants.caracteristicasHogar.tieneBalcon} />
                                            <label className="form-check-label" htmlFor="hogar_tiene_balcon">Balcón (para perros)</label>
                                        </div>
                                        <div className="form-check">
                                            <Field className="form-check-input" type="checkbox" id="hogar_tiene_redes" name="hogarTiene" value={PreAdopcionConstants.caracteristicasHogar.tieneRedesEnVentanas} />
                                            <label className="form-check-label" htmlFor="hogar_tiene_redes">Redes en ventanas a altura (para gatos)</label>
                                        </div>
                                    </div>
                                    <ErrorMessage name="hogarTiene">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                </div>
                                <div className="form-field">
                                    <p>¿Tiene conocimiento acerca de la <a href="https://www.argentina.gob.ar/normativa/nacional/ley-14346-153011/texto" target="_blank">Ley 14.346</a> referida al maltrato animal? *</p>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="conoceLeyDeMaltratoAnimal" id="conoce_ley_de_maltrato_animal_si" value="true" />
                                        <label className="form-check-label" htmlFor="conoce_ley_de_maltrato_animal_si">Si</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="conoceLeyDeMaltratoAnimal" id="conoce_ley_de_maltrato_animal_no" value="false" />
                                        <label className="form-check-label" htmlFor="conoce_ley_de_maltrato_animal_no">No</label>
                                    </div>
                                    <ErrorMessage name="conoceLeyDeMaltratoAnimal">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                </div>
                                <div className="form-field">
                                    <p>¿Con que frecuencia dejaría solo al animal en el hogar? *</p>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="frecuenciaAnimalSolo" id="frecuencia_animal_solo_poco" value={PreAdopcionConstants.frecuenciaAnimalSolo.pocoFrecuente} />
                                        <label className="form-check-label" htmlFor="frecuencia_animal_solo_poco">Poco frecuente</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="frecuenciaAnimalSolo" id="frecuencia_animal_solo_algo" value={PreAdopcionConstants.frecuenciaAnimalSolo.algoFrecuente} />
                                        <label className="form-check-label" htmlFor="frecuencia_animal_solo_algo">Algo frecuente</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="frecuenciaAnimalSolo" id="frecuencia_animal_solo_muy" value={PreAdopcionConstants.frecuenciaAnimalSolo.muyFrecuente} />
                                        <label className="form-check-label" htmlFor="frecuencia_animal_solo_muy">Muy frecuente</label>
                                    </div>
                                    <ErrorMessage name="frecuenciaAnimalSolo">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                </div>
                                <div className="form-field">
                                    <p>Si hubiera alguna emergencia con el animal en su ausencia, ¿tendria alguien a quien recurrir para que lo asista? *</p>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="tieneConocidosEnCasoDeEmergencia" id="tieneConocidos_en_caso_de_emergencia_si" value="true" />
                                        <label className="form-check-label" htmlFor="tieneConocidos_en_caso_de_emergencia_si">Si</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="tieneConocidosEnCasoDeEmergencia" id="tieneConocidos_en_caso_de_emergencia_no" value="false" />
                                        <label className="form-check-label" htmlFor="tieneConocidos_en_caso_de_emergencia_no">No</label>
                                    </div>
                                    <ErrorMessage name="tieneConocidosEnCasoDeEmergencia">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                </div>
                                <div className="form-field">
                                    <p>¿Su remuneración es acorde a los gastos que estima tener para el cuidado del animal? *</p>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="tieneSalarioAcordeAGastos" id="tiene_salario_acorde_a_gastos_si" value="true" />
                                        <label className="form-check-label" htmlFor="tiene_salario_acorde_a_gastos_si">Si</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="tieneSalarioAcordeAGastos" id="tiene_salario_acorde_a_gastos_no" value="false" />
                                        <label className="form-check-label" htmlFor="tiene_salario_acorde_a_gastos_no">No</label>
                                    </div>
                                    <ErrorMessage name="tieneSalarioAcordeAGastos">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                </div>
                                <div className="form-field">
                                    <p>¿Tiene familiares o conocidos que lo aconsejen acerca de la crianza del animal? *</p>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="tieneConocidosQueLoAconsejen" id="tiene_conocidos_que_lo_aconsejen_si" value="true" />
                                        <label className="form-check-label" htmlFor="tiene_conocidos_que_lo_aconsejen_si">Si</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="tieneConocidosQueLoAconsejen" id="tiene_conocidos_que_lo_aconsejen_no" value="false" />
                                        <label className="form-check-label" htmlFor="tiene_conocidos_que_lo_aconsejen_no">No</label>
                                    </div>
                                    <ErrorMessage name="tieneConocidosQueLoAconsejen">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                </div>
                                <p><small><i>(*) Todos los campos son obligatorios</i></small></p>
                                {props.mostrarGuardado && <button className="btn btn-primary">Guardar cambios</button>}
                            </div>
                </div>
                <div className="row">
                    <div className="col-6 pt-2 text-start"><img src="/img/usuarios/gato.png" width={48} alt="gato" /></div>
                    <div className="col-6 pt-2 text-end"><img src="/img/usuarios/perro.png" width={48} alt="perro" /></div>
                </div>
            </div>
        </div>
    );
}

export default FormularioPreAdopcion;