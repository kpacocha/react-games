const mainApiAddress = 'http://192.168.0.16:3001';

export default {
    api: {
        gamesAdd: `${mainApiAddress}/addGame`,
        games: `${mainApiAddress}/games`,
        users: `${mainApiAddress}/users`,
        usersAdd: `${mainApiAddress}/addUser`,
        plays: `${mainApiAddress}/plays`,
        playsAdd: `${mainApiAddress}/addPlay`
    }
}
