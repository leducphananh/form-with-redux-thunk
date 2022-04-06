import React from 'react';
import { Route } from 'react-router-dom';

function Routes({ routes }) {
    return (
        <>
            {
                routes.map(({ path, component }) => (
                    <Route
                        key={path}
                        path={path}
                        component={component}
                    />
                ))
            }
        </>
    );
}

export default Routes;