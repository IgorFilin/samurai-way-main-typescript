import React from 'react';
import s from "../components/Users/Users.module.css";
import {Pagination} from "antd";

export type PaginationComponentTypeProps = {
    callBack:(pageSize:number,page:number,friendsMode:boolean | null)=>void
    pageSizeUsers:number
    currentPage:number
    totalCountPages:number
    friendsMode:boolean | null
}

export const PaginationComponent:React.FC<PaginationComponentTypeProps> = ({pageSizeUsers,currentPage,totalCountPages,friendsMode,callBack}) => {

    const onChange = (page: number, pageSize: number) => {
        callBack(pageSize,page,friendsMode)
    }

    return (
        <div className={s.paginationContainer}>
            <Pagination
                size={"small"}
                onShowSizeChange={onChange}
                showLessItems
                pageSizeOptions={['5', '10', '20']}
                pageSize={pageSizeUsers}
                current={currentPage}
                total={totalCountPages}
                showQuickJumper
                onChange={onChange}/>
        </div>
    );
};

