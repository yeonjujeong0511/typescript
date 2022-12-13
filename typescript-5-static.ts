class Pokemon2 {
  id: number;
  name: string;
  isGet: boolean;
  constructor(id, name, isGet) {
    this.id = id;
    this.name = name;
    this.isGet = isGet;
  }
}
const pick2 = new Pokemon2(1, "파이리", true);
console.dir(pick);
