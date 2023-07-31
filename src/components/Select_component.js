import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";

export function Select_component({
    listeMarques,
    listeModele,

    idMarqueActive,
    idModeleActive,

    handleChangeMarque,
    handleChangeModele
}) {


    return (
        <div className='select_comp'>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Marque</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Marque"
                    value={idMarqueActive}
                    onChange={handleChangeMarque}
                >
                    <MenuItem value="">

                    </MenuItem>
                    {
                        listeMarques !== undefined &&
                        listeMarques !== [] &&
                        listeMarques.map((result) => {
                            return (
                                <MenuItem value={result.id_marque}>
                                    {result.nom_marque}
                                </MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Modèle</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Modèle"
                    value={idModeleActive}
                    onChange={handleChangeModele}

                >
                    <MenuItem value="">

                    </MenuItem>
                    {
                        listeModele !== undefined &&
                        listeModele !== [] &&
                        listeModele.map((result) => {
                            return (
                                <MenuItem value={result.id_modele}>
                                    {result.nom_modele}
                                </MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </div>
    )
}