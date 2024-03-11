import { data } from '../mocks/techs'
function StacksSection() {

  return (
    <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
      {data.map((item) => {
        return (
          <>
            <div className='relative overflow-hidden rounded-lg border bg-slate-800 text-white p-2 dark:bg-background'>
              <div className='flex h-[180px] flex-col justify-between items-center rounded-md p-6'>
                {item.svg}
                <div className='space-y-2 mt-8'>
                  <h3 className='font-bold'>{item.title}</h3>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </div>)
}

export default StacksSection