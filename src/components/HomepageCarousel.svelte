<script lang="ts">
    import * as Carousel from "@/components/ui/carousel/index.ts";
</script>

<Carousel.Root class="w-20 h-20 left-32">
    <Carousel.Content class="bg-red-400">
        <Carousel.Item>A</Carousel.Item>
        <Carousel.Item>B</Carousel.Item>
        <Carousel.Item>C</Carousel.Item>
    </Carousel.Content>
    <Carousel.Previous class="top-auto bottom-1 -left-0"/>
    <Carousel.Next class="top-auto bottom-1"/>
</Carousel.Root>
