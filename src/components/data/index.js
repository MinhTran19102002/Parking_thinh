import { SLOTS_B } from './parkingB';
import { SLOTS_A } from './parkingA';

export const GetSlots = () => [...SLOTS_A, ...SLOTS_B].map((el) => el.position);
export const GetSlotsGroupByZone = () => {
    return {
        A: SLOTS_A.map((el) => el.position),
        B: SLOTS_B.map((el) => el.position),
    };
};
export const GetPlotsInfor = (zone) => {
    let vehicles = [];
    let newWidth = 0;
    let veWidth = 0;
    let height = 100;
    let textStyle = {};
    switch (zone) {
        // case 'A':
        //     vehicles = SLOTS_A;
        //     newWidth = 150;
        //     height = 300;
        //     veWidth = 100;
        //     textStyle = {
        //         fontSize: 30
        //     };
        //     break;
        // case 'B':
        //     vehicles = SLOTS_B;
        //     newWidth = 150;
        //     height = 300;
        //     veWidth = 100;
        //     break;
        case 'A':
            vehicles = SLOTS_A;
            newWidth = 40;
            height = 68;
            veWidth = 24;
            textStyle = {
                fontSize: 11
            };
            break;
        case 'B':
            vehicles = SLOTS_B;
            newWidth = 56;
            height = 90;
            veWidth = 34;
            break;
    }

    return { slots: vehicles, width: newWidth, height, veWidth, textStyle };
};
