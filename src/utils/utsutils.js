function processingSearchData(subject) {
    let sujectArray = [];

    Object.keys(subject).forEach( (key) =>{
        sujectArray.push({
            description:subject[key].description,
            semester:subject[key].semester,
            subject_code:subject[key].subject_code,
            activity:subject[key].activities,
        })

    });
    return sujectArray;
}

export default {processingSearchData}