export default function StatCard({
  num,
  label,
}) {
  return (
    <div className="stat-item">
      <div className="stat-num">
        {num}
      </div>

      <div className="stat-label">
        {label}
      </div>
    </div>
  );
}