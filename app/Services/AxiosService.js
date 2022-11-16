export const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=1',
    timeout: 12000
})