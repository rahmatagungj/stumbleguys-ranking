export default function LoadingIndicator({ isLoading }) {

  if (!isLoading) return null

  return (
    <div className="mx-auto spinner-border text-light" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}
