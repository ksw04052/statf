import { writable } from "svelte/store";

let equip = {
    cap : {
        reqLv : 150,
        title : "하이네스 레인져베레",
        rank : "legendary",
        starforce : 22,
        scroll : 12,
        str : [40, 0, 117],
        dex : [40, 64, 201],
        int : [0, 0, 0],
        luk : [0, 16, 0],
        hp : [360, 0, 1695],
        mp : [360, 1800, 0],
        ad : [2, 0, 86],
        ap : [0, 0, 85],
        all : [0, 7, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : 8,
        potential : {
            allp : 9,
            dexp : 18
        },
        bpotential : {
            adv : 26,
            allp : 4
        }
    },
    cape : {
        reqLv : 200,
        dex : 456,
        luk : 789
    }
}

export const equipData = writable(equip)