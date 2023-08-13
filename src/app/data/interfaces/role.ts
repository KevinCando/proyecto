import { Area } from './area';

export interface Role {
    id: number;
    areaId: number;
    name: string;
    description: string;
    dateCreate: string; // Considera usar tipo Date si conviertes la cadena a fecha
    area: Area; // Definir la interfaz Area para la propiedad "area"
}
