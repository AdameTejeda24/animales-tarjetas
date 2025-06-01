import Card from './Card';
import { datos_animales } from '../animales';

function ListaAnimales() {
  console.log('datos_animales:', datos_animales);  

  return (
    <>
      {datos_animales.map((animal) => (
        <Card key={animal.nombre} animal={animal} />
      ))}
    </>
  );
}

export default ListaAnimales;