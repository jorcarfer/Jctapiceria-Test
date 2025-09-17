//Va la informacion principal, por ejemplo los articulos

import Gallery from "./Gallery";

function Main() {
return (
<main style={{ padding: "20px" }}>
<h2>Nuestros Sillones</h2>
<p>Somos una empresa familiar creada en el año 2020 que se dedica a realizar sillones, respaldos de cama, fundas de almohadones, etc. Estamos ubicados en el barrio de Lanús.
                Contamos con una amplia variedad de productos de alta calidad. Nuestros sillones están fabricados con madera saligna.</p>      
<Gallery />
</main>
);
}
export default Main;