import { createClient } from '@prismicio'
import { PrismicNextLink } from '@prismicio/next'


export const metadata = {
    title:'Toolkit'
}
async function Toolkit() {
  
  client = createClient()
  toolkits = client.getAllByType('toolkit')

  return (
    <main>
      <h1 className="text-5xl font-bold my-10 text-center text-main-400">Toolkit</h1>
      
      toolkits.map(el =>
	      <article>
	      	<h1>el.data.title</h1>
	        <PrismicNextLink field={el.data.pdf_link}>
  			Click here to view/download the pdf
		</PrismicNextLink>
	        <p>{el.data.description}<p/>
	        <aside> 
	          Published by {el.data.author} on {el.data.publishing_time}
	        </aside>
	      </article>
    </main>
  )
}

export default Toolkit
