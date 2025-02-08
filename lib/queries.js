export const query = `*[_type == "food" || _type == "chef"] {
    _id,
    title,
    description,
    image
  }`;