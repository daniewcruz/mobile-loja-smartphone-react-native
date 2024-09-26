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
            cover: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbWk2SkpnN3c0VXdqTFlOQWw0ako4Z0JQYkhSV3V1dC9oa0s5K3lqMGtUaFZLT0FjUmJBS0dRNXNSZjdhSHdZZnVoN2JMcWllS1ZyOTRFMmsxRUIrQ20=&traceId=1'
        },
        {
            id: 2,
            title: 'Computadores e Laptops',
            cover: 'https://s2-techtudo.glbimg.com/Et0Z78geq2y9LpHy0U7e0OUHZWQ=/0x0:1200x630/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/3/F/wN7K1ESaqCaKHclCcNAw/whatsapp-image-2018-11-26-at-20.19.38.jpeg'
        },
       
        {
            id: 4,
            title: 'Periféricos e Acessórios',
            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCsLqmsYJojQO8w4W3KYG7ZX60IX9X14c0g&s'
        },
        {
            id: 3,
            title: 'Câmeras de Segurança',
            cover: 'https://images-americanas.b2w.io/produtos/31709055/imagens/camera-de-seguranca-intelbras-vhd-3230-b-full-hd-1080p-g4/31709057_1_xlarge.jpg'
        },
     
    ],
    products: [
        // Smartphones
        { id: 1, idCategory: 1, image: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-a065mzkgzto/gallery/br-galaxy-a06-sm-a065-sm-a065mzkgzto-thumb-543344844?$172_172_PNG$", title: "Galaxy A06", description: "Tela AMOLED de 6.5 polegadas, câmera tripla de 48MP.", price: 800 },
        { id: 2, idCategory: 1, image: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-f741blbjzto/gallery/br-galaxy-zflip6-f741-513506-sm-f741blbjzto-thumb-542639659?$172_172_PNG$", title: "Galaxy Z Flip6", description: "O design mais fino e leve 6,1 polegadas ", price: 6000 },

        // Computadores e Laptops
        { id: 3, idCategory: 2, image: "https://images.samsung.com/is/image/samsung/p6pim/br/np750xgj-kg1br/gallery/br-galaxy-book4-156-inch-np750xgka-np750xgj-kg1br-thumb-540336075?$172_172_PNG$", title: "Galaxy Book4", description: "Processador Intel i7, 16GB RAM, 512GB SSD.", price: 1499.99 },
        { id: 4, idCategory: 2, image: "https://a-static.mlcdn.com.br/800x560/cpu-gamer-rayzen-7-5700x-fenix-pc/fenix-informaticaetecnologia/4275342e13aa11ef86924201ac185034/e4848583d591d27ee7d6308e2c622754.jpeg", title: "Cpu gamer rayzen 7 5700x ", description: " PLACA DE VIDEO 8GB RTX 2060  - GABINETE HAYON", price: 1999.99 },

        // Câmeras e Equipamentos de Segurança
        { id: 5, idCategory: 3, image: "https://a-static.mlcdn.com.br/800x560/camera-de-seguranca-intelbras-vhc-1120-b-hd-colorida-2-8mm-protecao-antissurto-branco-4565330/santasecuritysolutions/98a2e09427ce11ee80b14201ac185049/0af977ce70b613c1095506924a1b59fa.jpeg", title: "Câmera de Segurança HD", description: "Visão noturna, conectividade Wi-Fi, gravação em 1080p.", price: 199.99 },
        { id: 6, idCategory: 3, image: "https://a-static.mlcdn.com.br/800x560/camera-ip-wifi-externa-2-antenas-prova-d-agua-ip66-hd-orbitronic/clicamundo/481-473/df7e92fffcaeffac7789f888111e80e6.jpeg", title: "Câmera DSLR Pro", description: "Sensor de 24.2MP, gravação em 4K, lente intercambiável.", price: 299.99 },

        // Periféricos e Acessórios
        { id: 7, idCategory: 4, image: "https://a-static.mlcdn.com.br/800x560/teclado-mecanico-gamer-hyperx-alloy-origins-rgb-switch-hyperx-red-abnt2/bkcomercial/teclado-hyperx-aloy-origins/8598f69e47e8eaaaa72d519e3d1d6876.jpeg", title: "Teclado Mecânico RGB", description: "Switches mecânicos, iluminação RGB personalizável.", price: 529.99 },
        { id: 8, idCategory: 4, image: "https://a-static.mlcdn.com.br/800x560/mouse-gamer-warrior-7-botoes-3200-dpi-preto-multilaser-mo207/obaboxtecnologia/10024372/3a0eb3ec5da2825e0356e1c6f2ad743f.jpeg", title: "Mouse Gamer", description: "DPI ajustável, design ergonômico, iluminação LED.", price: 79.99 },
        { id: 9, idCategory: 4, image: "https://a-static.mlcdn.com.br/800x560/monitor-gamer-curvo-kbm-gaming-mg320-27-180hz-full-hd-1ms-displayport-e-hdmi-adaptive-sync-ajuste-de-angulo-kgmg32027pt/kabum/471914/69d35248227e7934d2c7ac1e87518125.jpeg", title: "Monitor Curvo 27\"", description: "Resolução 1440p, taxa de atualização de 144Hz.", price: 349.99 },

        
    ]
};
