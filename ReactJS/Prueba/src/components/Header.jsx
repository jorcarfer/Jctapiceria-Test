import Nav from './Nav'

function Header() {
return (
<header style={{ backgroundColor: "orange", padding: "10px",
textAlign: "center", color: "white" }}>
<h1>JCTAPICERIA</h1>
<h3>Bienvenidos a mi App React</h3>
<Nav />
</header>
);
}
export default Header;
