// use local storage to manage jobs data
const addToDb = id => {

    let appliedJobs = getAppliedJobsCart();
    // add quantity
    const quantity = appliedJobs[id];
    if (!quantity) {
        appliedJobs[id] = 1;
    }
    localStorage.setItem('Applied-Jobs', JSON.stringify(appliedJobs));
}


const removeFromDb = id => {
    const appliedJobs = getAppliedJobsCart();
    if (id in appliedJobs) {
        delete appliedJobs[id];
        localStorage.setItem('Applied-Jobs', JSON.stringify(appliedJobs));
    }
}

const getAppliedJobsCart = () => {
    let appliedJobs = {};
    const storedCart = localStorage.getItem('Applied-Jobs');
    if (storedCart) {
        appliedJobs = JSON.parse(storedCart);
    }
    return appliedJobs;
}

const deleteAppliedJobsCart = () => {
    localStorage.removeItem('Applied-Jobs');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJobsCart,
    deleteAppliedJobsCart
}
