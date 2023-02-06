<script>
// @ts-nocheck
    
    import { equipData } from "../lib/equip"
    import { potData } from "../lib/potential"


    // $: strSum = $equipData.forEach(item => {
    //     strSum = strSum + item.str[0] + item.str[1] + item.str[2]
    // })

</script>

<div class="stat-window">
    <table>
        <tr class="stat-row">
            <td>레벨</td>
            <td colspan="3">276</td>
        </tr>
        <tr class="stat-row">
            <td>직업</td>
            <td colspan="3">메르세데스</td>
        </tr>
        <tr class="stat-row">
            <td rowspan="2">스탯 공격력</td>
            <td colspan="3">123</td>
        </tr>
        <tr>
            <td colspan="3">~456</td>
        </tr>
        <tr class="stat-row">
            <td>HP</td>
            <td colspan="3">123456</td>
        </tr>
        <tr class="stat-row">
            <td>STR</td>
            <td colspan="3">{equipData.strSum()}</td>
        </tr>
        <tr class="stat-row">
            <td>DEX</td>
            <td colspan="3">{equipData.dexSum()}</td>
        </tr>
        <tr class="stat-row">
            <td>INT</td>
            <td colspan="3"></td>
        </tr>
        <tr class="stat-row">
            <td>LUK</td>
            <td colspan="3">123</td>
        </tr>
        <tr class="stat-row2">
            <td>데미지</td>
            <td>123%</td>
            <td>보스 데미지</td>
            <td>123%</td>
        </tr>
        <tr class="stat-row2">
            <td>최종 데미지</td>
            <td>123%</td>
            <td>버프지속시간</td>
            <td>123%</td>
        </tr>
        <tr class="stat-row2">
            <td>방어율 무시</td>
            <td>123%</td>
            <td>스타포스</td>
            <td>{equipData.starforceSum()}</td>
        </tr>
        <tr class="stat-row2">
            <td>크리티컬 확률</td>
            <td>123%</td>
            <td>크리 데미지</td>
            <td>123%</td>
        </tr>
        <tr class="stat-row2">
            <td>아이템 드롭률</td>
            <td>123%</td>
            <td>메소 획득량</td>
            <td>123%</td>
        </tr>
        <tr class="stat-row2">
            <td>공격력</td>
            <td>{equipData.adSum()}</td>
            <td>마력</td>
            <td>123%</td>
        </tr>
        <tr class="stat-row2">
            <td>아케인포스</td>
            <td>123%</td>
            <td>어센틱포스</td>
            <td>123%</td>
        </tr>
    </table>
</div>

<style>
    table, td {
        border-collapse: collapse;
        border: 1px solid black;
    }
    td {
        padding: 0.3rem;
    }
    tr {
        width: 100%;
    }
    .stat-window {
        width: 100%;
    }
    .stat-row>td:nth-child(1) {
        background-color: var(--secondary);
        color: white;
    }
    .stat-row2>td:nth-child(1), .stat-row2>td:nth-child(3){
        background-color: var(--dark);
        color: white;
    }
</style>