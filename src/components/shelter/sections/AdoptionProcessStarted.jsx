import {useRef, useEffect} from 'react';
import confetti from 'canvas-confetti';

function AdoptionProcessStarted() {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        element.addEventListener('shown.bs.modal', triggerAllFires);

        return () => {
            element.removeEventListener('shown.bs.modal', triggerAllFires);
        };
    });

    var myConfetti = confetti.create(document.getElementById('confetis'), {
        resize: true,
        useWorker: true
    });

    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        myConfetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    function triggerAllFires() {
        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        fire(0.2, {
            spread: 60,
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    }

    return (
        <div ref={ref} className="modal fade" id="startAdoptionModal" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel2" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <img className="img-fluid" width={200} src="/img/posts/perro_saludando.png" alt="perro_saludando"/>
                        <h2>¡Felicitaciones!</h2>
                        <p>Estás un paso más cerca de ese gran amigo que estás buscando.</p>
                        <p>El refugio se contactará contigo para coordinar una cita.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">De acuerdo</button>
                    </div>
                </div>
            </div>
            <canvas id="confetis"></canvas>
        </div>
    );
}

export default AdoptionProcessStarted;