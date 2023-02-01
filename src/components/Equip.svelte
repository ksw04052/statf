<script>
    import {equipData} from '../lib/equip'

    // function changeReqLv() {
    //     equipData.update(n => {
    //         n.hat.reqLv = 456
    //         return n
    //     })
    // }
</script>

<div class="equip-window">
    <div class="tabs">
        <button class="tab">장비</button>
        <button class="tab">캐시</button>
        <button class="tab">펫</button>
    </div>
    <table>
        <tr class="equip-row">
            <td><span>반지1</span></td>
            <td></td>
            <td><span>모자</span></td>
            <td></td>
            <td><span>엠블렘</span></td>
        </tr>
        <tr class="equip-row">
            <td><span>반지2</span></td>
            <td><span>펜던트1</span></td>
            <td><span>얼굴장식</span></td>
            <td></td>
            <td><span>뱃지</span></td>
        </tr>
        <tr class="equip-row">
            <td><span>반지3</span></td>
            <td><span>펜던트2</span></td>
            <td><span>눈장식</span></td>
            <td><span>귀고리</span></td>
            <td><span>훈장</span></td>
        </tr>
        <tr class="equip-row">
            <td><span>반지4</span></td>
            <td><span>무기</span></td>
            <td><span>상의</span></td>
            <td><span>어깨장식</span></td>
            <td><span>보조</span></td>
        </tr>
        <tr class="equip-row">
            <td><span>포켓</span></td>
            <td><span>벨트</span></td>
            <td><span>하의</span></td>
            <td><span>장갑</span></td>
            <td><span>망토</span></td>
        </tr>
        <tr class="equip-row">
            <td></td>
            <td></td>
            <td><span>신발</span></td>
            <td><span>안드로이드</span></td>
            <td><span>기계심장</span></td>
        </tr>

    </table>
</div>
<div class="equip-preview">
    <div class="starforce">
        {#each {length: $equipData.cap.starforce} as _}
            ★
        {/each}
    </div>
    <div class="title">
        {$equipData.cap.title} (+{$equipData.cap.scroll})
    </div>
    <div class="data">
        <p>STR : +{$equipData.cap.str[0]+$equipData.cap.str[1]+$equipData.cap.str[2]} ({$equipData.cap.str[0]}+{$equipData.cap.str[1]}+{$equipData.cap.str[2]})</p>
        <p>DEX : +{$equipData.cap.dex[0]+$equipData.cap.dex[1]+$equipData.cap.dex[2]} ({$equipData.cap.dex[0]}+{$equipData.cap.dex[1]}+{$equipData.cap.dex[2]})</p>
        <p>INT : +{$equipData.cap.int[0]+$equipData.cap.int[1]+$equipData.cap.int[2]} ({$equipData.cap.int[0]}+{$equipData.cap.int[1]}+{$equipData.cap.int[2]})</p>
        <p>LUK : +{$equipData.cap.luk[0]+$equipData.cap.luk[1]+$equipData.cap.luk[2]} ({$equipData.cap.luk[0]}+{$equipData.cap.luk[1]}+{$equipData.cap.luk[2]})</p>
        <p>최대 HP : +{$equipData.cap.hp[0]+$equipData.cap.hp[1]+$equipData.cap.hp[2]} ({$equipData.cap.hp[0]}+{$equipData.cap.hp[1]}+{$equipData.cap.hp[2]})</p>
        <p>공격력 : +{$equipData.cap.ad[0]+$equipData.cap.ad[1]+$equipData.cap.ad[2]} ({$equipData.cap.ad[0]}+{$equipData.cap.ad[1]}+{$equipData.cap.ad[2]})</p>
        <p>마력 : +{$equipData.cap.ap[0]+$equipData.cap.ap[1]+$equipData.cap.ap[2]} ({$equipData.cap.ap[0]}+{$equipData.cap.ap[1]}+{$equipData.cap.ap[2]})</p>
        <p>올스탯 : +{$equipData.cap.all[0]+$equipData.cap.all[1]+$equipData.cap.all[2]}% ({$equipData.cap.all[0]}%+{$equipData.cap.all[1]}%+{$equipData.cap.all[2]}%)</p>
        <p>보스 몬스터 공격 시 데미지 : +{$equipData.cap.boss[0]+$equipData.cap.boss[1]+$equipData.cap.boss[2]} ({$equipData.cap.boss[0]}+{$equipData.cap.boss[1]}+{$equipData.cap.boss[2]})</p>
    </div>
</div>

<style>
    table,td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    button {
        border: 1px solid black;
        border-radius: 5px 5px 0px 0px;
        border-collapse: collapse;
        padding: 0.1rem;
        background-color: var(--light);
    }
    .tabs {
        margin-bottom: 1vh;
        display: flex;
        flex-direction: row;
    }
    .equip-row>td {
        padding: 1px;
        width: 50px;
        height: 50px;
        font-size: 6px;
        vertical-align: top;
    }
    .equip-window {
        margin: 2vw;
    }
    .tab {
        width: 50px;
    }
</style>