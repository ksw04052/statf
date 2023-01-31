<script>
    let isMenuOpen = false
    export let statToggler = () => {}

    function toggleMenu() {
        isMenuOpen = !isMenuOpen
    }

</script>
<div class="navbar">
    <a href="/" class="title"><h1>스탯창</h1></a>
    <div style="flex-grow: 1;"></div>
    <button class="stat-btn" on:click={statToggler}>스탯창</button>
    <button class="menu-btn" on:click={toggleMenu}>메뉴</button>
    <nav class:menu-open={isMenuOpen}>
        <ul>
            <li><button on:click={() => (isMenuOpen = false)}>장비창</button></li>
            <li><button on:click={() => (isMenuOpen = false)}>하이퍼스탯/어빌</button></li>
            <li><button on:click={() => (isMenuOpen = false)}>스킬창</button></li>
            <li><button on:click={() => (isMenuOpen = false)}>유니온</button></li>
            <li><button on:click={() => (isMenuOpen = false)}>성향</button></li>
            <li><button on:click={() => (isMenuOpen = false)}>몬스터 라이프</button></li>
        </ul>
    </nav>
</div>



<style>
    li, h1, button {
        color: white;
    }
    li {
        width: 100%;
        height: 100%;
        padding-top: 0.5vh;
        padding-bottom: 0.5vh;
    }
    li>button {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
    }
    nav {
        display: none;
    }
    nav.menu-open {
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: var(--dark);
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    
    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 1vh;
        margin-bottom: 1vh;
        list-style: none;
    }
    a {
        width: 8rem;
    }
    .navbar {
        background-color: var(--dark);
        align-items: center;
        display: flex;
        position: relative;
        flex-wrap: wrap;

    }
    .title {
        margin-left: 6vw;
    }
    .stat-btn {
        background-color: var(--secondary);
        padding: 0.2rem;
        border-radius: 10px;
        font-weight: 500;
        border: none;
        margin-right: 2vw;
        height: 2rem;
    }
    .menu-btn {
        background-color: var(--primary);
        padding: 0.3rem 0.5rem;
        border-radius: 10px;
        font-weight: 500;
        border: none;
        margin-right: 2vw;
        height: 2rem;
    }

</style>