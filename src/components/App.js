import React, { Component } from 'react';
import './../App.css';
import Header from "./Header";
import Search from "./Search";
import TableData from './TableData';
import DataUser from './Data.json';
import AddUser from './AddUser';
const uuidv1 = require('uuid/v1');

class App extends Component {
    thongBao = () => {
        alert('OK');
    }

    constructor(props) {
        super(props);
        this.state = {
            hienThiForm: false,
            data: [],
            searchText: '',
            editUserStatus: false,
            userEditObject: {}
        }
    }

    componentWillMount(){
        //kiem tra đa có localStorage chua
        if(localStorage.getItem('userData') === null){
            localStorage.setItem('userData', JSON.stringify(DataUser));
        }else{
            var temp = JSON.parse(localStorage.getItem('userData'));
            this.setState({
                data: temp
            });
        }
    }

    /* start chuc nang sua du lieu
    --- b1
    */

    editUser = (user) => {
        console.log('đã ket noi');
        this.setState({
            userEditObject: user
        });        
    }

    changeEditUserStatus = () => {
        this.setState({
            editUserStatus: !this.state.editUserStatus
        });
    }

    getUserEditInfoApp = (info) => {
        // console.log('thong tin da sua xong la: ' + info.name);
        this.state.data.forEach((value, key) => {
            if(value.id === info.id){
                value.name = info.name;
                value.tel = info.tel;
                value.permission = parseInt(info.permission); //text khi gui len la string phai chuyen qua number de so sanh ben trang TabelDataRow
            }
        })
        // day du lieu vao localstronge
        localStorage.setItem('userData', JSON.stringify(this.state.data));
    }
    /* End chuc nang sua du lieu */

    thayDoiTrangThai = () => {
        this.setState({
            hienThiForm: !this.state.hienThiForm
        });
    }

    getTextSearch = (dl) => {
        this.setState({
            searchText: dl
        });
        // console.log('du lieu nhan dc la: ' + this.state.searchText);
    }

    deleteIdUser = (idUser) => {
        var tempData = this.state.data.filter(item => item.id !== idUser)
        this.setState({
            data: tempData
        });
        // day du lieu vao localstronge
        localStorage.setItem('userData', JSON.stringify(tempData));
    }

    getNewUserData = (name, tel, permission) => {
        // console.log(name + " " + tel + " " + permission);
        var item = {}
        item.id = uuidv1();
        item.name = name;
        item.tel = tel;
        item.permission = permission;
        var items = this.state.data;
        items.push(item);
        console.log(items);
        this.setState({
            data: items
        });

        // day du lieu vao localstronge
        localStorage.setItem('userData', JSON.stringify(items));
    }

    render() {

        // localStorage.setItem('userData', JSON.stringify(DataUser));

        // console.log(this.state.data);
        var ketqua = [];
        this.state.data.forEach((item) => {
            if (item.name.indexOf(this.state.searchText) !== -1) {
                ketqua.push(item);
            }
        })
        // console.log(ketqua);

        return (
            <div>
                <Header />
                <div className="searchForm">
                    <div className="container">
                        <div className="row">
                            <Search thayDoiTrangThai={() => this.thayDoiTrangThai()} hienThiForm={this.state.hienThiForm} checkConnectProps={(dl) => this.getTextSearch(dl)} editUserStatus={() => this.state.editUserStatus} changeEditUserStatus={() => this.changeEditUserStatus()} userEditObject = {this.state.userEditObject} getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)} />
                            <TableData deleteIdUser = {(idUser) => this.deleteIdUser(idUser)} dataUserProps={ketqua} editFun={(user) => this.editUser(user)} changeEditUserStatus={() => this.changeEditUserStatus()} />
                            <AddUser hienThiForm={this.state.hienThiForm} addNewUse={(name, tel, pemission) => this.getNewUserData(name, tel, pemission)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
