<script lang="ts">
    import PostCard from "./PostCard.svelte";

    export let posts;
</script>

<ul class="max-w-5xl flex flex-col items-center p-4 gap-4">
    {#each posts as post}
        <PostCard post={post}/>
    {/each}
</ul>
