import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getDataList } from './action';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MyList from './MyList';

class App extends Component {
	
	componentDidMount() {
		console.log('component did mount');
		this.props.getDataList();
	}

	render() {
		return (
			<div className="App">
				<MyList dataList={this.props.dataList} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		dataList: state.dataList

	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getDataList
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);