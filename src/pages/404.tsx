import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-box">
        <div className="error-code">404</div>
        <div className="error-status">Page not Found</div>
        <div className="error-text">Oops, Something went wrong...</div>
        <div className="not-found-footer">
            <form className="form-inline justify-content-center">
                <input className="form-control mb-1 mr-sm-1 mb-sm-0 sm-max" placeholder="Enter your query here" type="text" />
                <button className="btn btn-primary sm-max sm-mgtop-5" type="submit"> Search</button>
            </form>
        </div>
    </div>
  );
};

export default NotFound;

