import React, { useContext, useEffect, useState } from 'react';
import { Card, Layout, Row, Table, Typography } from 'antd';
import axios from 'axios';
import { Content } from 'antd/es/layout/layout';
import HistoryTable from '../components/HistoryTable';

const History = () => {

    const [data, setData] = useState(null)

    const callApi = async () => {
        try {
            await axios
                .get("http://127.0.0.1:5000/zones/history")
                .then((response) => {
                    console.log("updatedData")
                    const updatedData = response.data.data.map((item) => {
                        return {
                            ...item,
                            trang_thai: item.trang_thai.replace(/\\u[\dA-F]{4}/gi,
                                (match) => String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16)) // chuyển mã Unicode
                            ),
                        };
                    });
                    setData(updatedData)
                })
                .catch();
        } catch {
        }
    };

    useEffect(() => {
        callApi();
    }, []);

    return (
        <Content className="w-100 py-3">
            <Card>
                <HistoryTable data={data} />
            </Card>
        </Content>
    )
};

export default History;