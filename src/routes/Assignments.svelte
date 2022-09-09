<script>
    let count = 0;
    $: doubled = count * 2
    function incrementCount() {
        count += 1;
    }
    $: console.log('the count is ' + count);
    $: if (count >= 10) {
        alert('count is dangerously high! resetting to 0');
        count = 0;
    }

    // Reactivity is triggered by ASSIGNMENTS!!!
    // rule of thumb: updated var must directly appear on the LHS of assignment
    let numbers = [1,2,3,4];
    function addNumber() {
        numbers.push(numbers.length + 1);
        // below code is needed to trigger reactivity!
        numbers = numbers;
        // alternatively:
        // numbers = [...numbers, numbers.length +1];
    }
    $: sum = numbers.reduce((t, n) => t + n, 0); 
</script>

<button on:click={incrementCount}>
    Clicked {count} {count === 1 ? 'time':'times'}
</button>
<p>{count} multiplied by 2 is {doubled}</p>
<p>{numbers.join(' + ')} = {sum}</p>
<button on:click={addNumber}>Click to add a number!</button>