export class Recipe {
    public name: string;
    public description: string;
    public image: string;

    constructor(name: string, desc: string, ipath: string) {
        this.name = name;
        this.description = desc;
        this.image = ipath;
    }
}
