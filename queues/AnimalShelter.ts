/* 
An animal shelter, which holds only dogs and cats, operates on a strictly FIFO basis. 
People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or 
they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). 
They cannot select which specific animal they would like.

Create the data structures to maintain this system and implement operations such as
enqueue, dequeueAny, dequeueDog, and dequeueCat. 
*/

type AnimalType = "Dog" | "Cat" | "Any";

class AnimalNode {
    type: AnimalType;
    next: AnimalNode | null;

    constructor(animal: AnimalType) {
        this.type = animal;
        this.next = null;
    }
}

class AnimalShelter {
    // Queue members
    first: AnimalNode | null;
    last: AnimalNode | null;

    constructor() {
        this.first = null;
        this.last = null;
    }

    // Enqueue animal
    intake(animal: AnimalType) {
        const newAnimal = new AnimalNode(animal);
        if (!this.first || !this.last) {
            this.first = newAnimal;
            this.last = newAnimal;
            return;
        }
        this.last.next = newAnimal;
        this.last = newAnimal; 
    }

    // Dequeue animal
    adopt(animal: AnimalType = "Any"): AnimalType {
        if (!this.first || !this.last) throw new Error("No animals in shelter"); 
        switch (animal) {
            case "Any":
                animal = this.first.type;
                this.first = this.first.next;
                break;
            case "Cat":
            case "Dog":
                this.adoptSpecific(animal);
                break;
        }
        return animal;
    }

    adoptSpecific(animal: AnimalType): AnimalType | null {
        if (!this.first) throw new Error("No animals in shelter");
        
        if (this.first.type === animal) {
            this.first = this.first.next;
            return animal;
        } 

        let currentAnimal: AnimalNode = this.first;
        while (currentAnimal.next) {
            if (currentAnimal.next.type === animal) {
                currentAnimal.next = currentAnimal.next.next;
                return animal;
            }
            currentAnimal = currentAnimal.next;
        }

        throw new Error(`No ${animal.toLowerCase()}s in shelter`);
    }

    listAnimals() {
        const animals: AnimalType[] = [];
        let currentAnimal: AnimalNode | null = this.first;
        while (currentAnimal) {
            animals.push(currentAnimal.type);
            currentAnimal = currentAnimal.next;
        }
        console.log(...animals);
    }
}
