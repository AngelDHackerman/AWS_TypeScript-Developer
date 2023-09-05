import { Animal, Dog } from "./09-protected";

const animal = new Animal('elite');
animal.greeting();

const cheems = new Dog('cheems', 'Angel');
cheems.greeting()
cheems.bark(2)