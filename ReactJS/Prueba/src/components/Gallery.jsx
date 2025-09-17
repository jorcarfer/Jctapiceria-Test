
function Gallery() {
const images = [
"https://jorcarfer.github.io/Jctapiceria/Imagenes/Sillones/Mecedora%20Ondas%202.jpg",
"https://jorcarfer.github.io/Jctapiceria/Imagenes/Sillones/Chester%20gris.jpg",
"https://jorcarfer.github.io/Jctapiceria/Imagenes/Sillones/Circular.jpg"
];
return (
<section style={{ display: "flex", gap: "10px", justifyContent:
"center", marginTop: "20px" }}>
{images.map((src, index) => (
<img key={index} src={src} alt={`Imagen ${index + 1}`}
style={{ width: "150px", height: "150px" }} />
))}
</section>
);
}
export default Gallery;