import { defineStore } from "pinia";
import {reactive, ref} from 'vue'

export const useStore = defineStore('post', () => {


    // стор постов


    const posts = ref([
        {
            id: 1,
            title: 'Header',
            subtitle: 'He\'ll want to use your yacht, and I don\'t want this thing smelling like fish.',
            time: '1m'
        },
        {
            id: 2,
            title: 'Header 2',
            subtitle: 'He\'ll want to use your yacht, and I don\'t want this thing smelling like fish. 32',
            time: '15m'
        },
        {
            id: 3,
            title: 'Header 3',
            subtitle: 'He\'ll want to use your yacht, and I don\'t want this thing smelling like fish. 3322',
            time: '2h 17m'
        },
        {
            id: 4,
            title: 'Header 4',
            subtitle: 'He\'ll want to use your yacht, and I don\'t want this thing smelling like fish. 123',
            time: '9m'
        },
        {
            id: 5,
            title: 'Header 5',
            subtitle: 'He\'ll want to, and I don\'t want this thing smelling like fish. 3322',
            time: '2h 17m'
        },
        {
            id: 6,
            title: 'Header 6',
            subtitle: 'He\'ll want to use your yacht, and I don\'t  smelling like fish. 123',
            time: '9m'
        },
    ]);

    const postID = ref(0)

    function setActivePost(id) {
        postID.value = id
    }


    // стор изображений


    const images = ref([
        {
            id: 1

        },
        {
            id: 2

        },
        {
            id: 3

        },
        {
            id: 4

        },
        {
            id: 5

        },
        {
            id: 6
        },
    ]);


    // данные профиля


    const profileImage = ref('/image/china.jpg')

    const profileData = reactive({
        name: 'Temnov Chingiz',
        description: 'Abu Dabudi Dabudai'
    })


    // стор для switch

    const switchData = ref([
        {
            id: 1,
            name: 'Posts'
        },
        {
            id: 2,
            name: 'Photos'
        },
    ])

    const switchId = ref(1);

    function switchToggle(id) {
        switchId.value = id;
    }

    // стор для футера и его id


    const pages = ref([
        {id: 1, name: 'Sign-In', route: '/'},
        {id: 2, name: 'Sign-Up', route: '/sign-up'},
        {id: 3, name: 'Feed', route: '/feed'},
        {id: 4, name: 'Content', route: '/content'},
        {id: 5, name: 'Profile', route: '/profile'},
    ]);

    const activePageId = ref(1);

    function setActivePageId(pageId) {
        activePageId.value = pageId;
    }

    return {
        posts,
        postID,
        images,
        pages,
        activePageId,
        profileImage,
        profileData,
        switchData,
        switchId,
        switchToggle,
        setActivePageId,
        setActivePost,
    }
})