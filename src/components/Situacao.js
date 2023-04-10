import React, {useState} from "react";

function Notas(){
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [media, setMedia] = useState(0);
    const [situacao, setSituacao] = useState();

    function calcularMedia(){
        const media = (nota1 + nota2 + nota3) /3;
        setMedia(media);
        setSituacao(media >= 6 ? "Aprovado!" : "Reprovado!")
    }

    return(
        <div>
            <h2>Media de Notas com Situação</h2>
            <label htmlFor="nota1"> nota1:</label>
            <input
                id="nota1"
                type="number"
                value={nota1}
                onChange={(event) => setNota1(Number(event.target.value))}
            />
        <div>
        <label htmlFor="nota2"> nota2:</label>
            <input
                id="nota2"
                type="number"
                value={nota2}
                onChange={(event) => setNota2(Number(event.target.value))}
            />
            </div>

            <div>
        <label htmlFor="nota3"> nota3:</label>
            <input
                id="nota3"
                type="number"
                value={nota3}
                onChange={(event) => setNota3(Number(event.target.value))}
            />
            </div>
            <button onClick={calcularMedia}>Calcular Media</button>
            {media > 0 && (
                <div>
                    <p>A Média é: {media}</p>
                    <p>Situação: {situacao}</p>
                </div>
            )}

        </div>
    );
}

export default Notas;
