import layout from '../layouts';
import page from '../pages';

export const routeList = [
    {
        title: 'Donkey Site',
        path: '/',
        layout: layout.common,
        page: page.dashboard,
        public: true
    },
    {
        title: 'Login',
        path: '/login',
        layout: layout.bin,
        page: page.login,
        public: true
    },
    {
        title: 'Register',
        path: '/register',
        layout: layout.bin,
        page: page.register,
        public: true
    },
    // {
    //     title: 'User',
    //     path: '/user',
    //     layout: layout.user,
    //     page: page.user,
    //     public: false
    // },
    // {
    //     title: 'Oryon',
    //     path: '/game/oryon',
    //     layout: layout.common,
    //     page: page.oryon,
    //     public: false
    // },
    // {
    //     title: 'Typing',
    //     path: '/game/typing',
    //     layout: layout.common,
    //     page: page.typing,
    //     public: false
    // },
    // {
    //     title: 'Product Manage',
    //     path: '/admin/shop',
    //     layout: layout.common,
    //     page: page.admin.shop,
    //     public: false
    // },
    // {
    //     title: 'E-Shop',
    //     path: '/shop',
    //     layout: layout.common,
    //     page: page.shop,
    //     public: false
    // },
    // {
    //     title: 'Chatting',
    //     path: '/chat',
    //     layout: layout.common,
    //     page: page.chat,
    //     public: false
    // },
    // {
    //     title: 'Gallery',
    //     path: '/gallery',
    //     layout: layout.common,
    //     page: page.Gallery,
    //     public: false
    // },
    {
        title: 'Error',
        path: '/*',
        layout: layout.common,
        page: page.error404,
        public: false
    },
]