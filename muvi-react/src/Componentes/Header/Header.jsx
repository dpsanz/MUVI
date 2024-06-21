import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="fixed top-0 z-50 bg-transparent text-white p-3 w-full">
            
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-4xl mt-3 mb-3 text-colorTitle font-medium tracking-tight">MUVI</h1>
                <Navbar/>
           </div>
        </header>
     );
}
export default Header;