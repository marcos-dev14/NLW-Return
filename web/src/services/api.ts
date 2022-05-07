import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Foi adicionado a uma variável de ambiente para não enviar a rota
});
