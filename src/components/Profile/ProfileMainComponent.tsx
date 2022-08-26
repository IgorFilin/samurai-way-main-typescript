import React from 'react';
import {ProfileContainer} from "./ProfileContainer";
import {useParams} from "react-router-dom";

export const ProfileMainComponent = () => {
    let params = useParams<'userId'>()
    let valueParams = params.userId
    if(!valueParams){
        valueParams = String(25406)
    }

    return <ProfileContainer params={valueParams}/>

};

