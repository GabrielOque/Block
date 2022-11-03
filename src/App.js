import "./App.css";
import buscar from "./buscar.png";
const App = () => {
  return (
    <>
      <div className="h-screen w- full">
        <div className="flex w-full h-20 text-2xl bg-gray-800">
          <div className="flex w-2/3 h-5 mt-5 font-bold text-white cursor-pointer justify-evenly">
            <div>Franquicias</div>
            <div>Fiscal y legal</div>
            <div>Ecommerces</div>
            <div>Sostenibilidad</div>
            <div>Tienda</div>
          </div>
          <div className="flex w-1/3 h-5 mt-5 font-bold text-white cursor-pointer justify-evenly">
            <div>Suscribete</div>
            <div>Notiias</div>
            <div>
              <img className="w-10 h-10" src={buscar} alt="error" />
            </div>
          </div>
        </div>
        <h>HOLA PUTITO, soy sebas he hice cambios</h> 
      </div>
    </>
  );
};

export default App;
