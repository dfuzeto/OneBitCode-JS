const jobs = [];

function listJobs() {
    const jobTexts = jobs.reduce(function (finalText, job, index) {
        finalText += `${index} ${job.name} (${job.applicants.length} applicants)\n`;
        return finalText;
    }, '');

    alert(jobTexts);
}

function newJob() {
    const name = prompt(`Enter a name for the job:`);
    const description = prompt(`Enter a description for the job:`);
    const deadline = prompt(`Enter a deadline for the job (dd/mm/yyyy):`);

    const confirmation = confirm(`Do you want to create a new job with these details?\n` +
        `Name: ${name}\nDescription: ${description}\nDeadline: ${deadline}`);

    if (confirmation) {
        const newJob = { name, description, deadline, applicants: [] };
        jobs.push(newJob);
        alert(`Job created!`);
    } else {
        alert(`Confirmation denied!`);
    }
}

function showJob() {
    const i = prompt(`Enter the index of the job you want to view:`);
    const job = jobs[i];

    const applicantsText = job.applicants.reduce(function (finalText, applicant) {
        return finalText + `\n - ${applicant}`;
    }, '');

    alert(`Job: ${i}\nName: ${job.name}\nDescription: ${job.description}\nDeadline: ${job.deadline}\nApplicants: ${job.applicants.length}\nRegistered Applicants: ${applicantsText}`);
}

function registerApplicant() {
    const applicant = prompt(`Enter a name for the applicant:`);
    const index = prompt(`Enter the job index to enroll ${applicant}`);

    const job = jobs[index];

    const confirmation = confirm(`Do you want to enroll ${applicant} in the job:\n` +
        `Job Name: ${job.name}\nDescription: ${job.description}\nDeadline: ${job.deadline}`);

    if (confirmation) {
        job.applicants.push(applicant);
        alert(`Registration completed!`);
    }
}

function deleteJob() {
    const index = prompt(`Enter the index of the job you want to delete:`);
    const job = jobs[index];

    const confirmation = confirm(`Do you want to delete the job ${index}\n` +
        `Job Name: ${job.name}\nDescription: ${job.description}\nDeadline: ${job.deadline}`);

    if (confirmation) {
        jobs.splice(index, 1);
        alert(`Job deleted!`);
    } else {
        alert(`Confirmation denied!`);
    }
}

function showMenu() {
    const option = prompt(
        `Job Listing\n` +
        `1. List available jobs\n` +
        `2. Create a new job\n` +
        `3. View a job\n` +
        `4. Register an applicant\n` +
        `5. Delete a job\n` +
        `6. Exit`
    );
    return option;
}

function execute() {
    let option = '';

    do {
        option = showMenu();

        switch (option) {
            case '1':
                listJobs();
                break;
            case '2':
                newJob();
                break;
            case '3':
                showJob();
                break;
            case '4':
                registerApplicant();
                break;
            case '5':
                deleteJob();
                break;
            case '6':
                alert(`You chose to exit`);
                break;
        }
    } while (option !== '6');
}

execute();
