import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [isIntersecting, setIsIntersecting] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    try {
      await emailjs.send(
        "service_q4f1ml6",
        "template_u5c4zs4",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        },
        "bZFwNY6mbQR81UHYE"
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setHasError(true);
      setTimeout(() => setHasError(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nnkichu0609@gmail.com",
      color: "bg-[var(--accent-cyan)]",
      textColor: "text-[var(--dark-primary)]"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 - 7025441460",
      color: "bg-[var(--accent-blue)]",
      textColor: "text-white"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangalore, Karnataka, India",
      color: "bg-[var(--success-green)]",
      textColor: "text-[var(--dark-primary)]"
    }
  ];

  const LoadingIndicator = () => (
    <div className="text-center py-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-cyan-500 border-opacity-50 mx-auto mb-4"></div>
      <h4 className="text-xl font-semibold mb-2 text-cyan-400">Sending...</h4>
      <p className="text-gray-400">Please wait while your message is being sent.</p>
    </div>
  );

  const ErrorMessage = () => (
    <div className="text-center py-8">
      <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
      <h4 className="text-xl font-semibold mb-2 text-red-500">Message Failed!</h4>
      <p className="text-gray-400">Something went wrong. Please try again later.</p>
    </div>
  );

  return (
    <section id="contact" className="pt-5 pb-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to bring your project to life? Let's discuss how we can work together.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--accent-cyan)]">Contact Information</h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center`}>
                    <info.icon className={info.textColor} size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/nikhil-nath-222113221/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <FaLinkedin className="text-white" />
                </a>
                <a href="https://github.com/kichu06" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <FaGithub className="text-white" />
                </a>
                <a href="mailto:nnkichu0609@gmail.com" className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors">
                  <Mail className="text-white" size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--accent-cyan)]">Send Message</h3>

            {isSubmitting ? (
              <LoadingIndicator />
            ) : hasError ? (
              <ErrorMessage />
            ) : isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-[var(--success-green)] mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-[var(--success-green)]">Message Sent!</h4>
                <p className="text-gray-400">Thank you for your message. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Full Name</label>
                  <input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 bg-gray-800 border border-gray-600 text-white focus:border-cyan-500 rounded-lg transition-colors" placeholder="Your Name" required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email Address</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 bg-gray-800 border border-gray-600 text-white focus:border-cyan-500 rounded-lg transition-colors" placeholder="your@email.com" required />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">Subject</label>
                  <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleInputChange} className="w-full px-4 py-2 bg-gray-800 border border-gray-600 text-white focus:border-cyan-500 rounded-lg transition-colors" placeholder="Project Discussion" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-2 bg-gray-800 border border-gray-600 text-white focus:border-cyan-500 rounded-lg transition-colors resize-none" placeholder="Tell me about your project..." required />
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-cyan-500 hover:bg-blue-500 text-black font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
