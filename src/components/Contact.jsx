const Contact = () => (
  <section id="contact" className="py-20 bg-gray-900 text-white">
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <input className="w-full p-2 mb-4 text-white" placeholder="Name" />
      <input className="w-full p-2 mb-4 text-white" placeholder="Email" />
      <textarea className="w-full p-2 mb-4 text-white" placeholder="Message" />
      <button className="w-full bg-white text-white py-2">Send</button>
    </div>
  </section>
);
export default Contact;