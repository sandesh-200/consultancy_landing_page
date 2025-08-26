import { testimonials } from '../constants/index'

const Testimonials = () => {
  return (
    <div className="tracking-wide bg-white ">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What people are saying
      </h2>

      {/* Cards Wrapper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md border border-blue-100 hover:border-blue-400 transition-all p-6 text-md"
          >
            {/* Testimonial Text */}
            <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>

            {/* User Info */}
            <div className="flex items-center mt-8">
              <img
                className="w-12 h-12 mr-4 rounded-full border-2 border-blue-500"
                src={testimonial.image}
                alt={testimonial.user}
              />
              <div>
                <h6 className="font-semibold text-gray-900">{testimonial.user}</h6>
                <span className="text-sm italic ">
                  {testimonial.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
