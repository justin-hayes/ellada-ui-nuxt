<template>
    <VParallax height="70vh" src="hero.jpg">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h1 font-weight-thin mb-4">
                Ελλάδα
            </h1>
            <h4 class="subheading">
                Explore the world of ancient Greece
            </h4>
        </div>
    </VParallax>
    <VContainer class="main">
        <VRow>
        <VCol cols="12" sm="7">
        <section>
        <h2>Description</h2>
        <p>Ελλάδα is an example of a simple full-stack <a href="https://www.typescriptlang.org/">TypeScript</a> application. The main feature is a <NuxtLink to="/artifact">browser</NuxtLink> for the subset
            of the Metropolitan Museum of Art's <a href="https://github.com/metmuseum/openaccess">collections</a> related to ancient Greece. The browser allows the user to page through the collection
            and filter the results by a combination of historical period, classification of the material, and thematic tag.
        </p>
        <h3>Frontend</h3>
        <p>The frontend application uses the following technologies:</p>
        <ul>
            <li><a href="https://vuejs.org/">Vue 3</a> + <a href="https://nuxt.com/">Nuxt 3</a></li>
            <li><a href="https://vuetifyjs.com/en/">Vuetify 3</a></li>
            <li><a href="https://vitejs.dev/">Vite</a></li>
        </ul>
        <p>Artifact images are sourced from the MET's <a href="https://metmuseum.github.io/">API</a> and served from a <a href="https://aws.amazon.com/cloudfront/">CloudFront</a> distribution from <a href="https://aws.amazon.com/pm/serv-s3">Amazon S3</a>.</p>
        <p>On commit, a <a href="https://github.com/features/actions">GitHub action</a> builds the frontend application in client-side rendering mode and deploys the static files
            to the repository's GitHub Pages site.
        </p>
        <h3>Backend</h3>
        <p>The backend application implements a RESTful API using the following technologies:</p>
        <ul>
            <li><a href="https://nestjs.com/">NestJS</a></li>
            <li><a href="https://www.openapis.org/">OpenAPI</a></li>
            <li><a href="https://jwt.io/">JWT</a></li>
            <li><a href="https://typeorm.io/">TypeORM</a></li>
            <li><a href="https://www.postgresql.org/">Postgres</a></li>
        </ul>
        <p>The application server and Postgres instance run on the <a href="https://fly.io/">Fly.io</a> platform.</p>
        </section>
        </VCol>
        <VCol cols="12" sm="5">
            <ArtifactCard/>
        </VCol>
        </VRow>
        <VRow>
            <p class="text-caption">Hero image by <a href="https://unsplash.com/photos/yqBvJJ8jGBQ">Constantinos Kollias</a> on <a href="https://unsplash.com">Unsplash</a></p>
        </VRow>
    </VContainer>
</template>

<style scoped>
@media (min-width: 1600px) {
    .main {
        max-width: 50vw;
    }
}
p {
    margin-bottom: 5px;
}
ul {
    margin-bottom: 10px;
}
li {
    margin-left: 20px;
}
</style>
