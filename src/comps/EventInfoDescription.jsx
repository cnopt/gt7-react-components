import React from "react";
import '../css/EventInfoDescription.css'

export default function EventInfoDescription(props) {
    const {desc, fail_cond} = props;

    return(
        <>
            <div id="eventinfodescription">
                <p className="desc">{desc}</p>
                <p className="fail-cond-title">Failure Condition(s)</p>
                <p className="fail-cond">{fail_cond}</p>
            </div>
        </>
    )
}