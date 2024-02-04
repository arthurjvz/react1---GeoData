import React from 'react'

export default function ModalContent({country, closeModal   }) {
  return (
    <div onClick={closeModal} className="fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex justify-center items-center">
        <div 
        onClick={e => e.stopPropagation()} //empeche la propagation de "closeModal" a son enfant
        className="min-w-[500px] relative rounded p-7 bg-gray-50 ">
            <button className="absolute top-2 right-1 w-8 h-8 flex items-center justify-center text-sm bg-red-600 text-white 
            hover:bg-red-700 py-1 px-3 rounded" onClick={closeModal}>X</button>

        
        <h2 className="text-2xl mb-4"> Here is {country.name.common}'s informations</h2>
        <p className="text-lg mb-2">
            <span className="font-semibold">Languages(s)</span>
            : {Object.entries(country.languages).map(lang => lang[1] + " ")} 
            {/* 
            On créé un tableau car un pays peut avoir plusieurs langues, l'API stock
            ses langues dans un object. 
            On prend les entrées de l'object "country.languages" la fonction return en tableau et dans ce tableau, chaque langue est un tableau
            Le .map permet de selctionner ce que l'on veut prendre dans chaque tableau de langue, c'est a dire la deuxieme valeur
            car la première est l'acronyme, la deuxieme le nom complet. On prend donc la valeur [1]
            Puis on met un espace dans le cas ou il y a plusieurs langues dans un seul pays, pour TOUTES les afficher
            */}
        </p>
        <p className="text-lg mb-2">
            <span className="font-semibold">Capital</span>
            : {country.capital[0]}
        </p>
        <p className="text-lg mb-2">
            <span className="font-semibold">Population</span>
            : {country.population}
        </p>
        </div>
    </div>
  )
}
