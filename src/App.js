import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Navigation Component
function Navigation({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Projects', page: 'projects' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' }
  ];

  return (
    <header style={{ color: '#0b414b' }} className="w-full max-w-6xl flex justify-between items-center py-8 px-10 mx-auto">
      <h1 
        onClick={() => setCurrentPage('home')}
        style={{ color: '#0b414b' }}
        className="text-xl font-medium tracking-tight cursor-pointer hover:opacity-70 transition"
      >
        Mariah Marsan
      </h1>
      
      <nav style={{ color: '#0b414b' }} className="hidden md:flex space-x-8 text-sm">
        {navItems.map(item => (
          <button
            key={item.page}
            onClick={() => setCurrentPage(item.page)}
            style={{ color: currentPage === item.page ? '#e4622e' : '#0b414b' }}
            className="hover:opacity-70 transition"
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button 
        style={{ color: '#0b414b' }}
        className="md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileMenuOpen && (
        <div style={{ backgroundColor: '#f4efef', borderColor: '#a3b9a9', color: '#0b414b' }} className="absolute top-20 right-10 rounded-xl border p-4 md:hidden z-50">
          <nav className="flex flex-col space-y-3 text-sm">
            {navItems.map(item => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page);
                  setMobileMenuOpen(false);
                }}
                style={{ color: currentPage === item.page ? '#e4622e' : '#0b414b' }}
                className="hover:opacity-70 transition"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

// Home Page
function HomePage({ setCurrentPage }) {
  return (
    <div style={{ backgroundColor: '#e3d6d6', color: '#0b414b' }} className="min-h-screen text-[#0b414b] flex flex-col items-center justify-start font-sans">
      <Navigation currentPage="home" setCurrentPage={setCurrentPage} />

      <section className="flex flex-col items-center text-center mt-24 px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: '#0b414b' }}
          className="text-5xl font-light leading-tight mb-8"
        >
          A Personal Studio for Structure, Thought, and Design
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ color: '#1f3a40' }}
          className="text-lg leading-relaxed mb-10 max-w-2xl"
        >
          Exploring how patterns, systems, and stories shape understanding. This space is where
          design, reasoning, and emerging technology meet introspection.
        </motion.p>

        <button 
          onClick={() => setCurrentPage('projects')}
          style={{ backgroundColor: '#0b414b', color: '#e3d6d6' }}
          className="rounded-full px-8 py-3 hover:shadow-lg transition-all font-medium shadow-md"
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1f5a65'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#0b414b'}
        >
          View My Work
        </button>
      </section>

      <section className="mt-32 w-full max-w-5xl grid grid-cols-3 gap-3 px-10">
        <div style={{ backgroundColor: '#a3b9a9' }} className="h-32 rounded-lg"></div>
        <div style={{ backgroundColor: '#907e0d' }} className="h-32 rounded-lg"></div>
        <div style={{ backgroundColor: '#e4622e' }} className="h-32 rounded-lg"></div>
      </section>

      <section className="mt-32 max-w-3xl text-center px-6 pb-16">
        <h3 style={{ color: '#0b414b' }} className="text-2xl font-semibold mb-8">Currently Exploring</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div style={{ backgroundColor: '#f4efef', borderColor: '#a3b9a9', color: '#0b414b' }} className="p-6 rounded-xl border">
            <h4 style={{ color: '#0b414b' }} className="font-semibold mb-2">AI Reasoning & Evaluation</h4>
            <p style={{ color: '#1f3a40' }} className="text-sm leading-relaxed">Understanding how machines interpret human-like logic and nuance.</p>
          </div>
          <div style={{ backgroundColor: '#f4efef', borderColor: '#a3b9a9', color: '#0b414b' }} className="p-6 rounded-xl border">
            <h4 style={{ color: '#0b414b' }} className="font-semibold mb-2">Knowledge Systems</h4>
            <p style={{ color: '#1f3a40' }} className="text-sm leading-relaxed">Designing workflows and structures that reveal meaning from complexity.</p>
          </div>
          <div style={{ backgroundColor: '#f4efef', borderColor: '#a3b9a9', color: '#0b414b' }} className="p-6 rounded-xl border">
            <h4 style={{ color: '#0b414b' }} className="font-semibold mb-2">Civic Structure → Digital Structure</h4>
            <p style={{ color: '#1f3a40' }} className="text-sm leading-relaxed">Translating lessons from city planning into intelligent design frameworks.</p>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: '#0b414b', color: '#e3d6d6' }} className="mt-32 w-full py-10 flex flex-col items-center">
        <div className="grid grid-cols-4 gap-3 mb-6">
          <div style={{ backgroundColor: '#a3b9a9' }} className="h-6 w-6 rounded-full"></div>
          <div style={{ backgroundColor: '#907e0d' }} className="h-6 w-6 rounded-full"></div>
          <div style={{ backgroundColor: '#e4622e' }} className="h-6 w-6 rounded-full"></div>
          <div style={{ backgroundColor: '#da9687' }} className="h-6 w-6 rounded-full"></div>
        </div>
        <p className="text-sm">© 2025 Mariah Marsan — themarsare.com</p>
      </footer>
    </div>
  );
}

