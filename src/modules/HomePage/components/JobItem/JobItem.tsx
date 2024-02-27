const JobItem = () => {
  return (
    <div className='flex gap-4 px-4 py-8 border-t-[1px] border-gray-300'>
      <div>
        <img
          src='https://images.careerviet.vn/employer_folders/lot8/285358/155x155/94054logo-gf.png'
          alt=''
          className='h-[200px] w-[200px] rounded-lg border-[1px] border-gray-300'
        />
      </div>
      <div className='flex flex-col justify-center gap-2'>
        <span className='text-[26px] font-semibold'>Senior Sales Planning Manager</span>
        <span className='uppercase text-gray-500'>Ninja Van Việt Nam</span>
        <div className='flex text-[#188038]'>
          <div className='w-[28px]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
          </div>
          <span>Lương:</span>
          <span>Cạnh tranh</span>
        </div>
        <div className='flex'>
          <div className='w-[28px]'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512' className='w-4 ml-1'>
              <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
            </svg>
          </div>
          <span>Hồ Chí Minh</span>
        </div>
        <div className='flex'>
          <div className='w-[28px]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
            </svg>
          </div>

          <div>Hạn nộp</div>
          <div>18-3-2024</div>
        </div>
        <div className='flex'>
          <div>
            <div>Laptop</div>
          </div>
          <div>
            <div>Chế độ bảo hiểm</div>
          </div>
          <div>
            <div>Du lịch</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobItem
