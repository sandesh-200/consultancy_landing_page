import { CheckCircle2 } from 'lucide-react'
import studyAbroad from '../assets/images/study_abroad.png';
import { checklistItems } from '../constants/index';

const StudyAbroad = () => {
  return (
    <div className='mt-24 px-4'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>
        Study Abroad{' '}
        <span className='bg-gradient-to-r from-[#4A8CFF] to-[#1546C8] text-transparent bg-clip-text'>
          Made Simple
        </span>
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-12">
        {/* Image on left */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={studyAbroad} alt="Study Abroad" className="w-3/2 lg:w-2/3" />
        </div>

        {/* Checklist on right */}
        <div className="w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className='flex items-start my-20'>
              <div className="text-green-400 h-10 w-10 flex justify-center items-center rounded-full mr-4">
                <CheckCircle2 />
              </div>
              <div>
                <h4 className='font-semibold text-lg'>{item.title}</h4>
                <p className='text-gray-600'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudyAbroad;
