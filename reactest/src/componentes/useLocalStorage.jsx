import { useState, useEffect } from "react";
import React  from 'react'

// funcion que toma y actualiza datos del localStorage
function useLocalStorage(itemName, initialValue){
  
    // estados inicializados
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
      
    // use efect que carga el contenido
    React.useEffect(() => {
  
      setTimeout(() => {
        try {
          //esta variable toma todas los datos del localStorage
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
    
          if(!localStorageItem){
            //si la variable es distinto entonces se actualiza lo datos, y se usa stringify 
            //para comvertir el valor en string
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else{
            //el parse convierte el codigo en codigo js
            parsedItem = JSON.parse(localStorageItem);
    
            setItem(parsedItem);
            
          }
    
          setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
      }, 1500)
    }, [itemName]);
      
      
  
  
      const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      }
  
      //retorna los items que se usara 
      return {item, saveItem, loading, error};
  }

export default useLocalStorage