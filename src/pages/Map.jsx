import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Layout, Flex, Radio, theme, Spin, Cont } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { TransformBlock } from './style';
import { MapInteractionCSS } from 'react-map-interaction';
import MapLayer from '../components/MapPlayer';
import SlotLayer from '../components/SlotLayer';
import axios from "axios";
const Map = () => {

    const { token } = theme.useToken();
    // const { state, actions } = useContext(AppContext);
    const [data, setData] = useState(null);
    let [searchParams, setSearchParams] = useSearchParams();
    const [slots, setSlots] = useState([]);
    const zone = searchParams.get('zone') || 'A';
    const [loading, setLoading] = useState(false);
    const [hoveredSlots, setHoveredSlots] = useState([]);
    const [state, setState] = useState({
        zones: ['A', 'B'],
    });
    const onChangeZone = (e) => {
        setSearchParams({ zone: e.target.value });
    };
    const getData = (zone) => {

        let test = data.data.find(item => item.zone === zone);
        return test
    }
    const callApi = async (zone) => {
        try {
            const response = await axios.get("http://127.0.0.1:5000/zones/map");
            // setData(response.data); // Được gọi khi request thành công

            let flag = response.data.data.find(item => item.zone === zone);


            //// Them 1 xe tesst
            // flag.slots.forEach((slot) => {
            //     if (slot.slot_id === "A1") {
            //         slot.occupied = true; // Cập nhật trực tiếp giá trị
            //         slot.vehicle = "68T1-13234"
            //     }
            // });
            const occupiedSlots = flag.slots
                .filter((slot) => slot.occupied)
            setSlots(occupiedSlots)
        } catch (error) {
            console.error("Error fetching data:", error); // Xử lý lỗi tại đây
        }

    };

    useEffect(() => {
        callApi(zone);
        // getData("A")
    }, [zone, JSON.stringify(state.parkingEvent)]);

    return (
        <Layout.Content className="w-100 py-3">
            <Flex justify="space-between">
                <Radio.Group defaultValue={zone} buttonStyle="solid" onChange={onChangeZone}>
                    {state.zones.map((zone) => (
                        <Radio.Button key={zone} value={zone}>
                            {"Khu " + zone}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            </Flex>
            <TransformBlock className="mt-2 overflow-hidden" style={{ backgroundColor: token.neutral5 }}>
                <Spin spinning={loading} wrapperClassName="h-100 w-100">
                    <MapInteractionCSS minScale={0.4} maxScale={2}>
                        <div className="map-wrapper">
                            <MapLayer zone={zone} />
                            <SlotLayer zone={zone} vehicles={slots} hoveredSlots={hoveredSlots} />
                        </div>
                    </MapInteractionCSS>
                </Spin>
            </TransformBlock>
        </Layout.Content>
    )
};

export default Map;