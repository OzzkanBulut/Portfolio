// ContactSection.tsx
import React, { useRef, useState, type FormEvent } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_xjqy2nh';
const EMAILJS_TEMPLATE_ID = 'template_zuz3nfr';
const EMAILJS_PUBLIC_KEY = 'lI1dGtCF7a3bBTIMQ';
const RECAPTCHA_SITE_KEY = '6LfOcGwrAAAAAMwXlb6EiZpTn5fMgw1oiQJ8T3QB';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const recaptchaRef = useRef<InstanceType<typeof ReCAPTCHA>>(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaRef.current) {
      alert('reCAPTCHA yüklenmedi, lütfen sayfayı yenileyin.');
      return;
    }

    setLoading(true);

    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      if (!token) {
        alert('Lütfen reCAPTCHA doğrulamasını tamamlayın.');
        setLoading(false);
        return;
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          'g-recaptcha-response': token,
        },
        EMAILJS_PUBLIC_KEY
      );

      alert('Mesajınız başarıyla gönderildi!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS gönderim hatası:', error);
      alert('Mesaj gönderilemedi, lütfen tekrar deneyin.');
    }

    setLoading(false);
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 border border-green-400/20 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Get in touch</h2>
        <p className="text-gray-300 mb-6">
          I'm always open to discussing project opportunities, collaborations, or just having a conversation about technology!
        </p>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-md border border-green-400 bg-gray-900 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-md border border-green-400 bg-gray-900 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-md border border-green-400 bg-gray-900 text-white px-4 py-2 h-32 resize-y focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`bg-green-400 text-black px-6 py-3 rounded-md hover:bg-green-500 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY}
            size="invisible"
            ref={recaptchaRef}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
