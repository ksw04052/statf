import { writable } from "svelte/store";

let pot = {
    potentialp : {
        legendary: {
            strpp : {
                desc : "STR : +12%",
                type : "strp",
                value : 12
            },
            dexpp : {
                desc : "DEX : +12%",
                type : "dexp",
                value : 12
            },
            intpp : {
                desc : "INT : +12%",
                type : "intp",
                value : 12
            },
            lukpp : {
                desc : "LUK : +12%",
                type : "lukp",
                value : 12
            },
            hppp : {
                desc : "최대 HP : +12%",
                type : "hpp",
                value : 12
            },
            allpp : {
                desc : "올스탯 : +9%",
                type : "allp",
                value : 9
            },
            adpp : {
                desc : "공격력 : +12%",
                type : "adp",
                value : 12
            },
            appp : {
                desc : "마력 : +12%",
                type : "app",
                value : 12
            },
            crrp : {
                desc : "크리티컬 확률 : +12%",
                type : "crr",
                value : 12
            },
            dmgp : {
                desc : "데미지 : +12%",
                type : "dmg",
                value : 12
            },
            adp10p : {
                desc : "캐릭터 기준 10레벨 당 공격력 : +1",
                type : "adp10",
                value : 1
            },
            app10p : {
                desc : "캐릭터 기준 10레벨 당 마력 : +1",
                type : "app10",
                value : 1
            },
            bossp1 : {
                desc : "보스 몬스터 공격 시 데미지 : +40%",
                type : "boss",
                value : 40
            },
            bossp2 : {
                desc : "보스 몬스터 공격 시 데미지 : +35%",
                type : "boss",
                value : 35
            },
            armpp1 : {
                desc : "몬스터 방어율 무시 : +40%",
                type : "armp",
                value : 40
            },
            armpp2 : {
                desc : "몬스터 방어율 무시 : +35%",
                type : "armp",
                value : 35
            },
            cdrp1 : {
                desc : "모든 스킬의 재사용 대기시간 : -2초",
                type : "cdr",
                value : 2
            },
            cdrp2 : {
                desc : "모든 스킬의 재사용 대기시간 : -1초",
                type : "cdr",
                value : 1
            },
            crdp : {
                desc : "크리티컬 데미지 : +8%",
                type : "crd",
                value : 8
            },
            //2번줄옵
            strps : {
                desc : "STR : +9%",
                type : "strp",
                value : 9
            },
            dexps : {
                desc : "DEX : +9%",
                type : "dexp",
                value : 9
            },
            intps : {
                desc : "INT : +9%",
                type : "intp",
                value : 9
            },
            lukps : {
                desc : "LUK : +9%",
                type : "lukp",
                value : 9
            },
            hpps : {
                desc : "최대 HP : +9%",
                type : "hpp",
                value : 9
            },
            allps : {
                desc : "올스탯 : +6%",
                type : "allp",
                value : 6
            },
            adps : {
                desc : "공격력 : +9%",
                type : "adp",
                value : 9
            },
            apps : {
                desc : "마력 : +9%",
                type : "app",
                value : 9
            },
            crrs : {
                desc : "크리티컬 확률 : +9%",
                type : "crr",
                value : 9
            },
            dmgs : {
                desc : "데미지 : +9%",
                type : "dmg",
                value : 9
            },
            bosss1 : {
                desc : "보스 몬스터 공격 시 데미지 : +30%",
                type : "boss",
                value : 30
            },
            bosss2 : {
                desc : "보스 몬스터 공격 시 데미지 : +20%",
                type : "boss",
                value : 20
            },
            armps : {
                desc : "몬스터 방어율 무시 : +30%",
                type : "armp",
                value : 30
            },
            sharp : {
                desc : "<쓸만한 샤프 아이즈> 스킬 사용 가능",
                type : "skill",
                value : 1
            }
            
            
        }
    }
}

export const potData = writable(pot)