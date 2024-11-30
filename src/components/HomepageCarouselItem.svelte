<script lang="ts">
    import * as Carousel from "@/components/ui/carousel";
    import { Button } from "@/components/ui/button";
    import type { Snippet } from "svelte";
    interface Props {
        src: string;
        alt?: string;
        title: string;
        action?: string;
        children?: Snippet;
    }
    let { src, alt, title, action, children }: Props = $props();
    if (alt === undefined) {
        console.warn("No image alt text supplied!");
    }
</script>

<Carousel.Item>
    <div class="w-full h-[80vh] overflow-hidden justify-center">
        <img {src} {alt} class="w-full h-full object-cover" />
    </div>
    <div class="sm:w-4/5 w-96">
        <h1>{title}</h1>
        {@render children?.()}
        <Button>
            {action}
        </Button>
    </div>
</Carousel.Item>
