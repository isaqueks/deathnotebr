import { useEffect } from "react";

/*
    var disqus_config = function () {
        this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
*/

export default function CommentSection(props) {
    
    useEffect(() => {
        if (!window['disq']) {
            window['disq'] = true;
            (function () { // DON'T EDIT BELOW THIS LINE
                var d = document, s = d.createElement('script');
                s.src = 'https://deathnotebr.disqus.com/embed.js';
                s.async = true;
                s.setAttribute('data-timestamp', String(new Date()));
                (d.head || d.body).appendChild(s);
            })();
        }
    })

    return (
        <>
            <div id="disqus_thread"></div>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        </>
    );
}