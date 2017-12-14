/**
 * Created by kerwinliu on 2017/12/14.
 */
// src/index.js
export default [
    {
        path: '/index',
        controller: require('./home/controller')
    },
    {
        path: '/list',
        controller: require('./list/controller')
    },
    {
        path: '*',
        controller: require('./home/controller')
    }
]