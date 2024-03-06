interface HeadingType {
  title: string,
  description?:string
}
function HeadingSections({title, description}:HeadingType) {
  return(
    <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
    <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
      { title }
    </h2>
    <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
      { description }
    </p>
  </div>
  )
}

export default HeadingSections