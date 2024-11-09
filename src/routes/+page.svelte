<script lang="ts">
    import '../style/index.css';
    import CategoryHead from "$lib/components/CategoryHead.svelte";
    import CategoryChild from "$lib/components/CategoryChild.svelte";
    import {parseComponents, type ParseComponentsResult} from "$lib";
    export let data: App.PageData;

    let input: string = '1';
    let num: number = 'n' in data && typeof data.n === 'string' ? parseInt(data.n||'1') : 1;
    let entriesPromise: Promise<ParseComponentsResult>;


    $: if(!input) input = '0'; else if(input.startsWith('0')) input = input.substring(1); else if(input.length>8)input = input.substring(0,8); else if (!input[input.length-1].match(/[.0-9-]/)) input = input.substring(0,input.length-1)
    $: if (input.match(/^-?[1-9](?:[0-9]*)?$/)||input.match(/^0$/)) num = parseInt(input); else if(input.match(/^-?[0-9]*\.[0-9]+$/)) num = parseFloat(input); else entriesPromise = Promise.resolve([]);
    $: entriesPromise = parseComponents(num);

</script>

<svelte:head>
    <title>The Number</title>
    <meta name="og:title" content="The Number" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://efekos.dev/the-number" />
    <meta property="og:description" content="The Number is a website where you can write up to an eight-digit number in order to gather all the information about it from different topics such as math, physics, history or facts." />
</svelte:head>

<a href="https://github.com/efekos/the-number" target="_blank" rel="noopener noreferrer" class="top-logo-wrapper">
    <img src="./github_logo.svg" alt="GitHub Logo" class="top-logo">
</a>

<br><br><br><br>
<div class="text-center">
    <h1 class="text-7xl font-black">The Number</h1>
    <br><br><br><br><br>
    <input class="text-6xl font-bold text-center focus:outline-none w-full h-1/4 outline-none" type="text" bind:value={input}/>
    <span>is...</span>
</div>
<br><br>
<div id="component_stack" class="flex justify-center ">
    <div class="text-left w-3/4">
        {#await entriesPromise}
            <CategoryHead>
                <CategoryChild text="LOADING" _class="bg-gray-600 text-gray-950" input={`Gathering information about ${input}...`}/>
            </CategoryHead>
            <br><br>
            <img src="./favicon.png" width="64" height="64" alt="The Number Logo" class="blink ml-auto mr-auto block">
        {:then entries}
            {#each entries as entry}
                <CategoryHead>
                    {#each entry as entryElement}
                        <CategoryChild _class={entryElement.category.colorClass}
                                       text={entryElement.category.name} input={entryElement.text}/>
                    {/each}
                </CategoryHead>
            {/each}
            {:catch err}
            <CategoryHead>
                <CategoryChild text="ERROR" _class="bg-red-600 text-red-950" input={err.message} />
            </CategoryHead>
        {/await}
    </div>
</div>