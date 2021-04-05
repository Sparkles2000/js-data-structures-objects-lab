// Write your solution in this file!
let driver = {
    name: `Anna`,
    streetAddress: `123 Coconut Dr.`,
}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {...driver};
    newDriver[`name`] = `Sam`;
    newDriver[`address`] = `11 Broadway`;
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[`name`] = `Sam`
    driver[`address`] = `12 Broadway`
    return driver
}
destructivelyUpdateDriverWithKeyAndValue(driver, `streetAddress`, `12 Broadway`)

function deleteFromDriverByKey(driver, key) {
    const updatedDriver = {...driver}
    updatedDriver[`name`]= `Sam`;
    updatedDriver[`streetAddress`] = `12 Broadway`;
    delete updatedDriver[`name`]
    return updatedDriver
}
function destructivelyDeleteFromDriverByKey(driver, key) {
    driver[`name`] = `Sam`;
    driver[`streetAddress`] = `12 Broadway`;
    delete driver[`name`]
    return driver
}