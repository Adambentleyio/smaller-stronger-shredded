export const activeExperimentQuery = `
  *[_type == "experiment" && status == "active"][0]{
    _id,
    title,
    "slug": slug.current,
    overview,
    targetDays,
    startDate,
    "logCount": count(*[_type == "dailyLog" && experiment._ref == ^._id])
  }
`

export const featuredPostsQuery = `
  *[_type == "post" && status == "published" && featured == true][0...3]{
    title,
    "slug": slug.current,
    category,
    hook
  }
`