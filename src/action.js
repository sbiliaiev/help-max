export const getDataList = () => dispatch => {
	console.log('here');
	fetch('http://www.json-generator.com/api/json/get/cfCfduTVqq?indent=2', {
		method: 'GET',
		'Content-Type': 'application/json'
	})
	.then((res) => res.json())
	.then((res) => {
		console.log('res');
		dispatch({type: "GET_DATA_LIST", payload: res });
	})
	.catch((err) => console.log(err.message));
}

export const huy = () => {
	console.log('huy');
}