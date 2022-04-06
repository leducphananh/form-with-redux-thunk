import Paginator from 'components/Paginator';
import Search from 'components/Search';
import UserList from 'components/UserList';
import React from 'react';

function HomePage() {

    return (
        <div className="data">
            <Search />
            <UserList />
            <Paginator />
        </div>
    );
}

export default HomePage;