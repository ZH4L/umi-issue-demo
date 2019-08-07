import router from 'umi/router';

export default {
	namespace: 'global',
	state: {
		user: {}
	},

	effects: {},

	reducers: {
		save(state, { payload }) {
			return {
				...state,
				...payload
			};
		}
	},
	subscriptions: {
		setup: ({ dispatch, history }) => {
			return history.listen(({ pathname, search }) => {
				if (pathname !== '/user') {
					dispatch({
                        type: 'save',
                        payload: {
                            user: {
                                id: 1
                            }
                        }
                    })
				}
			});
		}
	}
};
