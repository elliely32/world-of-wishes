import axios from 'axios';

const GOT_SINGLE_WISH = 'GOT_SINGLE_WISH';
const GOT_APPROVED_WISHES = 'GOT_APPROVED_WISHES';
const GOT_UNAPPROVED_WISHES = 'GOT_UNAPPROVED_WISHES';
const CREATE_WISH = 'CREATE_WISH';
const APPROVE_WISH = 'APPROVE_WISH';
const DELETE_WISH = 'DELETE_WISH';
const TOKEN = 'token';

export const setSingleWish = (wish) => ({
	type: GOT_SINGLE_WISH,
	wish,
});

export const setApprovedWishes = (wishes) => ({
	type: GOT_APPROVED_WISHES,
	wishes,
});

export const setUnapprovedWishes = (wishes) => ({
	type: GOT_UNAPPROVED_WISHES,
	wishes,
});

export const _createWish = (wish) => ({
	type: CREATE_WISH,
	wish,
});

export const _approveWish = (wish) => ({
	type: APPROVE_WISH,
	wish,
});

export const _deleteWish = (wish) => ({
	type: DELETE_WISH,
	wish,
});

export const fetchSingleWish = (id) => {
	return async (dispatch) => {
		try {
			const { data: wish } = await axios.get(`/api/wishes/${id}`);
			dispatch(setSingleWish(wish));
		} catch (err) {
			console.error(err);
		}
	};
};

export const fetchApprovedWishes = () => {
	return async (dispatch) => {
		try {
			const { data: wishes } = await axios.get('/api/wishes');
			dispatch(setApprovedWishes(wishes));
		} catch (err) {
			console.error(err);
		}
	};
};

export const fetchUnapprovedWishes = () => {
	return async (dispatch) => {
		const token = window.localStorage.getItem(TOKEN);
		try {
			const { data: wishes } = await axios.get('/api/wishes/unapproved', {
				headers: {
					authorization: token,
				},
			});
			dispatch(setUnapprovedWishes(wishes));
		} catch (err) {
			console.error(err);
		}
	};
};

export const createWish = () => {};

export const approveWish = (wishId, history) => {
	return async (dispatch) => {
		const token = window.localStorage.getItem(TOKEN);
		try {
			const { data: approved } = await axios.put(`/api/wishes/${wishId}`, wishId, {
				headers: {
					authorization: token,
				},
			});
			dispatch(_approveWish(approved));
			history.push('/');
		} catch (err) {
			console.error(err);
		}
	};
};

export const deleteWish = (wishId, history) => {
	return async (dispatch) => {
		const token = window.localStorage.getItem(TOKEN);
		try {
			const { data: deleted } = await axios.delete(`/api/wishes/${wishId}`, {
				headers: {
					authorization: token,
				},
			});
			dispatch(_deleteWish(deleted));
			history.push('/unapproved');
		} catch (err) {
			console.error(err);
		}
	};
};

export default function wishesReducer(state = [], action) {
	switch (action.type) {
		case GOT_SINGLE_WISH:
			return action.wish;
		case GOT_APPROVED_WISHES:
			return action.wishes;
		case GOT_UNAPPROVED_WISHES:
			return action.wishes;
		case APPROVE_WISH:
			return state.map((wish) =>
				wish.id === action.wish.id ? action.wish : wish
			);
		case DELETE_WISH:
			return state.filter((wish) => wish.id !== action.wish.id);
		default:
			return state;
	}
}
