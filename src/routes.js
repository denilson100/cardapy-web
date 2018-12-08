import Home from './components/home/Home.vue';
import Pedidos from './components/pedidos/Pedidos.vue';
import Login from './components/login/Login.vue';

export const routes = [

    { path: '', component: Home, titulo: 'Home' },
    { path: '/pedidos', component: Pedidos, titulo: 'Pedidos' },
    { path: '/login', component: Login, titulo: 'Login' }

];
