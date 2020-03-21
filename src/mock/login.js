import Mock from 'mockjs'

export default {
    getToken: () => {
        return {
            "code": 0,
            "data": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODU1NTg2ODksInVzZXJuYW1lIjoiYWRtaW4ifQ.gPmdZk6sW1r8m_g8J6QXlHvYy_LjLJXRqNovEko6AKs",
            "msg": "成功"
        }
    },
    getUserInfo: () => {
        return {
            "name": 'tyt',
            "age": 18
        }
    }
}