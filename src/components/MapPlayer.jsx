import React, { useMemo } from 'react';
import { ReactComponent as MapA } from '../assets/image/map/mapA.svg';
import { ReactComponent as MapB } from '../assets/image/map/mapB.svg';
import { ReactComponent as MapC } from '../assets/image/map/mapC.svg';

function MapLayer({ zone }) {
    return (
        <div>
            {' '}
            {useMemo(() => {
                if (zone === 'A') return <MapA />;
                else if (zone === 'B') return <MapB />;
                else if (zone === 'C') return <MapC />;
            }, [zone])}
        </div>
    );
}

export default MapLayer;
