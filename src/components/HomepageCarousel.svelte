<script lang="ts">
    import * as Carousel from "@/components/ui/carousel/index.ts";
    import { type CarouselAPI } from "@/components/ui/carousel/context.js";
    import { Button } from "@/components/ui/button";
    import HomepageCarouselItem from "@/components/HomepageCarouselItem.svelte";
    interface Props {
        slides: {
            title: string;
            image: {
                path:string;
                alt?:string;
            };
            text: string;
            actionLabel: string;
            actionTo: string;
        }[];
    }
    let {slides}: Props = $props();
</script>

<Carousel.Root opts={{
    loop: true,
  }} class="w-full h-fit">
    <Carousel.Content class="bg-red-400">
        {#each slides as slide}
            <HomepageCarouselItem src={slide.image.path} alt={slide.image.alt} />
        {/each}
    </Carousel.Content>
    <div
        class="w-4/5 sm:w-72 bg-background absolute bottom-12 left-8 px-4 py-2"
    >
        <h1 class="font-display text-lg">Title</h1>
        <div class="text-xs">body text</div>
        <Button class="h-6">Action</Button>
    </div>
    <Carousel.Previous class="top-auto -bottom-2 scale-75 left-10" />
    <Carousel.Next
        class="top-auto -bottom-2 scale-75 right-auto left-[4.5rem]"
    />
</Carousel.Root>
