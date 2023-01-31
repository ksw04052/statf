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