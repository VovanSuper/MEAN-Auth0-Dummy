type dataModel = {
  id: number,
  created: Date,
  text: string
}

type respObj = {
  opStatus: string,
  data: dataModel[]
}

export { dataModel, respObj };