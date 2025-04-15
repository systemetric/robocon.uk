# The RoboCon Website

This repo contains the public RoboCon website - robocon.uk

It has been built with a mixture of `Astro` and `Svelte` components, with `Tailwind` CSS and `Bits UI`.

Images are commited straight to this repo, so please make sure you **compress all images**, see the guide below.

## Setting up your environment

1. Make sure you have the latest version of `Node` installed (tip: use `nvm`).
2. Run `npm install` to install required dependencies.
3. Run `npm run dev` to run the live preview.

It should be that simple :)

## How to write a blog post

1. Head over to `src/pages/news`.
2. Create a new markdown file, try and keep the same formatting as before.
3. Copy the top of another markdown file (the bit before the `---`), this will apply all the styling. Just change the bits you need to!
4. Write your markdown.
5. Check the news section. 

> If one of your headings or styles is not being formatted correctly, change the Tailwind CSS values in the `tailwind.config.mjs` file under the `Prose:` section. Some Markdown styles have not yet been written!

If you need to add images to your post (**AFTER YOU HAVE COMPRESSED THEM**), add them in `public/images/<Relevant Folder>`. Everything in the `public` directory is available straight away as a static endpoint.

## Compressing Images

To prevent issues with commiting lots of large files (and to speed up website load times), you must compress all images or large files so they are roughly less than 2MB each. Luckily, there's a built-in tool you can use for this.

1. Place the uncompressed images into `public/images/images_for_compression` folder. You might need to make the `images_for_compression` folder if it doesn't already exist. Do not create any subfolders, as these images will be ignored (yes, known bug).
2. Run `npm run images:compress`.
3. Your compressed images will now be in `public/images/compressed_images`. Copy these wherever they should be.

Please remember to remove any images in `images_for_compression` or `compressed_images` to prevent them being accidentally added to the repo.

## Known Bugs

- Unable to compress subfolder images
- Homepage carousel text description is a bit too narrow.
- Navbar is a bit boring on mobile.