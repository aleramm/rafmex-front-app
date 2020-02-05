import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const BreadCrumb: React.FC<{crumbs: any}> = (props) =>  {
  const [guide, setGuide] = useState(['Home']);

  useEffect(() => {
      setGuide(props.crumbs)
      // code
  },[props.crumbs])

  return (
    <div className="breadcrumb">
        {guide.length <= 0 ? null : 
            guide.map((crumb, index) => {
                return (
                    <NavLink to={crumb} key={index}>
                        {crumb.toString().toUpperCase()}
                    </NavLink>
                )
            })
        }
    </div>
  );
};

export default BreadCrumb;
