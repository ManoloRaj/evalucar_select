import { Select_component } from '../components/Select_component';
import { Summary_component } from '../components/Summary_component';
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import '../styles/home.css';
import Marque from '../data/Marque.json'
import Modele from '../data/Modele.json'
import { useEffect, useState } from 'react';


export function Home() {
    const [listeMarques, setListeMarques] = useState([])
    const [listeModele, setListeModele] = useState([])

    const [idMarqueActive, setIdMarqueActive] = useState("")
    const [idModeleActive, setIdModeleActive] = useState("")

    const [recap, setRecap] = useState({
        marque: null,
        modele: null
    })


    useEffect(() => {
        setListeMarques(Marque)
        console.log(Marque[1].id_marque)
    }, [])


    useEffect(() => {
        setListeModele(Modele.filter(modele => modele.id_marque === idMarqueActive))
    }, [idMarqueActive])

    const handleChangeMarque = (e) => {
        var nom_marque = listeMarques.find(marque => marque.id_marque === e.target.value);

        setIdMarqueActive(e.target.value)

        setRecap((prev_value) => ({
            ...prev_value,
            marque: nom_marque
        }));
    };

    const handleChangeModele = (e) => {
        var modele = listeModele.find(modele => modele.id_modele === e.target.value);

        setIdModeleActive(e.target.value)

        setRecap((prev_value) => ({
            ...prev_value,
            modele: modele
        }));
    };

    const handleReset = () => {

        setIdMarqueActive("")
        setIdModeleActive("")
        setRecap({
            marque: null,
            modele: null
        })
    }

    return (
        <div className='home_comp'>

            <div className='form_comp'>
                <Select_component
                    listeMarques={listeMarques}
                    listeModele={listeModele}

                    idMarqueActive={idMarqueActive}
                    idModeleActive={idModeleActive}

                    handleChangeMarque={handleChangeMarque}
                    handleChangeModele={handleChangeModele}
                />

                <Summary_component
                    marque={recap.marque ? recap.marque.nom_marque : ""}
                    modele={recap.modele ? recap.modele.nom_modele : ""}
                />
                <Button onClick={handleReset}>
                    Reset
                </Button>
            </div>
        </div>
    )
}