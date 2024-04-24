import React, { useState } from "react";
import { Table, Input, Button } from "antd";
import { title } from "process";

const Demo1104 = () => {

    const columns = [
        { title: 'Mã số sinh viên', dataIndex: 'studentCode', key: 'studentCode' },
        { title: 'Họ và tên', dataIndex: 'studentName', key: 'studentName' },
        { title: 'Điểm kết thúc', dataIndex: 'result', key: 'result' },
        { title: 'Quê quán', dataIndex: 'hometown', key: 'hometown' }
    ]

    const data = [
        {
            studentCode: '0909001', studentName: 'Lê Văn Thắng',
            result: 8, hometown: 'TPHCM'
        },
        {
            studentCode: '0909003', studentName: 'Trần Minh Tâm',
            result: 7.5, hometown: 'Đồng Nai'
        },
        {
            studentCode: '0909002', studentName: 'Lý Uyển Nhi',
            result: 8.6, hometown: 'TPHCM'
        },
        {
            studentCode: '0909004', studentName: 'Trịnh Thị Thu Thảo',
            result: 6, hometown: 'Tiền Giang'
        },
        {
            studentCode: '0909005', studentName: 'Lê Văn Thắng',
            result: 8, hometown: 'Khánh Hòa'
        }
    ]

    const [searchData, setSearchData] = useState(data);
    const [searchText, setSearchText] = useState('');

    return (
        <>
            <div>
                <span>Tìm kiếm theo tên:</span>&nbsp;
                <Input type="text" value={searchText}
                    onChange={(e) => {
                        setSearchText(e.currentTarget.value);
                        setSearchData(data.filter(x => x.studentName.toUpperCase().includes(e.currentTarget.value.toUpperCase().trim())))
                    }}
                    onKeyPress={(e) => {
                        if (e.key == 'Enter') {
                            setSearchData(data.filter(x => x.studentName.toUpperCase().includes(searchText.toUpperCase().trim())))
                        }
                    }}></Input >
                <input type="checkbox"></input>&nbsp;TPHCM&nbsp;
                <input type="checkbox"></input>&nbsp;Đồng Nai&nbsp;
                <input type="checkbox"></input>&nbsp;Khánh Hòa&nbsp;
                <input type="checkbox"></input>&nbsp;Tiền Giang&nbsp;
                <Button type="primary"
                    onClick={() => {
                        let index = data.findIndex(x => x.studentCode == '0909003');
                        data[index].result = 9;
                        let previous = data.slice(0, index);
                        let after = data.slice(index + 1);
                        setSearchData([...previous, data[index], ...after]);
                    }}
                >Click me</Button>
            </div>
            <div>
                <Table columns={columns} dataSource={searchData}></Table>
            </div>
        </>
    )
}
export default Demo1104;