const jobData = {
  health: {
    title: "Healthcare Job Listings",
    jobs: [
      { title: "Nurse Assistant", company: "City Hospital", location: "Hyderabad", salary: "₹25,000/month" },
      { title: "Medical Attendant", company: "CarePlus Clinic", location: "Bangalore", salary: "₹22,000/month" },
      { title: "Pharmacist", company: "Apollo Pharmacy", location: "Chennai", salary: "₹30,000/month" }
    ]
  },
  technical: {
    title: "Technical Job Listings",
    jobs: [
      { title: "Software Developer", company: "Tech Solutions", location: "Hyderabad", salary: "₹60,000/month" },
      { title: "System Engineer", company: "Infosys", location: "Pune", salary: "₹55,000/month" },
      { title: "Network Technician", company: "HCL", location: "Delhi", salary: "₹40,000/month" }
    ]
  },
  food: {
    title: "Food Service Job Listings",
    jobs: [
      { title: "Chef Assistant", company: "Taj Hotels", location: "Mumbai", salary: "₹28,000/month" },
      { title: "Waiter", company: "Barbeque Nation", location: "Hyderabad", salary: "₹18,000/month" },
      { title: "Catering Staff", company: "Star Catering", location: "Chennai", salary: "₹20,000/month" }
    ]
  },
  delivery: {
    title: "Delivery Job Listings",
    jobs: [
      { title: "Food Delivery Executive", company: "Zomato", location: "Hyderabad", salary: "₹25,000/month" },
      { title: "Courier Partner", company: "DTDC", location: "Bangalore", salary: "₹23,000/month" },
      { title: "E-commerce Delivery", company: "Amazon", location: "Pune", salary: "₹27,000/month" }
    ]
  },
  housekeeping: {
    title: "Housekeeping Job Listings",
    jobs: [
      { title: "Room Cleaner", company: "Oberoi Hotels", location: "Mumbai", salary: "₹20,000/month" },
      { title: "Laundry Assistant", company: "Novotel", location: "Hyderabad", salary: "₹18,000/month" },
      { title: "Janitor", company: "Metro Facilities", location: "Delhi", salary: "₹17,000/month" }
    ]
  },
  construction: {
    title: "Construction Job Listings",
    jobs: [
      { title: "Site Worker", company: "L&T Construction", location: "Hyderabad", salary: "₹22,000/month" },
      { title: "Civil Supervisor", company: "Reliance Infra", location: "Pune", salary: "₹40,000/month" },
      { title: "Safety Officer", company: "DLF Projects", location: "Delhi", salary: "₹35,000/month" }
    ]
  }
};

// Get category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get('category');
const categoryInfo = jobData[category] || { title: "Job Listings", jobs: [] };

// Update Title
document.getElementById("categoryTitle").textContent = categoryInfo.title;

// Display Jobs
const jobContainer = document.getElementById("jobContainer");

if (categoryInfo.jobs.length > 0) {
  categoryInfo.jobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="job-card">
        <h5>${job.title}</h5>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Salary:</strong> ${job.salary}</p>
        <button class="btn btn-apply w-100">Apply Now</button>
      </div>
    `;
    jobContainer.appendChild(card);
  });
} else {
  jobContainer.innerHTML = `<p class="text-center">No jobs found for this category.</p>`;
}
