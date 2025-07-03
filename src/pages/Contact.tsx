import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  X,
  Clock,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "kushpaipla@gmail.com",
      description: "Send me an email anytime",
      action: "mailto:kushpaipla@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 83559 58693",
      description: "Call me for urgent matters",
      action: "tel:+918355958693",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Mumbai, Maharashtra",
      description: "Available for local meetups",
      action: null,
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      value: "24-48 hours",
      description: "Average response time",
      action: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/kushxpai",
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://linkedin.com/in/kushpai",
      description: "Professional network",
    },
    {
      name: "X",
      icon: <X className="h-6 w-6" />,
      url: "https://x.com/imkushpai",
      description: "Follow my thoughts",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-zinc-900 via-zinc-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Let's collaborate on something amazing together
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Methods */}
              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-cyan-300">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="group">
                      {method.action ? (
                        <a
                          href={method.action}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zinc-700/30 transition-colors duration-300"
                        >
                          <div className="text-cyan-400 mt-1 group-hover:text-cyan-300 transition-colors duration-300">
                            {method.icon}
                          </div>
                          <div>
                            <h3 className="font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">
                              {method.title}
                            </h3>
                            <p className="text-zinc-300 text-sm">
                              {method.value}
                            </p>
                            <p className="text-zinc-500 text-xs">
                              {method.description}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start space-x-3 p-3">
                          <div className="text-cyan-400 mt-1">
                            {method.icon}
                          </div>
                          <div>
                            <h3 className="font-medium text-white">
                              {method.title}
                            </h3>
                            <p className="text-zinc-300 text-sm">
                              {method.value}
                            </p>
                            <p className="text-zinc-500 text-xs">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="text-cyan-300">
                    Connect With Me
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-700/30 transition-all duration-300 group"
                    >
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        {social.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">
                          {social.name}
                        </h3>
                        <p className="text-zinc-500 text-sm">
                          {social.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div>
                      <h3 className="font-medium text-white">
                        Available for Work
                      </h3>
                      <p className="text-zinc-400 text-sm">
                        Open to new opportunities
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send Me a Message</CardTitle>
                  <p className="text-zinc-400">
                    I'd love to hear from you! Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form
                    action="https://formspree.io/f/myzjvnyg"
                    method="POST"
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-zinc-300">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-zinc-700/50 border-zinc-600 text-white placeholder:text-zinc-400 focus:border-cyan-400"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-zinc-300">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-zinc-700/50 border-zinc-600 text-white placeholder:text-zinc-400 focus:border-cyan-400"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-zinc-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-zinc-700/50 border-zinc-600 text-white placeholder:text-zinc-400 focus:border-cyan-400"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-zinc-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-zinc-700/50 border-zinc-600 text-white placeholder:text-zinc-400 focus:border-cyan-400 resize-none"
                        placeholder="Tell me about your project, idea, or just say hello!"
                      />
                    </div>

                    {/* Hidden Formspree config fields */}
                    <input type="hidden" name="_subject" value="New Message from Portfolio Contact Form" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://kushpai-portfolio.vercel.app/" />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
