<script>
    import Navbar from "../components/Navbar.svelte"
    import Equip from "../components/Equip.svelte"
    import Stats from "../components/Stats.svelte"
    let isStatOpen = false
    const toggleStat = () => (isStatOpen = !isStatOpen)
</script>

<Navbar statToggler={toggleStat} />
<div class="container">
    <div class="{isStatOpen == true ? 'stat-open' : 'stats'}">
        <Stats />
    </div>
    <div class="equip">
        <Equip />
    </div>
</div>




<style>
    .container {
        display: flex;
        flex-wrap: wrap;
    }
    /* .equip {
        display: flex;
    } */
    .stats {
        display: none;
    }
    .stat-open {
        display: flex;
    }
</style>