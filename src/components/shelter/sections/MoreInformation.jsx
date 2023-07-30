function MoreInformation(props) {
    const {shelterInfo} = props;
    
    return (
        <div className="row">
            <div className="col-6">
                <img className="img-fluid" width={600} src={shelterInfo.map} alt="shelter_map"/>
            </div>
            <div className="col-6">
                <h4>Dirección:</h4>
                <p>{shelterInfo.address}, {shelterInfo.district}</p>
                <h4>Teléfono:</h4>
                <p>(011) 5555-5555</p>
                <h4>Horario:</h4>
                <p>Lunes a viernes 10 a 20 hs.</p>
                <h4>Descripción:</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    );
}

export default MoreInformation;