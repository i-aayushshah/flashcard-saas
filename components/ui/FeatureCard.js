// /components/ui/FeatureCard.js
const FeatureCard = ({ title, description, icon }) => {
    return (
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        width: '30%',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '2rem' }}>{icon}</div>
        <h3 style={{ margin: '10px 0' }}>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

  export default FeatureCard;
