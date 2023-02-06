import { Identity } from "./types";

export function fields<T>(): (input: T) => Identity<T>;
export function fields<T>(defaults: T): (input: Partial<T>) => Identity<T>;

export function fields<T>(defaults?: T): (input: Partial<T> | T) => Identity<T> {
	return (input): Identity<T> => {
		return { ...defaults, ...input } as Identity<T>;
	};
}
