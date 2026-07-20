export function MapEmbed() {
  return (
    <section className="w-full py-12 px-4" style={{ backgroundColor: "#1e3a5f" }} aria-label="John Amos International School location map">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Find Us</h2>
        <div className="mt-8 overflow-hidden rounded-xl shadow-lg">
          <iframe
            title="John Amos International School map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.056488283523!2d90.39910367535671!3d24.759252277995497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f1c27ae2be5%3A0x3b4b8303eb1c4d80!2sJohn%20Amos%20International%20School!5e0!3m2!1sen!2sbd!4v1784576010708!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
