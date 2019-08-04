type BuilderType<T> = {
	[P in keyof T]: (value: T[P]) => BuilderType<T>;
} & {build: () => T}

export function Builder<T>(Clazz: {new(): T}, template?: object): BuilderType<T>{
	const instance = new Clazz();

	const data = template? template : {};

	const proxy = new Proxy(data, {

	});

	return proxy as BuilderType<T>;
}
