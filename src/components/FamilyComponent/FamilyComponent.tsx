import simpsons from "../../data/array.ts";
import {CharacterComponent} from "../CharacterComponent/CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map(value => <CharacterComponent item={value}>
                    {value.info}
                </CharacterComponent>)
            }

        </div>
    );
};