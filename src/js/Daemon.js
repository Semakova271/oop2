import Character from './Character';

export default class Daemon {
    constructor(name) {
        return new Character(name, 'Daemon', 10, 40);
    }
}