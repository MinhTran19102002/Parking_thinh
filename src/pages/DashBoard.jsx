import { Col, Row, Layout, Card, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { GaugeCard, GaugeCard0, GaugeCard1 } from '../components/GaugeCard';
import CustomeTag from '../components/CustomTag';
import axios from "axios";
const dynamicBlock = {
    resizable: false,
    reorderable: false,
    className: 'hide-header'
};

const DashBoard = () => {
    // const tileLayoutRef = useRef(null);
    const [layoutItems, setLayoutItems] = useState([]);
    const [data, setData] = useState(null);
    const [dataC02, setDataCO2] = useState(null);
    const zone = "A"

    const hanldeLayout = () => {
        const rs = [];
        setLayoutItems(rs);
    };

    const getData = (zone) => {
        const test = data.data.find(item => item.Zone === zone);
        if (zone === "O") {
            return { total: 0, occupied: test.sl, unoccupied: 0 }
        }
        let result = { total: test.total, occupied: test.sl, unoccupied: test.total - test.sl }
        return result
    }
    const getDataC02 = () => {
        console.log("dataC02")
        console.log(dataC02)
        if (dataC02 == null) {
            return {
                total: 1,
                occupied: 0,
                unoccupied: 0
            }
        }
        let result = { total: 500, occupied: dataC02.co2_concentration, unoccupied: 500 - dataC02.co2_concentration }
        return result
    }
    const callApi = async () => {
        try {
            await axios
                .get("http://127.0.0.1:5000/zones/co2")
                .then((response) => {
                    setDataCO2(response.data);
                    console.log(response.data)
                })
                .catch();
            await axios
                .get("http://127.0.0.1:5000/zones/stats")
                .then((response) => {
                    setData(response.data);
                    // console.log(data)
                })
                .catch();

        } catch {
        }
    };

    useEffect(() => {
        hanldeLayout();
        callApi();
    }, []);

    return (
        <Layout.Content className="w-100 py-3">
            <Row id="dashboard-block" gutter={16}>
                <Col className="gutter-row" xs={24} sm={24} md={24} lg={16} xl={16} xxl={18}>
                    <Space direction="horizontal" size={6}>
                        <Card
                            title={
                                <CustomeTag bordered={false} entity={"A"} entityType={'zone'}>
                                    {"Zone A"}
                                </CustomeTag>
                            }
                            style={{
                                width: 420,
                            }}
                        >
                            {data ?
                                (<GaugeCard database={getData("A")} />) : <p>Zone A not found</p>}
                        </Card>
                        <Card
                            title={
                                <CustomeTag bordered={false} entity={"B"} entityType={'zone'}>
                                    {"Zone B"}
                                </CustomeTag>
                            }
                            style={{
                                width: 420,
                            }}
                        >
                            {data ?
                                (<GaugeCard database={getData("B")} />) : <p>Zone A not found</p>}
                        </Card>
                        <Card
                            title={
                                <CustomeTag bordered={false} entity={"C"} entityType={'zone'}>
                                    {"Empty Zone"}
                                </CustomeTag>
                            }
                            style={{
                                width: 420,
                            }}
                        >
                            {data ?
                                (<GaugeCard0 database={getData("O")} />) : <p>Zone A not found</p>}
                        </Card>



                    </Space>


                </Col>
            </Row>
            <Row id="dashboard-block" gutter={24} style={{ marginTop: '16px' }}>
                <Col className="gutter-row" xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <div style={{ textAlign: 'center' }}>
                        <Space direction="horizontal" size={8}>
                            <Card
                                title={
                                    <CustomeTag bordered={false} entity={"D"} entityType={'zone'}>
                                        {"CO2 concentration"}
                                    </CustomeTag>
                                }
                                style={{
                                    width: 420,
                                }}
                            >
                                {data ?
                                    (<GaugeCard1 database={getDataC02()} />) : <p>Zone A not found</p>}
                            </Card>
                        </Space>
                    </div>
                </Col>
            </Row>
        </Layout.Content>
    );
};

export default DashBoard;