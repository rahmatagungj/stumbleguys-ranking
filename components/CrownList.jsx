export default function CrownList({ allCrowns }) {
  return (
    <div>
      <h4> All Crowns</h4>
      <ol className="list-group list-group-numbered">
        {
          allCrowns.map(rank => (
            <li key={rank.User.Username} className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <p className="mb-0">{ rank.User.Username }</p>
              </div>
              <span className="badge bg-warning rounded-pill"> { rank.User.Crowns }</span>
            </li>
          ))
        }
          </ol>
        </div>
  )
}
