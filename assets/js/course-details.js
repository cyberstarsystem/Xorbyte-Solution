// ✅ Get Course ID from URL
const params = new URLSearchParams(window.location.search);
const courseId = parseInt(params.get("id"));

// ✅ Find Course Object
const course = courses.find((item) => item.id === courseId);

// ✅ If Course Not Found
if (!course) {
  document.body.innerHTML = `
    <div style="text-align:center; padding:50px;">
      <h2>❌ Course Not Found</h2>
      <a href="courses.html">Back to Courses</a>
    </div>
  `;
  throw new Error("Course Not Found!");
}

// ✅ Helper Function (Safe Inject)
const setText = (id, value) => {
  const el = document.getElementById(id);
  if (el) el.innerText = value;
};

const setImage = (id, src) => {
  const el = document.getElementById(id);
  if (el) el.src = src;
};

// ✅ HERO SECTION
setText("courseTitle", course.title);
setText("courseDescription", course.description);
setText("courseLevel", course.level);
setText("courseBadge", course.badge);
setImage("courseImage", course.img);

// ✅ Long Description Dynamic
const longDescContainer = document.getElementById("courseLongDescription");

if (longDescContainer) {
  longDescContainer.innerHTML = "";

  course.longDescription.forEach((para) => {
    longDescContainer.innerHTML += `<p>${para}</p>`;
  });
}


// ✅ SIDEBAR INFO
setText("courseDuration", course.duration);
setText("courseLanguage", course.language);

setText("courseAssignments", `${course.assignments} Projects`);

const ratingContainer = document.getElementById("courseRating");

if (ratingContainer) {
  const rating = parseFloat(course.rating);

  let starsHTML = "";

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // ✅ Full Star
      starsHTML += `<i class="bi bi-star-fill"></i>`;
    } 
    else if (rating >= i - 0.5) {
      // ✅ Half Star Icon Only
      starsHTML += `<i class="bi bi-star-half"></i>`;
    } 
    else {
      // ✅ Empty Star
      starsHTML += `<i class="bi bi-star"></i>`;
    }
  }

  // ✅ Output only icons + rating number
  ratingContainer.innerHTML = `
    ${starsHTML}
    <span class="ms-2">(${course.rating})</span>
  `;
}


// ✅ SKILLS SECTION
const skillsContainer = document.getElementById("skillsContainer");

skillsContainer.innerHTML = "";

course.skills.forEach((skill) => {
  skillsContainer.innerHTML += `
    <div class="col-md-6">
      <div class="skill-item">
        <div class="skill-icon">
          <i class="${skill.icon}"></i>
        </div>
        <div class="skill-content">
          <h5>${skill.title}</h5>
          <p>${skill.text}</p>
        </div>
      </div>
    </div>
  `;
});


// ✅ REQUIREMENTS
const requirementsList = document.getElementById("requirementsList");

if (requirementsList) {
  requirementsList.innerHTML = "";
  course.requirements.forEach((req) => {
    requirementsList.innerHTML += `
      <li class="mb-2">
        <i class="bi bi-check2"></i> ${req}
      </li>
    `;
  });
}

// ✅ CURRICULUM
const curriculumAccordion =
  document.getElementById("curriculumAccordion");

curriculumAccordion.innerHTML = "";

course.curriculum.forEach((mod, index) => {
  curriculumAccordion.innerHTML += `
  
  <div class="accordion-item curriculum-module">

    <h2 class="accordion-header">
      <button class="accordion-button ${
        index === 0 ? "" : "collapsed"
      }"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#module${index}">
        
        <div class="module-info">
          <span class="module-title">${mod.module}</span>
          <span class="module-meta">
            ${mod.lessons.length} Lessons
          </span>
        </div>

      </button>
    </h2>

    <!-- ✅ IMPORTANT FIX HERE -->
    <div id="module${index}" 
      class="accordion-collapse collapse ${
        index === 0 ? "show" : ""
      }"
      data-bs-parent="#curriculumAccordion">

      <div class="accordion-body">

        <div class="lessons-list">
          ${mod.lessons
            .map((lesson, i) => `
              <div class="lesson">
                <i class="bi bi-play-circle"></i>
                <span class="lesson-title">${lesson}</span>
                <span class="lesson-time">${20 + i * 10} min</span>
              </div>
            `)
            .join("")}
        </div>

      </div>
    </div>

  </div>
  `;
});


// ✅ MODAL COURSE AUTO FILL
const enrollModal = document.getElementById("enrollModal");

if (enrollModal) {
  enrollModal.addEventListener("show.bs.modal", function () {
    const courseSelect = document.getElementById("selectedCourse");

    if (courseSelect) {
      // ✅ Clear old options
      courseSelect.innerHTML = "";

      // ✅ Add all courses in dropdown
      courses.forEach((c) => {
        courseSelect.innerHTML += `
          <option value="${c.id}">
            ${c.title}
          </option>
        `;
      });

      // ✅ Auto Select Current Course
      courseSelect.value = course.id;
    }
  });
}




// ✅ REVIEWS
// const reviewsList = document.getElementById("reviewsList");

// if (reviewsList) {
//   reviewsList.innerHTML = "";

//   course.reviews.forEach((review) => {
//     reviewsList.innerHTML += `
//       <div class="review-item p-3 border rounded mb-3">
//         <h6>${review.name}</h6>
//         <p>⭐ ${review.rating}/5</p>
//         <p>${review.comment}</p>
//       </div>
//     `;
//   });
// }
