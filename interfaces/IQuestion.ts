interface IQuestion {
  id: string
  question: string
  description?: string
  page: number
  type: "multiple choice" | "short text"
  options?: string[]
  correct?: string
}

export default IQuestion