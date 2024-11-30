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
    <Carousel.Previous class="top-auto bottom-1 left-10"/>
    <Carousel.Next class="top-auto bottom-1 right-auto left-20"/>
</Carousel.Root>
