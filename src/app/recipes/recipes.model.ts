import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public image: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, ipath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.image = ipath;
        this.ingredients = ingredients;
    }
}
