<script lang="ts">

    import * as locales from '../data/settings/locales.json';
    import {getLanguageFromURL} from '../utils';

    export let path: string;

    let lang : string = getLanguageFromURL(path);

    const onLanguageSelected = () => {
        window.location.href =  '/' + [lang, ...path.split('/').slice(2)].join('/');
    }

</script>

<div>
    <select name="languages" id="lang" 
        bind:value={lang} 
        on:change={onLanguageSelected}
        class="p-2 text-amber-100 bg-stone-900 rounded border-2 border-stone-800 outline-none shadow-md shadow-black/50"    
    >
        {#each locales.locales as locale}
            <option value={locale.locale} class="hover:bg-none">
                {locale.language}
            </option>
        {/each}
    </select>
</div>

