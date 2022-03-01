<script lang="ts">
    import PostCard from "./PostCard.svelte";

    export let posts;
</script>

<ul class="flex flex-col items-center p-4 gap-4 w-full max-w-5xl">
    {#each posts as post}
        <PostCard post={post}/>
    {/each}
</ul>
