import { useState } from 'react';
import { MessageSquare, Linkedin, Instagram } from 'lucide-react';

const countries = [
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+971', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+1', name: 'Canada', flag: '🇨🇦' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [addressType, setAddressType] = useState<'business' | 'residential'>('business');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phoneNumber.trim() || !message.trim()) {
      alert('Please fill out all required fields.');
      return;
    }

    const formattedText = `Hello NewGenX,

I would like to submit a business inquiry. Here are my details:

*Name:* ${name}
*Phone:* ${countryCode} ${phoneNumber}
*Address Type:* ${addressType === 'business' ? 'Business Address' : 'Residential Address'}
*Requirements:*
${message}`;

    const whatsappUrl = `https://wa.me/917303686363?text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative w-full py-20 lg:py-32 px-6 md:px-24 mb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full glass-card p-8 md:p-16 border border-white/15 relative group">
        {/* Ambient Glow inside card */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-glow-solar/5 blur-[120px] rounded-full group-hover:bg-glow-solar/10 transition-colors duration-1000 pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
          {/* Left Column: Info & Direct Links */}
          <div className="lg:col-span-5 flex flex-col h-full justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter text-glow-solar leading-none">
                Let's Scale <br />
                <span className="text-glow underline decoration-glow-cyan/50 underline-offset-[12px]">Together</span>.
              </h2>
              
              <p className="text-base md:text-lg text-white/80 leading-relaxed font-light mb-10">
                Whether you're looking to build a <span className="text-glow-cyan font-semibold">new product</span>, optimize your <span className="text-glow-solar font-semibold">growth funnel</span>, or scale your <span className="text-glow-cyan font-semibold">engineering team</span>—we're ready to help you hit the next peak.
              </p>
            </div>

            {/* Quick Links Row */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold block">Or connect directly:</span>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://wa.me/917303686363" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-4 bg-white/5 border border-white/10 hover:border-glow-cyan/30 rounded-2xl text-white hover:text-glow-cyan transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold shadow-inner"
                >
                  <MessageSquare size={16} /> WhatsApp
                </a>
                <a 
                  href="https://www.linkedin.com/in/rudrax-chhonkar" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-4 bg-white/5 border border-white/10 hover:border-glow-solar/30 rounded-2xl text-white hover:text-glow-solar transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold shadow-inner"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a 
                  href="https://www.instagram.com/rudrax__singh/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-4 bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl text-white hover:text-glow-gold transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold shadow-inner"
                >
                  <Instagram size={16} /> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Contact Form */}
          <div className="lg:col-span-7 w-full bg-background/40 border border-white/10 p-6 md:p-10 rounded-[2.5rem] shadow-2xl relative backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2 font-bold">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan transition-all"
                />
              </div>

              {/* Country & Phone Fields */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2 font-bold">Phone Number</label>
                <div className="flex gap-3">
                  {/* Country Selector */}
                  <div className="relative">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="appearance-none h-full pl-4 pr-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan cursor-pointer transition-all"
                    >
                      {countries.map((c) => (
                        <option key={c.name} value={c.code} className="bg-background text-white">
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/50 text-[10px]">▼</div>
                  </div>
                  
                  {/* Phone Input */}
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="98765 43210"
                    className="flex-1 px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan transition-all"
                  />
                </div>
              </div>

              {/* Address Type Selector */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2 font-bold">Address Type</label>
                <div className="flex bg-white/5 border border-white/10 rounded-2xl p-1 w-full">
                  <button
                    type="button"
                    onClick={() => setAddressType('business')}
                    className={`flex-1 py-3 text-xs uppercase tracking-wider font-bold rounded-xl transition-all duration-300 ${
                      addressType === 'business'
                        ? 'bg-glow-solar text-background shadow-[0_0_15px_rgba(255,69,0,0.4)]'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Business
                  </button>
                  <button
                    type="button"
                    onClick={() => setAddressType('residential')}
                    className={`flex-1 py-3 text-xs uppercase tracking-wider font-bold rounded-xl transition-all duration-300 ${
                      addressType === 'residential'
                        ? 'bg-glow-solar text-background shadow-[0_0_15px_rgba(255,69,0,0.4)]'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Residential
                  </button>
                </div>
              </div>

              {/* Business Requirements Message Box */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2 font-bold">Requirements / Message</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your project, timeline, or resource requirements..."
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan resize-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-5 bg-glow-solar border border-glow-solar rounded-2xl text-xs uppercase tracking-[0.2em] font-black text-background hover:bg-transparent hover:text-glow-solar hover:shadow-[0_0_25px_rgba(255,69,0,0.4)] transition-all duration-500 flex items-center justify-center gap-2"
              >
                Send via WhatsApp <MessageSquare size={16} />
              </button>

            </form>
          </div>

        </div>
      </div>
      
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white text-[10px] md:text-xs tracking-[0.2em] uppercase whitespace-nowrap text-center w-full px-6">
        © 2026 Rudrax Chhonkar. <br className="md:hidden"/> Built with Strategy + Code.
      </div>
    </section>
  );
}
