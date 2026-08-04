const fs = require('fs');

function updateForm(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update imports
  if (!content.includes('framer-motion')) {
    content = content.replace(
      'import { supabaseForm } from "@/lib/supabase-form";',
      'import { supabaseForm } from "@/lib/supabase-form";\nimport { motion, AnimatePresence } from "framer-motion";\nimport { ChevronDown } from "lucide-react";\nimport { countries } from "@/lib/countries";'
    );
  }

  // Update State Variables
  content = content.replace(/firstName: "",\s*lastName: "",/, 'name: "",');
  if (!content.includes('companyName: "",')) {
    content = content.replace(
      'techStack: "",',
      'companyName: "",\n    companyWebsite: "",\n    linkedinLink: "",\n    techStack: "",'
    );
  }
  if (!content.includes('message: "",')) {
    content = content.replace('projectDetails: "",', 'message: "",');
  }

  // Add country dropdown state
  if (!content.includes('isCountryDropdownOpen')) {
    content = content.replace(
      'const [isSubmitted, setIsSubmitted] = useState(false);',
      'const [isSubmitted, setIsSubmitted] = useState(false);\n  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);\n  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === "IN") || countries[0]);'
    );
  }

  // Update Supabase Insert
  content = content.replace(/name: \`\$\{formData\.firstName\} \$\{formData\.lastName\}\`\.trim\(\),/g, 'name: formData.name,');
  content = content.replace(/message: \`Tech Stack: \$\{formData\.techStack\}\\nProject Details: \$\{formData\.projectDetails\}\`/g, 'message: `Tech Stack: ${formData.techStack}\\nMessage: ${formData.message}`,');
  
  if (!content.includes('company_name: formData.companyName')) {
    content = content.replace(
      'mobile: formData.phoneNumber,',
      'mobile: formData.phoneNumber,\n            company_name: formData.companyName,\n            company_web: formData.companyWebsite,\n            linkedin: formData.linkedinLink,'
    );
  }

  // Define new JSX rows
  const nameEmailRow = `
                    {/* Row 1: Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name *"
                        className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email *"
                        className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>`;

  const phoneCompanyRow = `
                    {/* Row 2: Phone and Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex relative">
                        <button
                          type="button"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          className="flex items-center justify-center px-3 bg-slate-50 border border-slate-200/50 border-r-0 rounded-l-xl text-slate-700 text-sm shrink-0 gap-1.5 hover:bg-slate-100 transition-colors focus:outline-none"
                        >
                          <img src={\`https://flagcdn.com/w20/\${selectedCountry.code.toLowerCase()}.png\`} alt={\`\${selectedCountry.name} Flag\`} className="w-5 h-3.5 object-cover rounded-sm" />
                          <span>{selectedCountry.dial_code}</span>
                          <ChevronDown className={\`w-3.5 h-3.5 text-slate-400 ml-0.5 transition-transform \${isCountryDropdownOpen ? 'rotate-180' : ''}\`} />
                        </button>
                        
                        <AnimatePresence>
                          {isCountryDropdownOpen && (
                            <>
                              <div className="fixed inset-0 z-40" onClick={() => setIsCountryDropdownOpen(false)} />
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute top-full left-0 mt-2 w-[220px] bg-white border border-slate-100 rounded-xl shadow-xl z-50 overflow-hidden"
                              >
                                <div className="max-h-[200px] overflow-y-auto py-2 scrollbar-thin">
                                  {countries.map((country) => (
                                    <button
                                      key={country.code}
                                      type="button"
                                      onClick={() => {
                                        setSelectedCountry(country);
                                        setIsCountryDropdownOpen(false);
                                      }}
                                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors text-left overflow-hidden"
                                    >
                                      <img src={\`https://flagcdn.com/w20/\${country.code.toLowerCase()}.png\`} alt={country.name} className="w-5 h-3.5 object-cover rounded-sm shrink-0" />
                                      <span className="text-sm font-medium text-slate-700 truncate">{country.name}</span>
                                      <span className="text-xs text-slate-400 ml-auto whitespace-nowrap shrink-0">{country.dial_code}</span>
                                    </button>
                                  ))}
                                </div>
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>

                        <input
                          type="tel"
                          name="phoneNumber"
                          required
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="Phone number *"
                          className="w-full bg-slate-50 border border-slate-200/50 rounded-r-xl px-3 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                        />
                      </div>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>`;

  const websiteLinkedinRow = `
                    {/* Row 3: Website and LinkedIn */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="url"
                        name="companyWebsite"
                        value={formData.companyWebsite}
                        onChange={handleChange}
                        placeholder="Company Website"
                        className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                      <input
                        type="text"
                        name="linkedinLink"
                        required
                        value={formData.linkedinLink}
                        onChange={handleChange}
                        placeholder="LinkedIn / Instagram Link *"
                        className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>`;

  const techStackMessageRow = `
                    {/* Row 4: Tech Stack */}
                    <div className="relative">
                      <select
                        name="techStack"
                        required
                        value={formData.techStack}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-500/50 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select Tech Stack *</option>
                        <option value="React / Next.js">React / Next.js</option>
                        <option value="Node.js / Python">Node.js / Python</option>
                        <option value="Flutter / React Native">Flutter / React Native</option>
                        <option value="AI / ML / Data Engineering">AI / ML / Data Engineering</option>
                        <option value="Unity / Unreal / AR/VR">Unity / Unreal / AR/VR</option>
                        <option value="Full Stack Developers">Full Stack Developers</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Row 5: Message */}
                    <textarea
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none h-28"
                      placeholder="Message *"
                    />`;

  const regex = /\{\/\*\s*Name Fields Grid\s*\*\/\}[\s\S]*?(?=\{\/\*\s*Submit Button\s*\*\/\})/;
  
  // also remove the email link
  const emailRegex = /\{\/\*\s*Email Contact Link\s*\*\/\}[\s\S]*?<\/div>\s*<\/div>\s*\{\/\*\s*Right Column: Form Card\s*\*\/\}/;
  content = content.replace(emailRegex, '</div>\n\n          {/* Right Column: Form Card */}');

  const replacement = nameEmailRow + '\n' + phoneCompanyRow + '\n' + websiteLinkedinRow + '\n' + techStackMessageRow + '\n\n                    ';
  content = content.replace(regex, replacement);

  fs.writeFileSync(filePath, content);
  console.log('Updated', filePath);
}

updateForm('src/components/InterviewForm.tsx');
