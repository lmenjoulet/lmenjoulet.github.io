<script lang="ts">
    export let post: any;
</script>

<li class="w-full">
    <a href={post.href} class="flex flex-col gap-4 shadow-md hover:shadow-lg shadow-black/50 hover:shadow-black/50 hover:-translate-y-0.5 transition duration-200 rounded border-2 border-stone-900 p-2">
        <div class="flex justify-between" >
            <h1 class="text-2xl underline">
                {post.title}
            </h1>
            <p>
                {post.lang}
            </p>
        </div>
        <p class="text-ellipsis overflow-hidden">
            {post.description}
        </p>
        <div class="flex justify-between text-stone-600">
            <p>
                {#each post.authors as author}
                    {author}
                {/each}
            </p>
            <p>
                {post.publishDate.toLocaleDateString()}
            </p>
        </div>
    </a>
</li>