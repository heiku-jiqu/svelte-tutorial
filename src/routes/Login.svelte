<script>
    let user = { loggedIn: false};

    function toggle() {
        user.loggedIn = !user.loggedIn;
    }

    let x = Math.random() * 10;
</script>

{#if user.loggedIn} 
<button on:click={toggle}>Log out</button>
{:else}
<button on:click={toggle}>Log in</button>
{/if}
<!--
    # indicates block opening
    : indicates block continuation
    / indicates block closing
-->

{#if x > 7}
<p>{x} is greater than 7</p>
{:else}
    {#if 5 > x}
    <p>{x} is </p>
    {:else}
    <p>{x} is between 5 and 7</p>
    {/if}
{/if}