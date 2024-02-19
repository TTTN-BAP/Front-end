import JobItem from '../JobItem'

const Container = () => {
  return (
    <div className='grid grid-cols-2 flex-col gap-y-4 mx-12 '>
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
    </div>
  )
}

export default Container
