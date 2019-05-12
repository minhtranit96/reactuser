import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    deleteButtonClick = (idUser) => {
        this.props.deleteIdUser(idUser);  
    }

    // this.props.editFun
    mappingDataUser = () => this.props.dataUserProps.map((value, key) => (
            <TableDataRow changeEditUserStatus = {() => this.props.changeEditUserStatus()} editFunClick = {(user) => this.props.editFun(value)} key={key} id={value.id} userName={value.name} stt={value.id} tel={value.tel} permission={value.permission} deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}/>     
        ))    

    render() {
        return ( 
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           this.mappingDataUser()
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;