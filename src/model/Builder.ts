type BuilderType<T> = {
	[P in keyof T]: (value: T[P]) => BuilderType<T>;
} & {build: () => T}

export function Builder<T>(Clazz: {new(): T}, template?: object): BuilderType<T>{
	const instance = new Clazz();

	const data = template? template : {};

	const proxy = new Proxy(data, {
		get(target: {}, p: string | number | symbol, receiver: any): any {
			if(p === 'build') {
				return function () {
					return Object.assign(instance, data);
				}
			}

			return function(value) {
				data[p] = value;
				return proxy;
			}
		}
	});

	return proxy as BuilderType<T>;
}
