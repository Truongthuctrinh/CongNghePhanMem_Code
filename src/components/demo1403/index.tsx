import React, { useState } from 'react';

const Demo14_03 = () => {
    const [ketqua1, setKetqua1] = useState(0);
    const [ketqua2, setKetqua2] = useState('');
    const [inputValue, setInputValue] = useState(0);

    function getBinary() {
        let str: string = '';
        let thuong: number = inputValue; let myArr: number[] = [];
        while (thuong != 0) {
            myArr.push(thuong % 2);
            thuong = Math.floor(thuong / 2)
        }

        for (let i = myArr.length - 1; i >= 0; i--) {
            str += myArr[i];
        }
        return str;
    }

    function handleClick() {
        alert("Current value of input is: " + inputValue);
        let tich: number = 1;
        for (let i = 1; i <= inputValue; i++) {
            tich *= inputValue;
        }
        setKetqua1(tich);
        setKetqua2(getBinary());
    }
    return (

        <div style={{ marginLeft: '20px' }}>
            <h1>Bài tập ngày 14-03</h1>
            Nhập vào 1 số tự nhiên n = <input type='number' value={inputValue}
                onChange={(e) => setInputValue(Number(e.currentTarget.value))}
            />
            &nbsp;&nbsp;<button onClick={handleClick}>Xử lý</button>
            <br />
            <p>Kết quả:</p>
            <p>a/ {ketqua1}</p>
            <p>b/ {ketqua2}</p>
        </div>
    )
}
export default Demo14_03;

//Bài tập: Nhập vào 1 số tự nhiên n = [        ] [Button: Xử lý] VD: n = 15
//Kết quả hiển thị:
//a) n^n = 15^15
//b) 1111 (chữ S trong hệ 16)