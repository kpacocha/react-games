import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';

export default class TableCustom extends Component {
	__renderHeaderCell(header) {
		return (
			<TableHeaderColumn>{header}</TableHeaderColumn>
		);
	}

  __renderTable() {
  	return(
	    <Table selectable={false}>
	    	<TableHeader displaySelectAll={false}
	    							 adjustForCheckbox={false}>
	    		<TableRow>
	    			<TableHeaderColumn></TableHeaderColumn>
	    			{this.props.headers.map(header => this.__renderHeaderCell(header))}
	    		</TableRow>
    		</TableHeader>
    		<TableBody displayRowCheckbox={false} showRowHover>
	    		{this.props.children}
	    	</TableBody>
	    </Table>
  	);
  }

  render() {
    return this.__renderTable();
  }
}
