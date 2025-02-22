import React from "react";

function Footer() {
  return (
    <footer className="bg-[#9af3de] text-black pt-10 rounded-t-[9vw]">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-6">
        {/* Patient Care Section */}
        <div className="md:pl-14">
          <h3 className="text-lg font-bold mb-4 ">Patient Care</h3>
          <ul className="space-y-2 text-sm">
            <li>Find A Doctor</li>
            <li>Medical Services</li>
            <li>Patient Testimonials</li>
            <li>Value Added Services</li>
            <li>Pay Online</li>
            <li>Seva Surgery</li>
            <li>International Patients</li>
          </ul>
        </div>

        {/* News & Media Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">News & Media</h3>
          <ul className="space-y-2 text-sm">
            <li>News</li>
            <li>Events</li>
            <li>Interviews</li>
            <li>Watch Our Videos</li>
            <li>Media Contacts</li>
            <li>Seva Hospitals Reviews</li>
          </ul>
        </div>

        {/* Centres of Excellence Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Centres Of Excellence</h3>
          <ul className="space-y-2 text-sm">
            <li>Orthopaedics</li>
            <li>Nephrology & Urology</li>
            <li>Bariatric Surgery</li>
            <li>Cardiology</li>
            <li>Pulmonology</li>
            <li>Gastroenterology</li>
            <li>Spine Surgery</li>
            
          </ul>
        </div>

        {/* Medical Procedures Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Medical Procedures</h3>
          <ul className="space-y-2 text-sm">
            <li>Proton Therapy For Cancer Treatment</li>
            <li>Cosmetic And Plastic Surgery</li>
            <li>Bone Marrow Transplant</li>
            <li>Oral & Maxillofacial Surgery</li>
            <li>Hand MicroSurgery</li>
            <li>G Scan – Open Standing MRI Scan</li>
            
          </ul>
        </div>

        {/* Corporate Section */}
        <div className="md:pl-14">
          <h3 className="text-lg font-bold mb-4">Corporate</h3>
          <ul className="space-y-2 text-sm">
            <li>Company Overview</li>
            <li>Our Doctors Achievements</li>
            <li>The Seva Ethos</li>
            <li>The Seva Story</li>
            <li>Management</li>
            <li>Awards & Accolades</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Hospitals Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Hospitals</h3>
          <ul className="space-y-2 text-sm">
            <li>Hospitals In India</li>
            <li>International Hospitals</li>
            <li>Seva Clinics</li>
            <li>Reach Hospitals</li>
            <li>Seva Cradle</li>
            <li>Seva Fertility</li>
            <li>Seva Cancer Centers</li>
            <li>Seva Proton Centers</li>
          </ul>
        </div>

        {/* Academics & Research Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Academics & Research</h3>
          <ul className="space-y-2 text-sm">
            <li>Courses</li>
            <li>Academics</li>
            <li>Clinical Research</li>
            <li>Honors List</li>
            <li>Seva Torch: Alumni Network</li>
            <li>Web Broadcasts</li>
            <li>Collaborative Forums</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Post A Query</li>
            <li>Consult Doctors Online</li>
            <li>Book Physical Appointment</li>
            <li>Give Your Feedback</li>
            <li>Seva Lifeline</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-10 text-sm border-t border-white bg-black text-white py-5">
        <p>&copy; 2025 Seva Hospitals. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
