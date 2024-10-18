/* For each post in summary */
import Link from "next/link";
import { PrismicNextImage } from '@prismicio/next';
import * as prismic from '@prismicio/client';

const Post = ({image, title, content, author, date, link, type}) => {

    const contentArray = prismic.asText(content).split(/\s+/)
    const summary = contentArray.slice(0,25)
    let txt
    let bgCol
    if(type=='article'){
        txt = 'A' 
        bgCol = 'bg-main3'
    }
    else if(type=='news'){
      txt = 'N' 
      bgCol = 'bg-main-500'

    }
    else{
      txt = 'E' 
      bgCol = 'bg-main2'
    }
  return (
    <div className="post-card w-[320px] flex-shrink-0 rounded-md shadow-md shadow-black mx-auto sm:mx-0 overflow-hidden flex flex-col">
      <div className="h-[200px] overflow-hidden bg-main-500 flex-shrink-0 flex-grow-0">
      	<div className={`${bgCol} w-[30px] h-[30px] p-1 text-white rounded-md text-center font-bold absolute`}>
            {txt}
        </div>
        <PrismicNextImage field={image} className="post-card-image rounded-md" />
      </div>
      <div className="post-card-body p-2 flex-grow">
        <h1 className="font-bold text-center text-main-500 p-2">{title}</h1>
        <p className="font-light text-slate-600">{summary.join(" ") + "..."}</p>
        <Link type="button" className="flex text-black gap-[2px] services-link my-2 ml-auto h-fit p-2 text-xs w-fit bg-slate-300 rounded-lg hover:shadow-md shadow-black active:scale-95 mt-auto" href={link}>read more</Link>
    </div>
      <div className="post-card-details bg-main-500 p-2 text-white">
        <span className="block">by {author}</span>
	      <time className="text-xs"
  	      datetime={
            prismic
            .asDate(date)
            .toISOString()
          }
	      >
  	     {prismic.asDate(date).toLocaleString()}
	      </time>
      </div>
    </div>
  )
};

export default Post
