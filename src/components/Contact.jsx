import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
          Interested in working together or just want to say hello? Feel free to drop a message.
        </p>

        <div className="space-y-4">
          <p>
            📧 <a href="mailto:bharathdattasai1122@gmail.com" className="text-blue-600 hover:underline">bharathdattasai1122@gmail.com</a>
          </p>
          <p>
            💼 <a href="https://www.linkedin.com/in/bharath-datta-sai-singanamala/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn Profile</a>
          </p>
        </div>

        <p className="text-sm mt-12 text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} Bharath Datta Sai S. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
