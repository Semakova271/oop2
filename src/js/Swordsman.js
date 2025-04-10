import Character from './Character';

export default class Swordsman {
    constructor(name) {
        return new Character(name, 'Swordsman', 40, 10);
    }
}