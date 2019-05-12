import React, { Component } from 'react';

class TableDataRow extends Component {

    permissonShow = () =>{
        if(this.props.permission === 1){ return "Admin ";}
        else if(this.props.permission === 2) {return "Moderator";}
        else {return "Normal User"}
    }

    editClick = () =>{
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    deleteButtonClick = (idUser) => {
       this.props.deleteButtonClick(idUser);
    }


    render() {
        return (
            <tr>
                <td >{this.props.stt}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissonShow()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" onClick ={() => this.editClick()}><i className="fa fa-edit">&nbsp;</i>Sửa</div>
                        <div className="btn btn-danger sua" onClick={(idUser) => this.deleteButtonClick(this.props.id)}><i className="fa fa-trash-alt">&nbsp;</i>Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;