<script>
    import Navbar from "../components/Navbar.svelte"
</script>

<Navbar />

<slot />

<style>
    @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');

    :global(*) {
        font-family: 'Gowun Dodum', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        color: black;
    }

    /* colors */
    :global(:root) {
        --primary: #FFAA44;
        --secondary: #99BB33;
        --tertiary: #7FB7BE;
        --dark: #2D3047;
        --light: #D3F3EE;
    }

    :global(body) {
        background-color: #eeeeee;
    }
</style>