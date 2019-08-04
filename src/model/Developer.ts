import {Gender, Tenant} from "./Rent";

export class Developer implements Tenant{
	gender: Gender;
	name: string;
	age: number;

	public selfIntroduction() {
		console.log(`Hi, I am ${this.name}, and I am ${this.age} years old`)
	}
}

