
const HistoryData = async () => {

  const history = await fetch ("/api/history")
  const historyData = await history.json()
  


  return (
    <div>HistoryData</div>
  )
}

export default HistoryData