import { createAsyncThunk } from '@reduxjs/toolkit';
import type { TRestaurant } from '../../../components/RestaurantList/restaurantTypes.ts';

export const fetchRestaurants = createAsyncThunk<
	TRestaurant[],
	void,
	{ rejectValue: string }
>('restaurant/fetchRestaurants', async (_, thunkApi) => {
	try {
		const response = await fetch('/api/restaurants');

		if (!response.ok) {
			throw new Error('Failed to fetch restaurants');
		}

		return (await response.json()) as TRestaurant[];
	} catch (error) {
		const message =
			error instanceof Error ? error.message : 'Unknown request error';

		return thunkApi.rejectWithValue(message);
	}
});
