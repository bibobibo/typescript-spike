import {Rent, Tenant} from "./Rent";

export class Renter implements Rent{
	publishRentInfo(): void {
		console.log("This house is near to TW office. 99$ each month, only for female")
	}

	showHouse(tenant: Tenant): void {
		console.log(`Hi ${tenant.name}, this is my house`)
	}

	signContact(tenant: Tenant): void {
		console.log(`Sign contract with ${tenant.name}`)
	}
}
