
const initialState = {
    members: [
        {
            name: 'Brian Adams',
            id: 1,
            avatar: ''
        },
        {
            name: 'Billy Ilish',
            id: 2,
            avatar: ''
        },
        {
            name: 'Stormy Daniels',
            id: 3,
            avatar: ''
        }
    ],
    messages: [
        {
            id: 1,
            message: 'Привет, это первое сообщение в чате',
            author: {
                id: 1,
                name: 'Brian Adams'
            },
            date: '2020-05-16T15:30:00Z'
        },
        {
            id: 2,
            message: 'Привет, это первое сообщение в чате',
            author: {
                id: 1,
                name: 'Brian Adams'
            },
            date: '2020-05-16T15:30:00Z'
        },
        {
            id: 3,
            message: 'Привет, это первое сообщение в чате',
            author: {
                id: 2,
                name: 'Billi Ilish'
            },
            date: '2020-05-16T15:30:00Z'
        },
        {
            id: 3,
            message: 'Привет, это первое сообщение в чате',
            author: {
                id: 2,
                name: 'Billi Ilish'
            },
            date: '2020-05-16T15:30:00Z'
        },
        {
            id: 3,
            message: 'Привет, это первое сообщение в чате',
            author: {
                id: 2,
                name: 'Billi Ilish'
            },
            date: '2020-05-16T15:30:00Z'
        },
        {
            id: 3,
            message: 'Привет, это первое сообщение в чате',
            author: {
                id: 2,
                name: 'Billi Ilish'
            },
            date: '2020-05-16T15:30:00Z'
        },
        {
            id: 3,
            message: 'Привет, это первое сообщение в чате',
            author: {
                id: 2,
                name: 'Billi Ilish'
            },
            date: '2020-05-16T15:30:00Z'
        },
        {
            id: 3,
            message: 'Привет, это первое сообщение в чате',
            author: {
                id: 2,
                name: 'Billi Ilish'
            },
            date: '2020-05-16T15:30:00Z'
        },
        {
            id: 3,
            message: 'Привет, это первое сообщение в чате',
            author: {
                id: 2,
                name: 'Billi Ilish'
            },
            date: '2020-05-16T15:30:00Z'
        }
    ],
    author: {
        name: 'James Cook',
        avatar: ''
    }
}

export default function(state = initialState, action) {
    return state;
}