// Projects Page
function ProjectsPage({ setCurrentPage }) {
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      title: "Skill Extraction Framework",
      description: "A structured prompt design for parsing and validating soft and hard skills from unstructured job descriptions and resumes. Built as a logic-layer framework for reasoning clarity."
    },
    {
      title: "Soft Skill Mapping Model",
      description: "Experiment in contextual tone and behavioral mapping to identify relational and emotional traits in narrative text — enhancing AI interpretability of human qualities."
    },
    {
      title: "Workflow Logic Prototype",
      description: "Low-code workflow connecting Make.com and AI models to structure and visualize reasoning flows — translating text inputs into structured data schemas."
    },
    {
      title: "Reasoning Map Visualizer",
      description: "A conceptual data visualization tool mapping relationships between logic steps, reasoning depth, and semantic clarity across AI models."
    },
    {
      title: "Knowledge System Notes",
      description: "A series of essays exploring the epistemic parallels between civic planning and AI cognition — structure as a universal design language."
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#e3d6d6', color: '#0b414b' }} className="min-h-screen text-[#0b414b] flex flex-col items-center font-sans">
      <Navigation currentPage="projects" setCurrentPage={setCurrentPage} />

      <section className="mt-20 max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: '#0b414b' }}
          className="text-5xl font-light leading-tight mb-8"
        >
          Projects & Experiments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ color: '#1f3a40' }}
          className="text-lg leading-relaxed mb-10"
        >
          A collection of ongoing work, prototypes, and thought experiments — each one exploring how systems, design, and reasoning can reveal new forms of understanding.
        </motion.p>
      </section>

      <section className="mt-24 w-full max-w-4xl px-6 mb-12">
        <div className="relative">
          <input 
            type="text"
            placeholder="Search projects by title or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ borderColor: '#a3b9a9', color: '#0b414b' }}
            className="w-full px-6 py-4 rounded-full border-2 bg-white placeholder-[#907e0d] focus:outline-none transition"
            onFocus={(e) => e.target.style.borderColor = '#0b414b'}
            onBlur={(e) => e.target.style.borderColor = '#a3b9a9'}
          />
          <span className="absolute right-6 top-4 text-[#907e0d] text-lg">🔍</span>
        </div>
        {searchTerm && (
          <p style={{ color: '#907e0d' }} className="mt-3 text-sm">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        )}
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl px-10 pb-16">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, idx) => (
            <div key={idx} style={{ backgroundColor: '#f4efef', borderColor: '#a3b9a9' }} className="rounded-2xl border p-8 hover:shadow-lg transition">
              <h2 style={{ color: '#0b414b' }} className="text-xl font-semibold mb-3">{project.title}</h2>
              <p style={{ color: '#1f3a40' }} className="text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <button style={{ backgroundColor: '#e4622e', color: '#e3d6d6' }} className="rounded-full px-6 py-2 transition-all font-medium" onMouseEnter={(e) => e.target.style.backgroundColor = '#da9687'} onMouseLeave={(e) => e.target.style.backgroundColor = '#e4622e'}>
                {idx === 4 ? 'Read Notes' : 'View Details'}
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p style={{ color: '#1f3a40' }} className="text-lg">No projects match your search.</p>
            <button 
              onClick={() => setSearchTerm('')}
              style={{ color: '#e4622e' }}
              className="mt-4 hover:opacity-70 transition font-medium"
            >
              Clear search
            </button>
          </div>
        )}
      </section>

      <footer style={{ backgroundColor: '#0b414b', color: '#e3d6d6' }} className="mt-32 w-full py-10 flex flex-col items-center">
        <div className="grid grid-cols-4 gap-3 mb-6">
          <div style={{ backgroundColor: '#a3b9a9' }} className="h-6 w-6 rounded-full"></div>
          <div style={{ backgroundColor: '#907e0d' }} className="h-6 w-6 rounded-full"></div>
          <div style={{ backgroundColor: '#e4622e' }} className="h-6 w-6 rounded-full"></div>
          <div style={{ backgroundColor: '#da9687' }} className="h-6 w-6 rounded-full"></div>
        </div>
        <p className="text-sm">© 2025 Mariah Marsan — themarsare.com</p>
      </footer>
    </div>
  );
}

