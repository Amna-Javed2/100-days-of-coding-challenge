"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwich(item) {
    console.log('   \nMaking your sandwich with:   \n');
    item.forEach(Element => {
        console.log(`- ${Element}`);
    });
    console.log('    Enjoy your sandwich !    ');
}
makeSandwich(['Chicken', 'Butter', 'Peanut']);
makeSandwich(['Jelly', 'Potato', 'Peanut', 'Chicken']);
makeSandwich(['Beef', 'Butter', 'Cheese']);
