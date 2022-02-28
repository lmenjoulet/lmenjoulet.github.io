<script lang="ts">
    export let image_source: string;
    export let contact_link: string;
</script>

<form action={contact_link} class="rounded p-2 border-2 border-stone-900 hover:shadow-black/50 hover:shadow-md hover:-translate-y-0.5 transition duration-200 ">
    <button type="submit">
        <img src={image_source} alt="contact_image" class="w-24 h-24 object-contain">
    </button>
</form>