// About Page
function AboutPage({ setCurrentPage }) {
  return (
    <div style={{ backgroundColor: '#e3d6d6', color: '#0b414b' }} className="min-h-screen text-[#0b414b] flex flex-col items-center font-sans">
      <Navigation currentPage="about" setCurrentPage={setCurrentPage} />

      <section className="mt-24 max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: '#0b414b' }}
          className="text-5xl font-light leading-tight mb-8"
        >
          About Mariah Marsan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ color: '#1f3a40' }}
          className="text-lg leading-relaxed mb-10"
        >
          My background is rooted in civic systems — planning, structure, and communication. Those same principles now guide
          my curiosity for how knowledge and intelligence are built, whether by humans or AI. This space is both a
          portfolio and a field journal for exploration — the intersection of structure, ethics, and cognition.
        </motion.p>
      </section>

      <section className="mt-16 grid grid-cols-4 gap-3 max-w-4xl px-10">
        <div style={{ backgroundColor: '#907e0d' }} className="h-24 rounded-lg"></div>
        <div style={{ backgroundColor: '#a3b9a9' }} className="h-24 rounded-lg"></div>
        <div style={{ backgroundColor: '#e4622e' }} className="h-24 rounded-lg"></div>
        <div style={{ backgroundColor: '#0b414b' }} className="h-24 rounded-lg"></div>
      </section>

      <section className="mt-24 max-w-3xl px-6 text-left space-y-10 pb-16">
        <div>
          <h2 style={{ color: '#0b414b' }} className="text-2xl font-semibold mb-4">Philosophy</h2>
          <p style={{ color: '#1f3a40' }} className="leading-relaxed">
            I believe understanding systems — physical or abstract — requires seeing both structure and nuance.
            Whether in city design, workflows, or AI models, I'm drawn to how small, consistent rules produce meaning.
          </p>
        </div>

        <div>
          <h2 style={{ color: '#0b414b' }} className="text-2xl font-semibold mb-4">Current Curiosity</h2>
          <p style={{ color: '#1f3a40' }} className="leading-relaxed">
            My recent work explores reasoning design: the translation of human insight into structured prompts and
            logic frameworks that AI can process — and learning from what AI reflects back about human thinking.
          </p>
        </div>

        <div>
          <h2 style={{ color: '#0b414b' }} className="text-2xl font-semibold mb-4">Guiding Ideas</h2>
          <ul style={{ color: '#1f3a40' }} className="list-disc list-inside space-y-2">
            <li>Design reveals cognition.</li>
            <li>Structure is not limitation — it's clarity.</li>
            <li>Human curiosity is the most powerful algorithm.</li>
          </ul>
        </div>
      </section>

      <footer style={{ backgroundColor: '#0b414b', color: '#e3d6d6' }} className="mt-32 w-full py-10 flex flex-col items-center">
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div style={{ backgroundColor: '#a3b9a9' }} className="h-6 w-6 rounded-full"></div>
          <div style={{ backgroundColor: '#907e0d' }} className="h-6 w-6 rounded-full"></div>
          <div style={{ backgroundColor: '#e4622e' }} className="h-6 w-6 rounded-full"></div>
        </div>
        <p className="text-sm">© 2025 Mariah Marsan — themarsare.com</p>
      </footer>
    </div>
  );
}

