enum Color {
    Green,
    Blue,
    Yellow
}

export default {
    Color
};

export const STATUS = {
    NOT_LOGIN: {
        status: 1001,
        msg: '没有登录'
    },
    TOKEN_EXPIRED: {
        status: 1009,
        msg: 'token 过期，重新登录'
    }
};

export const AUTH_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhd2VsZWV5LmxpIiwiaWF0IjoxNTY2ODkzNTI2LCJleHAiOjE1NjY4OTM1ODZ9.tn2zZCIg6gOBVZAqhKUNYjDJZu1EEc9dzU5p1YlK1zA';
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhd2VsZWV5LmxpIiwiaWF0IjoxNTY2ODkxNTg3LCJleHAiOjE1NjcwNjQzODd9.43tsf7Xvp_9l3ybi7IbNq5WslrdHCm10kghZIQm9dAA';
