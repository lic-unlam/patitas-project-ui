import React from "react";
import { Link } from "react-router-dom";

import { LatestPosts } from "./LatestPosts";
import { Categories } from "./Categories";

const Forum = () => {
    return (
        <div className="forum-wrapper">
            <h1>Bienvenido al foro</h1>
            <LatestPosts />
            <Categories />
        </div>
    );
}

export default Forum;