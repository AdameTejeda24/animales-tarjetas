export interface Animal {
  nombre: string;
  pais_origen: string;
  clasificacion: string;
  estatus: string;
  alimentación: string;
  size: string;
  imagen?: string;
}

export const datos_animales: Animal[] = [
  {
    nombre: 'Tigre de Bengala',
    pais_origen: 'Asia China',
    clasificacion: 'carnivoro',
    estatus: 'peligro de extincion',
    alimentación: 'carne y verduras',
    size: '2.5m',
    imagen: '/assets/image/tigre.jpeg'
  },
  {
    nombre: 'Jirafa',
    pais_origen: 'Tanzania Africa',
    clasificacion: 'herviboro',
    estatus: 'peligro de extincion',
    alimentación: 'hiervas y frutas',
    size: '4.5m',
    imagen: '/assets/image/jirafa.jpeg'
  },
  {
    nombre: 'Rinoceronte',
    pais_origen: 'Tanzania Africa',
    clasificacion: 'herviboro',
    estatus: 'peligro de extincion',
    alimentación: 'hiervas',
    size: '2.5m',
    imagen: '/assets/image/rinoceronte.jpeg'
  },
  {
    nombre: 'Elefante Africano',
    pais_origen: 'Kenya Africa',
    clasificacion: 'herviboro',
    estatus: 'peligro de extincion',
    alimentación: 'hiervas y frutas',
    size: '3.5m',
    imagen: '/assets/image/elefante.jpeg'
  },
  {
    nombre: 'Jaguar',
    pais_origen: 'México, sureste',
    clasificacion: 'carnivoro',
    estatus: 'peligro de extincion',
    alimentación: 'carne',
    size: '1.5m',
    imagen: '/assets/image/jaguar.jpeg'
  }
];
