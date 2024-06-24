import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="bg-transparent text-white p-3 w-full">
            
            <div className="flex flex-row items-center justify-between mx-7">
                <h1 className="text-4xl mt-3 mb-3 text-teal-500 font-bold tracking-tight">MUVI</h1>
                <Navbar/>
           </div>
        </header>
     );
}
export default Header;