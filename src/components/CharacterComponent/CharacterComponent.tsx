import {interfaceModel} from "../../models/interfaceModel.ts";
import {ReactNode} from "react";

interface CharacterComponentProps {
    item: interfaceModel,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div>
            <h2 className='text-yellow-300'>{item.name}</h2>
            <h3 className='text-yellow-300'>{item.surname}</h3>
            <p className='border-2 rounded-lg shadow-lg p-5 mb-5'>{children}</p>
        </div>
    );
};







