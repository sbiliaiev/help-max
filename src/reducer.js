export default function(state = {}, action) {
	switch (action.type) {
		case "GET_DATA_LIST":
			return {...state, dataList: action.payload};
		default:
			return state;
	}		
}