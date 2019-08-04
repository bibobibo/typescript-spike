import {Developer} from "../Developer";
import {Builder} from "../Builder";
import {Gender} from "../Rent";

describe("Builder", () => {
	it("can build a class instance", () => {
		const builder = Builder(Developer);
		const dev = new Developer();
		dev.age = 10;
		dev.gender = Gender.Male;
		dev.name = 'Brant';

		const developer = builder.name('Brant').age(10).gender(Gender.Male).build();

		expect(developer instanceof Developer).toBe(true);
		expect(developer).toEqual(dev)
	});

	it("support template", () => {
		const builder = Builder(Developer, {age: 10});
		const dev = new Developer();
		dev.age = 10;
		dev.gender = Gender.Male;
		dev.name = 'Brant';

		const developer = builder.name('Brant').gender(Gender.Male).build();

		expect(developer instanceof Developer).toBe(true);
		expect(developer).toEqual(dev)
	});
});
