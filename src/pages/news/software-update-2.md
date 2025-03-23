---
title: 'Software Update #2'
lastUpdated: '2019-02-27 19:40:02'
description: Support for USB things!
layout: ../../layouts/NewsLayout.astro
image: 
    url: /images/usb-logo_generic.svg.png
    alt: USB Logo
---
We have written a new patch, which includes support for  USB cameras and other USB devices.

To install the patch first ensure that you are running [patch 1](/blog/software-update-1.html). Then download the patch [here](https://hr-robocon.org/patch-2019-02-27.zip) and learn how to apply it [here](/docs/patching-the-robot.html).

The patch adds support for:

* Using USB camera's so that your brain box doesn't need to be where your camera is. See the [vision documentation](/docs/vision.html#using-usb-camera-s) for how to use it.
* Support for USB devices using the [python serial library](https://pyserial.readthedocs.io/en/latest/shortintro.html)

![USB](/images/usb-logo_generic.svg.png)
