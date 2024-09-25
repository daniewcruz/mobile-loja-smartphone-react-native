import { data } from "../data";

//função para pegar todos os produtos
export const getAllProducts = () => {
    return data.products;
}

//função para pegar um produto especifico pelo ID
export const getProductById = (id:number) => {
    return data.products.find(item => item.id === id);
}

//função para pegar todos os produtos de uma categoria especifica
export const getProductByCategory = (idCategory:number) => {
    return data.products.filter(item => item.idCategory === idCategory);
}

