// @ts-ignore
import { writable } from "svelte/store";

let equip = [
    {
        type: "cap",
        reqLv : 150,
        title : "하이네스 레인져베레",
        starforce : 22,
        scroll : 12,
        str : [40, 0, 117],
        dex : [40, 64, 201],
        int : [0, 0, 0],
        luk : [0, 16, 0],
        hp : [360, 0, 1695],
        hpp : 0,
        ad : [2, 0, 86],
        ap : [0, 0, 85],
        all : [0, 7, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : 8,
        potential : {
            rank : "legendary",
            line1 : "allpp",
            line2 : "dexps",
            line3 : "dexps"
        },
        bpotential : {
            rank : "legendary",
            line1 : "advp",
            line2 : "advs",
            line3 : "allps2"
        }
    },
    {
        type : "ring1",
        reqLv : 160,
        title : "가디언 엔젤 링",
        starforce : 22,
        scroll : 3,
        str : [5, 0, 138],
        dex : [5, 0, 136],
        int : [5, 0, 135],
        luk : [5, 0, 134],
        hp : [200, 0, 375],
        hpp : 0,
        ad : [2, 0, 110],
        ap : [2, 0, 99],
        all : [0, 0, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : "none",
        potential : {
            rank : "legendary",
            line1 : "dexpp",
            line2 : "dexpp",
            line3 : "dexps"
        },
        bpotential : {
            rank : "legendary",
            line1 : "dexpp2",
            line2 : "dexps2",
            line3 : "advs"
        }
    },
    {
        type : "ring2",
        reqLv : 140,
        title : "마이스터링",
        starforce : 22,
        scroll : 2,
        str : [5, 0, 103],
        dex : [5, 0, 103],
        int : [5, 0, 103],
        luk : [5, 0, 103],
        hp : [200, 0, 255],
        hpp : 0,
        ad : [1, 0, 87],
        ap : [1, 0, 78],
        all : [0, 0, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : "inf",
        potential : {
            rank : "legendary",
            line1 : "dexpp",
            line2 : "dexpp",
            line3 : "dexps"
        },
        bpotential : {
            rank : "legendary",
            line1 : "dexp10p",
            line2 : "dexps2",
            line3 : "dexvs"
        }
    },
    {
        type : "ring3",
        reqLv : 120,
        title : "어웨이크 링",
        starforce : 0,
        scroll : 3,
        str : [10, 0, 30],
        dex : [10, 0, 30],
        int : [10, 0, 30],
        luk : [10, 0, 30],
        hp : [1000, 0, 3000],
        hpp : 0,
        ad : [10, 0, 15],
        ap : [10, 0, 15],
        all : [0, 0, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : "none",
        potential : {
            rank : "legendary",
            line1 : "allpp",
            line2 : "dexps",
            line3 : "dexps"
        },
        bpotential : {
            rank : "legendary",
            line1 : "dexp10p",
            line2 : "allps2",
            line3 : "intp10s"
        }
    },
    {
        type : "ring4",
        reqLv : 110,
        title : "리스트레인트 링",
        starforce : 0,
        scroll : 0,
        str : [4, 0, 0],
        dex : [4, 0, 0],
        int : [4, 0, 0],
        luk : [4, 0, 0],
        hp : [0, 0, 0],
        hpp : 0,
        ad : [4, 0, 0],
        ap : [4, 0, 0],
        all : [0, 0, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : "none",
        potential : {
            rank : "none",
            line1 : "none",
            line2 : "none",
            line3 : "none"
        },
        bpotential : {
            rank : "none",
            line1 : "none",
            line2 : "none",
            line3 : "none"
        }
    },
    {
        type : "pocket",
        reqLv : 160,
        title : "저주받은 녹의 마도서",
        starforce : 0,
        scroll : 0,
        str : [10, 0, 0],
        dex : [20, 61, 0],
        int : [10, 0, 0],
        luk : [10, 25, 0],
        hp : [100, 0, 0],
        hpp : 0,
        ad : [10, 5, 0],
        ap : [10, 0, 0],
        all : [0, 6, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : "none",
        potential : {
            rank : "none",
            line1 : "none",
            line2 : "none",
            line3 : "none"
        },
        bpotential : {
            rank : "none",
            line1 : "none",
            line2 : "none",
            line3 : "none"
        }
    },
    {
        type : "pendant1",
        reqLv : 140,
        title : "도미네이터 펜던트",
        starforce : 22,
        scroll : 6,
        str : [20, 24, 121],
        dex : [20, 64, 121],
        int : [20, 0, 121],
        luk : [20, 0, 121],
        hp : [0, 0, 0],
        hpp : 10,
        ad : [3, 5, 96],
        ap : [3, 0, 96],
        all : [0, 5, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : 7,
        potential : {
            rank : "legendary",
            line1 : "dexpp",
            line2 : "dexps",
            line3 : "dexps"
        },
        bpotential : {
            rank : "unique",
            line1 : "advp",
            line2 : "dexps2",
            line3 : "advs"
        }
    },
    {
        type : "pendant2",
        reqLv : 130,
        title : "피콕스 퍼플 펜던트",
        starforce : 20,
        scroll : 4,
        str : [0, 21, 75],
        dex : [0, 0, 75],
        int : [0, 0, 75],
        luk : [16, 0, 75],
        hp : [180, 0, 255],
        hpp : 0,
        ad : [0, 0, 62],
        ap : [0, 0, 45],
        all : [0, 4, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : "inf",
        potential : {
            rank : "legendary",
            line1 : "dexpp",
            line2 : "allps",
            line3 : "dexps"
        },
        bpotential : {
            rank : "epic",
            line1 : "advp",
            line2 : "strvp",
            line3 : "advp"
        }
    },
    {
        type : "weapon",
        reqLv : 200,
        title : "제네시스 듀얼보우건",
        starforce : 22,
        scroll : 8,
        str : [150, 0, 145],
        dex : [150, 0, 177],
        int : [0, 0, 0],
        luk : [0, 55, 0],
        hp : [0, 0, 0],
        hpp : 0,
        ad : [318, 153, 318],
        ap : [0, 0, 0],
        all : [0, 0, 0],
        boss : [30, 8, 0],
        armp : [20, 0, 0],
        dmg : [0, 5, 0],
        scissor : "none",
        potential : {
            rank : "legendary",
            line1 : "bossp2",
            line2 : "bosss1",
            line3 : "adps"
        },
        bpotential : {
            rank : "legendary",
            line1 : "bossp",
            line2 : "adps",
            line3 : "adps"
        },
        soul : {
            prefix : "위대한",
            boss : "진 힐라",
            type : "boss",
            value : 7
        },
        genesis : true
    },
    {
        type : "belt",
        reqLv : 150,
        title : "타일런트 케이론 벨트",
        starforce : 12,
        scroll : 2,
        str : [50, 16, 119],
        dex : [50, 76, 116],
        int : [50, 20, 115],
        luk : [50, 0, 119],
        hp : [0, 0, 0],
        hpp : 0,
        ad : [25, 0, 95],
        ap : [25, 0, 93],
        all : [0, 5, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : 7,
        potential : {
            rank : "legendary",
            line1 : "dexpp",
            line2 : "allpp",
            line3 : "allps"
        },
        bpotential : {
            rank : "legendary",
            line1 : "dexpp2",
            line2 : "dexp10s",
            line3 : "allps2"
        }
    },
    {
        type : "forehead",
        reqLv : 130,
        title : "샤이니 레드 아처 마이스터 심볼",
        starforce : 20,
        scroll : 2,
        str : [3, 0, 76],
        dex : [3, 0, 75],
        int : [0, 0, 0],
        luk : [0, 0, 0],
        hp : [0, 0, 0],
        hpp : 0,
        ad : [3, 3, 55],
        ap : [0, 0, 45],
        all : [0, 4, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : "inf",
        potential : {
            rank : "legendary",
            line1 : "dexpp",
            line2 : "allps",
            line3 : "dexps"
        },
        bpotential : {
            rank : "unique",
            line1 : "dexpp2",
            line2 : "extra",
            line3 : "advs"
        }
    },
    {
        type : "eyeAcc",
        reqLv : 145,
        title : "파풀라투스 마크",
        starforce : 22,
        scroll : 6,
        str : [8, 32, 105],
        dex : [8, 68, 104],
        int : [8, 0, 103],
        luk : [8, 20, 109],
        hp : [0, 0, 0],
        hpp : 0,
        ad : [1, 0, 105],
        ap : [1, 0, 80],
        all : [0, 6, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : "none",
        potential : {
            rank : "legendary",
            line1 : "dexpp",
            line2 : "dexps",
            line3 : "dexps"
        },
        bpotential : {
            rank : "legendary",
            line1 : "dexp10p",
            line2 : "advs",
            line3 : "extra"
        }
    },
    {
        type : "clothes",
        reqLv : 150,
        title : "이글아이 레인져후드",
        starforce : 22,
        scroll : 8,
        str : [30, 20, 118],
        dex : [30, 84, 173],
        int : [0, 24, 0],
        luk : [0, 0, 0],
        hp : [0, 0, 975],
        hpp : 0,
        ad : [2, 0, 92],
        ap : [0, 0, 85],
        all : [0, 6, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : 9,
        potential : {
            rank : "legendary",
            line1 : "dexpp",
            line2 : "allps",
            line3 : "allps"
        },
        bpotential : {
            rank : "epic",
            line1 : "dexvp",
            line2 : "dexpp2",
            line3 : "dexpp2"
        }
    },
    {
        type : "pants",
        reqLv : 150,
        title : "트릭스터 레인져팬츠",
        starforce : 22,
        scroll : 8,
        str : [30, 20, 119],
        dex : [30, 92, 173],
        int : [0, 0, 79],
        luk : [0, 24, 81],
        hp : [0, 0, 975],
        hpp : 0,
        ad : [2, 0, 89],
        ap : [0, 0, 85],
        all : [0, 6, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : 8,
        potential : {
            rank : "legendary",
            line1 : "dexpp",
            line2 : "dexps",
            line3 : "allps"
        },
        bpotential : {
            rank : "epic",
            line1 : "dexpp2",
            line2 : "advs2",
            line3 : "advs2"
        }
    },
    {
        type : "shoes",
        reqLv : 160,
        title : "앱솔랩스 아처슈즈",
        starforce : 22,
        scroll : 8,
        str : [20, 20, 131],
        dex : [20, 70, 187],
        int : [0, 0, 0],
        luk : [0, 45, 0],
        hp : [0, 0, 960],
        hpp : 0,
        ad : [5, 0, 93],
        ap : [0, 0, 92],
        all : [0, 6, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : 7,
        potential : {
            rank : "legendary",
            line1 : "dexpp",
            line2 : "dexps",
            line3 : "allps"
        },
        bpotential : {
            rank : "legendary",
            line1 : "dexpp2",
            line2 : "dexp10s",
            line3 : "lukp10s"
        }
    },
    {
        type : "earAcc",
        reqLv : 140,
        title : "마이스터 이어링",
        starforce : 22,
        scroll : 7,
        str : [5, 40, 116],
        dex : [5, 56, 115],
        int : [5, 16, 115],
        luk : [5, 0, 113],
        hp : [500, 0, 110],
        hpp : 0,
        ad : [4, 0, 94],
        ap : [4, 0, 92],
        all : [0, 6, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : 8,
        potential : {
            rank : "legendary",
            line1 : "dexpp",
            line2 : "dexps",
            line3 : "dexps"
        },
        bpotential : {
            rank : "epic",
            line1 : "dexpp2",
            line2 : "dexpp2",
            line3 : "extra"
        }
    },
    {
        type : "shoulder",
        reqLv : 160,
        title : "앱솔랩스 아처숄더",
        starforce : 22,
        scroll : 2,
        str : [14, 0, 133],
        dex : [14, 0, 134],
        int : [14, 0, 96],
        luk : [14, 0, 94],
        hp : [0, 0, 255],
        hpp : 0,
        ad : [10, 0, 104],
        ap : [10, 0, 96],
        all : [0, 0, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : 8,
        potential : {
            rank : "legendary",
            line1 : "dexpp",
            line2 : "dexps",
            line3 : "dexps"
        },
        bpotential : {
            rank : "legendary",
            line1 : "dexpp2",
            line2 : "allps2",
            line3 : "intps2"
        }
    },
    {
        type : "gloves",
        reqLv : 160,
        title : "앱솔랩스 아처글러브",
        starforce : 22,
        scroll : 8,
        str : [20, 30, 131],
        dex : [20, 125, 131],
        int : [0, 20, 0],
        luk : [0, 30, 0],
        hp : [0, 0, 0],
        hpp : 0,
        ad : [5, 0, 123],
        ap : [0, 0, 92],
        all : [0, 0, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : 3,
        potential : {
            rank : "legendary",
            line1 : "crdp",
            line2 : "crdp",
            line3 : "sharp"
        },
        bpotential : {
            rank : "legendary",
            line1 : "dexp10p",
            line2 : "advs",
            line3 : "dexp10s"
        }
    },
    {
        type : "android",
        reqLv : 10,
        title : "죽음의데스로이드(여)",
        starforce : 0,
        scroll : 0,
        str : [0, 0, 0],
        dex : [0, 0, 0],
        int : [0, 0, 0],
        luk : [0, 0, 0],
        hp : [0, 0, 0],
        hpp : 0,
        ad : [0, 0, 0],
        ap : [0, 0, 0],
        all : [0, 0, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : "inf",
        potential : {
            rank : "none",
            line1 : "none",
            line2 : "none",
            line3 : "none"
        },
        bpotential : {
            rank : "none",
            line1 : "none",
            line2 : "none",
            line3 : "none"
        }
    },
    {
        type : "emblem",
        reqLv : 100,
        title : "골드 히어로즈 엠블렘",
        starforce : 0,
        scroll : 0,
        str : [10, 0, 0],
        dex : [10, 0, 0],
        int : [10, 0, 0],
        luk : [10, 0, 0],
        hp : [0, 0, 0],
        hpp : 0,
        ad : [2, 0, 0],
        ap : [2, 0, 0],
        all : [0, 0, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : "none",
        potential : {
            rank : "legendary",
            line1 : "adpp",
            line2 : "adps",
            line3 : "adps"
        },
        bpotential : {
            rank : "legendary",
            line1 : "adpp",
            line2 : "lukps1",
            line3 : "adps"
        }
    },
    {
        type : "badge",
        reqLv : 130,
        title : "크리스탈 웬투스 뱃지",
        starforce : 0,
        scroll : 0,
        str : [10, 0, 0],
        dex : [10, 0, 1],
        int : [10, 0, 0],
        luk : [10, 0, 0],
        hp : [0, 0, 0],
        hpp : 0,
        ad : [5, 0, 0],
        ap : [5, 0, 0],
        all : [0, 0, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : "none",
        potential : {
            rank : "none",
            line1 : "none",
            line2 : "none",
            line3 : "none"
        },
        bpotential : {
            rank : "none",
            line1 : "none",
            line2 : "none",
            line3 : "none"
        }
    },
    {
        type : "medal",
        reqLv : 100,
        title : "칠요의 몬스터파커",
        starforce : 0,
        scroll : 0,
        str : [7, 0, 0],
        dex : [7, 0, 0],
        int : [7, 0, 0],
        luk : [7, 0, 0],
        hp : [0, 0, 0],
        hpp : 0,
        ad : [7, 0, 0],
        ap : [7, 0, 0],
        all : [0, 0, 0],
        boss : [0, 0, 0],
        armp : [10, 0, 0],
        dmg : [0, 0, 0],
        scissor : "none",
        potential : {
            rank : "none",
            line1 : "none",
            line2 : "none",
            line3 : "none"
        },
        bpotential : {
            rank : "none",
            line1 : "none",
            line2 : "none",
            line3 : "none"
        }
    },
    {
        type : "subWeapon",
        reqLv : 100,
        title : "무한의 마법 화살",
        starforce : 0,
        scroll : 0,
        str : [0, 0, 0],
        dex : [0, 0, 0],
        int : [0, 0, 0],
        luk : [0, 0, 0],
        hp : [0, 0, 0],
        hpp : 0,
        ad : [0, 0, 0],
        ap : [0, 0, 0],
        all : [0, 0, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : "inf",
        potential : {
            rank : "legendary",
            line1 : "bossp2",
            line2 : "bossp1",
            line3 : "adps"
        },
        bpotential : {
            rank : "legendary",
            line1 : "adpp",
            line2 : "extra",
            line3 : "adps"
        }
    },
    {
        type : "cape",
        reqLv : 160,
        title : "앱솔랩스 아처케이프",
        starforce : 22,
        scroll : 8,
        str : [15, 0, 131],
        dex : [15, 54, 187],
        int : [15, 0, 91],
        luk : [15, 0, 91],
        hp : [0, 0, 1215],
        hpp : 0,
        ad : [2, 4, 93],
        ap : [2, 0, 92],
        all : [0, 6, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : 9,
        potential : {
            rank : "legendary",
            line1 : "allpp",
            line2 : "dexpp",
            line3 : "allps"
        },
        bpotential : {
            rank : "unique",
            line1 : "dexvp",
            line2 : "advs",
            line3 : "dexps2"
        }
    },
    {
        type : "heart",
        reqLv : 100,
        title : "페어리 하트",
        starforce : 8,
        scroll : 10,
        str : [0, 0, 19],
        dex : [0, 0, 19],
        int : [0, 0, 19],
        luk : [0, 0, 19],
        hp : [100, 0, 0],
        hpp : 0,
        ad : [0, 0, 50],
        ap : [0, 0, 0],
        all : [0, 0, 0],
        boss : [0, 0, 0],
        armp : [0, 0, 0],
        dmg : [0, 0, 0],
        scissor : "none",
        potential : {
            rank : "legendary",
            line1 : "dexpp",
            line2 : "dexps",
            line3 : "dexps"
        },
        bpotential : {
            rank : "unique",
            line1 : "allpp2",
            line2 : "dexps2",
            line3 : "hpps"
        }
    }
]


function equipFunction() {
    const { subscribe, set, update } = writable(equip)

    return {
        subscribe,
        strSum : () => {
            let result = 0
            equip.forEach(item => result = result + item.str[0] + item.str[1] + item.str[2])
            return result
        },
        dexSum : () => {
            let result = 0
            equip.forEach(item => result = result + item.dex[0] + item.dex[1] + item.dex[2])
            return result
        },
        intSum : () => {
            let result = 0
            equip.forEach(item => result = result + item.int[0] + item.int[1] + item.int[2])
            return result
        },
        lukSum : () => {
            let result = 0
            equip.forEach(item => result = result + item.luk[0] + item.luk[1] + item.luk[2])
            return result
        },
        hpSum : () => {
            let result = 0
            equip.forEach(item => result = result + item.hp[0] + item.hp[1] + item.hp[2])
            return result
        },
        hppSum : () => {
            let result = 0
            equip.forEach(item => result = result + item.hpp)
            return result
        },
        adSum : () => {
            let result = 0
            equip.forEach(item => result = result + item.ad[0] + item.ad[1] + item.ad[2])
            return result
        },
        apSum : () => {
            let result = 0
            equip.forEach(item => result = result + item.ap[0] + item.ap[1] + item.ap[2])
            return result
        },
        allSum : () => {
            let result = 0
            equip.forEach(item => result = result + item.all[0] + item.all[1] + item.all[2])
            return result
        },
        bossSum : () => {
            let result = 0
            equip.forEach(item => result = result + item.boss[0] + item.boss[1] + item.boss[2])
            return result
        },
        armpSum : () => {
            let result = 0
            equip.forEach(item => result = result + item.armp[0] + item.armp[1] + item.armp[2])
            return result
        },
        dmgSum : () => {
            let result = 0
            equip.forEach(item => result = result + item.dmg[0] + item.dmg[1] + item.dmg[2])
            return result
        },
        starforceSum : () => {
            let result = 0
            equip.forEach(item => result = result + item.starforce)
            return result
        },
    }
}

export const equipData = equipFunction()

