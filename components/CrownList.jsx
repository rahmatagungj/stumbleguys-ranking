export default function CrownList({ allCrowns }) {
  return (
    <div>
      <h4> All Crowns</h4>
      <ul className="list-group">
        {
          allCrowns.map(rank => (
            <li key={rank.User.Username} className="list-group-item d-flex justify-content-between align-items-center">
              { rank.User.Username }
              <span className="badge bg-warning rounded-pill">{ rank.User.Crowns }</span>
            </li>
          ))
        }
          </ul>
        </div>
  )
}
