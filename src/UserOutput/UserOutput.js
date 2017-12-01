import React from 'react';
import './UserOutput.css';

const UserOutput = props => {
  return <div className="User">
      <p>
        <h4>Name: {props.name}</h4>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae in
        minus aliquid, voluptate animi rerum doloribus fuga id, illo libero
        placeat nesciunt dolores hic sunt eveniet quasi, molestiae officia!
      </p>
    </div>;
};

export default UserOutput;