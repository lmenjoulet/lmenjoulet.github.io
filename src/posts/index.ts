export async function getAllPosts(){
    const files = await import.meta.glob("./**/*.md");
    const posts = (
        await Promise.all(
            Object.values(files).map((importFile: any, index) => 
                importFile().then((res) => {
                    const {title, description, authors, publishDate, socialImage, lang} = res.frontmatter;
                    const href = Object.keys(files)
                        [index].replace(/^\./,"/blog")
                            .replace(/\.md$/, "");
                    
                    return  {
                        title,
                        description,
                        authors,
                        publishDate: new Date(publishDate),
                        socialImage,
                        href,
                        lang,
                        Content: res.default
                    };
                })
            )
        )
    ).sort((a,b) => {
        return (a.publishDate < b.publishDate ? 1 : -1);
    });
    return posts;
}