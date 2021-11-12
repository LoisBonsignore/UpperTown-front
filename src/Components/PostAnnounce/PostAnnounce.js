import "./PostAnnounce.css";
import { useState } from "react";
const axios = require('axios');

function PostAnnounce() {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [city, setCity] = useState()
    const [zip_code, setZip_Code] = useState()
    const [region, setRegion] = useState("Auvergne-Rhône-Alpes")
    const [type, setType] = useState()
    const [bedrooms, setBedrooms] = useState()
    const [surface, setSurface] = useState()
    const [price, setPrice] = useState()
    const [share_price, setShare_Price] = useState()
    const [gross_rent_by_year, setGross_rent_by_year] = useState()
    const [monthly_cost, setMonthly_cost] = useState()
    const [options, setOptions] = useState({ piscine: "", tennis: "", jardin: "", parking: "", jaccuzi: "" })
    const [image, setImage] = useState([])

    const handleInput = (setter, e) => { setter(e.target.value) }

    const handleSumbit = (e) => {
        e.preventDefault()

        let piscine = options?.piscine
        let tennis = options?.tennis
        let jardin = options?.jardin
        let parking = options?.parking
        let jaccuzi = options?.jaccuzi
        
        const d = new FormData();
        d.append('image', image[0])
        d.append('image', image[1])
        d.append('image', image[2])
        d.append('image', image[3])
        d.append('image', image[4])
        d.append('title', title)
        d.append('content', content)
        d.append('city', city)
        d.append('zip_code', zip_code)
        d.append('region', region)
        d.append('type', type)
        d.append('surface', surface)
        d.append('bedrooms', bedrooms)
        d.append('price', price)
        d.append('share_price', share_price)
        d.append('gross_rent_by_year', gross_rent_by_year)
        d.append('monthly_cost', monthly_cost)
        d.append('piscine', piscine)
        d.append('tennis', tennis)
        d.append('jardin', jardin)
        d.append('parking', parking)
        d.append('jaccuzi', jaccuzi)

        axios.post("http://localhost:1337/api/announces/creatannouncewithpics", d, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    return (

        <div>
            <div className="postannounce-container-container">

                <div className="postannounce-container"><h3>Publier une nouvelle Annonce</h3></div>

                <form onSubmit={(e) => handleSumbit(e)}>

                    <div className="postannounce">

                        <label>Nom de l'annonce</label>
                        <input type="text" placeholder="Trouvez un nom sympa" onChange={(e) => handleInput(setTitle, e)} />

                        <label>Description</label>
                        <input type="text" placeholder="Trouvez un nom sympa" onChange={(e) => handleInput(setContent, e)} />

                        <label>Ville</label>
                        <input type="text" placeholder="Trouvez un nom sympa" onChange={(e) => handleInput(setCity, e)} />

                        <label>Code Postal</label>
                        <input type="number" placeholder="Trouvez un nom sympa" onChange={(e) => handleInput(setZip_Code, e)} />

                        <label> Région :  </label>
                        <select onChange={(e) => handleInput(setRegion, e)}>
                            <option value="Auvergne-Rhône-Alpes">Auvergne-Rhône-Alpes</option>
                            <option value="Bourgogne-Franche-Comté">Bourgogne-Franche-Comté</option>
                            <option value="Bretagne">Bretagne</option>
                            <option value="Centre-Val de Loire">Centre-Val de Loire</option>
                            <option value="Corse">Corse</option>
                            <option value="Grand Est">Grand Est</option>
                            <option value="Hauts-de-France">Hauts-de-France</option>
                            <option value="Île-de-France">Île-de-France</option>
                            <option value="Normandie">Normandie</option>
                            <option value="Nouvelle Aquitaine">Nouvelle Aquitaine</option>
                            <option value="Occitanie">Occitanie</option>
                            <option value="Pays de la Loire">Pays de la Loire</option>
                            <option value="Provence Alpes Côte d'Azur">Provence Alpes Côte d'Azur</option>
                            <option value="Outre-Mer">Outre-Mer</option>
                            <option value="International">International</option>
                        </select>

                        <label> Type de bien : </label>
                        <select onChange={(e) => handleInput(setType, e)}>
                            <option value="Appartements anciens">Appartements anciens</option>
                            <option value="Appartements neufs">Appartements neufs (VEFA)</option>
                            <option value="Châlet de montagne">Châlet de montagne</option>
                            <option value="Maisons anciennes">Maisons anciennes</option>
                            <option value="Maisons neuves">Maisons neuves</option>
                            <option value="Résidences de service">Résidences de service (Seniors, étudiantes, coliving)</option>
                            <option value="terrains constructibles">Terrains constructibles</option>
                        </select>

                        <label>Nombre de Chambres</label>
                        <input type="number" placeholder="Trouvez un nom sympa" onChange={(e) => handleInput(setBedrooms, e)} />

                        <label>Superficie</label>
                        <input type="number" placeholder="Trouvez un nom sympa" onChange={(e) => handleInput(setSurface, e)} />

                        <label>Prix du bien</label>
                        <input type="number" placeholder="Trouvez un nom sympa" onChange={(e) => handleInput(setPrice, e)} />

                        <label>Prix de la part</label>
                        <input type="number" placeholder="Trouvez un nom sympa" onChange={(e) => handleInput(setShare_Price, e)} />

                        <label>Options</label>
                        {options.piscine == "" ?
                            <div><input type="checkbox" onChange={() => setOptions({ ...options, piscine: "piscine" })} /> Piscine</div> :
                            <div><input type="checkbox" onChange={() => setOptions({ ...options, piscine: "" })} /> Piscine</div>}
                        {options.tennis == "" ?
                            <div><input type="checkbox" onChange={() => setOptions({ ...options, tennis: "tennis" })} /> Tennis</div> :
                            <div><input type="checkbox" onChange={() => setOptions({ ...options, tennis: "" })} /> Tennis</div>}
                        {options.jardin == "" ?
                            <div><input type="checkbox" onChange={() => setOptions({ ...options, jardin: "jardin" })} /> Jardin</div> :
                            <div><input type="checkbox" onChange={() => setOptions({ ...options, jardin: "" })} /> Jardin</div>}
                        {options.parking == "" ?
                            <div><input type="checkbox" onChange={() => setOptions({ ...options, parking: "parking" })} /> Parking</div> :
                            <div><input type="checkbox" onChange={() => setOptions({ ...options, parking: "" })} /> Parking</div>}
                        {options.jaccuzi == "" ?
                            <div><input type="checkbox" onChange={() => setOptions({ ...options, jaccuzi: "jaccuzi" })} /> Jaccuzi</div> :
                            <div><input type="checkbox" onChange={() => setOptions({ ...options, jaccuzi: "" })} /> Jaccuzi</div>}

                        <label>Rentabilité Annuelle</label>
                        <input type="number" placeholder="Trouvez un nom sympa" onChange={(e) => handleInput(setGross_rent_by_year, e)} />

                        <label>Loyer</label>
                        <input type="number" placeholder="Trouvez un nom sympa" onChange={(e) => handleInput(setMonthly_cost, e)} />

                        <label>Photos</label>
                        <div>Selectionnez jusqu'à cinq photos à fois !</div>
                        <input type="file" name="image" multiple onChange={(e) => setImage(e.target.files)} />

                        <button className="postannounce-button-validate" type="submit">Envoyer l'annonce !</button></div>
                </form>
            </div>
        </div>
    )


}

export default PostAnnounce;