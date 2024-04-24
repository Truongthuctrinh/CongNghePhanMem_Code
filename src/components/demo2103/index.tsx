import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
    key: string;
    name: string;
    price: number;
    origin: string;
    // tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        // render: (text) => <a>{text}</a>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Origin',
        dataIndex: 'origin',
        key: 'origin',
    },
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, { tags }) => (
    //         <>
    //             {tags.map((tag) => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },

    {
        title: 'ExpiredDate',
        dataIndex: 'expiredDate',
        key: 'expiredDate',
    },

    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_, record) => (
    //         <Space size="middle">
    //             <a>Invite {record.name}</a>
    //             <a>Delete</a>
    //         </Space>
    //     ),
    // },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'Cherry',
        price: 120000,
        origin: 'Australia',
        // tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Kiwi',
        price: 320000,
        origin: 'London',
        // tags: ['loser'],
    },
    {
        key: '3',
        name: 'Blueberry',
        price: 220000,
        origin: 'Sydney',
        // tags: ['cool', 'teacher'],
    },
];

const Demo2103: React.FC = () => {
    return (
        <div>
            <Table columns={columns} dataSource={data} />
            <button onClick={() => {
                localStorage.clear();
                window.location.reload();
            }}>Log out</button>
        </div>
    )
}

export default Demo2103;