import "./App.css";
import buscar from "./buscar.png";
const App = () => {
  return (
    <>
      <div className="h-screen w- full text-align:center">
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
            <div>Noticias</div>
            <div>
              <img className="w-10 h-10" src={buscar} alt="error" />
            </div>
          </div>
        </div>
        <h>¡Welcome to best block of fucking world!</h>
        <h1>Today, the friend Gabriel not ate his lunch </h1>
        <div className="flex w-20 h-30 fond-bold text-white bg-green-800 mt-6 ml-8 cursor-pointer">
          CLIC FOR SUSCRIBE
        </div>
      </div>
    </>
  );
};

export default App;
