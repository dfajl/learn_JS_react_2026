export const createEntitiesState = <T extends { id: string }>(items: T[]) => ({
	entities: items.reduce<Record<string, T>>((acc, item) => {
		acc[item.id] = item;
		return acc;
	}, {}),
	ids: items.map((item) => item.id),
});
