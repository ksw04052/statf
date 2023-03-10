import { writable } from "svelte/store";

let jobs = [
    {
        job : "히어로",
        race : "모험가",
        line : "전사",
        weapon : ["한손검", "한손도끼", "두손검", "두손도끼"],
        skills : [
            {
                title : "메이플 용사",
                icon : 1121000,
                
            }
        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "팔라딘",
        race : "모험가",
        line : "전사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "다크나이트",
        race : "모험가",
        line : "전사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "아크메이지(불,독)",
        race : "모험가",
        line : "마법사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "아크메이지(썬,콜)",
        race : "모험가",
        line : "마법사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "비숍",
        race : "모험가",
        line : "마법사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "보우마스터",
        race : "모험가",
        line : "궁수",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "신궁",
        race : "모험가",
        line : "궁수",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "패스파인더",
        race : "모험가",
        line : "궁수",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "나이트로드",
        race : "모험가",
        line : "도적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "섀도어",
        race : "모험가",
        line : "도적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "듀얼블레이드",
        race : "모험가",
        line : "도적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "바이퍼",
        race : "모험가",
        line : "해적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "캡틴",
        race : "모험가",
        line : "해적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "캐논슈터",
        race : "모험가",
        line : "해적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "소울마스터",
        race : "시그너스",
        line : "전사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "미하일",
        race : "시그너스",
        line : "전사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "플레임위자드",
        race : "시그너스",
        line : "마법사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "윈드브레이커",
        race : "시그너스",
        line : "궁수",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "나이트워커",
        race : "시그너스",
        line : "도적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "스트라이커",
        race : "시그너스",
        line : "해적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "블래스터",
        race : "레지스탕스",
        line : "전사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "배틀메이지",
        race : "레지스탕스",
        line : "마법사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "와일드헌터",
        race : "레지스탕스",
        line : "궁수",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "메카닉",
        race : "레지스탕스",
        line : "해적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "제논",
        race : "레지스탕스",
        line : "도적, 해적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "데몬슬레이어",
        race : "데몬",
        line : "전사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "데몬어벤져",
        race : "데몬",
        line : "전사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "아란",
        race : "영웅",
        line : "전사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "에반",
        race : "영웅",
        line : "마법사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "루미너스",
        race : "영웅",
        line : "마법사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "메르세데스",
        race : "영웅",
        line : "궁수",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "팬텀",
        race : "영웅",
        line : "도적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "은월",
        race : "영웅",
        line : "해적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "카이저",
        race : "노바",
        line : "전사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "카인",
        race : "노바",
        line : "궁수",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "카데나",
        race : "노바",
        line : "도적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "엔젤릭버스터",
        race : "노바",
        line : "해적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "아델",
        race : "레프",
        line : "전사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "일리움",
        race : "레프",
        line : "마법사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "칼리",
        race : "레프",
        line : "도적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "아크",
        race : "레프",
        line : "해적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "라라",
        race : "아니마",
        line : "마법사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "호영",
        race : "아니마",
        line : "도적",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "제로",
        race : "초월자",
        line : "전사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    },
    {
        job : "키네시스",
        race : "프렌즈",
        line : "마법사",
        weapon : "",
        skills : [

        ],
        mastery : 20,
        bstrp : 0,
        bstrv : 0,
        bdexp : 0,
        bdexv : 0,
        bintp : 0,
        bintv : 0,
        blukp : 0,
        blukv : 0,
        bhpp : 0,
        bhp : 0,
        badp : 0,
        badv : 0, 
        bapp : 0,
        bapv : 0,
        bdmg : 0,
        bboss : 0,
        bfdmg : 0,
        barmp : 0,
        bcrr : 0,
        bcrd : 0,
        bbuff : 0,
        bdrop : 0,
        bmeso : 0
    }
]

let selectedJob = "메르세데스"
export const jobData = writable(jobs)
export const selJob = writable(selectedJob)