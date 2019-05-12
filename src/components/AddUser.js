import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log('ten: ' + name);
        // console.log('value: ' + value);
        this.setState({
            [name]: value
        });
        //package to item
        // var item = {}
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission; 
        // console.log(item);          
    }


    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <form>
                        <div className="card border-primary mb-3 mt-2">
                            <div className="card-header">Thêm mới user vào hệ thống</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="name" aria-describedby="helpId" placeholder="Tên user" onChange={(event) => this.isChange(event)} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="tel" aria-describedby="helpId" placeholder="Điện thoại" onChange={(event) => this.isChange(event)} />
                                </div>
                                <div className="form-group">
                                    <select className="form-control" name="permission" onChange={(event) => this.isChange(event)}>
                                        <option>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary" onClick={(name, tel, pemission) => this.props.addNewUse(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                {this.kiemTraTrangThai()}
            </div>
        );
    }
}

export default AddUser;