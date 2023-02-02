import { validate_each_argument } from "svelte/internal";
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
        hpp : 0,
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
    ring1 : {
        reqLv : 160,
        title : "가디언 엔젤 링",
        rank : "legendary",
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
            dexp : 33
        },
        bpotential : {
            dexp : 12,
            adv : 12
        }
    },
    ring2 : {
        reqLv : 140,
        title : "마이스터링",
        rank : "legendary",
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
            dexp : 33
        },
        bpotential : {
            dp10 : 2,
            dexp : 5,
            dexv : 16
        }
    },
    ring3 : {
        reqLv : 120,
        title : "어웨이크 링",
        rank : "legendary",
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
            allp : 9,
            dexp : 18
        },
        bpotential : {
            dp10 : 2,
            allp : 4,
            ip10 : 1
        }
    },
    ring4 : {
        reqLv : 110,
        title : "리스트레인트 링",
        rank : "none",
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
            
        },
        bpotential : {
            
        }
    },
    pocket : {
        reqLv : 160,
        title : "저주받은 녹의 마도서",
        rank : "none",
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

        },
        bpotential : {

        }
    },
    pendant1 : {
        reqLv : 140,
        title : "도미네이터 펜던트",
        rank : "legendary",
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
            dexp : 30
        },
        bpotential : {
            adv : 33,
            dexp : 4
        }
    },
    pendant2 : {
        reqLv : 130,
        title : "피콕스 퍼플 펜던트",
        rank : "legendary",
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
            allp : 6,
            dexp : 21
        },
        bpotential : {
            adv : 22,
            strv : 14
        }
    },
    weapon : {
        reqLv : 200,
        title : "제네시스 듀얼보우건",
        rank : "legendary",
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
            boss : 75,
            adp : 9
        },
        bpotential : {
            boss : 18,
            adp : 18
        },
        soul : {
            type : "위대한",
            boss : "진 힐라",
            effect : "boss",
            value : 7
        },
        genesis : true
    },
    belt : {
        reqLv : 150,
        title : "타일런트 케이론 벨트",
        rank : "legendary",
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
            allp : 15,
            dexp : 12
        },
        bpotential : {
            dexp : 7,
            allp : 4,
            dp10 : 1
        }
    },
    forehead : {
        reqLv : 130,
        title : "샤이니 레드 아처 마이스터 심볼",
        rank : "legendary",
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
            allp : 6,
            dexp : 21
        },
        bpotential : {
            adv : 11,
            dexp : 5
        }
    },
    eyeAcc : {
        reqLv : 145,
        title : "파풀라투스 마크",
        rank : "legendary",
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
            dexp : 30
        },
        bpotential : {
            adv : 12,
            dp10 : 2
        }
    },
    clothes : {
        reqLv : 150,
        title : "이글아이 레인져후드",
        rank : "legendary",
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
            allp : 12,
            dexp : 12
        },
        bpotential : {
            dexv : 14,
            dexp : 8
        }
    },
    pants : {
        reqLv : 150,
        title : "트릭스터 레인져팬츠",
        rank : "legendary",
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
            allp : 6,
            dexp : 21
        },
        bpotential : {
            adv : 20,
            dexp : 4
        }
    },
    shoes : {
        reqLv : 160,
        title : "앱솔랩스 아처슈즈",
        rank : "legendary",
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
            allp : 6,
            dexp : 21
        },
        bpotential : {
            dexp : 7,
            dp10 : 1,
            lp10 : 1
        }
    },
    earAcc : {
        reqLv : 140,
        title : "마이스터 이어링",
        rank : "legendary",
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
            dexp : 30
        },
        bpotential : {
            dexp : 8
        }
    },
    shoulder : {
        reqLv : 160,
        title : "앱솔랩스 아처숄더",
        rank : "legendary",
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
            dexp : 30
        },
        bpotential : {
            dexp : 7,
            allp : 4,
            intp : 5
        }
    },
    gloves : {
        reqLv : 160,
        title : "앱솔랩스 아처글러브",
        rank : "legendary",
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
            crd : 16,
            skill : "sharp"
        },
        bpotential : {
            adv : 12,
            dp10 : 3
        }
    },
    android : {
        reqLv : 10,
        title : "죽음의데스로이드(여)",
        rank : "none",
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
            allp : 9,
            dexp : 18
        },
        bpotential : {
            adv : 26,
            allp : 4
        }
    },
    emblem : {
        reqLv : 100,
        title : "골드 히어로즈 엠블렘",
        rank : "legendary",
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
            adp : 30
        },
        bpotential : {
            adp : 21,
            lukp : 9
        }
    },
    badge : {
        reqLv : 150,
        title : "하이네스 레인져베레",
        rank : "legendary",
        starforce : 22,
        scroll : 12,
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
    medal : {
        reqLv : 150,
        title : "하이네스 레인져베레",
        rank : "legendary",
        starforce : 22,
        scroll : 12,
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
    subWeapon : {
        reqLv : 150,
        title : "하이네스 레인져베레",
        rank : "legendary",
        starforce : 22,
        scroll : 12,
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
        reqLv : 150,
        title : "하이네스 레인져베레",
        rank : "legendary",
        starforce : 22,
        scroll : 12,
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
    heart : {
        reqLv : 150,
        title : "하이네스 레인져베레",
        rank : "legendary",
        starforce : 22,
        scroll : 12,
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
        scissor : 8,
        potential : {
            allp : 9,
            dexp : 18
        },
        bpotential : {
            adv : 26,
            allp : 4
        }
    }
}

export const equipData = writable(equip)