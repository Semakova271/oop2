import Character from './Character';

export default class Bowerman {
    constructor(name) {
        return new Character(name, 'Bowman', 25, 25);
    }
}