<script lang="ts">
    import * as Carousel from "@/components/ui/carousel/index.ts"
    let {src = "", alt=""} = $props();
</script>
<Carousel.Item>
    <img src={src} alt={alt}/>
</Carousel.Item>
