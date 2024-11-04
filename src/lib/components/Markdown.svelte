<script lang="ts">
    import {marked} from "marked";

    export let text: string;
    let parsePromise: Promise<string>|string;

    $: parsePromise = marked(text||'');
</script>

{#await parsePromise}
    <span>{text}</span>
{:then res}
    {@html res}
{:catch _e}
    <span>{text}</span>
{/await}