import {Renter} from "../Renter";
import {Gender, Tenant} from "../Rent";
import {Agent} from "../Agent";

describe("Agent", () => {
	let showHouseSpy;

	beforeEach(() => {
		showHouseSpy = jest.spyOn(Renter.prototype, "showHouse");
	});

	it("should filter male tenant for renter", () => {
		const tenant:Tenant = {gender: Gender.Male, name: "Brant"};
		const renter = new Renter();
		const agent = new Agent(renter);

		agent.showHouse(tenant);

		expect(showHouseSpy).not.toHaveBeenCalled();
	});

	it("should show house to to female renter", () => {
		const tenant: Tenant = {gender: Gender.Female, name: "Shane"};
		const renter = new Renter();
		const agent = new Agent(renter);

		agent.showHouse(tenant);

		expect(showHouseSpy).toHaveBeenCalledWith(tenant);
	});
});
