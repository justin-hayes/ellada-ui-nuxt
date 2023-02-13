<template>
    <v-parallax height="700px" src="hero.jpg">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h1 font-weight-thin mb-4">
                Ελλάδα
            </h1>
            <h4 class="subheading">
                Explore the world of ancient Greece
            </h4>
        </div>
    </v-parallax>
    <v-container>
        <VRow>
        <VCol cols="7">
        <section>
        <h2>Description</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu lorem, luctus quis efficitur at, varius sit amet massa. Sed ut ante id lorem feugiat sodales sit amet ac nulla. Vivamus non metus quis sapien sagittis viverra ut et tortor. Mauris in nisl nec turpis eleifend vestibulum. Sed tristique gravida mi ut rhoncus. Etiam bibendum non ex a malesuada. Duis tempor luctus dictum. Pellentesque lobortis eget leo non mattis. Sed non mattis erat. Duis pretium tellus turpis, at varius velit vestibulum et. Nam tempus turpis at magna euismod volutpat.</p>
        </section>
        <section>
        <h2>Section 2</h2>
        <p>Sed lobortis, nulla a tincidunt pretium, felis augue eleifend nibh, non tincidunt mauris eros eget risus. Vivamus molestie rhoncus fermentum. Aliquam laoreet nisl dolor, nec venenatis est vehicula sed. Nullam bibendum, elit non elementum porttitor, dolor enim scelerisque est, eget sollicitudin tellus nibh id neque. Proin lacus ipsum, venenatis tempus quam vel, semper ullamcorper sapien. Etiam consequat sapien id vestibulum condimentum. Sed tempor felis sapien, nec dictum mi tempus id. Pellentesque ornare venenatis turpis eu gravida.</p>
        </section>
        </VCol>
        <VCol cols="5">
            <ArtifactCard/>
        </VCol>
        </VRow>
        <VRow>
            <p class="text-caption">Hero image by <a href="https://unsplash.com/photos/yqBvJJ8jGBQ">Constantinos Kollias</a> on <a href="https://unsplash.com">Unsplash</a></p>
        </VRow>
    </v-container>
</template>