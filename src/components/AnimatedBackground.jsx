function AnimatedBackground() {
  return (
    <div className="animated-bg">
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      <div className="shape code code1">&lt;/&gt;</div>
      <div className="shape code code2">{`{ }`}</div>
      <div className="shape code code3">&lt;&gt;</div>

      <div className="grid"></div>

      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`
          }}
        />
      ))}
    </div>
  );
}

export default AnimatedBackground;