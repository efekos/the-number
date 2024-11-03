<script lang="ts">
    export let _class:string;
    export let text:string;
</script>

<div class="component-margins">
    <span class={`component-paddings category-child ${_class}`}>{text}</span>
    <slot/>
</div>