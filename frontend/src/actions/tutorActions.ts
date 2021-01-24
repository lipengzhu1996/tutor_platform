import ActionType from './actionType'

const tutorBaseUrl = 'http://localhost:3000/tutors'

export function addTutorsCount() {
    return { type: ActionType.ADD_TUTOR_COUNT }
}

export function setTutorFilter(filter: any) {
    return {
        type: ActionType.SET_TUTOR_FILTER,
        payload: { filter: filter }
    }
}

const testData = {
    id: '9527',
    name: 'Tom',
    description: 'Cornell University alumnus specializing in Math, Science, AP/SAT Prep',
    rate: 5,
    ratings: 10,
    hours: 43,
    price: 40,
    bio: 'With over 10 years of experience tutoring middle school and college-bound high school students, I understand that everyone has different learning styles & needs. I am patient and enjoy leading students to academic success. As a graduate of Cornell University\'s engineering department, I have a strong foundation in the math and sciences. I provide personalized tutoring in the following subject areas: Geometry, Algebra, Trigonometry, Pre-calculus, Calculus, Physics, Chemistry, SAT & Advanced Placement (AP) test prep. I have led university level classes as a teacher\'s assistant at Cornell and provided one-on-one & small class room size instruction at local tutoring centers. Please contact me with any questions to find out if you or your child would benefit from my specialized services.',
    edu: 'Cornell University Information Engineering',
    subjects: 'Elementary Math tutoring, ACT Math tutoring, Japanese tutoring',
    address: 'Dublin, CA, 94568, USA',
    reviews: [{
        reviewBody: 'I\'m extremely satisfied with Taichi\'s knowledge of math & physics and his way of teaching. After only two lessons, my daughter received a higher grade on her physics test! I could tell that he truly cares about my daughter\'s education. I highly recommend Taichi to anyone.',
        dateCreated: '2014-10-31 05:39:33 UTC',
        alternativeHeadline: 'Knowledgeable and Caring Tutor',
        author: 'Lai'
    }],
}

export function addTutor() {
    return (dispatch: any) => {
        fetch(tutorBaseUrl, {
            method: 'POST',
            body: JSON.stringify(testData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => { dispatch(addTutorsCount()); })
            .catch(() => { });

    }
}

function objToQueryString(obj: any) {
    const keyValuePairs = [];
    for (const key in obj) {
        keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
}

export function queryTutors(query: any) {
    const queryString = objToQueryString(query)
    const url = tutorBaseUrl.concat('/query/').concat(queryString);
    return (dispatch: any) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => { dispatch(setTutorFilter(query)); })
            .catch(() => { });

    }
}

export function getAllTutors() {
    return (dispatch: any) => {
        fetch(tutorBaseUrl, {
            method: 'GET',
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => { dispatch(addTutorsCount()); })
            .catch(() => { });

    }
}