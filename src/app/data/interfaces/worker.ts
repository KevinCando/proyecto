export interface Worker {
    id: number;
    areaId: number;
    names: string;
    surnames: string;
    initialDate: string; // Considera usar tipo Date si conviertes la cadena a fecha
    endDate: string | null; // Considera usar tipo Date si conviertes la cadena a fecha
}
