<script>
    import {equipData} from '../lib/equip'

    let sel = "cap"
   // @ts-ignore
     $: cur = $equipData[sel]

    /**
	 * @param {string} param
	 */
    function changeSel(param) {
        sel = param
    }
    // function changeReqLv() {
    //     equipData.update(n => {
    //         n.hat.reqLv = 456
    //         return n
    //     })
    // }
</script>
<div class="equip-container">
    <div class="equip-window">
        <div class="tabs">
            <button class="tab" on:click={() => changeSel("cape")}>장비</button>
            <button class="tab">캐시</button>
            <button class="tab">펫</button>
        </div>
        <table>
            <tr class="equip-row">
                <td><button class="equip-item {$equipData.ring1.rank}" on:click={() => changeSel("ring1")}><span>반지1</span></button></td>
                <td></td>
                <td><button class="equip-item {$equipData.cap.rank}" on:click={() => changeSel("cap")}><span>모자</span></button></td>
                <td></td>
                <td><button class="equip-item {$equipData.emblem.rank}" on:click={() => changeSel("emblem")}><span>엠블렘</span></button></td>
            </tr>
            <tr class="equip-row">
                <td><button class="equip-item {$equipData.ring2.rank}" on:click={() => changeSel("ring2")}><span>반지2</span></button></td>
                <td><button class="equip-item {$equipData.pendant1.rank}" on:click={() => changeSel("pendant1")}><span>펜던트1</span></button></td>
                <td><button class="equip-item {$equipData.forehead.rank}" on:click={() => changeSel("forehead")}><span>얼굴장식</span></button></td>
                <td></td>
                <td><button class="equip-item {$equipData.badge.rank}" on:click={() => changeSel("badge")}><span>뱃지</span></button></td>
            </tr>
            <tr class="equip-row">
                <td><button class="equip-item {$equipData.ring3.rank}" on:click={() => changeSel("ring3")}><span>반지3</span></button></td>
                <td><button class="equip-item {$equipData.pendant2.rank}" on:click={() => changeSel("pendant2")}><span>펜던트2</span></button></td>
                <td><button class="equip-item {$equipData.eyeAcc.rank}" on:click={() => changeSel("eyeAcc")}><span>눈장식</span></button></td>
                <td><button class="equip-item {$equipData.earAcc.rank}" on:click={() => changeSel("earAcc")}><span>귀고리</span></button></td>
                <td><button class="equip-item {$equipData.medal.rank}" on:click={() => changeSel("medal")}><span>훈장</span></button></td>
            </tr>
            <tr class="equip-row">
                <td><button class="equip-item {$equipData.ring4.rank}" on:click={() => changeSel("ring4")}><span>반지4</span></button></td>
                <td><button class="equip-item {$equipData.weapon.rank}" on:click={() => changeSel("weapon")}><span>무기</span></button></td>
                <td><button class="equip-item {$equipData.clothes.rank}" on:click={() => changeSel("clothes")}><span>상의</span></button></td>
                <td><button class="equip-item {$equipData.shoulder.rank}" on:click={() => changeSel("shoulder")}><span>어깨장식</span></button></td>
                <td><button class="equip-item {$equipData.subWeapon.rank}" on:click={() => changeSel("subWeapon")}><span>보조</span></button></td>
            </tr>
            <tr class="equip-row">
                <td><button class="equip-item {$equipData.pocket.rank}" on:click={() => changeSel("pocket")}><span>포켓</span></button></td>
                <td><button class="equip-item {$equipData.belt.rank}" on:click={() => changeSel("belt")}><span>벨트</span></button></td>
                <td><button class="equip-item {$equipData.pants.rank}" on:click={() => changeSel("pants")}><span>하의</span></button></td>
                <td><button class="equip-item {$equipData.gloves.rank}" on:click={() => changeSel("gloves")}><span>장갑</span></button></td>
                <td><button class="equip-item {$equipData.cape.rank}" on:click={() => changeSel("cape")}><span>망토</span></button></td>
            </tr>
            <tr class="equip-row">
                <td></td>
                <td></td>
                <td><button class="equip-item {$equipData.shoes.rank}" on:click={() => changeSel("shoes")}><span>신발</span></button></td>
                <td><button class="equip-item {$equipData.android.rank}" on:click={() => changeSel("android")}><span>안드로이드</span></button></td>
                <td><button class="equip-item {$equipData.heart.rank}" on:click={() => changeSel("heart")}><span>기계심장</span></button></td>
            </tr>
    
        </table>
    </div>
    <div class="equip-preview">
        {#if cur.starforce > 0}
        <div class="starforce">
            {#if cur.starforce >= 5}
                ★★★★★
            {/if}
            {#if cur.starforce >= 10}
                ★★★★★
            {/if}
            {#if cur.starforce >= 15}
                ★★★★★
            {/if}
            {#if cur.starforce <= 15}
                {#each {length: cur.starforce % 5} as _}
                    ★
                {/each}
            {/if}
            <br>
            {#if cur.starforce >= 20}
                ★★★★★
            {/if}
            {#if cur.starforce >= 25}
                ★★★★★
            {/if}
            {#if cur.starforce > 15}
                {#each {length: cur.starforce % 5} as _}
                    ★
                {/each}
            {/if}
        </div>
        {/if}
        <div class="title">
            {#if cur.soul}{cur.soul.type} {cur.soul.boss}의<br>{/if}{cur.title} {#if cur.scroll > 0}(+{cur.scroll}){/if}
        </div>
        <div class="data">
            <p>STR : +{cur.str[0]+cur.str[1]+cur.str[2]} ({cur.str[0]}+{cur.str[1]}+{cur.str[2]})</p>
            <p>DEX : +{cur.dex[0]+cur.dex[1]+cur.dex[2]} ({cur.dex[0]}+{cur.dex[1]}+{cur.dex[2]})</p>
            <p>INT : +{cur.int[0]+cur.int[1]+cur.int[2]} ({cur.int[0]}+{cur.int[1]}+{cur.int[2]})</p>
            <p>LUK : +{cur.luk[0]+cur.luk[1]+cur.luk[2]} ({cur.luk[0]}+{cur.luk[1]}+{cur.luk[2]})</p>
            <p>최대 HP : +{cur.hp[0]+cur.hp[1]+cur.hp[2]} ({cur.hp[0]}+{cur.hp[1]}+{cur.hp[2]})</p>
            <p>최대 HP : +{cur.hpp}%</p>
            <p>공격력 : +{cur.ad[0]+cur.ad[1]+cur.ad[2]} ({cur.ad[0]}+{cur.ad[1]}+{cur.ad[2]})</p>
            <p>마력 : +{cur.ap[0]+cur.ap[1]+cur.ap[2]} ({cur.ap[0]}+{cur.ap[1]}+{cur.ap[2]})</p>
            <p>올스탯 : +{cur.all[0]+cur.all[1]+cur.all[2]}% ({cur.all[0]}%+{cur.all[1]}%+{cur.all[2]}%)</p>
            <p>보스 몬스터 공격 시 데미지 : +{cur.boss[0]+cur.boss[1]+cur.boss[2]}% ({cur.boss[0]}%+{cur.boss[1]}%+{cur.boss[2]}%)</p>
            <p>몬스터 방어율 무시 : +{cur.armp[0]+cur.armp[1]+cur.armp[2]}% ({cur.armp[0]}%+{cur.armp[1]}%+{cur.armp[2]}%)</p>
            <p>데미지 : +{cur.dmg[0]+cur.dmg[1]+cur.dmg[2]}% ({cur.dmg[0]}%+{cur.dmg[1]}%+{cur.dmg[2]}%)</p>
            {#if cur.scissor == "none" || cur.scissor == "inf"}
                <br>
            {:else}
                <p>가위 사용 가능 횟수 : {cur.scissor}회</p>
            {/if}
        </div>
        <div class="potential dotted-top">
            <p>잠재옵션</p>
            <p>{cur.potential}</p>
        </div>
        <div class="bpotential dotted-top">
            <p>에디셔널 잠재옵션</p>
            <p>{cur.bpotential}</p>
        </div>
        <div class="soul dotted-top">
            <p>{#if cur.soul}{cur.soul.type} {cur.soul.boss}의 소울 적용{/if}</p>
        </div>
    </div>
</div>


<style>
    table,td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    .tab {
        border: 1px solid black;
        border-radius: 5px 5px 0px 0px;
        border-collapse: collapse;
        padding: 0.1rem;
        background-color: var(--light);
    }
    .equip-item {
        width: 48px;
        height: 48px;
        border: 2px solid;
        text-align: left;
        font-size: 10px;
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
    }
    .equip-window {
        margin: 2vw;
    }
    .equip-preview {
        border: 1px solid black;
        border-radius: 5px;
        padding: 0.5rem;
    }
    .equip-container {
        display: flex;
        flex-wrap: wrap;
    }
    .dotted-top {
        border-top: dotted;
    }
    .starforce, .title{
        text-align: center;
    }
    .tab {
        width: 50px;
    }
    .legendary {
        color: yellowgreen;
    }
    .unique {
        color: yellow;
    }
    .epic {
        color: purple;
    }
    .rare {
        color: skyblue;
    }
    .none {
        color: transparent;
    }
</style>