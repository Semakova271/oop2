import Character from './Character';

export default class Zombie {
    constructor(name) {
        return new Character(name, 'Zombie', 40, 10);
    }
}