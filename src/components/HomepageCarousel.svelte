<script lang="ts">
    import * as Carousel from "@/components/ui/carousel/index.ts";
    import HomepageCarouselItem from "@/components/HomepageCarouselItem.svelte";
</script>

<Carousel.Root class="w-full h-fit">
    <Carousel.Content class="bg-red-400">
        <HomepageCarouselItem src="/images/IMG_7311.JPG" />
        <Carousel.Item>B</Carousel.Item>
        <Carousel.Item>C</Carousel.Item>
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
