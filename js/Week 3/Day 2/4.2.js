function gradeAssigner(score) {
  if (score <= 64) {
    return `Your Score is F.`;
  } else if (score <= 69) {
    return `Your Score is D.`
  } else if (score <= 79) {
    return `Your Score is C.`
  } else if (score <= 89) {
    return `Your Score is B.`
  } else {
    return `Your Score is A.`
  }
}
