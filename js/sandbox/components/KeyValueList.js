import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom';
import { Table } from 'react-bootstrap';

export default class KeyValueItem extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {name, description} = this.props;
    return (
      <tr className='KeyValueItem'>
        <td>{name}</td>
        <td>{description}</td>
      </tr>
    );
  }
}

KeyValueItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default class KeyValueList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {items} = this.props;
    var rows = [];
    items.forEach(function(item) {
      if (item.description === ''){
        item.description = 'N/A';
      }
      rows.push(<KeyValueItem name={item.name} description={item.description} key={item.name}/>);
    });

    return (
      <table className='KeyValueList'>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

KeyValueItem.propTypes = {
  items: PropTypes.array.isRequired
}
