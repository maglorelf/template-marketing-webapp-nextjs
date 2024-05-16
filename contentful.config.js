const url = process.env.NEXT_PUBLIC_BASE_URL;

module.exports = {
  contentful: {
    space_id: process.env.CONTENTFUL_SPACE_ID || '',
    cda_token: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    cpa_token: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
  },
  meta: {
    title: 'Academia en linea de ajedrez | Escaques',
    description: `Aprende y mejora en ajedrez. Apuntate online en  ${url
      .replace('https://', '')
      .replace('http://', '')}`,
    url,
    image:
      'https://www.canva.com/design/DAGFZEPQ-jM/ofXy6dIz5W6FCLqS5X6f1w/view?utm_content=DAGFZEPQ-jM&utm_campaign=designshare&utm_medium=link&utm_source=editor',
  },
  icon: {
    light:
      'https://www.canva.com/design/DAGFZEPQ-jM/ofXy6dIz5W6FCLqS5X6f1w/view?utm_content=DAGFZEPQ-jM&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    dark: 'https://www.canva.com/design/DAGFZEPQ-jM/ofXy6dIz5W6FCLqS5X6f1w/view?utm_content=DAGFZEPQ-jM&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    width: 66,
    height: 64,
  },
};
