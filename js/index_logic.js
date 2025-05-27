let elective_subjects_list = [];

// Assuming you have already populated elective_subjects_list array

function searchList() {
    let key = document.querySelector('input').value.toLowerCase(); // Get the search query

    let items = document.querySelector('.variable_zone');
    let searchResults = document.querySelector('.search_results');

    // Clear previous search results
    searchResults.innerHTML = '';

    // If search query is empty, show all items
    if (key === "") {
        items.style.display = "block";
        return;
    }

    // Loop through elective subjects
    for (let i = 0; i < elective_subjects_list.length; i++) {
        let subject = elective_subjects_list[i].toLowerCase();

        // If search query matches elective subject, display it
        if (subject.includes(key)) {
            let courses = search_index[i];

            // Create a container for the subject and its related courses
            let subjectContainer = document.createElement('div');
            subjectContainer.classList.add('search_result');

            // Add subject title to the container
            let subjectTitle = document.createElement('h2');
            subjectTitle.textContent = elective_subjects_list[i];
            subjectContainer.appendChild(subjectTitle);

            // Add courses related to the subject
            let courseList = document.createElement('div');
            courseList.classList.add('course_list');

            for (let j = 0; j < courses.length; j++) {
                let course = courses[j].toLowerCase();

                // If course matches search query, add it to the list
                if (course.includes(key)) {
                    let courseCard = document.createElement('div');
                    courseCard.classList.add('course-card');
                    courseCard.innerHTML = courses[j]; // Assuming courses[j] contains HTML

                    courseList.appendChild(courseCard);
                }
            }

            // If there are matching courses, add the course list to the subject container
            if (courseList.children.length > 0) {
                subjectContainer.appendChild(courseList);
                searchResults.appendChild(subjectContainer);
            }
        }
    }

    // Hide items that don't match the search query
    items.style.display = "none";
}
