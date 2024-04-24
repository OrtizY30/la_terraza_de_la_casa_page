import React from "react";

const Contactos = () => {
  return (
    <div className="h-screen  max-w-7xl mx-auto flex items-center justify-center">
      <div className="shadow-2xl w-96 shadow-black  mx-auto bg-orange-200/70 p-8 rounded-xl flex flex-col items-center space-y-8">
        <h1 className="text-4xl text-center font-black  ">Contactos</h1>

        <div className="w-4/5 flex flex-col  gap-6">
          <div className="flex flex-row  gap-6">
            <box-icon name="phone" type="solid" size="lg"></box-icon>

            <div className="">
              <p className="font-black">3571992</p>
              <p className="font-black">3552721</p>
            </div>
          </div>

          <div className="flex flex-row  gap-6 items-center">
            <div className="rounded-full bg-green-600 w-13 h-12 ">
              <box-icon
                name="whatsapp"
                type="logo"
                color="#f8f8f8"
                size="lg"
              ></box-icon>
            </div>

            <p className="font-black">3117164854</p>
          </div>
          <div className="flex flex-row  gap-6 items-center">
           
              <box-icon
                name="instagram"
                type="logo"
                color="#c94002"
                size="lg"
              ></box-icon>
           

            <p className="font-black">@laterrazadelacasa</p>
          </div>

          <div className="flex flex-row  gap-6 items-center ">
           
             <box-icon name='facebook-square' type='logo' color='#0e46e2' size='lg' ></box-icon>
            

            <p className="font-black ">La terraza de la casa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos;