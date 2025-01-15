import React from 'react';
import { Space, Table, Tag } from 'antd';

function HistoryTable({ data }) {

    const columns = [
        {
            title: 'License plate',
            dataIndex: 'bien_so',
            key: 'bien_so',
            // render: (text) => <a>{text}</a>,
        },
        {
            title: 'Vehicle type',
            dataIndex: 'loai_xe',
            key: 'loai_xe',
        },
        {
            title: 'Fee',
            dataIndex: 'phi',
            key: 'phi',
        },
        {
            title: 'Entry time',
            dataIndex: 'thoi_gian_vao',
            key: 'thoi_gian_vao',
        },
        {
            title: 'Exit time',
            dataIndex: 'thoi_gian_ra',
            key: 'thoi_gian_ra',
        },
        {
            title: 'Status of vehicle',
            dataIndex: 'trang_thai',
            key: 'trang_thai',
        },


    ];
    const data1 = [
        {
            "bien_so": "51F-866.88",
            "loai_xe": "Xe ô-tô",
            "phi": "5000 VND",
            "thoi_gian_ra": "2025-01-11 22:17:06",
            "thoi_gian_vao": "2025-01-11 22:14:53",
            "trang_thai": "Xe đã ra khỏi bãi"
        },
        {
            "_id": "67828affac9532dcbc8dde1b",
            "bien_so": "51F-552.95",
            "loai_xe": "Xe ô-tô",
            "phi": "5000 VND",
            "thoi_gian_ra": "2025-01-11 22:16:42",
            "thoi_gian_vao": "2025-01-11 22:15:11",
            "trang_thai": "Xe đã ra khỏi bãi"
        },
        {
            "_id": "67828f2822672dc7bd3ca0d5",
            "bien_so": "30E-921.15",
            "loai_xe": "Xe ô-tô",
            "phi": "0 VND",
            "thoi_gian_ra": null,
            "thoi_gian_vao": "2025-01-11 22:32:54",
            "trang_thai": "Xe đang ở khu vực Zone Trống"
        },
        {
            "bien_so": "51F-866.88",
            "loai_xe": "Xe ô-tô",
            "phi": "5000 VND",
            "thoi_gian_ra": "2025-01-11 22:17:06",
            "thoi_gian_vao": "2025-01-11 22:14:53",
            "trang_thai": "Xe đã ra khỏi bãi"
        },
        {
            "_id": "67828affac9532dcbc8dde1b",
            "bien_so": "51F-552.95",
            "loai_xe": "Xe ô-tô",
            "phi": "5000 VND",
            "thoi_gian_ra": "2025-01-11 22:16:42",
            "thoi_gian_vao": "2025-01-11 22:15:11",
            "trang_thai": "Xe đã ra khỏi bãi"
        },
        {
            "_id": "67828f2822672dc7bd3ca0d5",
            "bien_so": "30E-921.15",
            "loai_xe": "Xe ô-tô",
            "phi": "0 VND",
            "thoi_gian_ra": null,
            "thoi_gian_vao": "2025-01-11 22:32:54",
            "trang_thai": "Xe đang ở khu vực Zone Trống"
        },
        {
            "bien_so": "51F-866.88",
            "loai_xe": "Xe ô-tô",
            "phi": "5000 VND",
            "thoi_gian_ra": "2025-01-11 22:17:06",
            "thoi_gian_vao": "2025-01-11 22:14:53",
            "trang_thai": "Xe đã ra khỏi bãi"
        },
        {
            "_id": "67828affac9532dcbc8dde1b",
            "bien_so": "51F-552.95",
            "loai_xe": "Xe ô-tô",
            "phi": "5000 VND",
            "thoi_gian_ra": "2025-01-11 22:16:42",
            "thoi_gian_vao": "2025-01-11 22:15:11",
            "trang_thai": "Xe đã ra khỏi bãi"
        },
        {
            "_id": "67828f2822672dc7bd3ca0d5",
            "bien_so": "30E-921.15",
            "loai_xe": "Xe ô-tô",
            "phi": "0 VND",
            "thoi_gian_ra": null,
            "thoi_gian_vao": "2025-01-11 22:32:54",
            "trang_thai": "Xe đang ở khu vực Zone Trống"
        },
        {
            "bien_so": "51F-866.88",
            "loai_xe": "Xe ô-tô",
            "phi": "5000 VND",
            "thoi_gian_ra": "2025-01-11 22:17:06",
            "thoi_gian_vao": "2025-01-11 22:14:53",
            "trang_thai": "Xe đã ra khỏi bãi"
        },
        {
            "_id": "67828affac9532dcbc8dde1b",
            "bien_so": "51F-552.95",
            "loai_xe": "Xe ô-tô",
            "phi": "5000 VND",
            "thoi_gian_ra": "2025-01-11 22:16:42",
            "thoi_gian_vao": "2025-01-11 22:15:11",
            "trang_thai": "Xe đã ra khỏi bãi"
        },
        {
            "_id": "67828f2822672dc7bd3ca0d5",
            "bien_so": "30E-921.15",
            "loai_xe": "Xe ô-tô",
            "phi": "0 VND",
            "thoi_gian_ra": null,
            "thoi_gian_vao": "2025-01-11 22:32:54",
            "trang_thai": "Xe đang ở khu vực Zone Trống"
        }
    ];
    return (
        <Table columns={columns} dataSource={data} />
    )
}
export default HistoryTable;