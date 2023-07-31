export function Summary_component(
    {
        marque,
        modele
    }) {

    return (
        <div className="summary_comp">
            Votre sélection : {marque} {modele}
        </div>
    )
}