import React from 'react';

const UserInput = props => {
  const style = {
    width: '25%',
    minWidth: '300px',
    border: '1px solid #eee',
    boxShadow: '0 2px 3px #ccc',
    padding: '5px',
    margin: 'auto',
    marginBottom: '10px',
    textAlign: 'center'
  };

  return <div style={style}>
      <label>
        Name:
        <input type="text" value={props.name} onChange={props.change} />
      </label>
    </div>;
};

export default UserInput;