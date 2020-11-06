import React, { Fragment } from "react";
import Reference from "./reference";

import "./references-block.css";

const ReferencesBlock = ({ references }) => {
  console.log(references)

  const footer = (
    <React.Fragment>
      <p>
        Tweet me at: <a href="https://twitter.com/lssweatherhead">@lssweatherhead</a>
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
      <div>
        {references.map((ref) => (
          <Reference node={ref} key={ref.id} />
        ))}
      </div>
      <hr />
      {footer}
    </div>
  );
};

export default ReferencesBlock;