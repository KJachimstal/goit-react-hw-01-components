export const Statistics = ({ elements, title = 'UPLOAD STATS' }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {elements.map(({ label, percentage }) => (
          <li class="item">
            <span class="item-label">{label}</span>
            <span class="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
