import Character from '../character.js';

describe('Character class', () => {
  let character;

    beforeEach(() => {
    character = new Character(1, 100, 50, 30);
  });

 
  test('constructor initializes properties correctly', () => {
    expect(character.level).toBe(1);
    expect(character.health).toBe(100);
    expect(character.attack).toBe(50);
    expect(character.defence).toBe(30);
  });

  
  test('levelUp increases level, attack, defence and restores health', () => {
    character.health = 80; 
    character.levelUp();

    expect(character.level).toBe(2); 
    expect(character.attack).toBe(60); 
    expect(character.defence).toBe(36); 
    expect(character.health).toBe(100); 
  });


  test('levelUp throws error for dead character', () => {
    character.health = 0; 

    expect(() => {
      character.levelUp();
    }).toThrow('Нельзя повысить уровень умершего персонажа');
  });

  
  test('damage reduces health correctly', () => {
    character.damage(40); 

   
    expect(character.health).toBeCloseTo(72);
  });

  
  test('damage sets health to 0 when damage exceeds health', () => {
    character.damage(200); 

    expect(character.health).toBe(0); 
  });


  test('damage does not affect dead character', () => {
    character.health = 0; 
    character.damage(50); 

    expect(character.health).toBe(0); 
  });
});
