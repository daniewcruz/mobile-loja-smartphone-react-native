import { Category } from "../types/category";
import { Product } from "../types/product";

type Data = {
    categories: Category[],
    products: Product[]
};

export const data: Data = {
    categories: [
        {
            id: 1,
            title: 'Smartphones',
            cover: 'https://picsum.photos/id/1025/1000/300'
        },
        {
            id: 2,
            title: 'Computadores e Laptops',
            cover: 'https://picsum.photos/id/1060/1000/300'
        },
        {
            id: 3,
            title: 'Câmeras e Equipamentos de Segurança',
            cover: 'https://picsum.photos/id/1033/1000/300'
        },
        {
            id: 4,
            title: 'Periféricos e Acessórios',
            cover: 'https://picsum.photos/id/1080/1000/300'
        },
        {
            id: 5,
            title: 'Áudio e Fones de Ouvido',
            cover: 'https://picsum.photos/id/1084/1000/300'
        }
    ],
    products: [
        // Smartphones
        { id: 1, idCategory: 1, image: "https://picsum.photos/id/1025/200/200", title: "Smartphone X1", description: "Tela AMOLED de 6.5 polegadas, câmera tripla de 48MP.", price: 799.99 },
        { id: 2, idCategory: 1, image: "https://picsum.photos/id/1037/200/200", title: "Smartphone Z5", description: "Processador Snapdragon, bateria de 5000mAh, 5G.", price: 699.99 },

        // Computadores e Laptops
        { id: 3, idCategory: 2, image: "https://picsum.photos/id/1060/200/200", title: "Laptop Pro 15\"", description: "Processador Intel i7, 16GB RAM, 512GB SSD.", price: 1499.99 },
        { id: 4, idCategory: 2, image: "https://picsum.photos/id/1059/200/200", title: "Desktop Gamer", description: "Placa de vídeo RTX 3070, 32GB RAM, 1TB SSD.", price: 1999.99 },

        // Câmeras e Equipamentos de Segurança
        { id: 5, idCategory: 3, image: "https://picsum.photos/id/1033/200/200", title: "Câmera de Segurança HD", description: "Visão noturna, conectividade Wi-Fi, gravação em 1080p.", price: 199.99 },
        { id: 6, idCategory: 3, image: "https://picsum.photos/id/1074/200/200", title: "Câmera DSLR Pro", description: "Sensor de 24.2MP, gravação em 4K, lente intercambiável.", price: 999.99 },

        // Periféricos e Acessórios
        { id: 7, idCategory: 4, image: "https://picsum.photos/id/1044/200/200", title: "Teclado Mecânico RGB", description: "Switches mecânicos, iluminação RGB personalizável.", price: 129.99 },
        { id: 8, idCategory: 4, image: "https://picsum.photos/id/1070/200/200", title: "Mouse Gamer", description: "DPI ajustável, design ergonômico, iluminação LED.", price: 79.99 },
        { id: 9, idCategory: 4, image: "https://picsum.photos/id/1080/200/200", title: "Monitor Curvo 27\"", description: "Resolução 1440p, taxa de atualização de 144Hz.", price: 349.99 },

        // Áudio e Fones de Ouvido
        { id: 10, idCategory: 5, image: "https://picsum.photos/id/1084/200/200", title: "Fone de Ouvido Bluetooth", description: "Som cristalino, cancelamento de ruído ativo.", price: 199.99 },
        { id: 11, idCategory: 5, image: "https://picsum.photos/id/1049/200/200", title: "Headset Gamer", description: "Áudio surround 7.1, microfone removível.", price: 149.99 },
        { id: 12, idCategory: 5, image: "https://picsum.photos/id/1063/200/200", title: "Caixa de Som Bluetooth", description: "Som potente, bateria de longa duração.", price: 99.99 }
    ]
};
