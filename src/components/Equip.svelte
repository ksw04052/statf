<script>
// @ts-nocheck

    import { equipData } from "../lib/equip"
    import { potData } from "../lib/potential"

    let sel = "cap"
   // @ts-ignore
    $: cur = $equipData.find(e => e.type == sel)
    // @ts-ignore
    $: pRank = cur.potential.rank
    $: bpRank = cur.bpotential.rank
    $: pline1 = $potData.potential[pRank][cur.potential.line1]
    $: pline2 = $potData.potential[pRank][cur.potential.line2]
    $: pline3 = $potData.potential[pRank][cur.potential.line3]
    $: bpline1 = $potData.bpotential[bpRank][cur.bpotential.line1]
    $: bpline2 = $potData.bpotential[bpRank][cur.bpotential.line2]
    $: bpline3 = $potData.bpotential[bpRank][cur.bpotential.line3]

    /**
	 * @param {string} param
	 */
    

    function rank(type) {
        if($equipData.find(e => e.type == type).potential.rank == "legendary" || $equipData.find(e => e.type == type).bpotential.rank == "legendary") {
            return "legendary"
        }
        else if ($equipData.find(e => e.type == type).potential.rank == "unique" || $equipData.find(e => e.type == type).bpotential.rank == "unique") {
            return "unique"
        }
        else if ($equipData.find(e => e.type == type).potential.rank == "epic" || $equipData.find(e => e.type == type).bpotential.rank == "epic") {
            return "epic"
        }
        else if ($equipData.find(e => e.type == type).potential.rank == "rare" || $equipData.find(e => e.type == type).bpotential.rank == "rare") {
            return "rare"
        }
        else {
            return "none"
        }
        
    }
    function changeStr(param) {
        equipData.update(n => {
            n.find(e => e.type == "cap").str[1] = param
            return n
        })
    }
    let title = $equipData.find(e => e.type == sel).title
    let scroll = $equipData.find(e => e.type == sel).scroll
    let starforce = $equipData.find(e => e.type == sel).starforce
    let str = $equipData.find(e => e.type == sel).str
    let dex = $equipData.find(e => e.type == sel).dex
    let int = $equipData.find(e => e.type == sel).int
    let luk = $equipData.find(e => e.type == sel).luk
    let hp = $equipData.find(e => e.type == sel).hp
    let hpp = $equipData.find(e => e.type == sel).hpp
    let ad = $equipData.find(e => e.type == sel).ad
    let ap = $equipData.find(e => e.type == sel).ap
    let all = $equipData.find(e => e.type == sel).all
    let boss = $equipData.find(e => e.type == sel).boss
    let armp = $equipData.find(e => e.type == sel).armp
    let dmg = $equipData.find(e => e.type == sel).dmg
    let scissor = $equipData.find(e => e.type == sel).scissor
    function changeSel(param) {
        sel = param
        title = $equipData.find(e => e.type == sel).title
        scroll = $equipData.find(e => e.type == sel).scroll
        starforce = $equipData.find(e => e.type == sel).starforce
        str = $equipData.find(e => e.type == sel).str
        dex = $equipData.find(e => e.type == sel).dex
        int = $equipData.find(e => e.type == sel).int
        luk = $equipData.find(e => e.type == sel).luk
        hp = $equipData.find(e => e.type == sel).hp
        hpp = $equipData.find(e => e.type == sel).hpp
        ad = $equipData.find(e => e.type == sel).ad
        ap = $equipData.find(e => e.type == sel).ap
        all = $equipData.find(e => e.type == sel).all
        boss = $equipData.find(e => e.type == sel).boss
        armp = $equipData.find(e => e.type == sel).armp
        dmg = $equipData.find(e => e.type == sel).dmg
        scissor = $equipData.find(e => e.type == sel).scissor
    }
    
    function editCurrent() {
        equipData.update(n => {
            n.find(e => e.type == sel).title = title
            n.find(e => e.type == sel).scroll = scroll
            n.find(e => e.type == sel).starforce = starforce
            n.find(e => e.type == sel).str = str
            n.find(e => e.type == sel).dex = dex
            n.find(e => e.type == sel).int = int
            n.find(e => e.type == sel).luk = luk
            n.find(e => e.type == sel).hp = hp
            n.find(e => e.type == sel).hpp = hpp
            n.find(e => e.type == sel).ad = ad
            n.find(e => e.type == sel).ap = ap
            n.find(e => e.type == sel).all = all
            n.find(e => e.type == sel).boss = boss
            n.find(e => e.type == sel).armp = armp
            n.find(e => e.type == sel).dmg = dmg
            if (scissor){
                n.find(e => e.type == sel).scissor = scissor
            }
            else{
                n.find(e => e.type == sel).scissor = "none"
            }   
            return n
        })
    }

