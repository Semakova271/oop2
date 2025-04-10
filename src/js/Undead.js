import Character from './Character';

export default class Undead {
    constructor(name) {
        return new Character(name, 'Undead', 25, 25);
    }
}