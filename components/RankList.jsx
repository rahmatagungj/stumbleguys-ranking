export default function RankList({ allRank }) {
  return (
    <div>
      <h4> All Rank</h4>
      <ul className="list-group">
        {
          allRank.map(rank => (
            <li key={rank.User.Username} className="list-group-item d-flex justify-content-between align-items-center">
              { rank.User.Username }
              <span className="badge bg-danger rounded-pill">{ rank.User.SkillRating }</span>
            </li>
          ))
        }
          </ul>
        </div>
  )
}
