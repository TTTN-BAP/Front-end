const DetailJob = () => {
  return (
    <div className='m-12 flex flex-col gap-y-4 '>
      <div className='grid grid-cols-3 gap-y-4'>
        <h2 className='font-semibold text-[20px] col-span-3'>PHÚC LỢI</h2>
        <div className='col-span-1 flex flex-col gap-y-2'>
          <div className='flex gap-2'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512' className='w-6'>
              <path d='M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z' />
            </svg>
            <span>Laptop</span>
          </div>
          <div className='flex gap-2'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512' className='w-6'>
              <path d='M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z' />
            </svg>
            <span>Du lịch</span>
          </div>
          <div className='flex gap-2'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512' className='w-6'>
              <path d='M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z' />
            </svg>
            <span>Đào tạo</span>
          </div>
        </div>
        <div className='col-span-1'></div>
      </div>
      <div className='flex flex-col gap-y-4'>
        <h2 className='font-semibold text-[20px]'>MÔ TẢ CÔNG VIỆC</h2>
        <ul className='list-disc list-inside'>
          <li>Quản lý toàn bộ hệ thống quầy hàng kinh doanh của công ty theo sự chỉ đạo;</li>
          <li>Phân tích hàng hóa bán, đề xuất tăng - giảm chủng loại hàng hóa đưa vào kinh doanh đạt hiệu quả cao;</li>
          <li>
            Xây dựng, tổ chức thực hiện và giám sát việc thực hiện các quy trình, quy định, hướng dẫn nghiệp vụ áp dụng
            cho các bộ phận trực thuộc;
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-y-4'>
        <h2 className='font-semibold text-[20px]'>YÊU CẦU CÔNG VIỆC</h2>
        <ul className='list-disc list-inside'>
          <li>Tốt nghiệp ĐH chuyên ngành Quản trị kinh doanh hoặc các chuyên ngành liên quan.</li>
          <li>Có độ tuổi từ 25 trở lên.</li>
        </ul>
      </div>
      <div className='flex flex-col gap-y-4'>
        <h2 className='font-semibold text-[20px]'>CHẾ ĐỘ ĐÃI NGỘ</h2>
        <ul className='list-disc list-inside'>
          <li>Phụ cấp tiền cơm, tăng ca.</li>
          <li>Các chế độ bảo hiểm BHXH, BHYT, BHTN đầy đủ theo quy định pháp luật.</li>
          <li>Đánh giá tăng lương định kỳ 01 năm 01 lần; Lương, thưởng tháng 13,14 theo kết quả kinh doanh.</li>
        </ul>
      </div>
      <div className='flex flex-col gap-y-4'>
        <h2 className='font-semibold text-[20px]'>THÔNG TIN KHÁC</h2>
        <ul className='list-disc list-inside'>
          <li>Bằng cấp: Cao đẳng</li>
          <li>Độ tuổi: Không giới hạn tuổi</li>
          <li>Lương: Lên đến 20 Tr VND</li>
        </ul>
      </div>
    </div>
  )
}

export default DetailJob
