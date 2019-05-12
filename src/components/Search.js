import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempvalue: '',
            userObj : {}
        }
    }

    getUserEditForm = (info) => {
        this.setState({
            userObj : info 
        });
        this.props.getUserEditInfoApp(info); //lay luon info, state userObj chỉ là bien trung gian dung gì thì dùng
    }

    isShowEditForm = () => {
        if(this.props.editUserStatus()  === true){
            return <EditUser getUserEditForm={(info) => this.getUserEditForm(info)} changeEditUserStatus = {() => this.props.changeEditUserStatus()} userEditObject = {this.props.userEditObject}/>
        }
    }

    hienThinut = () => {
        if (this.props.hienThiForm === true) {
            return <div className="btn btn-outline-secondary" onClick={() => this.props.thayDoiTrangThai()}>Đóng lại</div>
        } else {
            return <div className="btn btn-outline-info" onClick={() => this.props.thayDoiTrangThai()}>Thêm mới</div>
        }
    }

    isChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            tempvalue: event.target.value
        });
        this.props.checkConnectProps(this.state.tempvalue);
    }

    render() {
        
        return (
            <div className="col-12">
                {this.isShowEditForm() }
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" id="searchForm" className="form-control" style={{ width: '590px' }} name="fsearch" aria-describedby="helpId" placeholder="Nhập tên cần tìm" onChange={(event) => this.isChange(event)} />
                        <button type="submit" className="btn btn-primary" onClick={(dl) => this.props.checkConnectProps(this.state.tempvalue)}>Tìm</button>
                    </div>

                    <div className="btn-group">
                        <div>&nbsp;</div>
                        {
                            this.hienThinut()
                        }

                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Search;