// Contact Page
function ContactPage({ setCurrentPage }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('https://formspree.io/f/mkgqykny', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#e3d6d6', color: '#0b414b' }} className="min-h-screen text-[#0b414b] flex flex-col items-center font-sans">
      <Navigation currentPage="contact" setCurrentPage={setCurrentPage} />

      <section className="mt-20 max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: '#0b414b' }}
          className="text-5xl font-light leading-tight mb-8"
        >
          Let's Collaborate
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ color: '#1f3a40' }}
          className="text-lg leading-relaxed mb-10"
        >
          I'm open to collaborations, creative partnerships, or roles exploring reasoning systems, knowledge design, or AI-human understanding. Whether you're building, researching, or imagining something new — reach out.
        </motion.p>
      </section>

      <section style={{ backgroundColor: '#f4efef', borderColor: '#a3b9a9' }} className="mt-16 w-full max-w-xl rounded-2xl border p-10 text-left">
        <div className="space-y-6">
          <div>
            <label style={{ color: '#0b414b' }} className="block text-sm font-semibold mb-2">Name</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Your name"
              style={{ borderColor: '#a3b9a9', color: '#0b414b' }}
              className="w-full px-4 py-3 rounded-md border bg-white focus:outline-none transition"
              onFocus={(e) => e.target.style.borderColor = '#0b414b'}
              onBlur={(e) => e.target.style.borderColor = '#a3b9a9'}
            />
          </div>

          <div>
            <label style={{ color: '#0b414b' }} className="block text-sm font-semibold mb-2">Email</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Your email"
              style={{ borderColor: '#a3b9a9', color: '#0b414b' }}
              className="w-full px-4 py-3 rounded-md border bg-white focus:outline-none transition"
              onFocus={(e) => e.target.style.borderColor = '#0b414b'}
              onBlur={(e) => e.target.style.borderColor = '#a3b9a9'}
            />
          </div>

          <div>
            <label style={{ color: '#0b414b' }} className="block text-sm font-semibold mb-2">Message</label>
            <textarea 
              name="message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Tell me about your idea or project..."
              style={{ borderColor: '#a3b9a9', color: '#0b414b' }}
              className="w-full px-4 py-3 rounded-md border bg-white focus:outline-none transition"
              onFocus={(e) => e.target.style.borderColor = '#0b414b'}
              onBlur={(e) => e.target.style.borderColor = '#a3b9a9'}
            />
          </div>

          <button 
            onClick={handleSubmit}
            disabled={loading}
            style={{ backgroundColor: '#e4622e', color: '#e3d6d6', opacity: loading ? 0.7 : 1 }}
            className="w-full py-3 rounded-full text-center font-medium transition-all cursor-pointer"
            onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = '#da9687')}
            onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = '#e4622e')}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        
        {submitted && (
          <p style={{ color: '#907e0d' }} className="mt-4 text-center font-semibold">
            ✓ Message received! I'll get back to you soon.
          </p>
        )}
        
        {error && (
          <p style={{ color: '#e4622e' }} className="mt-4 text-center font-semibold">
            ✗ Error sending message. Please try again or email directly.
          </p>
        )}
      </section>

      <section className="mt-24 grid grid-cols-4 gap-3 max-w-4xl px-10 pb-16">
        <div style={{ backgroundColor: '#a3b9a9' }} className="h-20 rounded-lg"></div>
        <div style={{ backgroundColor: '#907e0d' }} className="h-20 rounded-lg"></div>
        <div style={{ backgroundColor: '#e4622e' }} className="h-20 rounded-lg"></div>
        <div style={{ backgroundColor: '#0b414b' }} className="h-20 rounded-lg"></div>
      </section>

      <footer style={{ backgroundColor: '#0b414b', color: '#e3d6d6' }} className="mt-24 w-full py-10 flex flex-col items-center">
        <div className="grid grid-cols-4 gap-3 mb-6">
          <div style={{ backgroundColor: '#a3b9a9' }} className="h-6 w-6 rounded-full"></div>
          <div style={{ backgroundColor: '#907e0d' }} className="h-6 w-6 rounded-full"></div>
          <div style={{ backgroundColor: '#e4622e' }} className="h-6 w-6 rounded-full"></div>
          <div style={{ backgroundColor: '#da9687' }} className="h-6 w-6 rounded-full"></div>
        </div>
        <p className="text-sm">© 2025 Mariah Marsan — themarsare.com</p>
      </footer>
    </div>
  );
}

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div style={{ backgroundColor: '#e3d6d6' }} className="min-h-screen">
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'projects' && <ProjectsPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'about' && <AboutPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'contact' && <ContactPage setCurrentPage={setCurrentPage} />}
    </div>
  );
}