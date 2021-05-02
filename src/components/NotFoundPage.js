import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404! Page not found. - <Link to="/">Go to Home</Link>
    </div>
);

export default NotFoundPage;