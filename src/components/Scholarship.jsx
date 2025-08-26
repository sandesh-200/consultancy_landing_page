import { scholarships } from '../constants/index'

const ScholarshipSection = () => {
  return (
    <div className='relative mt-24 border-b border-neutral-200 min-h-[600px]'>
      <div className="text-center">
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 tracking-wide'>
          Unlock Your{' '}
          <span className='bg-gradient-to-r from-[#4A8CFF] to-[#1546C8] text-transparent bg-clip-text'>
            Scholarship Opportunities
          </span>
        </h2>
        <p className='mt-6 text-md text-neutral-500 max-w-2xl mx-auto'>
          Explore available scholarships that can help fund your study abroad journey.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto px-6">
        {scholarships.map((scholarship, index) => {
          const Icon = scholarship.icon;
          return (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-8 pb-20 rounded-2xl border border-neutral-200 hover:border-[#4A8CFF]/30 hover:shadow-2xl hover:shadow-[#4A8CFF]/10 transition-all duration-500 group overflow-hidden bg-white cursor-pointer transform hover:-translate-y-2 min-h-[320px]"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A8CFF]/5 via-transparent to-[#1546C8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Card content with smooth transitions */}
              <div className="relative z-10 flex flex-col items-center transition-all duration-500 group-hover:transform group-hover:-translate-y-2 flex-grow">
                <div className="flex h-16 w-16 p-4 rounded-2xl bg-gradient-to-br from-white to-blue-50 justify-center items-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 border border-neutral-100">
                  <Icon size={32} className="text-[#4A8CFF] group-hover:text-[#1546C8] transition-colors duration-300" />
                </div>
                <h5 className="text-xl font-semibold mb-4 group-hover:text-[#1546C8] transition-colors duration-300">{scholarship.title}</h5>
                <p className="text-sm text-neutral-500 group-hover:text-neutral-600 transition-colors duration-300 leading-relaxed max-w-[280px]">{scholarship.description}</p>
              </div>
              
              {/* Enhanced Apply button with better animations */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100">
                <button className="relative px-8 py-3 bg-gradient-to-r from-[#4A8CFF] to-[#1546C8] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden whitespace-nowrap">
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10">Apply Now</span>
                </button>
              </div>
              
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#4A8CFF]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ScholarshipSection