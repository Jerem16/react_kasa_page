import React, { useState } from "react";

const Collapse = ({ title, content, className }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleClick = () => {
        setIsCollapsed(!isCollapsed);
    };

    const collapseClass = isCollapsed ? "closed" : "opened";

    return (
        <article className={className}>
            <h4 onClick={handleClick} className="collapse">
                {title}
                <i className={`fas fa-chevron-up ${collapseClass}`}></i>
            </h4>
            <div className={`collapse-content ${collapseClass}`}>{content}</div>
        </article>
    );
};

export default Collapse;
