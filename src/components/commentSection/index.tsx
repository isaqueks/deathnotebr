import { useEffect } from "react";

interface Props {
    identifier?: string;
    title?: string;
}

export default function CommentSection(props: Props) {
    
    useEffect(() => {
        if (window['disq'] !== props.identifier) {
            window['disq'] = props.identifier;
            (function () { // DON'T EDIT BELOW THIS LINE
                var disqus_config = function () {
                    this.page.url = window.location.origin + window.location.pathname;  // Replace PAGE_URL with your page's canonical URL variable
                    this.page.identifier = props.identifier; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                    this.page.title = props.title;
                };
                const GLOB = window as any;
                GLOB.disqus_config = disqus_config;
                if (GLOB.DISQUS) {
                    GLOB.DISQUS.reset({
                        reload: true,
                        config: disqus_config
                    });
                }
                else {
                    var d = document, s = d.createElement('script');
                    s.src = 'https://deathnotebr.disqus.com/embed.js';
                    s.async = true;
                    s.setAttribute('data-timestamp', String(new Date()));
                    (d.head || d.body).appendChild(s);
                }
            })();
        }
    });


    return (
        <>
            <div id="disqus_thread" data-disq={props.title + props.identifier}></div>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        </>
    );
}