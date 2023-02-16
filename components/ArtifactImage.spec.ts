import { render } from '@testing-library/vue';
import {describe, it, expect} from 'vitest'
import { createVuetify } from 'vuetify/lib/framework.mjs';
import ArtifactImage from './ArtifactImage.vue';
describe('ArtifactGallery', () => {
    const vuetify = createVuetify();

    it('shows an image', () => {
        const { queryByRole } = render(ArtifactImage, {
            props: {
                imageId: '123'
            },
            global: {
                plugins: [vuetify]
            }
        });

       const artifactImage = queryByRole('img');
       expect(artifactImage?.getAttribute('src')).to.contain('123');
    });
})