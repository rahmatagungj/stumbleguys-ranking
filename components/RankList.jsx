export default function RankList({ allRank }) {
  return (
    <div>
      <h4> All Rank</h4>
      <ol className="list-group list-group-numbered">
        {
          allRank.map(rank => (
            <li key={rank.User.Username} className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <p className="mb-0">{ rank.User.Username }</p>
              </div>
              <span className="badge bg-primary rounded-pill"> { rank.User.SkillRating }</span>
            </li>
          ))
        }
          </ol>
        </div>
  )
}
