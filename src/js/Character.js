export default class Character {
  constructor(level, health, attack, defence) {
    this.level = level; 
    this.health = health; 
    this.attack = attack; 
    this.defence = defence; 
  }

 
  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего персонажа');
    }
    this.level += 1; 
    this.attack = Math.round(this.attack * 1.2); 
    this.defence = Math.round(this.defence * 1.2); 
    this.health = 100; 
  }

  
  damage(points) {
    if (this.health > 0) {
      
      this.health -= points * (1 - this.defence / 100);
      
      if (this.health < 0) {
        this.health = 0;
      }
    }
    
  }
}
