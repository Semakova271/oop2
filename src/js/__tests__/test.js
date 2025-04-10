import Character from '../character.js';
import Bowman from '../bowman.js';
import Daemon from '../daemon.js';
import Magician from '../magician.js';
import Swordsman from '../swordsman.js';
import Undead from '../undead.js';
import Zombie from '../zombie.js';

test('New character with invalid name (too short)', () => {
    expect(
        () => new Character('O', 'Bowman', 100, 100),
    ).toThrow('Invalid name length');
});

test('New character with invalid name (too long)', () => {
    expect(
        () => new Character('LooooooongName', 'Daemon', 100, 100),
    ).toThrow('Invalid name length');
});

test('New character with invalid character type', () => {
    expect(
        () => new Character('Bowman', 'FakeBowman', 100, 100),
    ).toThrow('Invalid character type');
});

test('Inflict damage to character', () => {
    const testChar = new Character('Bowman', 'Bowman', 25, 25);
    testChar.damage(50);
    expect(testChar).toEqual({
        name: 'Bowman',
        type: 'Bowman',
        health: 62.5,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('The value of health cannot be negative', () => {
    const testChar = new Character('Bowman', 'Bowman', 25, 25);
    testChar.health = 0;
    testChar.damage(50);
    expect(testChar.health).toEqual(0);
});

test('Go to the next level', () => {
    const testChar = new Character('Bowman', 'Bowman', 25, 25);
    testChar.levelUp();
    expect(testChar).toEqual({
        name: 'Bowman',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    });
});

test('Go to the next level with zero health', () => {
    const testChar = new Character('Bowman', 'Bowman', 25, 25);
    testChar.health = 0;
    expect(() => testChar.levelUp()).toThrow(
        'You cannot raise the level with zero health',
    );
});

test('New Bowman', () => {
    const bowman = new Bowman('Bowman');
    expect(bowman).toEqual({
        name: 'Bowman',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('New Daemon', () => {
    const daemon = new Daemon('Daemon');
    expect(daemon).toEqual({
        name: 'Daemon',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});

test('New Magician', () => {
    const magician = new Magician('Magician');
    expect(magician).toEqual({
        name: 'Magician',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});

test('New Swordsman', () => {
    const swordsman = new Swordsman('Swordsman');
    expect(swordsman).toEqual({
        name: 'Swordsman',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});

test('New Undead', () => {
    const undead = new Undead('Undead');
    expect(undead).toEqual({
        name: 'Undead',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('New Zombie', () => {
    const zombie = new Zombie('Zombie');
    expect(zombie).toEqual({
        name: 'Zombie',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});