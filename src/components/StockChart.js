import React, { Component } from 'react';
import TimeScale from './TimeScale.js';
import Visualization from './Visualization.js';
import '../App.css';

class StockChart extends Component {
	render() {
		const update = this.props.update;
		const dateRange = this.props.dateRange;
		const active = this.props.active;
		return (
			<div className="row">
				<div className="col s12 m12 l12">
					<div className="card">
						<div className="chart-wrapper card-content">
							<TimeScale 
								update={update}
								dateRange={dateRange}
								active={active}
							/>
							<Visualization />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default StockChart;