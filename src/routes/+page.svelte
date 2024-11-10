<script lang="ts">
    import '../style/index.css';
    import CategoryHead from "$lib/components/CategoryHead.svelte";
    import CategoryChild from "$lib/components/CategoryChild.svelte";
    import {parseComponents, type ParseComponentsResult} from "$lib";
    import {replaceState} from "$app/navigation";

    let input: string;
    let num: number;
    let entriesPromise: Promise<ParseComponentsResult>;
    let windowLoaded: boolean = false;

    function sanitize(input: string): string {
        let res = input;
        if(!res) return '0';
        if(res.startsWith('0')&&res.length>1) res = res.substring(1);
        if(res.endsWith('-')&&res.length>1) res = res.substring(0,res.length-1);
        if(res.length>8) res = res.substring(0,8);

        let fRes = '';
        for (let i = 0; i < res.length; i++) {
            const char = res[i];
            if(/[0-9.-]/.test(char))fRes+=char;
        }

        return res;
    }

    function onWindowLoad() {
        const params = new URL(window.location.href).searchParams;
        input = sanitize(params.get("n")||'1');
        windowLoaded = true;
    }

    $: input = sanitize(input);
    $: if (input.match(/^-?[1-9](?:[0-9]*)?$/) || input.match(/^0$/)) num = parseInt(input); else if (input.match(/^-?[0-9]*\.[0-9]+$/)) num = parseFloat(input); else entriesPromise = Promise.resolve([]);
    $: entriesPromise = parseComponents(num);
    $: if(windowLoaded) {
        const url = new URL(window.location.href);
        url.searchParams.set('n',input);
        replaceState(url.href,{});
    }

</script>

<svelte:window on:load={onWindowLoad}/>

<span class="fixed bottom-2 left-2">v0.1</span>

{#if windowLoaded}

    <a href="https://github.com/efekos/the-number" target="_blank" rel="noopener noreferrer" class="top-logo-wrapper">
        <img src="./github_logo.svg" alt="GitHub Logo" class="top-logo">
    </a>

    <br><br><br><br>
    <div class="text-center">
        <h1 class="title">The Number</h1>
        <br><br>
        <input id="the-number" type="text" bind:value={input}/>
        <span id="is">is...</span>
    </div>
    <br><br>
    <div id="component_stack">
        <div class="text-left w-3/4">
            {#await entriesPromise}
                <CategoryHead>
                    <CategoryChild text="LOADING" _class="bg-gray-600 text-gray-950"
                                   input={`Gathering information about ${input}...`}/>
                </CategoryHead>
                <br><br>
                <img src="./favicon.png" width="64" height="64" alt="The Number Logo" class="loading-logo">
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
                    <CategoryChild text="ERROR" _class="bg-red-600 text-red-950" input={err.message}/>
                </CategoryHead>
            {/await}
        </div>
    </div>

{:else}
    <img src="./favicon.png" alt="The Number Logo" class="loading-logo mt-5">
{/if}