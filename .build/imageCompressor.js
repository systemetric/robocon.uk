// TODO: Compress photos in all sub-directories automatically.

import * as fs from "fs";
import * as path from "path";
import sharp from "sharp";
import sync from "mkdirp";
const {sync: mkdirp} = sync;

import Gauge from "gauge";
const gauge = new Gauge();

function promisesAllSerial(promises) {
  return promises.reduce((promiseChain, currentTask) => {
    return promiseChain.then(chainResults =>
      currentTask.then(currentResult => [...chainResults, currentResult])
    );
  }, Promise.resolve([]));
}

(async () => {
  const imagesPath = path.resolve(
    import.meta.dirname,
    "..",
    "public",
    "images",
    "images_for_compression"
  );
  const compressedImagesPath = path.resolve(
    import.meta.dirname,
    "..",
    "public",
    "images",
    "compressed_images"
  );
  mkdirp(compressedImagesPath);

  const images = fs.readdirSync(imagesPath);
  const imagesLength = images.length;

  await promisesAllSerial(
    images
      .filter(image => image.endsWith(".jpg") || image.endsWith(".jpeg") || image.endsWith(".JPG") || image.endsWith(".JPEG"))
      .map(
        (image, i) =>
          new Promise(async resolve => {
            const imagePath = path.join(imagesPath, image);
            const compressedImagePath = path.join(compressedImagesPath, image);

            // > 1.5MB
            if (fs.statSync(imagePath).size > 1500000) {
              await sharp(imagePath)
                .jpeg({
                  quality: 60
                })
                .toFile(compressedImagePath);
            }

            // noinspection JSUnresolvedFunction
            gauge.show(image, i / imagesLength);

            resolve();
          })
      )
  );

  // noinspection JSUnresolvedFunction
  gauge.show("Done!", 1);
})();
