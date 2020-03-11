import React from 'react';
export default ({ artist }) => <div>
    {
        artist &&
        <>
            <h3>{artist.name}</h3>
            <h5>Followers: {artist.followers.total}</h5>
        </>
    }
</div>