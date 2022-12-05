const listofLocations = (req, res) => { 
    res
        .status(200)
        .json({"status" : "success"});
};

const locationsCreate = (req, res) => { 
    res
        .status(200)
        .json({"status" : "success"});
};

const locationRatings = (req, res) => {
    res
        .status(200)
        .json({"status" : "success"});
};

const createNewRating = (req, res) => {
    res
        .status(200)
        .json({"status" : "success"});
};

const updateRating = (req, res) => {
    res
        .status(200)
        .json({"status" : "success"});
};

const deleteRating = (req, res) => {
    res
        .status(200)
        .json({"status" : "success"});
};

module.exports = {
    listofLocations,
    locationsCreate,
    locationRatings,
    createNewRating,
    updateRating,
    deleteRating
};