const FormularioPreAdopcion = (props) => {
    return (
        <div id="adoption_form_wrapper">
            <h5 className='alert alert-warning border-warning'>Para poder postularse e iniciar el proceso de adopción de un animal, es necesario que completes este formulario para brindarle información a los refugios sobre tu persona y te tengan en consideración.</h5>
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
                    <div className="row">
                        <div className="col">
                            <div className="row form-field justify-content-center">
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="motivo">¿Cuál fue el motivo de la decisión de adoptar? *</label>
                                    <textarea id="motivo" name="motivo" className="form-control" rows={3} placeholder="Máximo 200 caracteres..."></textarea>
                                </div>
                            </div>
                            <div className="form-field">
                                <p>¿Alguna vez tuvo a cargo alguna mascota? *</p>
                                <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="radioI" id="inlineRadio1" value="option1" defaultChecked/>
                                        <label className="form-check-label" htmlFor="inlineRadio1">Si</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioI" id="inlineRadio2" value="option2"/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                                </div>
                            </div>
                            
                            <div className="form-field">
                                <p>¿Posee mascotas actualmente? *</p>	
                                <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="radioIV" id="inlineRadio8" value="option1"/>
                                        <label className="form-check-label" htmlFor="inlineRadio8">Si</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioIV" id="inlineRadio9" value="option2" defaultChecked/>
                                    <label className="form-check-label" htmlFor="inlineRadio9">No</label>
                                </div>
                            </div>
                            <div className="form-field">
                                <p>¿Convive con más personas? *</p>
                                <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="radioII" id="inlineRadio3" value="option1" defaultChecked/>
                                        <label className="form-check-label" htmlFor="inlineRadio3">Si</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioII" id="inlineRadio4" value="option2"/>
                                    <label className="form-check-label" htmlFor="inlineRadio4">No</label>
                                </div>
                            </div>
                            <div className="form-field">
                                <p>¿Existen veterinarias cerca de su zona? *</p>
                                <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="tieneVeterinariaCerca" id="si_tiene_veterinaria_cerca" value="option1" defaultChecked/>
                                        <label className="form-check-label" htmlFor="si_tiene_veterinaria_cerca">Si</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="tieneVeterinariaCerca" id="no_tiene_veterinaria_cerca" value="option2"/>
                                    <label className="form-check-label" htmlFor="no_tiene_veterinaria_cerca">No</label>
                                </div>
                            </div>
                            <div className="form-field">
                                <p>¿Cuál es el tipo de vivienda? *</p>
                                <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="radioHousing" id="housing_radio_yes" value="option1"/>
                                        <label className="form-check-label" htmlFor="housing_radio_yes">Casa</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioHousing" id="housing_radio_no" value="option2" defaultChecked/>
                                    <label className="form-check-label" htmlFor="housing_radio_no">Departamento</label>
                                </div>
                            </div>
                            <div className="form-field">
                                <p>¿Cuántos ambientes tiene su hogar? *</p>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioIII" id="inlineRadio5" value="option1"/>
                                    <label className="form-check-label" htmlFor="inlineRadio5">2</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioIII" id="inlineRadio6" value="option2" defaultChecked/>
                                    <label className="form-check-label" htmlFor="inlineRadio6">3</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioIII" id="inlineRadio7" value="option3"/>
                                    <label className="form-check-label" htmlFor="inlineRadio7">4 o más</label>
                                </div>
                            </div>
                            <div className="form-field">
                                <p>Su hogar tiene... *</p>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Patio (para perros)</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" defaultChecked/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">Balcón (para perros)</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox3">Redes en ventanas a altura (para gatos)</label>
                                </div>
                            </div>
                            <div className="form-field">
                                <p>¿Tiene conocimiento acerca de la <a href="https://www.argentina.gob.ar/normativa/nacional/ley-14346-153011/texto" target="_blank">Ley 14.346</a> referida al maltrato animal? *</p>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioV" id="inlineRadio10" value="option1" defaultChecked/>
                                    <label className="form-check-label" htmlFor="inlineRadio10">Si</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioV" id="inlineRadio11" value="option2"/>
                                    <label className="form-check-label" htmlFor="inlineRadio11">No</label>
                                </div>
                            </div>
                            <div className="form-field">
                                <p>¿Con que frecuencia dejaría solo al animal en el hogar? *</p>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioVI" id="inlineRadio12" value="option1"/>
                                    <label className="form-check-label" htmlFor="inlineRadio12">Poco frecuente</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioVI" id="inlineRadio13" value="option2" defaultChecked/>
                                    <label className="form-check-label" htmlFor="inlineRadio13">Algo frecuente</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioVI" id="inlineRadio14" value="option3"/>
                                    <label className="form-check-label" htmlFor="inlineRadio14">Muy frecuente</label>
                                </div>
                            </div>
                            <div className="form-field">
                                <p>Si hubiera una emergencia con el animal, ¿tendria alguien a quien recurrir para que lo lleve al veterinario? *</p>
                                <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="radioVII" id="inlineRadio15" value="option1" defaultChecked/>
                                        <label className="form-check-label" htmlFor="inlineRadio15">Si</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioVII" id="inlineRadio16" value="option2"/>
                                    <label className="form-check-label" htmlFor="inlineRadio16">No</label>
                                </div>
                            </div>
                            <div className="form-field">
                                <p>¿Su remuneración es acorde a los gastos que estima tener para el cuidado del animal? *</p>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioVIII" id="inlineRadio17" value="option1" defaultChecked/>
                                    <label className="form-check-label" htmlFor="inlineRadio17">Si</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioVIII" id="inlineRadio18" value="option2"/>
                                    <label className="form-check-label" htmlFor="inlineRadio18">No</label>
                                </div>
                            </div>
                            <div className="form-field">
                                <p>¿Tiene familiares o conocidos que lo aconsejen acerca de la crianza del animal? *</p>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioIX" id="inlineRadio19" value="option1" defaultChecked/>
                                    <label className="form-check-label" htmlFor="inlineRadio19">Si</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioIX" id="inlineRadio20" value="option2"/>
                                    <label className="form-check-label" htmlFor="inlineRadio20">No</label>
                                </div>
                            </div>
                            <p><small><i>(*) Todos los campos son obligatorios</i></small></p>
                            {props.mostrarGuardado && <button className="btn btn-primary">Guardar cambios</button>}
                        </div>
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