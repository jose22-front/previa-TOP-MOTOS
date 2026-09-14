// TODOS OS ITENS SÃO DEMONSTRATIVOS. Não representam estoque, preços ou ofertas reais.
// Substitua também cada image por foto ORIGINAL do veículo e demonstration por false.
export const motorcycles = [
  { id: 'fazer-250', brand: 'Yamaha', model: 'Fazer 250', year: 2025, km: 4200, cc: 250, price: 24900, image: '/images/moto-demo.webp', demonstration: true, color: 'red' },
  { id: 'cb-300f', brand: 'Honda', model: 'CB 300F Twister', year: 2024, km: 8100, cc: 300, price: 27900, image: '/images/moto-demo.webp', demonstration: true, color: 'silver' },
  { id: 'cg-160', brand: 'Honda', model: 'CG 160 Titan', year: 2024, km: 12500, cc: 160, price: 18500, image: '/images/moto-demo.webp', demonstration: true, color: 'red' },
  { id: 'lander-250', brand: 'Yamaha', model: 'Lander 250', year: 2023, km: 18300, cc: 250, price: 25900, image: '/images/moto-demo.webp', demonstration: true, color: 'silver' },
  { id: 'gixxer-250', brand: 'Suzuki', model: 'Gixxer 250', year: 2024, km: 6400, cc: 250, price: 26900, image: '/images/moto-demo.webp', demonstration: true, color: 'red' },
  { id: 'dominar-400', brand: 'Bajaj', model: 'Dominar 400', year: 2023, km: 10200, cc: 400, price: 23500, image: '/images/moto-demo.webp', demonstration: true, color: 'silver' },
];
export const money = value => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
