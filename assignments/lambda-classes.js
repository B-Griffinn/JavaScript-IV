// CODE here for your Lambda Classes
class GameObject{
    constructor(gameObjectAttr) {
        this.createdAt = gameObjectAttr.createdAt;
        this.name = gameObjectAttr.name;
        this.dimensions = gameObjectAttr.dimensions;
    };
//methods
    destroy() {
        return ` ${this.name} was removed from the game.`;
    };
};

class CharacterStats extends GameObject {
    constructor(charAttrs) {
        super(charAttrs);
        this.healthPoints = charAttrs.healthPoints;
    };
    //methods
    takeDamage() {
        return ` ${this.name} took damage.`;
    };
};

class Humanoid extends CharacterStats {
    constructor(humanoidAttrs){
        super(humanoidAttrs);
        this.team = humanoidAttrs.team;
        this.weapons = humanoidAttrs.weapons;
        this.language = humanoidAttrs.language;
    };
    //methods
    greet() {
        return ` ${this.name} offers a greeting in ${this.language}`;
    };
};