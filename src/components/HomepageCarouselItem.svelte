<script lang="ts">
    import * as Carousel from "@/components/ui/carousel";
    interface Props {
        src: string;
        alt?: string;
    }
    let { src, alt }: Props = $props();
    if (alt === undefined) {
        console.warn("No image alt text supplied!");
    }
</script>

<Carousel.Item>
    <div class="w-full h-[80vh] overflow-hidden justify-center">
        <img {src} {alt} class="w-full h-full object-cover" />
    </div>
</Carousel.Item>
