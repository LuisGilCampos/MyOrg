import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //const {nombreVariable,funcionActualiza} = useState(valorInical)
    console.log(props)
    //const [mostrar,actualizarMostar] = useState(true)
    //const manejarClick = () => {
     //   console.log("Mostrar / Ocultar elemento", !mostrar)
      //  actualizarMostar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg