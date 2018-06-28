
const shortid = require("shortid"); // shortid.generate() returns a unique "short" id
const faker = require("faker"); // faker is used for generating random fake data.
const _ = require("lodash"); // lodash is a utility lib for Javascript

const users = generateUsers(10);
export const contacts = _.mapKeys(users, "user_id");
export const getTestimonials = TestimonialsPerUser => {
  let Testimonials = {};
  _.forEach(users, user => {
    Testimonials[user.user_id] = {
      ..._.mapKeys(generateTests(TestimonialsPerUser), "number")
    };
  });
  return Testimonials;
};

// just an example of how the state object is structured
export const state = {
  user: generateUser(),
  testimonials: getTestimonials(10),
  typing: "",
  contacts,
  activeUserId: null
};

/**
 * @returns {Object} - a new user object
 */
export function generateUser() {
  return {
    name: faker.name.findName(),
    profile_pic: faker.internet.avatar(),
    user_id: shortid.generate()
  };
}
/**
 * @returns {Object} - a new message object
 */
function generateTest(number) {
  return {
    number,
    text: faker.lorem.paragraph(),
  };
}
/**
 *
 * @param {Number} numberOfUsers - the number of users to be generated
 * @param {Function} generateUser - function that generates a single user
 * @returns {Array} - an array of user objects with length n = numberOfUsers
 */
function generateUsers(numberOfUsers) {
  return Array.from({ length: numberOfUsers }, () => generateUser());
}

function generateTests(numberOfTests) {
  return Array.from({ length: numberOfTests }, (v, i) => generateTest(i));
