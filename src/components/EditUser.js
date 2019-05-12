import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            tel : this.props.userEditObject.tel,
            permission : this.props.userEditObject.permission        
        }
    }

    saveButton = (event) => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        // console.log("info la " + info.name);
        this.props.getUserEditForm(info);

        this.props.changeEditUserStatus(); //an form        
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }


    render() {
        console.log(this.state);
        // console.log(this.props.userEditObject)
        return (            
            <div className="col">
                <form>
                    <div className="card text-white bg-secondary mb-3 mt-2">
                        <div className="card-header text-center">Sửa thông tin User hệ thống</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input onChange = {(event) => this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" className="form-control" name="name" aria-describedby="helpId" placeholder="Tên user" />
                            </div>
                            <div className="form-group">
                                <input onChange = {(event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" className="form-control" name="tel" aria-describedby="helpId" placeholder="Điện thoại" />
                            </div>
                            <div className="form-group">
                                <select onChange = {(event) => this.isChange(event)} defaultValue={this.props.userEditObject.permission} className="form-control" name="permission" >
                                    <option>Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="button" className="btn btn-block btn-primary" value="Lưu" onClick={() => this.saveButton()}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;