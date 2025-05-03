---
# You can also start simply with 'default'
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
image: '/images/intro.jpg'
# some information about your slides (markdown enabled)
title: Devtools Deep Dive
info: |
  ## An exploration of the tools available to web developers
  @brittanyellich

  Check it out at [brittanyellich/devtools-deep-dive](https://github.com/brittanyellich/devtools-deep-dive)
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
# seoMeta:
#  ogImage: https://cover.sli.dev
layout: intro-image
---

<div class="absolute bottom-10">
  <h1>Devtools Deep Dive</h1>
  <p>An exploration of the tools available to web developers</p>
  <span class="font-700">
    Brittany Ellich, May 3rd, 2025
  </span>
</div>

<div class="abs-br m-6 text-xl">
  <a href="https://github.com/brittanyellich/devtools-deep-dive" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
Hello, welcome, let's get this going
-->

---
transition: slide-left
layout: section
---

# Introduction


---
transition: slide-left
layout: image-right
image: '/images/legacycodecycle.jpeg'
---

# Hi, I'm Brittany

I'm a senior software engineer at GitHub.

- 📝 **Content** - I make a lot of content and have a newsletter, podcast, and a blog
- 🎨 **Illustrations** - I like to communicate in drawings. Some are okay!
- 🧑‍💻 **Life-long Learner** - I am big on learning about software engineering, and sharing that with others!
- 🛠 **Developer Experience** - I am passionate about working on developer experience!
- 🌲 **Pacific Northwest** - I live in the Pacific Northwest and have 3 tiny kids (4, 1, 1)

Basically everything I do is linked on my website, [brittanyellich.com](https://brittanyellich.com)

---
transition: slide-left
layout: image-right
image: '/images/time.jpg'
---

# Agenda

Today let's talk about Chrome's Devtools. Here's what we will go over:

- Why learn about Chrome Devtools
- Elements tab
- Console tab
- Sources tab
- Network tab
- Performance tab
- Memory tab

---
transition: slide-left
---

# Objectives

- Why it's important to learn about this
- Go through some of the main tabs and what they can do


---
transition: slide-left
layout: section
---

# Why learn about Chrome Devtools

---
transition: slide-left
layout: image
image: '/images/BrowserUsage.png'
---

<!--

# Because chrom(ium) is the most widely used browser backing

All Chromium-based browsers (Chrome, Edge, Brave, Opera, Vivaldi, Arc, etc.) include the same core DevTools features

Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser. DevTools lets you edit pages on-the-fly and diagnose problems quickly, which helps you build better websites, faster.

-->

---
transition: slide-left
layout: image-right
image: '/images/robot.jpg'
---

# Because AI is here

## Debugging becomes a more critical skill with AI

- AI-generated code and potential bugs
- Understanding and interpreting AI output
- As AI tasks start to take over writing code, being able to efficiently fix code is more important

<!--
It wouldn't be a talk in 2025 without mentioning AI at least once

Investing in these skills is important right now
-->

---
transition: slide-left
layout: image-right
image: '/images/ProfilePic.png'
---

# Because I wanted to

- I don't often learn more than I need to about a tool
- Signing up to do a talk is a great way to make yourself learn
- I learned about way more than DevTools on the journey

<!--
I don't often learn deeply about these tools. I typically pick one or two things that I absolutely need and then move on. I wanted to go deeper on this.

One of the great reasons to sign up and do a talk is to force yourself to learn

While learning about DevTools I also learned more deeply about things like how the browser functions, which is really valuable!
-->

---
transition: slide-left
layout: section
---

# Elements tab

---
transition: slide-left
layout: image-right
image: '/images/Elements.png'
---

# Overview

- For inspecting and manipulating the DOM
- Styles: Viewing and debugging CSS style
- Computed: Lists the properties declared in any stylesheet, both the element's own and inherited
- Layout: Show Grid and Flexbox properties
- Event Listeners: Shows you all event listeners and where they come from
- DOM Breakpoints: Lists all DOM breakpoints you've set from the Elements panel
- Properties: Lists the property of the selected element
- Accessibility: Lists elements with ARIA and their properties

<!--
Use the Elements panel to inspect and edit DOM elements.

The DOM is a living, interactive model of your webpage that exists in the browser's memory. It organizes all the elements (like paragraphs, images, buttons) into a tree structure where:

The entire document is the trunk
Sections and divs are large branches
Individual elements like paragraphs and images are smaller branches
Text and attributes are the leaves

The DevTools we discussed earlier let you see and manipulate this DOM tree directly. When you "Inspect Element" on a webpage, you're looking at the DOM, not the original HTML.
Think of it this way: HTML is the blueprint, but the DOM is the actual building that can be remodeled after construction.
-->

---
transition: slide-left
layout: image-right
image: '/images/devtools.png'
---

# Setting DOM breakpoints

<!--
Demo: Setting breakpoints when DOM elements change, are removed, or have attributes modified
Example: Debugging a dynamic UI where elements are disappearing unexpectedly
-->

---
transition: slide-left
layout: image-right
image: '/images/devtools.png'
---

# Accessibility inspection

<!--
Demo: Using the Accessibility pane to audit elements for accessibility compliance
Example: Finding and fixing contrast issues and missing alt attributes
-->

---
transition: slide-left
image: '/images/devtools.png'
---

# CSS grid and flexbox inspectors

<div class="fruit-box">
  <div class="apple">Apple</div>
  <div class="kiwi">Kiwi</div>
  <div class="mango">Mango</div>
  <div class="orange">Orange</div>
</div>

<style>
.fruit-box {
  display: grid;
  grid-gap: 10px;
  grid-template-columns:
    [left] 1fr
    [middle1] 1fr
    [middle2] 1fr
    [right];
}

.orange {
  background: orange;
  grid-column: left / right;
}

.apple {
  background: red;
}

.kiwi {
  background: green;
}

.mango {
  background: yellow;
}
</style>

```css
.fruit-box {
  display: grid;
  grid-gap: 10px;
  grid-template-columns:
    [left] 1fr
    [middle1] 1fr
    [middle2] 1fr
    [right];
}

.orange {
  background: orange;
  grid-column: left / right;
}
...
```

<!--
Demo: Visualizing grid lines and flex containers
Example: Troubleshooting complex responsive layouts
-->

---
transition: slide-left
layout: image-right
image: '/images/gem.jpg'
---

# Hidden Gems

- Right-click: But wait, there's more!
- Ctrl+F to search DOM by CSS selectors
- Computed tab to see effective CSS from all sources

<!--
- Right-click > Force state (hover, active, focus)
- Ctrl+F to search DOM by CSS selectors
- Computed tab to see effective CSS from all sources
-->

---
transition: slide-left
layout: section
---

# Console tab

---
transition: slide-left
layout: image-right
image: '/images/Console.png'
---

# Overview

Two main use cases:

- Viewing javascript
- Running javascript

<!--
Notes!
-->

---
transition: slide-left
---

# The console, but better!

```ts {monaco-run}
console.time("running this function!")
console.assert(document.querySelector('h2'), 'h2 not found!');
const artists = [
{
    first: 'René',
    last: 'Magritte'
},
{
    first: 'Chaim',
    last: 'Soutine'
},
{
    first: 'Henri',
    last: 'Matisse'
}
];
console.group();
console.table(artists);
console.groupEnd();
console.timeEnd("running this function!")
```

<!--
Demo: `console.time()`, `console.assert()`, `console.group()`, and `console.table()`
Example: Formatting complex data for easier debugging
-->

---
transition: slide-left
layout: image-right
image: '/images/liveexpression.png'
---

# Live expressions

- Use a live expression when you end up typing the same thing in the console over and over
- It will track the current value of that thing for you!

<!--
Demo: Pinning expressions to continuously monitor values
Example: Watching window dimensions during responsive testing
-->


---
transition: slide-left
layout: image-right
image: '/images/gem.jpg'
---

# Hidden Gems

- Console filters (errors, warnings, info)
- Multi-line editing with Shift+Enter
- Preserve log option when navigating between pages
- Copy the console to paste into Copilot

<!--
- Console filters (errors, warnings, info)
- Multi-line editing with Shift+Enter
- Preserve log option when navigating between pages
- Copy the console to paste into Copilot
-->

---
transition: slide-left
layout: section
---

# Sources tab

---
transition: slide-left
layout: image-right
image: '/images/Sources.png'
---

# Overview

The sources tab is used to view and edit your website's resources, such as stylesheets, Javascript files, and images.

- Page: Shows the code for the current page
- Workspace: Allows you to sync edits directly to the source as you develop
- Overrides: Mock remote resources
- Content scripts: See which additional content is being injected (like from extensions)
- Snippets: Save javascript that you run a lot!

---
transition: slide-left
---

# Workspaces

<!--
Demo: Set up a workspace to edit this slide!
-->

---
transition: slide-left
layout: image-right
image: '/images/overrides.png'
---

# Overrides

- Create a folder
- Enable local overrides
- Right click > Override content
- Save the file you want to override!

<!--
Demo: Setting up a local override folder and showing how changes persist across page reloads
Example: Modifying production CSS/JS without changing the actual files
Advanced usage: Overriding network responses to test error scenarios
Practical workflow: Using overrides for rapid prototyping on live sites
-->

---
transition: slide-left
layout: image-right
image: '/images/snippets.png'
---

# Snippets

```js
console.log('Hello, Snippets!');
document.body.innerHTML = '';
const p = document.createElement('p');
p.textContent = 'Hello, Snippets!';
document.body.appendChild(p);
```

<!--
Demo: Show off a JavaScript snippet
Example: Hello, snippets!
-->

---
transition: slide-left
layout: image-right
image: '/images/gem.jpg'
---

# Hidden Gems

- Snippets for reusable code blocks - [127 Helpful JavaScript Snippets](https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5)
- Pretty Print for minified code
- Source maps for debugging compiled code

<!--
- Snippets for reusable code blocks
- Pretty Print for minified code
- Source maps for debugging compiled code

Halfway checkpoint! Check for time!!
-->

---
transition: slide-left
layout: section
---

# Network tab

---
transition: slide-left
layout: image-right
image: '/images/Network.png'
---

# Overview

Used to analyze page loading and network resources.

- Inspect each request including: headers, payload, preview,
response, initiator, timing, cookies
- Sort, filter, and search through requests
- Emulate a first time user by disabling the browser cache
- Throttle requests to simulate different network environments

---
transition: slide-left
---

# Request blocking and overriding

- Block request URL
- Block request Domain
- Override content
- Override headers

<!--
Demo: Blocking specific resources to test graceful degradation
Example: Testing how a site works without analytics or third-party scripts
Advanced usage: Connecting network overrides with local file overrides
-->

---
transition: slide-left
---

# Request initiator chains

- Identify what caused a request
- Track down unnecessary API calls

<!--
Demo: Identifying what caused a particular request
Example: Tracking down unnecessary API calls
-->

---
transition: slide-left
---

# Advanced filtering

- Filter by resource type
- Search for a specific request
- Find a request by regex (ex. `/.*\min.[c]s+$/`)
- Filter out requests (ex. `-.json`)
- Use property filters (ex. `domain:localhost`)

<!--
Demo: 
- Filter by resource type
- Search for a specific request
- Find a request by regex (ex. `/.*\min.[c]s+$/`)
- Filter out requests (ex. `-.json`)
- Use property filters (ex. `domain:localhost`)
-->

---
transition: slide-left
layout: image-right
image: '/images/gem.jpg'
---

# Hidden Gems

- Copy as fetch/cURL for API testing
- Throttling for testing on different connection speeds
- Preserving log on navigation to track full session

<!--
- Copy as fetch/cURL for API testing
- Throttling for testing on different connection speeds
- Preserving log on navigation to track full session
-->


---
transition: slide-left
layout: section
---

# Performance tab

---
transition: slide-left
layout: image-right
image: '/images/Performance.png'
---

# Overview

The performance tab is one of the best parts of DevTools!

It allows:

- Recording performance profiles
- Analyzing profiles for potential bottlenecks
- Finding ways to optimize 📉📉📉

---
transition: slide-left
---

# Web Vitals
## What Are Core Web Vitals?

- Google's metrics for measuring real-world user experience
Focus on three key aspects: loading, interactivity, and visual stability
- Used as ranking signals in Google Search since 2021
- Based on field data from actual users via Chrome User Experience Report (CrUX)
- Measured at the 75th percentile threshold of page loads


<!--
Web Vitals emerged from Google's mission to provide objective, quantifiable metrics for web performance that directly correlate with user experience. In a landscape where websites were increasingly complex but tools to measure their impact on users were lacking, Google developed Core Web Vitals to standardize how we evaluate web pages.
-->

---
transition: slide-left
---

# Web Vitals

## Current Core Web Vitals (2025)

### LCP (Largest Contentful Paint): Measures loading performance

- Good: ≤ 2.5 seconds
- Needs Improvement: 2.5-4.0 seconds
- Poor: > 4.0 seconds


### INP (Interaction to Next Paint): Measures responsiveness

- Good: ≤ 200 milliseconds
- Needs Improvement: 200-500 milliseconds
- Poor: > 500 milliseconds
- Replaced FID (First Input Delay) in March 2024


### CLS (Cumulative Layout Shift): Measures visual stability

- Good: ≤ 0.1
- Needs Improvement: 0.1-0.25
- Poor: > 0.25

<!--
Largest Contentful Paint (LCP) measures how quickly the main content of a page becomes visible to users. Unlike earlier metrics that measured when the first content appeared, LCP focuses on when the most meaningful content (usually the largest image or text block) appears. This better represents when users feel a page is "loaded enough" to be useful.
LCP is influenced by server response time, render-blocking resources, resource load time, and client-side rendering. Optimizing LCP typically involves server improvements, reducing JavaScript and CSS blocking time, optimizing images, and implementing content delivery networks.

Interaction to Next Paint (INP) is the newest Core Web Vital, replacing First Input Delay (FID) in March 2024. While FID only measured the delay before processing the first interaction, INP captures the responsiveness of all interactions throughout a user's session. This provides a much more comprehensive picture of a site's interactivity.
INP is affected by long-running JavaScript tasks, excessive DOM size, and complex event handlers. Improvement strategies include breaking up long tasks, optimizing JavaScript execution, reducing main thread work, and using web workers for background processing.

Cumulative Layout Shift (CLS) measures visual stability by quantifying how much page content unexpectedly moves during the loading process. These shifts create a frustrating experience where users may try to click on elements that suddenly move.
CLS problems typically stem from images without dimensions, dynamically injected content, and web fonts causing FOUT (Flash of Unstyled Text). Fixing CLS often involves setting explicit width and height on media elements, reserving space for dynamic content, and optimizing font loading strategies.

Core Web Vitals aren't just technical metrics—they directly impact business outcomes. Real-world case studies consistently show impressive results from Web Vitals improvements:

E-commerce sites have seen conversion rate increases of 15-35% after optimizing Core Web Vitals
News and media sites report 10-30% longer session durations and higher page views per session
Improved Core Web Vitals correlate with lower bounce rates across all industries

For example, Yahoo! JAPAN saw a 15% increase in page views per session and 13% longer session duration after fixing CLS issues on their site. These dramatic improvements demonstrate why Core Web Vitals should be a priority for businesses of all sizes, not just for better search rankings but for tangible business results.
-->

---
transition: slide-left
---

# Recording performance

Check out [this website](https://googlechrome.github.io/devtools-samples/jank/) as an example!

- Measure the core web vitals, hover to see more information
- Throttle the CPU
- Record a performance profile
- Use the flamegraph to identify long-running commands, find their source
- Check out the memory usage

<!--
Check out [this website](https://googlechrome.github.io/devtools-samples/jank/) as an example!

- Measure the core web vitals, hover to see more information
- Throttle the CPU
- Record a performance profile
-->

---
transition: slide-left
layout: image-right
image: '/images/gem.jpg'
---

# Hidden Gems

- Screenshots during recording to correlate visual changes
- Memory metrics during performance recording
- Lighthouse for optimizing web speed, accessibility, etc

Want to learn more about performance? [Check out the RAIL performance model](https://web.dev/rail)

<!--
- Screenshots during recording to correlate visual changes
- Memory metrics during performance recording
- Lighthouse for optimizing web speed, accessibility, etc

RAIL performance model - response, animation, idle, and load, and the different user expectations of these different interactions
-->

---
transition: slide-left
layout: section
---

# Memory tab

---
transition: slide-left
layout: image-right
image: '/images/Memory.png'
---

# Overview

Memory profiler for JavaScript which captures four profile types to show you different views of memory usage.

- Heap snapshot: Shows how memory is distributed between JavaScript and the DOM nodes
- Allocation instrumentation on timeline: Shows memory allocated to JavaScript over time - best for identifying memory leaks!
- Allocation sampling: Shows memory allocated to JavaScript over time, but samples instead of constantly records - best for long-running operations
- Detached elements: Shows objects that are retained by a JavaScript reference.

<!--
You may have a memory leak if your application slows down, particularly if it slows down over time.
-->

---
transition: slide-left
layout: 3-images
imageLeft: '/images/taskmanager1.png'
imageTopRight: '/images/taskmanager2.png'
imageBottomRight: '/images/taskmanager3.png'
---

<!--
The live number is the number in parentheses. This represents the memory of reachable objects your page is using. If it's going up, either new objects are being created or the existing objects are growing. This is a great quick and high-level way to identify memory leaks.
-->

---
transition: slide-left
---

# Heap snapshots

Record a heap snapshot of this page.

- Distance: the distance to the root using the shortest simple path of nodes.
- Shallow size: JavaScript objects have some memory reserved for their description and for storing immediate values. Usually, only arrays and strings can have a significant shallow size.
- Retained size: Retained size is the size of memory that you can free by deleting an object and making its dependents no longer reachable.

<!--
Demo: Taking and comparing heap snapshots
Example: Finding memory leaks in SPAs

- Go over summary
- Go over statistics as a high-level overview of javascript types
- Filter by class (ex. string)
- Filter by common memory issues (ex. duplicated strings)
-->

---
transition: slide-left
---

# Allocation timeline

Use the Allocation timeline tool to find objects that aren't being properly garbage collected, and continue to retain memory.

- Record an allocation timeline profile.
- Check out the allocation graph

<!--
Demo: Recording memory allocations over time
Example: Identifying patterns of excessive object creation

- Blue bars indicate objects that are still live at the end of the timeline, Gray bars indicate objects that were allocated during the timeline, but have since been garbage collected
-->

---
transition: slide-left
layout: image-right
image: '/images/gem.jpg'
---

# Hidden Gems

- Using the Detached Elements feature to find DOM leaks
- Chrome Task Manager for per-tab memory usage

<!--
- Using the Detached Elements feature to find DOM leaks
  - DOM leak: DOM elements are removed from the document but still retained in memory because JavaScript code maintains references to them
- Chrome Task Manager for per-tab memory usage
-->


---
transition: slide-left
layout: section
---

# Recap

- Why it's important to learn about this
- Go through some of the main tabs and what they can do

<!--
Did someone learn something today?
Was this helpful? Too much? Too little?
-->

---
layout: center
class: text-center
---

# Learn More

[Sli.dev is the slides application](https://sli.dev) · [GitHub reference to this talk](https://github.com/brittanyellich/devtools-deep-dive) · [My website, let's be internet friends!](https://brittanyellich.com)

