function jwtToObject (token) {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
}

function cloneObject (data) {
  return JSON.parse(JSON.stringify(data))
}

function deleteUnusedProps (data) {
  delete data.categoryName
  delete data.category
  delete data.headQuarterName
  delete data.editable
  delete data.fullName
  delete data.id
  delete data.updatedAt
  delete data.createdAt
  delete data.refreshToken
  return data
}

export default {
  jwtToObject,
  cloneObject,
  deleteUnusedProps
}