</script>
<div class="equip-container">
    <div class="equip-window">
        <div class="tabs">
            <button class="tab" on:click={() => changeSel("cape")}>장비</button>
            <button class="tab">캐시</button>
            <button class="tab">펫</button>
        </div>
        <button on:click={() => changeStr(2000)}>테스트</button>
        <table>
            <tr class="equip-row">
                <td><button class="equip-item {rank("ring1")}" on:click={() => changeSel("ring1")}><span>반지1</span></button></td>
                <td></td>
                <td><button class="equip-item {rank("cap")}" on:click={() => changeSel("cap")}><span>모자</span></button></td>
                <td></td>
                <td><button class="equip-item {rank("emblem")}" on:click={() => changeSel("emblem")}><span>엠블렘</span></button></td>
            </tr>
            <tr class="equip-row">
                <td><button class="equip-item {rank("ring2")}" on:click={() => changeSel("ring2")}><span>반지2</span></button></td>
                <td><button class="equip-item {rank("pendant1")}" on:click={() => changeSel("pendant1")}><span>펜던트1</span></button></td>
                <td><button class="equip-item {rank("forehead")}" on:click={() => changeSel("forehead")}><span>얼굴장식</span></button></td>
                <td></td>
                <td><button class="equip-item {rank("badge")}" on:click={() => changeSel("badge")}><span>뱃지</span></button></td>
            </tr>
            <tr class="equip-row">
                <td><button class="equip-item {rank("ring3")}" on:click={() => changeSel("ring3")}><span>반지3</span></button></td>
                <td><button class="equip-item {rank("pendant2")}" on:click={() => changeSel("pendant2")}><span>펜던트2</span></button></td>
                <td><button class="equip-item {rank("eyeAcc")}" on:click={() => changeSel("eyeAcc")}><span>눈장식</span></button></td>
                <td><button class="equip-item {rank("earAcc")}" on:click={() => changeSel("earAcc")}><span>귀고리</span></button></td>
                <td><button class="equip-item {rank("medal")}" on:click={() => changeSel("medal")}><span>훈장</span></button></td>
            </tr>
            <tr class="equip-row">
                <td><button class="equip-item {rank("ring4")}" on:click={() => changeSel("ring4")}><span>반지4</span></button></td>
                <td><button class="equip-item {rank("weapon")}" on:click={() => changeSel("weapon")}><span>무기</span></button></td>
                <td><button class="equip-item {rank("clothes")}" on:click={() => changeSel("clothes")}><span>상의</span></button></td>
                <td><button class="equip-item {rank("shoulder")}" on:click={() => changeSel("shoulder")}><span>어깨장식</span></button></td>
                <td><button class="equip-item {rank("subWeapon")}" on:click={() => changeSel("subWeapon")}><span>보조</span></button></td>
            </tr>
            <tr class="equip-row">
                <td><button class="equip-item {rank("pocket")}" on:click={() => changeSel("pocket")}><span>포켓</span></button></td>
                <td><button class="equip-item {rank("belt")}" on:click={() => changeSel("belt")}><span>벨트</span></button></td>
                <td><button class="equip-item {rank("pants")}" on:click={() => changeSel("pants")}><span>하의</span></button></td>
                <td><button class="equip-item {rank("gloves")}" on:click={() => changeSel("gloves")}><span>장갑</span></button></td>
                <td><button class="equip-item {rank("cape")}" on:click={() => changeSel("cape")}><span>망토</span></button></td>
            </tr>
            <tr class="equip-row">
                <td></td>
                <td></td>
                <td><button class="equip-item {rank("shoes")}" on:click={() => changeSel("shoes")}><span>신발</span></button></td>
                <td><button class="equip-item {rank("android")}" on:click={() => changeSel("android")}><span>안드로이드</span></button></td>
                <td><button class="equip-item {rank("heart")}" on:click={() => changeSel("heart")}><span>기계심장</span></button></td>
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
            <p>{#if cur.soul}{cur.soul.prefix} {cur.soul.boss}의<br>{/if}{cur.title} {#if cur.scroll > 0}(+{cur.scroll}){/if}</p>
        </div>
        <div class="icon">
            <img src="https://maplestory.io/api/kmst/1150/item/1152154/icon" alt="">
        </div>
        <div class="data dotted-bottom">
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
        {#if pRank != "none"}
        <div class="potential dotted-bottom">
            <p class="{pRank}">잠재옵션</p>
                {#if cur.potential.line1 != ""}
                    <p class="{pline1.rank}">{pline1.desc}</p>
                {/if}
                {#if cur.potential.line2 != ""}
                    <p class="{pline2.rank}">{pline2.desc}</p>
                {/if}
                {#if cur.potential.line3 != ""}
                    <p class="{pline3.rank}">{pline3.desc}</p>
                {/if}
        </div>
        {/if}
        {#if bpRank != "none"}
        <div class="bpotential dotted-bottom">
            <p class="{bpRank}">에디셔널 잠재옵션</p>
                {#if cur.bpotential.line1 != ""}
                    <p class="{bpline1.rank}">+ {bpline1.desc}</p>
                {/if}
                {#if cur.bpotential.line2 != ""}
                    <p class="{bpline2.rank}">+ {bpline2.desc}</p>
                {/if}
                {#if cur.bpotential.line3 != ""}
                    <p class="{bpline3.rank}">+ {bpline3.desc}</p>
                {/if}
        </div>
        {/if}
        <div class="soul">
            <p>{#if cur.soul}{cur.soul.prefix} {cur.soul.boss}의 소울 적용{/if}</p>
        </div>
    </div>
    <div class="equip-edit data">
        <p>아이템명: <input type="text" bind:value={title}></p>
        <p>스타포스: <input type="number" bind:value={starforce} class="nb-box"></p>
        <p>작 횟수: <input type="number" bind:value={scroll} class="nb-box"></p>
        <p>STR : +{str[0]+str[1]+str[2]} (<input type="number" bind:value={str[0]} class="nb-box">+<input type="number" bind:value={str[1]} class="nb-box">+<input type="number" bind:value={str[2]} class="nb-box">)</p>
        <p>DEX : +{dex[0]+dex[1]+dex[2]} (<input type="number" bind:value={dex[0]} class="nb-box">+<input type="number" bind:value={dex[1]} class="nb-box">+<input type="number" bind:value={dex[2]} class="nb-box">)</p>
        <p>INT : +{int[0]+int[1]+int[2]} (<input type="number" bind:value={int[0]} class="nb-box">+<input type="number" bind:value={int[1]} class="nb-box">+<input type="number" bind:value={int[2]} class="nb-box">)</p>
        <p>LUK : +{luk[0]+luk[1]+luk[2]} (<input type="number" bind:value={luk[0]} class="nb-box">+<input type="number" bind:value={luk[1]} class="nb-box">+<input type="number" bind:value={luk[2]} class="nb-box">)</p>
        <p>최대 HP : +{hp[0]+hp[1]+hp[2]} (<input type="number" bind:value={hp[0]} class="nb-box">+<input type="number" bind:value={hp[1]} class="nb-box">+<input type="number" bind:value={hp[2]} class="nb-box">)</p>
        <p>최대 HP : +<input type="number" bind:value={hpp} class="nb-box">%</p>
        <p>공격력 : +{ad[0]+ad[1]+ad[2]} (<input type="number" bind:value={ad[0]} class="nb-box">+<input type="number" bind:value={ad[1]} class="nb-box">+<input type="number" bind:value={ad[2]} class="nb-box">)</p>
        <p>마력 : +{ap[0]+ap[1]+ap[2]} (<input type="number" bind:value={ap[0]} class="nb-box">+<input type="number" bind:value={ap[1]} class="nb-box">+<input type="number" bind:value={ap[2]} class="nb-box">)</p>
        <p>올스탯 : +{all[0]+all[1]+all[2]}% (<input type="number" bind:value={all[0]} class="nb-box">+<input type="number" bind:value={all[1]} class="nb-box">+<input type="number" bind:value={all[2]} class="nb-box">)</p>
        <p>보스 몬스터 공격 시 데미지 : +{boss[0]+boss[1]+boss[2]}% (<input type="number" bind:value={boss[0]} class="nb-box">+<input type="number" bind:value={boss[1]} class="nb-box">+<input type="number" bind:value={boss[2]} class="nb-box">)</p>
        <p>몬스터 방어율 무시 : +{armp[0]+armp[1]+armp[2]}% (<input type="number" bind:value={armp[0]} class="nb-box">+<input type="number" bind:value={armp[1]} class="nb-box">+<input type="number" bind:value={armp[2]} class="nb-box">)</p>
        <p>데미지 : +{dmg[0]+dmg[1]+dmg[2]}% (<input type="number" bind:value={dmg[0]} class="nb-box">+<input type="number" bind:value={dmg[1]} class="nb-box">+<input type="number" bind:value={dmg[2]} class="nb-box">)</p>
        <p>가위 사용 가능 횟수 : <input type="number" bind:value={scissor} class="nb-box">회</p>
        <button on:click={() => {editCurrent()}}>변경</button>
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
        background-color: hsla(0 0% 15% / 85%);
    }
    .icon img{
        width: 30%;
    }
    .equip-edit {
        border: 1px solid black;
        border-radius: 5px;
        padding: 0.5rem;
        background-color: hsla(0 0% 15% / 85%);
    }
    .equip-container {
        display: flex;
        flex-wrap: wrap;
    }
    .data p{
        color: white;
    }
    .title p{
        color: lightcoral;
        font-weight: 900;
    }
    .dotted-bottom {
        border-bottom: dotted;
    }
    .nb-box {
        width: 3rem;
    }
    .starforce, .title{
        text-align: center;
    }
    .starforce {
        color: yellow;
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
        color: orchid;
    }
    .rare {
        color: skyblue;
    }
    .rare2 {
        color: gray;
    }
    .none {
        color: transparent;
    }
</style>