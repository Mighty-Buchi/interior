// import React from 'react';
// import ContactIntro from '../sections/ContactIntro';

// const contact = () => {
//   return (
//     <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 p-6 md:p-12">
//       <ContactIntro/>
//       <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center">
        
//         <div className="w-full md:w-3/4 text-black  bg-[#E8E1D9] rounded-[40px] p-8 md:p-16 min-h-[500px] flex flex-col justify-start">
//           <h2 className="text-4xl md:text-5xl font-bold  mb-6">
//             Talk to us?
//           </h2>
//           <p className="text-black/70 text-lg md:text-xl max-w-md leading-relaxed">
//             Fill in your details to book a call with us, see you on the other side
//           </p>
//         </div>

        
//         <div className="w-full max-w-md mt-[-100px] md:mt-0 md:absolute md:right-0 bg-[#6e632e] rounded-[32px] p-6 md:p-8 shadow-2xl border border-white/10">
//           <form className="space-y-4">
//             <div>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full  bg-[#323030] text-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-300 outline-none transition-all"
//               />
//             </div>
            
//             <div className="flex flex-col md:flex-row gap-4">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full  bg-[#323030] text-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-300 outline-none"
//               />
//               <input
//                 type="tel"
//                 id="phone"
//                 pattern="[0-9]*" 
//                 oninput="this.value = this.value.replace(/[^0-9]/g, '')"
//                 placeholder="(+234)"
//                 className="w-full  bg-[#323030] text-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-300 outline-none"
//               />
//             </div>

//             <div>
//               <input
//                 type="text"
                
//                 placeholder="Enter Subject"
//                 className="w-full  bg-[#323030] text-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-300 outline-none"
//               />
//             </div>

//             <div>
//               <input
//                 type="text"
//                 placeholder="Your Budget (USD)"
//                 className="w-full bg-[#323030] text-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-300 outline-none"
//               />
//             </div>

//             <div>
//               <textarea
//                 placeholder="Enter your Messsage"
//                 rows={4}
//                 className="w-full  bg-[#323030] text-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-300 outline-none resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full text-black bg-white hover:bg-black hover:text-white  font-semibold py-4 rounded-2xl transition-all duration-300 transform active:scale-[0.98]"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//       </div>
//     </section>
//   );
// };



"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import ContactIntro from '../sections/ContactIntro';

// Interface to fix TypeScript indexing errors
interface FormErrors {
  [key: string]: boolean;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone' || name === 'budget') {
      const onlyNums = value.replace(/\D/g, '');
      setFormData((prev) => ({ ...prev, [name]: onlyNums }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let newErrors: FormErrors = {};

    Object.keys(formData).forEach((field) => {
      if (!(formData as any)[field].trim()) {
        newErrors[field] = true;
      }
    });

    if (formData.phone && formData.phone.length < 10) {
      newErrors.phone = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; 
    }

    // --- SUCCESS LOGIC ---
    console.log("Inquiry Sent:", formData);

    // Reset Form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      budget: '',
      message: ''
    });
    setErrors({});

    // Show custom success message instead of alert
    setShowSuccess(true);
    
    // Auto-hide the message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const getInputClass = (fieldName: string) => `
    w-full bg-[#323030] text-white border-2 rounded-2xl p-4 outline-none transition-all
    ${errors[fieldName] ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]' : 'border-transparent focus:ring-2 focus:ring-amber-300'}
  `;

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 p-6 md:p-12 relative overflow-hidden">
      <ContactIntro />
      
      {/* Custom Success Notification */}
      {showSuccess && (
        <div className="fixed top-10 right-1/2 translate-x-1/2 md:right-10 md:translate-x-0 z-50 bg-white text-black px-8 py-4 rounded-2xl shadow-2xl border-l-4 border-[#6e632e] animate-in fade-in slide-in-from-top-4 duration-300">
          <p className="font-bold text-lg">Inquiry Sent!</p>
          <p className="text-sm opacity-70">We'll reach out to you shortly.</p>
        </div>
      )}

      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center">
        
        {/* Left Side: Branding/Text */}
        <div className="w-full md:w-3/4 text-black bg-[#E8E1D9] rounded-[40px] p-8 md:p-16 min-h-[500px] flex flex-col justify-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Talk to us?</h2>
          <p className="text-black/70 text-lg md:text-xl max-w-md leading-relaxed">
            Fill in your details to book a consultation for your space. We look forward to transforming your home.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="w-full max-w-md mt-[-100px] md:mt-0 md:absolute md:right-0 bg-[#6e632e] rounded-[32px] p-6 md:p-8 shadow-2xl border border-white/10">
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            
            <div className="space-y-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={getInputClass('name')}
              />
              {errors.name && <p className="text-red-400 text-xs ml-2">Please enter your name</p>}
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full space-y-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={getInputClass('email')}
                />
                {errors.email && <p className="text-red-400 text-xs ml-2">Invalid email</p>}
              </div>
              <div className="w-full space-y-1">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className={getInputClass('phone')}
                />
                {errors.phone && <p className="text-red-400 text-xs ml-2">Check phone number</p>}
              </div>
            </div>

            <div className="space-y-1">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Type"
                className={getInputClass('subject')}
              />
            </div>

            <div className="space-y-1">
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Estimated Budget (USD)"
                className={getInputClass('budget')}
              />
            </div>

            <div className="space-y-1">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your dream interior..."
                rows={4}
                className={`${getInputClass('message')} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full text-black bg-white hover:bg-black hover:text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform active:scale-[0.98]"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;