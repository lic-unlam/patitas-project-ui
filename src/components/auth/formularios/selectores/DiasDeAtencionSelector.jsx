export const DiasDeAtencionSelector = (props) => {
    let { handleChange, handleBlur } = props;

    return (
        <div className="form-group py-2">
            <p>Días de atención:</p>
            <div className="pb-2">
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="lunes"
                        name="diasDeAtencion"
                        value="Lunes"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label className="form-check-label" htmlFor="lunes">
                        Lunes
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="martes"
                        name="diasDeAtencion"
                        value="Martes"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label className="form-check-label" htmlFor="martes">
                        Martes
                    </label>
                </div>
            </div>
            <div className="pb-2">
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="miercoles"
                        name="diasDeAtencion"
                        value="Miercoles"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label className="form-check-label" htmlFor="miercoles">
                        Miércoles
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="jueves"
                        name="diasDeAtencion"
                        value="Jueves"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label className="form-check-label" htmlFor="jueves">
                        Jueves
                    </label>
                </div>
            </div>
            <div className="pb-2">
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="viernes"
                        name="diasDeAtencion"
                        value="Viernes"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label className="form-check-label" htmlFor="viernes">
                        Viernes
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="sabado"
                        name="diasDeAtencion"
                        value="Sabado"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label className="form-check-label" htmlFor="sabado">
                        Sábado
                    </label>
                </div>
            </div>
            <div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="domingo"
                        name="diasDeAtencion"
                        value="Domingo"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label className="form-check-label" htmlFor="domingo">
                        Domingo
                    </label>
                </div>
            </div>
        </div>
    );
};
