export default function pageTemplate({
  name,
  flags: { dinamic, gsp, gsph, gssp, props },
}: Props) {
  const pageId = name.replace(/[\.\[\]]/g, '')
  const pageName = dinamic ? `${pageId}Page` : `${name}Page`
  const types = `${gsp ? ', GetStaticProps' : ''}${
    gsph ? ', GetStaticPaths' : ''
  }${gssp ? ', GetServerSideProps' : ''}`

  return (
    `import type { NextPage ${types || ''}} from 'next'\n\n` +
    `${props ? 'interface Props {}\n\n' : ''}` +
    `const ${pageName}: NextPage${props ? '<Props>' : ''} = () => {\n` +
    `  return (\n` +
    `    <h1>${pageName} Page</h1>\n` +
    `  )\n` +
    `}\n\n` +
    `export default ${pageName}\n\n` +
    `${gsp ? gspFn : ''}${gsph ? gsphFn : ''}${gssp ? gsspFn : ''}`
  )
}
interface Props {
  name: string
  flags: {
    dinamic?: boolean // [dinamic]
    gsp?: boolean // getStaticProps
    gsph?: boolean // getStaticPaths
    gssp?: boolean // getServerSideProps
    props?: boolean // withProps
  }
}
const gspFn =
  `export const getStaticProps: GetStaticProps = async ({ params }) => {\n` +
  `  return { props: { } }\n` +
  `}\n\n`
const gsphFn =
  `export const getStaticPaths: GetStaticPaths = async () => {\n` +
  `  return { paths: [], fallback: false }\n` +
  `}\n\n`
const gsspFn =
  `export const getServerSideProps: GetServerSideProps = async ({  }) => {\n` +
  `  return { props: {  } }\n` +
  `}\n\n`
