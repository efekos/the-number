<script lang="ts">
    import Markdown from "$lib/components/Markdown.svelte";

    export let _class: string;
    export let text: string;
    export let input: string;
</script>

<div class="component-margins">
    <span class={`component-paddings category-child ${_class}`}>{text}</span>
    <Markdown text={input}/>
</div>