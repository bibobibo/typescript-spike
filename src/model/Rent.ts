export enum Gender{
	Male,
	Female,
}

export interface Tenant {
	name: string
	gender: Gender
}

export abstract class Rent {
	public abstract publishRentInfo(): void;
	public abstract showHouse(tenant: Tenant): void;
	public abstract signContact(tenant: Tenant): void;
}
