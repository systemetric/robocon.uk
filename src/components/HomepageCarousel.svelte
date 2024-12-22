<script lang="ts">
    import * as Carousel from "@/components/ui/carousel/index.ts";
    import { type CarouselAPI } from "@/components/ui/carousel/context.js";
    import { Button } from "@/components/ui/button";
    import HomepageCarouselItem from "@/components/HomepageCarouselItem.svelte";
    interface Props {
        slides: {
            image: {
                path: string;
                alt?: string;
            };
            title: string;
            text: string;
            actionLabel: string;
            actionTo: string;
        }[];
    }
    let { slides }: Props = $props();

    let currentSlide: number = $state(0); // TODO: make check for actual value here. Could break if not starting at 0

    // Theres probably a less hacky way but my ts only started working after I had written all this so hey.
    // Type safety by "Trust me bro"
    //@ts-ignore
    let api: CarouselAPI = $state();

    $effect(() => {
        if (api) {
            api.on("scroll", (el) => { // Yes this gets spammed as the slide slides, but `settle` from the embla docs doesnt seem to be working.
                currentSlide = el.slidesInView()[0] ?? 0 // default to 0 if no slides in view (something has gone horrible wrong)
                // console.log(currentSlide)
            });
        }
    });
</script>
<Carousel.Root
    opts={{
        loop: true,
    }}
    class="w-full h-fit"
    bind:api
>
    <Carousel.Content class="bg-red-400">
        {#each slides as slide}
            <HomepageCarouselItem
                src={slide.image.path}
                alt={slide.image.alt ?? ""}
            />
        {/each}
    </Carousel.Content>
    <div
        class="m-12 w-auto sm:w-72 bg-background absolute bottom-0 sm:bottom-4 px-8 py-6"
    >
        <h1 class="font-display text-xl">{slides[currentSlide]?.title ?? "Error"}</h1>
        <div class="text-base font-sans">{slides[currentSlide]?.text ?? "It looks like something went wrong. Try refreshing"}</div>
        <Button class="h-8 mt-2 text-lg p-5 font-mono font-semibold" href={slides[currentSlide]?.actionTo ?? "/"}>{slides[currentSlide]?.actionLabel ?? ":("}</Button>
    </div>
    <Carousel.Previous class="top-auto -bottom-0 left-14 hidden sm:flex" />
    <Carousel.Next
        class="top-auto -bottom-0 right-auto left-[6.6rem] hidden sm:flex"
    />
</Carousel.Root>
