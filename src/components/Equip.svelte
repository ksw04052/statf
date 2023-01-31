<div class="equip-window">
    <div class="tabs">
        <button class="tab">장비</button>
        <button class="tab">캐시</button>
        <button class="tab">펫</button>
    </div>
    <table>
        <tr class="equip-row">
            <td>반지1</td>
            <td></td>
            <td>모자</td>
            <td></td>
            <td>엠블렘</td>
        </tr>
        <tr class="equip-row">
            <td>반지2</td>
            <td>펜던트1</td>
            <td>얼굴장식</td>
            <td></td>
            <td>뱃지</td>
        </tr>
        <tr class="equip-row">
            <td>반지3</td>
            <td>펜던트2</td>
            <td>눈장식</td>
            <td>귀고리</td>
            <td>훈장</td>
        </tr>
        <tr class="equip-row">
            <td>반지4</td>
            <td>무기</td>
            <td>상의</td>
            <td>어깨장식</td>
            <td>보조</td>
        </tr>
        <tr class="equip-row">
            <td>포켓</td>
            <td>벨트</td>
            <td>하의</td>
            <td>장갑</td>
            <td>망토</td>
        </tr>
        <tr class="equip-row">
            <td></td>
            <td></td>
            <td>신발</td>
            <td>안드로이드</td>
            <td>기계심장</td>
        </tr>

    </table>
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