import {Gender, Rent, Tenant} from "./Rent";

export class Agent implements Rent{
	constructor(private renter: Rent) {}

	publishRentInfo(): void {
		this.renter.publishRentInfo();
	}

	showHouse(tenant: Tenant): void {
		if(tenant.gender === Gender.Male) {
			console.log("sorry, this house is only rent for female.");
			return;
		}

		this.renter.showHouse(tenant);
	}

	signContact(tenant: Tenant): void {
		if(tenant.gender === Gender.Female) {
			this.renter.signContact(tenant);
		}
	}
}
