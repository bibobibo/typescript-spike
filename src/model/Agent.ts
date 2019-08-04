import {Gender, Rent, Tenant} from "./Rent";

export const Agent = function (renter: Rent) {
	return new Proxy(renter, {
		get(target: Rent, p: string | number | symbol, receiver: any): any {
			const originalMethod = Reflect.get(target, p, receiver);

			if(p === "showHouse" || p === "signContact") {
				return new Proxy(originalMethod, {
					apply(target: any, thisArg: any, argArray?: any): any {
						const tenant = argArray[0] as Tenant;

						if(tenant.gender === Gender.Female) {
							return Reflect.apply(originalMethod, thisArg, argArray);
						}
					}
				})
			}

			return originalMethod;
		}
	});
};
