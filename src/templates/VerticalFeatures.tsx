import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title=""
    description="Receiving care from a compassionate support worker can profoundly enhance one's well-being and quality of life. Their empathetic approach fosters a sense of trust and security, creating a safe space for individuals to express their needs and concerns without fear of judgment. "
  >
    <VerticalFeatureRow
      title="Compassionate support"
      description="Compassionate support workers not only attend to the physical needs of their clients but also offer emotional support, actively listening and providing encouragement during challenging times. Their genuine compassion cultivates a positive atmosphere that promotes healing and resilience."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Dedication and kindness"
      description="Through their dedication and kindness, they empower individuals to navigate difficulties with greater confidence and optimism, fostering a sense of connection and belonging within their community."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Empathy"
      description="The empathy of a support worker is a cornerstone of their role, serving as a guiding light in their interactions with those they assist. With an empathetic approach, support workers step into the shoes of those they care for, striving to understand their experiences, emotions, and needs on a profound level. This deep understanding allows them to offer not just practical assistance, but genuine emotional support and validation."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
