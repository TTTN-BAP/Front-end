import { Link } from 'react-router-dom'
import path from 'src/modules/Share/constants/path'

const Footer = () => {
  return (
    <div className='py-8 px-12 gap-6 bg-gray-100'>
      <Link to={path.home} className='flex flex-col mb-8'>
        <span className='text-[44px] font-semibold text-[#272b66]'>Job Description</span>
        <span className='text-[18px] text-[#272b66]'>Leading the human resources industry</span>
      </Link>
      <div className='flex gap-24'>
        <div>
          <h2 className='uppercase font-semibold mb-2'>DÀNH CHO ỨNG VIÊN</h2>
          <ul className='text-gray-500'>
            <li>Việc làm mới nhất</li>
            <li>CV Hay</li>
            <li>Cẩm Nang</li>
          </ul>
        </div>
        <div>
          <h2 className='uppercase font-semibold mb-2'>NHÀ TUYỂN DỤNG</h2>
          <ul className='text-gray-500'>
            <li>Đăng Tuyển Dụng</li>
            <li>Tìm Hồ Sơ</li>
            <li>Giải Pháp Talent Solution</li>
            <li>Sản Phẩm Dịch Vụ</li>
          </ul>
        </div>
        <div>
          <h2 className='uppercase font-semibold mb-2'>TRUNG TÂM TRỢ GIÚP</h2>
          <ul className='text-gray-500'>
            <li>Về CareerViet.vn</li>
            <li>Chính Sách BV Thông Tin</li>
            <li>Trợ giúp</li>
          </ul>
        </div>
        <div>
          <h2 className='uppercase font-semibold mb-2'>WEBSITE ĐỐI TÁC</h2>
          <ul className='text-gray-500'>
            <li>Vieclam.Tuoitre.vn</li>
            <li>Vieclam.Vietnamnet.vn</li>
            <li>VieclamIT.vn</li>
          </ul>
        </div>
        <div>
          <h2 className='uppercase font-semibold mb-2'>XÂY DỰNG SỰ NGHIỆP</h2>
          <ul className='text-gray-500'>
            <li>Freelancer</li>
            <li>Thiết kế nội thất</li>
            <li>Thiết kế đồ họa</li>
            <li>Telesale</li>
          </ul>
        </div>
        <div>
          <h2 className='uppercase font-semibold mb-2'>TÌM KIẾM MỌI LÚC MỌI NƠI</h2>
          <div className=''>
            <img src='https://static.careerviet.vn/themes/careerbuilder/img/apple.png' alt='' className='mb-4' />
            <img src='https://static.careerviet.vn/themes/careerbuilder/img/android.png' alt='' className='mb-4' />
          </div>
          <h2 className='uppercase font-semibold mb-2'>KẾT NỐI VỚI CAREERVIET.VN</h2>
          <div className='flex gap-6'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' className='w-4'>
              <path d='M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z' />
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' className='w-6'>
              <path d='M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z' />
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' className='w-8'>
              <path d='M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
