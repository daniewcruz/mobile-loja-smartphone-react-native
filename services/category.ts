import { data } from "../data";

//função para pegar uma categoria especifica pelo ID
export const getCategoryById = (id: number) => {
    return data.categories.find(item => item.id === id);

}


//função para pegar todas as categorias
export const getAllCategories = () => {
    return data.categories;
}



