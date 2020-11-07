import React from "react";
import { LinkToStacked } from "react-stacked-pages-hook";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

import "gatsby-theme-garden/src/components/reference.css";
import "./custom.css";

const Reference = ({ node }) => {
  return (
    <div>
      <LinkToStacked to={node.slug} className="reference">
        <div>
            <h5><FontAwesomeIcon icon={faBookOpen} /> {node.title}</h5>
            {node.content}
        </div>
      </LinkToStacked>
    </div>
  );
};

export default Reference;