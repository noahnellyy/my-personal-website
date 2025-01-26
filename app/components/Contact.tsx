export default function Contact() {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border rounded-lg"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </section>
  )
}

