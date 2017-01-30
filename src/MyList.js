import React from 'react';
import ReactDOM from 'react-dom';
import ScrollArea from 'react-scrollbar';

export default class MyList extends React.Component {
	constructor() {
		super();
		this.counter=0;
	}
	
	componentDidUpdate() {
		var node = ReactDOM.findDOMNode(this);
		console.log(node.scrollHeight);
		if (this.props.dataList.length === this.counter) {
			node.scrollTop = node.scrollHeight;	
		}
	}
	render() {
		return(
			<ScrollArea speed={0.8}
						className="area"
						contentClassName="content"
						horizontal={false}
						smoothScrolling={true}
						>
				<ul ref={(el) => this.el = ReactDOM.findDOMNode(el)}>
					{
						this.props.dataList
						? this.props.dataList.map((item, index) => {
							this.counter++;
							return <li key={index}>{index} - {item._id}</li>;
						})
						: null
					}
				</ul>
			</ScrollArea>
		);
	}
}