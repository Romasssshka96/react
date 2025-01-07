import React, {FC} from 'react';
import {IUser} from "./TodoComponent.tsx";


type UserPropType = {
    item:IUser
}
const UserComponent:FC<UserPropType> = ({item}) => {
    return (
        <div className='items-center'>
            <div>
                <div className='text-center text-lime-600'>Title: {item.title}</div>
                <div className='text-center text-red-600'>id: {item.userId}</div>
                <div>{item.completed}</div>
                <hr/>
            </div>
        </div>
    );
};

export default UserComponent;