import Character from './Character';

export default class Magician {
    constructor(name) {
        return new Character(name, 'Magician', 10, 40);
    }
}