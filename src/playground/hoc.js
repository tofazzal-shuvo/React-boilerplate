import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props)=>(
        <div>
            {props.isAdmin && <p>this is private info. Please</p>}
            <WrappedComponent {...props} />
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin = {true} info='There are the details'/>, document.getElementById('root'));