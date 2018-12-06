import Home from './components/home/Home.vue';
import Pedidos from './components/pedidos/Pedidos.vue';

export const routes = [

    { path: '', component: Home, titulo: 'Home' },
    { path: '/pedidos', component: Pedidos, titulo: 'Pedidos' }

];
