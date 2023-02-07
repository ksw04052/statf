import { writable } from "svelte/store";

let pot = {
    potential : {
        legendary: {
            strpp : {
                rank : "legendary",
                desc : "STR : +12%",
                type : "strp",
                value : 12
            },
            dexpp : {
                rank : "legendary",
                desc : "DEX : +12%",
                type : "dexp",
                value : 12
            },
            intpp : {
                rank : "legendary",
                desc : "INT : +12%",
                type : "intp",
                value : 12
            },
            lukpp : {
                rank : "legendary",
                desc : "LUK : +12%",
                type : "lukp",
                value : 12
            },
            hppp : {
                rank : "legendary",
                desc : "최대 HP : +12%",
                type : "hpp",
                value : 12
            },
            allpp : {
                rank : "legendary",
                desc : "올스탯 : +9%",
                type : "allp",
                value : 9
            },
            adpp : {
                rank : "legendary",
                desc : "공격력 : +12%",
                type : "adp",
                value : 12
            },
            appp : {
                rank : "legendary",
                desc : "마력 : +12%",
                type : "app",
                value : 12
            },
            crrp : {
                rank : "legendary",
                desc : "크리티컬 확률 : +12%",
                type : "crr",
                value : 12
            },
            dmgp : {
                rank : "legendary",
                desc : "데미지 : +12%",
                type : "dmg",
                value : 12
            },
            adp10p : {
                rank : "legendary",
                desc : "캐릭터 기준 10레벨 당 공격력 : +1",
                type : "adp10",
                value : 1
            },
            app10p : {
                rank : "legendary",
                desc : "캐릭터 기준 10레벨 당 마력 : +1",
                type : "app10",
                value : 1
            },
            bossp1 : {
                rank : "legendary",
                desc : "보스 몬스터 공격 시 데미지 : +40%",
                type : "boss",
                value : 40
            },
            bossp2 : {
                rank : "legendary",
                desc : "보스 몬스터 공격 시 데미지 : +35%",
                type : "boss",
                value : 35
            },
            armpp1 : {
                rank : "legendary",
                desc : "몬스터 방어율 무시 : +40%",
                type : "armp",
                value : 40
            },
            armpp2 : {
                rank : "legendary",
                desc : "몬스터 방어율 무시 : +35%",
                type : "armp",
                value : 35
            },
            cdrp1 : {
                rank : "legendary",
                desc : "모든 스킬의 재사용 대기시간 : -2초",
                type : "cdr",
                value : 2
            },
            cdrp2 : {
                rank : "legendary",
                desc : "모든 스킬의 재사용 대기시간 : -1초",
                type : "cdr",
                value : 1
            },
            crdp : {
                rank : "legendary",
                desc : "크리티컬 데미지 : +8%",
                type : "crd",
                value : 8
            },
            //2번줄옵
            strps : {
                rank : "unique",
                desc : "STR : +9%",
                type : "strp",
                value : 9
            },
            dexps : {
                rank : "unique",
                desc : "DEX : +9%",
                type : "dexp",
                value : 9
            },
            intps : {
                rank : "unique",
                desc : "INT : +9%",
                type : "intp",
                value : 9
            },
            lukps : {
                rank : "unique",
                desc : "LUK : +9%",
                type : "lukp",
                value : 9
            },
            hpps : {
                rank : "unique",
                desc : "최대 HP : +9%",
                type : "hpp",
                value : 9
            },
            allps : {
                rank : "unique",
                desc : "올스탯 : +6%",
                type : "allp",
                value : 6
            },
            adps : {
                rank : "unique",
                desc : "공격력 : +9%",
                type : "adp",
                value : 9
            },
            apps : {
                rank : "unique",
                desc : "마력 : +9%",
                type : "app",
                value : 9
            },
            crrs : {
                rank : "unique",
                desc : "크리티컬 확률 : +9%",
                type : "crr",
                value : 9
            },
            dmgs : {
                rank : "unique",
                desc : "데미지 : +9%",
                type : "dmg",
                value : 9
            },
            bosss1 : {
                rank : "unique",
                desc : "보스 몬스터 공격 시 데미지 : +30%",
                type : "boss",
                value : 30
            },
            bosss2 : {
                rank : "unique",
                desc : "보스 몬스터 공격 시 데미지 : +20%",
                type : "boss",
                value : 20
            },
            armps : {
                rank : "unique",
                desc : "몬스터 방어율 무시 : +30%",
                type : "armp",
                value : 30
            },
            sharp : {
                rank : "unique",
                desc : "<쓸만한 샤프 아이즈> 스킬 사용 가능",
                type : "skill",
                value : 1
            },
            extra : {
                rank : "unique",
                desc : "잡옵 ㅠㅠ",
                type : "extra",
                value : 0
            }
        },
        unique: {
            strpp : {
                rank : "unique",
                desc : "STR : +9%",
                type : "strp",
                value : 9
            },
            dexpp : {
                rank : "unique",
                desc : "DEX : +9%",
                type : "dexp",
                value : 9
            },
            intpp : {
                rank : "unique",
                desc : "INT : +9%",
                type : "intp",
                value : 9
            },
            lukpp : {
                rank : "unique",
                desc : "LUK : +9%",
                type : "lukp",
                value : 9
            },
            hppp : {
                rank : "unique",
                desc : "최대 HP : +9%",
                type : "hpp",
                value : 9
            },
            allpp : {
                rank : "unique",
                desc : "올스탯 : +6%",
                type : "allp",
                value : 6
            },
            adpp : {
                rank : "unique",
                desc : "공격력 : +9%",
                type : "adp",
                value : 9
            },
            appp : {
                rank : "unique",
                desc : "마력 : +9%",
                type : "app",
                value : 9
            },
            crrp : {
                rank : "unique",
                desc : "크리티컬 확률 : +9%",
                type : "crr",
                value : 9
            },
            dmgp : {
                rank : "unique",
                desc : "데미지 : +9%",
                type : "dmg",
                value : 9
            },
            bossp : {
                rank : "unique",
                desc : "보스 몬스터 공격 시 데미지 : +30%",
                type : "boss",
                value : 30
            },
            armpp : {
                rank : "unique",
                desc : "몬스터 방어율 무시 : +30%",
                type : "armp",
                value : 30
            },
            strp10p : {
                rank : "unique",
                desc : "캐릭터 기준 10레벨 당 STR : +1",
                type : "strp10",
                value : 1
            },
            dexp10p : {
                rank : "unique",
                desc : "캐릭터 기준 10레벨 당 DEX : +1",
                type : "dexp10",
                value : 1
            },
            intp10p : {
                rank : "unique",
                desc : "캐릭터 기준 10레벨 당 INT : +1",
                type : "intp10",
                value : 1
            },
            lukp10p : {
                rank : "unique",
                desc : "캐릭터 기준 10레벨 당 LUK : +1",
                type : "lukp10",
                value : 1
            },
            sharp : {
                rank : "unique",
                desc : "<쓸만한 샤프 아이즈> 스킬 사용 가능",
                type : "skill",
                value : 1
            },
            //2번줄옵
            strps : {
                rank : "epic",
                desc : "STR : +6%",
                type : "strp",
                value : 6
            },
            dexps : {
                rank : "epic",
                desc : "DEX : +6%",
                type : "dexp",
                value : 6
            },
            intps : {
                rank : "epic",
                desc : "INT : +6%",
                type : "intp",
                value : 6
            },
            lukps : {
                rank : "epic",
                desc : "LUK : +6%",
                type : "lukp",
                value : 6
            },
            hpps : {
                rank : "epic",
                desc : "최대 HP : +6%",
                type : "hpp",
                value : 6
            },
            allps : {
                rank : "epic",
                desc : "올스탯 : +3%",
                type : "allp",
                value : 3
            },
            adps : {
                rank : "epic",
                desc : "공격력 : +6%",
                type : "adp",
                value : 6
            },
            apps : {
                rank : "epic",
                desc : "마력 : +6%",
                type : "app",
                value : 6
            },
            crrs : {
                rank : "epic",
                desc : "크리티컬 확률 : +8%",
                type : "crr",
                value : 8
            },
            dmgs : {
                rank : "epic",
                desc : "데미지 : +6%",
                type : "dmg",
                value : 6
            },
            armps : {
                rank : "epic",
                desc : "몬스터 방어율 무시 : +15%",
                type : "armp",
                value : 15
            },
            extra : {
                rank : "epic",
                desc : "잡옵 ㅠㅠ",
                type : "extra",
                value : 0
            }
        },
        epic: {
            strpp : {
                rank : "epic",
                desc : "STR : +6%",
                type : "strp",
                value : 6
            },
            dexpp : {
                rank : "epic",
                desc : "DEX : +6%",
                type : "dexp",
                value : 6
            },
            intpp : {
                rank : "epic",
                desc : "INT : +6%",
                type : "intp",
                value : 6
            },
            lukpp : {
                rank : "epic",
                desc : "LUK : +6%",
                type : "lukp",
                value : 6
            },
            hppp : {
                rank : "epic",
                desc : "최대 HP : +6%",
                type : "hpp",
                value : 6
            },
            allpp : {
                rank : "epic",
                desc : "올스탯 : +3%",
                type : "allp",
                value : 3
            },
            adpp : {
                rank : "epic",
                desc : "공격력 : +6%",
                type : "adp",
                value : 6
            },
            appp : {
                rank : "epic",
                desc : "마력 : +6%",
                type : "app",
                value : 6
            },
            crrp : {
                rank : "epic",
                desc : "크리티컬 확률 : +8%",
                type : "crr",
                value : 8
            },
            dmgp : {
                rank : "epic",
                desc : "데미지 : +6%",
                type : "dmg",
                value : 6
            },
            armpp : {
                rank : "epic",
                desc : "몬스터 방어율 무시 : +15%",
                type : "armp",
                value : 15
            },
            //2번줄옵
            strps : {
                rank : "rare",
                desc : "STR : +3%",
                type : "strp",
                value : 3
            },
            dexps : {
                rank : "rare",
                desc : "DEX : +3%",
                type : "dexp",
                value : 3
            },
            intps : {
                rank : "rare",
                desc : "INT : +3%",
                type : "intp",
                value : 3
            },
            lukps : {
                rank : "rare",
                desc : "LUK : +3%",
                type : "lukp",
                value : 3
            },
            hpps : {
                rank : "rare",
                desc : "최대 HP : +3%",
                type : "hpp",
                value : 3
            },
            strvs : {
                rank : "rare",
                desc : "STR : +12",
                type : "strv",
                value : 12
            },
            dexvs : {
                rank : "rare",
                desc : "DEX : +12",
                type : "dexv",
                value : 12
            },
            intvs : {
                rank : "rare",
                desc : "INT : +12",
                type : "intv",
                value : 12
            },
            lukvs : {
                rank : "rare",
                desc : "LUK : +12",
                type : "lukv",
                value : 12
            },
            hpvs : {
                rank : "rare",
                desc : "최대 HP : +120",
                type : "hpv",
                value : 120
            },
            allvs : {
                rank : "rare",
                desc : "올스탯 : +5",
                type : "allv",
                value : 5
            },
            adps : {
                rank : "rare",
                desc : "공격력 : +3%",
                type : "adp",
                value : 3
            },
            apps : {
                rank : "rare",
                desc : "마력 : +3%",
                type : "app",
                value : 3
            },
            advs : {
                rank : "rare",
                desc : "공격력 : +12",
                type : "adv",
                value : 12
            },
            apvs : {
                rank : "rare",
                desc : "마력 : +12",
                type : "apv",
                value : 12
            },
            crrs : {
                rank : "rare",
                desc : "크리티컬 확률 : +4%",
                type : "crr",
                value : 4
            },
            dmgs : {
                rank : "rare",
                desc : "데미지 : +3%",
                type : "dmg",
                value : 3
            },
            extra : {
                rank : "rare",
                desc : "잡옵 ㅠㅠ",
                type : "extra",
                value : 0
            }
        },
        rare: {
            strpp : {
                rank : "rare",
                desc : "STR : +3%",
                type : "strp",
                value : 3
            },
            dexpp : {
                rank : "rare",
                desc : "DEX : +3%",
                type : "dexp",
                value : 3
            },
            intpp : {
                rank : "rare",
                desc : "INT : +3%",
                type : "intp",
                value : 3
            },
            lukpp : {
                rank : "rare",
                desc : "LUK : +3%",
                type : "lukp",
                value : 3
            },
            hppp : {
                rank : "rare",
                desc : "최대 HP : +3%",
                type : "hpp",
                value : 3
            },
            strvp : {
                rank : "rare",
                desc : "STR : +12",
                type : "strv",
                value : 12
            },
            dexvp : {
                rank : "rare",
                desc : "DEX : +12",
                type : "dexv",
                value : 12
            },
            intvp : {
                rank : "rare",
                desc : "INT : +12",
                type : "intv",
                value : 12
            },
            lukvp : {
                rank : "rare",
                desc : "LUK : +12",
                type : "lukv",
                value : 12
            },
            hpvp : {
                rank : "rare",
                desc : "최대 HP : +120",
                type : "hpv",
                value : 120
            },
            allvp : {
                rank : "rare",
                desc : "올스탯 : +5",
                type : "allv",
                value : 5
            },
            adpp : {
                rank : "rare",
                desc : "공격력 : +3%",
                type : "adp",
                value : 3
            },
            appp : {
                rank : "rare",
                desc : "마력 : +3%",
                type : "app",
                value : 3
            },
            advp : {
                rank : "rare",
                desc : "공격력 : +12",
                type : "adv",
                value : 12
            },
            apvp : {
                rank : "rare",
                desc : "마력 : +12",
                type : "apv",
                value : 12
            },
            crrp : {
                rank : "rare",
                desc : "크리티컬 확률 : +4%",
                type : "crr",
                value : 4
            },
            dmgp : {
                rank : "rare",
                desc : "데미지 : +3%",
                type : "dmg",
                value : 3
            },
            armpp : {
                rank : "rare",
                desc : "몬스터 방어율 무시 : +15%",
                type : "armp",
                value : 15
            },
            //2번줄옵
            strvs : {
                rank : "rare2",
                desc : "STR : +6",
                type : "strv",
                value : 6
            },
            dexvs : {
                rank : "rare2",
                desc : "DEX : +6",
                type : "dexv",
                value : 6
            },
            intvs : {
                rank : "rare2",
                desc : "INT : +6",
                type : "intv",
                value : 6
            },
            lukvs : {
                rank : "rare2",
                desc : "LUK : +6",
                type : "lukv",
                value : 6
            },
            hpvs : {
                rank : "rare2",
                desc : "최대 HP : +60",
                type : "hpv",
                value : 60
            },
            advs : {
                rank : "rare2",
                desc : "공격력 : +6",
                type : "adv",
                value : 6
            },
            apvs : {
                rank : "rare2",
                desc : "마력 : +6",
                type : "apv",
                value : 6
            },
            extra : {
                rank : "rare2",
                desc : "잡옵 ㅠㅠ",
                type : "extra",
                value : 0
            }
        },
        none : {
            none : {
                rank : "none",
                desc : "(없음)",
                type : "none",
                value : 0,
            }
        }
    },
    bpotential : {
        legendary: {
            strpp1 : {
                rank : "legendary",
                desc : "STR : +12%",
                type : "strp",
                value : 12
            },
            dexpp1 : {
                rank : "legendary",
                desc : "DEX : +12%",
                type : "dexp",
                value : 12
            },
            intpp1 : {
                rank : "legendary",
                desc : "INT : +12%",
                type : "intp",
                value : 12
            },
            lukpp1 : {
                rank : "legendary",
                desc : "LUK : +12%",
                type : "lukp",
                value : 12
            },
            strpp2 : {
                rank : "legendary",
                desc : "STR : +7%",
                type : "strp",
                value : 7
            },
            dexpp2 : {
                rank : "legendary",
                desc : "DEX : +7%",
                type : "dexp",
                value : 7
            },
            intpp2 : {
                rank : "legendary",
                desc : "INT : +7%",
                type : "intp",
                value : 7
            },
            lukpp2 : {
                rank : "legendary",
                desc : "LUK : +7%",
                type : "lukp",
                value : 7
            },
            strvp : {
                rank : "legendary",
                desc : "STR : +18",
                type : "strv",
                value : 18
            },
            dexvp : {
                rank : "legendary",
                desc : "DEX : +18",
                type : "dexv",
                value : 18
            },
            intvp : {
                rank : "legendary",
                desc : "INT : +18",
                type : "intv",
                value : 18
            },
            lukvp : {
                rank : "legendary",
                desc : "LUK : +18",
                type : "lukv",
                value : 18
            },
            strp10p : {
                rank : "legendary",
                desc : "캐릭터 기준 10레벨 당 STR : +2",
                type : "strp10",
                value : 2
            },
            dexp10p : {
                rank : "legendary",
                desc : "캐릭터 기준 10레벨 당 DEX : +2",
                type : "dexp10",
                value : 2
            },
            intp10p : {
                rank : "legendary",
                desc : "캐릭터 기준 10레벨 당 INT : +2",
                type : "intp10",
                value : 2
            },
            lukp10p : {
                rank : "legendary",
                desc : "캐릭터 기준 10레벨 당 LUK : +2",
                type : "lukp10",
                value : 2
            },
            hppp : {
                rank : "legendary",
                desc : "최대 HP : +10%",
                type : "hpp",
                value : 10
            },
            hpvp : {
                rank : "legendary",
                desc : "최대 HP : +300",
                type : "hpv",
                value : 300
            },
            allpp1 : {
                rank : "legendary",
                desc : "올스탯 : +9%",
                type : "allp",
                value : 9
            },
            allpp2 : {
                rank : "legendary",
                desc : "올스탯 : +5%",
                type : "allp",
                value : 5
            },
            adpp : {
                rank : "legendary",
                desc : "공격력 : +12%",
                type : "adp",
                value : 12
            },
            appp : {
                rank : "legendary",
                desc : "마력 : +12%",
                type : "app",
                value : 12
            },
            advp : {
                rank : "legendary",
                desc : "공격력 : +14",
                type : "adv",
                value : 14
            },
            apvp : {
                rank : "legendary",
                desc : "마력 : +14",
                type : "apv",
                value : 14
            },
            crrp : {
                rank : "legendary",
                desc : "크리티컬 확률 : +12%",
                type : "crr",
                value : 12
            },
            dmgp : {
                rank : "legendary",
                desc : "데미지 : +12%",
                type : "dmg",
                value : 12
            },
            adp10p : {
                rank : "legendary",
                desc : "캐릭터 기준 10레벨 당 공격력 : +1",
                type : "adp10",
                value : 1
            },
            app10p : {
                rank : "legendary",
                desc : "캐릭터 기준 10레벨 당 마력 : +1",
                type : "app10",
                value : 1
            },
            bossp : {
                rank : "legendary",
                desc : "보스 몬스터 공격 시 데미지 : +18%",
                type : "boss",
                value : 18
            },
            armpp : {
                rank : "legendary",
                desc : "몬스터 방어율 무시 : +5%",
                type : "armp",
                value : 5
            },
            cdrp : {
                rank : "legendary",
                desc : "모든 스킬의 재사용 대기시간 : -1초",
                type : "cdr",
                value : 1
            },
            crdp1 : {
                rank : "legendary",
                desc : "크리티컬 데미지 : +3%",
                type : "crd",
                value : 3
            },
            crdp2 : {
                rank : "legendary",
                desc : "크리티컬 데미지 : +1%",
                type : "crd",
                value : 1
            },
            //2번줄옵
            strps1 : {
                rank : "unique",
                desc : "STR : +9%",
                type : "strp",
                value : 9
            },
            dexps1 : {
                rank : "unique",
                desc : "DEX : +9%",
                type : "dexp",
                value : 9
            },
            intps1 : {
                rank : "unique",
                desc : "INT : +9%",
                type : "intp",
                value : 9
            },
            lukps1 : {
                rank : "unique",
                desc : "LUK : +9%",
                type : "lukp",
                value : 9
            },
            strps2 : {
                rank : "unique",
                desc : "STR : +5%",
                type : "strp",
                value : 5
            },
            dexps2 : {
                rank : "unique",
                desc : "DEX : +5%",
                type : "dexp",
                value : 5
            },
            intps2 : {
                rank : "unique",
                desc : "INT : +5%",
                type : "intp",
                value : 5
            },
            lukps2 : {
                rank : "unique",
                desc : "LUK : +5%",
                type : "lukp",
                value : 5
            },
            strvs : {
                rank : "unique",
                desc : "STR : +16",
                type : "strv",
                value : 16
            },
            dexvs : {
                rank : "unique",
                desc : "DEX : +16",
                type : "dexv",
                value : 16
            },
            intvs : {
                rank : "unique",
                desc : "INT : +16",
                type : "intv",
                value : 16
            },
            lukvs : {
                rank : "unique",
                desc : "LUK : +16",
                type : "lukv",
                value : 16
            },
            strp10s : {
                rank : "unique",
                desc : "캐릭터 기준 10레벨 당 STR : +1",
                type : "strp10",
                value : 1
            },
            dexp10s : {
                rank : "unique",
                desc : "캐릭터 기준 10레벨 당 DEX : +1",
                type : "dexp10",
                value : 1
            },
            intp10s : {
                rank : "unique",
                desc : "캐릭터 기준 10레벨 당 INT : +1",
                type : "intp10",
                value : 1
            },
            lukp10s : {
                rank : "unique",
                desc : "캐릭터 기준 10레벨 당 LUK : +1",
                type : "lukp10",
                value : 1
            },
            hpps : {
                rank : "unique",
                desc : "최대 HP : +7%",
                type : "hpp",
                value : 7
            },
            hpvs : {
                rank : "unique",
                desc : "최대 HP : +240",
                type : "hpv",
                value : 240
            },
            allps1 : {
                rank : "unique",
                desc : "올스탯 : +6%",
                type : "allp",
                value : 6
            },
            allps2 : {
                rank : "unique",
                desc : "올스탯 : +4%",
                type : "allp",
                value : 4
            },
            adps : {
                rank : "unique",
                desc : "공격력 : +9%",
                type : "adp",
                value : 9
            },
            apps : {
                rank : "unique",
                desc : "마력 : +9%",
                type : "app",
                value : 9
            },
            advs : {
                rank : "unique",
                desc : "공격력 : +12",
                type : "adv",
                value : 12
            },
            apvs : {
                rank : "unique",
                desc : "마력 : +12",
                type : "apv",
                value : 12
            },
            crrs : {
                rank : "unique",
                desc : "크리티컬 확률 : +9%",
                type : "crr",
                value : 9
            },
            dmgs : {
                rank : "unique",
                desc : "데미지 : +9%",
                type : "dmg",
                value : 9
            },
            bosss : {
                rank : "unique",
                desc : "보스 몬스터 공격 시 데미지 : +12%",
                type : "boss",
                value : 12
            },
            armps : {
                rank : "unique",
                desc : "몬스터 방어율 무시 : +4%",
                type : "armp",
                value : 4
            },
            extra : {
                rank : "unique",
                desc : "잡옵 ㅠㅠ",
                type : "extra",
                value : 0
            }
        },
        unique: {
            strpp1 : {
                rank : "unique",
                desc : "STR : +9%",
                type : "strp",
                value : 9
            },
            dexpp1 : {
                rank : "unique",
                desc : "DEX : +9%",
                type : "dexp",
                value : 9
            },
            intpp1 : {
                rank : "unique",
                desc : "INT : +9%",
                type : "intp",
                value : 9
            },
            lukpp1 : {
                rank : "unique",
                desc : "LUK : +9%",
                type : "lukp",
                value : 9
            },
            strpp2 : {
                rank : "unique",
                desc : "STR : +5%",
                type : "strp",
                value : 5
            },
            dexpp2 : {
                rank : "unique",
                desc : "DEX : +5%",
                type : "dexp",
                value : 5
            },
            intpp2 : {
                rank : "unique",
                desc : "INT : +5%",
                type : "intp",
                value : 5
            },
            lukpp2 : {
                rank : "unique",
                desc : "LUK : +5%",
                type : "lukp",
                value : 5
            },
            strvp : {
                rank : "unique",
                desc : "STR : +16",
                type : "strv",
                value : 16
            },
            dexvp : {
                rank : "unique",
                desc : "DEX : +16",
                type : "dexv",
                value : 16
            },
            intvp : {
                rank : "unique",
                desc : "INT : +16",
                type : "intv",
                value : 16
            },
            lukvp : {
                rank : "unique",
                desc : "LUK : +16",
                type : "lukv",
                value : 16
            },
            strp10p : {
                rank : "unique",
                desc : "캐릭터 기준 10레벨 당 STR : +1",
                type : "strp10",
                value : 1
            },
            dexp10p : {
                rank : "unique",
                desc : "캐릭터 기준 10레벨 당 DEX : +1",
                type : "dexp10",
                value : 1
            },
            intp10p : {
                rank : "unique",
                desc : "캐릭터 기준 10레벨 당 INT : +1",
                type : "intp10",
                value : 1
            },
            lukp10p : {
                rank : "unique",
                desc : "캐릭터 기준 10레벨 당 LUK : +1",
                type : "lukp10",
                value : 1
            },
            hppp : {
                rank : "unique",
                desc : "최대 HP : +7%",
                type : "hpp",
                value : 7
            },
            hpvp : {
                rank : "unique",
                desc : "최대 HP : +240",
                type : "hpv",
                value : 240
            },
            allpp1 : {
                rank : "unique",
                desc : "올스탯 : +6%",
                type : "allp",
                value : 6
            },
            allpp2 : {
                rank : "unique",
                desc : "올스탯 : +4%",
                type : "allp",
                value : 4
            },
            adpp : {
                rank : "unique",
                desc : "공격력 : +9%",
                type : "adp",
                value : 9
            },
            appp : {
                rank : "unique",
                desc : "마력 : +9%",
                type : "app",
                value : 9
            },
            advp : {
                rank : "unique",
                desc : "공격력 : +12",
                type : "adv",
                value : 12
            },
            apvp : {
                rank : "unique",
                desc : "마력 : +12",
                type : "apv",
                value : 12
            },
            crrp : {
                rank : "unique",
                desc : "크리티컬 확률 : +9%",
                type : "crr",
                value : 9
            },
            dmgp : {
                rank : "unique",
                desc : "데미지 : +9%",
                type : "dmg",
                value : 9
            },
            bossp : {
                rank : "unique",
                desc : "보스 몬스터 공격 시 데미지 : +12%",
                type : "boss",
                value : 12
            },
            armpp : {
                rank : "unique",
                desc : "몬스터 방어율 무시 : +4%",
                type : "armp",
                value : 4
            },
            //2번줄옵
            strps1 : {
                rank : "epic",
                desc : "STR : +6%",
                type : "strp",
                value : 6
            },
            dexps1 : {
                rank : "epic",
                desc : "DEX : +6%",
                type : "dexp",
                value : 6
            },
            intps1 : {
                rank : "epic",
                desc : "INT : +6%",
                type : "intp",
                value : 6
            },
            lukps1 : {
                rank : "epic",
                desc : "LUK : +6%",
                type : "lukp",
                value : 6
            },
            strps2 : {
                rank : "epic",
                desc : "STR : +4%",
                type : "strp",
                value : 4
            },
            dexps2 : {
                rank : "epic",
                desc : "DEX : +4%",
                type : "dexp",
                value : 4
            },
            intps2 : {
                rank : "epic",
                desc : "INT : +4%",
                type : "intp",
                value : 4
            },
            lukps2 : {
                rank : "epic",
                desc : "LUK : +4%",
                type : "lukp",
                value : 4
            },
            strvs : {
                rank : "epic",
                desc : "STR : +14",
                type : "strv",
                value : 14
            },
            dexvs : {
                rank : "epic",
                desc : "DEX : +14",
                type : "dexv",
                value : 14
            },
            intvs : {
                rank : "epic",
                desc : "INT : +14",
                type : "intv",
                value : 14
            },
            lukvs : {
                rank : "epic",
                desc : "LUK : +14",
                type : "lukv",
                value : 14
            },
            hpps : {
                rank : "epic",
                desc : "최대 HP : +5%",
                type : "hpp",
                value : 5
            },
            hpvs : {
                rank : "epic",
                desc : "최대 HP : +180",
                type : "hpv",
                value : 180
            },
            allps1 : {
                rank : "epic",
                desc : "올스탯 : +3%",
                type : "allp",
                value : 3
            },
            allps2 : {
                rank : "epic",
                desc : "올스탯 : +2%",
                type : "allp",
                value : 2
            },
            adps : {
                rank : "epic",
                desc : "공격력 : +6%",
                type : "adp",
                value : 6
            },
            apps : {
                rank : "epic",
                desc : "마력 : +6%",
                type : "app",
                value : 6
            },
            advs : {
                rank : "epic",
                desc : "공격력 : +11",
                type : "adv",
                value : 11
            },
            apvs : {
                rank : "epic",
                desc : "마력 : +11",
                type : "apv",
                value : 11
            },
            crrs : {
                rank : "epic",
                desc : "크리티컬 확률 : +6%",
                type : "crr",
                value : 6
            },
            dmgs : {
                rank : "epic",
                desc : "데미지 : +6%",
                type : "dmg",
                value : 6
            },
            armps : {
                rank : "epic",
                desc : "몬스터 방어율 무시 : +3%",
                type : "armp",
                value : 3
            },
            extra : {
                rank : "epic",
                desc : "잡옵 ㅠㅠ",
                type : "extra",
                value : 0
            }
        },
        epic: {
            strpp1 : {
                rank : "epic",
                desc : "STR : +6%",
                type : "strp",
                value : 6
            },
            dexpp1 : {
                rank : "epic",
                desc : "DEX : +6%",
                type : "dexp",
                value : 6
            },
            intpp1 : {
                rank : "epic",
                desc : "INT : +6%",
                type : "intp",
                value : 6
            },
            lukpp1 : {
                rank : "epic",
                desc : "LUK : +6%",
                type : "lukp",
                value : 6
            },
            strpp2 : {
                rank : "epic",
                desc : "STR : +4%",
                type : "strp",
                value : 4
            },
            dexpp2 : {
                rank : "epic",
                desc : "DEX : +4%",
                type : "dexp",
                value : 4
            },
            intpp2 : {
                rank : "epic",
                desc : "INT : +4%",
                type : "intp",
                value : 4
            },
            lukpp2 : {
                rank : "epic",
                desc : "LUK : +4%",
                type : "lukp",
                value : 4
            },
            strvp : {
                rank : "epic",
                desc : "STR : +14",
                type : "strv",
                value : 14
            },
            dexvp : {
                rank : "epic",
                desc : "DEX : +14",
                type : "dexv",
                value : 14
            },
            intvp : {
                rank : "epic",
                desc : "INT : +14",
                type : "intv",
                value : 14
            },
            lukvp : {
                rank : "epic",
                desc : "LUK : +14",
                type : "lukv",
                value : 14
            },
            hppp : {
                rank : "epic",
                desc : "최대 HP : +5%",
                type : "hpp",
                value : 5
            },
            hpvp : {
                rank : "epic",
                desc : "최대 HP : +180",
                type : "hpv",
                value : 180
            },
            allpp1 : {
                rank : "epic",
                desc : "올스탯 : +3%",
                type : "allp",
                value : 3
            },
            allpp2 : {
                rank : "epic",
                desc : "올스탯 : +2%",
                type : "allp",
                value : 2
            },
            adpp : {
                rank : "epic",
                desc : "공격력 : +6%",
                type : "adp",
                value : 6
            },
            appp : {
                rank : "epic",
                desc : "마력 : +6%",
                type : "app",
                value : 6
            },
            advp : {
                rank : "epic",
                desc : "공격력 : +11",
                type : "adv",
                value : 11
            },
            apvp : {
                rank : "epic",
                desc : "마력 : +11",
                type : "apv",
                value : 11
            },
            crrp : {
                rank : "epic",
                desc : "크리티컬 확률 : +6%",
                type : "crr",
                value : 6
            },
            dmgp : {
                rank : "epic",
                desc : "데미지 : +6%",
                type : "dmg",
                value : 6
            },
            armpp : {
                rank : "epic",
                desc : "몬스터 방어율 무시 : +3%",
                type : "armp",
                value : 3
            },
            //2번줄옵
            strps1 : {
                rank : "rare",
                desc : "STR : +3%",
                type : "strp",
                value : 3
            },
            dexps1 : {
                rank : "rare",
                desc : "DEX : +3%",
                type : "dexp",
                value : 3
            },
            intps1 : {
                rank : "rare",
                desc : "INT : +3%",
                type : "intp",
                value : 3
            },
            lukps1 : {
                rank : "rare",
                desc : "LUK : +3%",
                type : "lukp",
                value : 3
            },
            strps2 : {
                rank : "rare",
                desc : "STR : +2%",
                type : "strp",
                value : 2
            },
            dexps2 : {
                rank : "rare",
                desc : "DEX : +2%",
                type : "dexp",
                value : 2
            },
            intps2 : {
                rank : "rare",
                desc : "INT : +2%",
                type : "intp",
                value : 2
            },
            lukps2 : {
                rank : "rare",
                desc : "LUK : +2%",
                type : "lukp",
                value : 2
            },
            strvs1 : {
                rank : "rare",
                desc : "STR : +12",
                type : "strv",
                value : 12
            },
            dexvs1 : {
                rank : "rare",
                desc : "DEX : +12",
                type : "dexv",
                value : 12
            },
            intvs1 : {
                rank : "rare",
                desc : "INT : +12",
                type : "intv",
                value : 12
            },
            lukvs1 : {
                rank : "rare",
                desc : "LUK : +12",
                type : "lukv",
                value : 12
            },
            strvs2 : {
                rank : "rare",
                desc : "STR : +10",
                type : "strv",
                value : 10
            },
            dexvs2 : {
                rank : "rare",
                desc : "DEX : +10",
                type : "dexv",
                value : 10
            },
            intvs2 : {
                rank : "rare",
                desc : "INT : +10",
                type : "intv",
                value : 10
            },
            lukvs2 : {
                rank : "rare",
                desc : "LUK : +10",
                type : "lukv",
                value : 10
            },
            hpps : {
                rank : "rare",
                desc : "최대 HP : +2%",
                type : "hpp",
                value : 2
            },
            hpvs : {
                rank : "rare",
                desc : "최대 HP : +100",
                type : "hpv",
                value : 100
            },
            allvs1 : {
                rank : "rare",
                desc : "올스탯 : +5",
                type : "allv",
                value : 3
            },
            allvs2 : {
                rank : "rare",
                desc : "올스탯 : +3",
                type : "allv",
                value : 2
            },
            adps : {
                rank : "rare",
                desc : "공격력 : +3%",
                type : "adp",
                value : 3
            },
            apps : {
                rank : "rare",
                desc : "마력 : +3%",
                type : "app",
                value : 3
            },
            advs1 : {
                rank : "rare",
                desc : "공격력 : +12",
                type : "adv",
                value : 12
            },
            apvs1 : {
                rank : "rare",
                desc : "마력 : +12",
                type : "apv",
                value : 12
            },
            advs2 : {
                rank : "rare",
                desc : "공격력 : +10",
                type : "adv",
                value : 10
            },
            apvs2 : {
                rank : "rare",
                desc : "마력 : +10",
                type : "apv",
                value : 10
            },
            crrs : {
                rank : "rare",
                desc : "크리티컬 확률 : +4%",
                type : "crr",
                value : 4
            },
            dmgs : {
                rank : "rare",
                desc : "데미지 : +3%",
                type : "dmg",
                value : 3
            },
            extra : {
                rank : "rare",
                desc : "잡옵 ㅠㅠ",
                type : "extra",
                value : 0
            }
        },
        rare: {
            strpp1 : {
                rank : "rare",
                desc : "STR : +3%",
                type : "strp",
                value : 3
            },
            dexpp1 : {
                rank : "rare",
                desc : "DEX : +3%",
                type : "dexp",
                value : 3
            },
            intpp1 : {
                rank : "rare",
                desc : "INT : +3%",
                type : "intp",
                value : 3
            },
            lukpp1 : {
                rank : "rare",
                desc : "LUK : +3%",
                type : "lukp",
                value : 3
            },
            strpp2 : {
                rank : "rare",
                desc : "STR : +2%",
                type : "strp",
                value : 2
            },
            dexpp2 : {
                rank : "rare",
                desc : "DEX : +2%",
                type : "dexp",
                value : 2
            },
            intpp2 : {
                rank : "rare",
                desc : "INT : +2%",
                type : "intp",
                value : 2
            },
            lukpp2 : {
                rank : "rare",
                desc : "LUK : +2%",
                type : "lukp",
                value : 2
            },
            strvp1 : {
                rank : "rare",
                desc : "STR : +12",
                type : "strv",
                value : 12
            },
            dexvp1 : {
                rank : "rare",
                desc : "DEX : +12",
                type : "dexv",
                value : 12
            },
            intvp1 : {
                rank : "rare",
                desc : "INT : +12",
                type : "intv",
                value : 12
            },
            lukvp1 : {
                rank : "rare",
                desc : "LUK : +12",
                type : "lukv",
                value : 12
            },
            strvp2 : {
                rank : "rare",
                desc : "STR : +10",
                type : "strv",
                value : 10
            },
            dexvp2 : {
                rank : "rare",
                desc : "DEX : +10",
                type : "dexv",
                value : 10
            },
            intvp2 : {
                rank : "rare",
                desc : "INT : +10",
                type : "intv",
                value : 10
            },
            lukvp2 : {
                rank : "rare",
                desc : "LUK : +10",
                type : "lukv",
                value : 10
            },
            hppp : {
                rank : "rare",
                desc : "최대 HP : +2%",
                type : "hpp",
                value : 2
            },
            hpvp : {
                rank : "rare",
                desc : "최대 HP : +100",
                type : "hpv",
                value : 100
            },
            allvp1 : {
                rank : "rare",
                desc : "올스탯 : +5",
                type : "allv",
                value : 3
            },
            allvp2 : {
                rank : "rare",
                desc : "올스탯 : +3",
                type : "allv",
                value : 2
            },
            adpp : {
                rank : "rare",
                desc : "공격력 : +3%",
                type : "adp",
                value : 3
            },
            appp : {
                rank : "rare",
                desc : "마력 : +3%",
                type : "app",
                value : 3
            },
            advp1 : {
                rank : "rare",
                desc : "공격력 : +12",
                type : "adv",
                value : 12
            },
            apvp1 : {
                rank : "rare",
                desc : "마력 : +12",
                type : "apv",
                value : 12
            },
            advp2 : {
                rank : "rare",
                desc : "공격력 : +10",
                type : "adv",
                value : 10
            },
            apvp2 : {
                rank : "rare",
                desc : "마력 : +10",
                type : "apv",
                value : 10
            },
            crrp : {
                rank : "rare",
                desc : "크리티컬 확률 : +4%",
                type : "crr",
                value : 4
            },
            dmgp : {
                rank : "rare",
                desc : "데미지 : +3%",
                type : "dmg",
                value : 3
            },
            //2번줄옵
            strvs : {
                rank : "rare2",
                desc : "STR : +6",
                type : "strv",
                value : 6
            },
            dexvs : {
                rank : "rare2",
                desc : "DEX : +6",
                type : "dexv",
                value : 6
            },
            intvs : {
                rank : "rare2",
                desc : "INT : +6",
                type : "intv",
                value : 6
            },
            lukvs : {
                rank : "rare2",
                desc : "LUK : +6",
                type : "lukv",
                value : 6
            },
            hpvs : {
                rank : "rare2",
                desc : "최대 HP : +60",
                type : "hpv",
                value : 60
            },
            advs : {
                rank : "rare2",
                desc : "공격력 : +6",
                type : "adv",
                value : 6
            },
            apvs : {
                rank : "rare2",
                desc : "마력 : +6",
                type : "apv",
                value : 6
            },
            extra : {
                rank : "rare2",
                desc : "잡옵 ㅠㅠ",
                type : "extra",
                value : 0
            }
        },
        none : {
            none : {
                desc : "(없음)",
                type : "none",
                value : 0,
            }
        }
    },
}

export const potData = writable(pot)