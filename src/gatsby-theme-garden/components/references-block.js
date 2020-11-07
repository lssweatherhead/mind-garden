import React, { Fragment } from "react";
import Reference from "./reference";

import "./references-block.css";

const ReferencesBlock = ({ references }) => {
  const footer = (
    <React.Fragment>
      <p>
        Tweet me at: <a href="https://twitter.com/lssweatherhead" target="_blank" rel="noreferrer">@lssweatherhead</a>
      </p>
    </React.Fragment>
  );

  if (references.length === 0) {
    return <Fragment><hr /><div className="references-block">{footer}</div></Fragment>;
  }

  return (
    <div className="references-block">
      <hr />
      <h3>Referenced in...</h3>
      <ul>
        {references.map((ref) => (
          <li key={ref.id}>
            <Reference node={ref} />
          </li>
        ))}
      </ul>
      <hr />
      {footer}
    </div>
  );
};

export default ReferencesBlock;