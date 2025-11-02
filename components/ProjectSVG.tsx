interface ProjectSVGProps {
  projectId: string;
  className?: string;
}

export default function ProjectSVG({ projectId, className = "" }: ProjectSVGProps) {
  const svgs: Record<string, JSX.Element> = {
    ultravending: (
      <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Vending Machine Body */}
        <rect x="80" y="40" width="240" height="220" fill="none" stroke="currentColor" strokeWidth="3" rx="8"/>
        <rect x="100" y="70" width="200" height="160" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
        
        {/* Product Rows */}
        {[90, 135, 180, 225].map((y, i) => (
          <rect key={i} x="110" y={y} width="60" height="35" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" rx="4"/>
        ))}
        {[90, 135, 180, 225].map((y, i) => (
          <rect key={i} x="185" y={y} width="60" height="35" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" rx="4"/>
        ))}
        {[90, 135, 180, 225].map((y, i) => (
          <rect key={i} x="260" y={y} width="60" height="35" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" rx="4"/>
        ))}
        
        {/* Dispensing Area */}
        <rect x="100" y="250" width="200" height="40" fill="none" stroke="currentColor" strokeWidth="2" rx="4"/>
        <path d="M 190 250 L 210 250 L 200 260 Z" fill="currentColor" opacity="0.4"/>
        
        {/* Control Panel */}
        <circle cx="200" cy="100" r="8" fill="currentColor" opacity="0.6"/>
        <circle cx="220" cy="100" r="8" fill="currentColor" opacity="0.6"/>
        <circle cx="200" cy="120" r="8" fill="currentColor" opacity="0.6"/>
        <circle cx="220" cy="120" r="8" fill="currentColor" opacity="0.6"/>
        
        {/* Connection lines */}
        <path d="M 200 80 L 200 60" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        <path d="M 200 60 L 60 60" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        <path d="M 60 60 L 60 40" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
    ultragaucho: (
      <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Neural Network */}
        {[80, 130, 180, 230].map((x, i) => (
          <circle key={i} cx={x} cy="80" r="12" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
        ))}
        {[100, 150, 200].map((x, i) => (
          <circle key={i} cx={x} cy="150" r="15" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
        ))}
        {[120, 180].map((x, i) => (
          <circle key={i} cx={x} cy="220" r="18" fill="none" stroke="currentColor" strokeWidth="2"/>
        ))}
        
        {/* Connections */}
        {[80, 130, 180, 230].map((x1) =>
          [100, 150, 200].map((x2) => (
            <line key={`${x1}-${x2}`} x1={x1} y1="92" x2={x2} y2="135" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
          ))
        )}
        {[100, 150, 200].map((x1) =>
          [120, 180].map((x2) => (
            <line key={`${x1}-${x2}`} x1={x1} y1="165" x2={x2} y2="202" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
          ))
        )}
        
        {/* Data points */}
        <circle cx="70" cy="80" r="3" fill="currentColor" opacity="0.8"/>
        <circle cx="90" cy="100" r="3" fill="currentColor" opacity="0.8"/>
        <circle cx="110" cy="90" r="3" fill="currentColor" opacity="0.8"/>
      </svg>
    ),
    ultrastudy: (
      <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Graph */}
        <path d="M 100 240 L 130 200 L 160 220 L 190 160 L 220 180 L 250 120 L 280 140" 
              stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8"/>
        
        {/* Data points */}
        <circle cx="100" cy="240" r="6" fill="currentColor"/>
        <circle cx="130" cy="200" r="6" fill="currentColor"/>
        <circle cx="160" cy="220" r="6" fill="currentColor"/>
        <circle cx="190" cy="160" r="6" fill="currentColor"/>
        <circle cx="220" cy="180" r="6" fill="currentColor"/>
        <circle cx="250" cy="120" r="6" fill="currentColor"/>
        <circle cx="280" cy="140" r="6" fill="currentColor"/>
        
        {/* Axes */}
        <line x1="80" y1="260" x2="320" y2="260" stroke="currentColor" strokeWidth="2"/>
        <line x1="80" y1="260" x2="80" y2="40" stroke="currentColor" strokeWidth="2"/>
        
        {/* Y-axis markers */}
        {[60, 100, 140, 180, 220].map((y, i) => (
          <g key={i}>
            <line x1="75" y1={y} x2="80" y2={y} stroke="currentColor" strokeWidth="1.5"/>
            <text x="70" y={y + 4} fontSize="10" fill="currentColor" opacity="0.6" textAnchor="end">{100 - i * 20}</text>
          </g>
        ))}
        
        {/* Book/Education icon */}
        <path d="M 320 180 Q 340 160 340 140 Q 340 120 320 140 Q 320 120 300 120 Q 280 120 280 140 Q 280 160 300 180 Q 320 160 320 180 Z" 
              stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
        <line x1="310" y1="130" x2="330" y2="130" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    ),
    ctrlshift: (
      <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Control loop */}
        <circle cx="200" cy="150" r="80" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
        <circle cx="200" cy="150" r="50" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
        <circle cx="200" cy="150" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
        
        {/* Control points */}
        {[0, 45, 90, 135, 180].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 200 + Math.cos(rad) * 65;
          const y = 150 + Math.sin(rad) * 65;
          return (
            <circle key={i} cx={x} cy={y} r="8" fill="currentColor" opacity="0.7">
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite" begin={`${i * 0.2}s`}/>
            </circle>
          );
        })}
        
        {/* Feedback arrows */}
        <path d="M 200 60 L 180 80 M 200 60 L 220 80" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
        <path d="M 340 150 L 320 130 M 340 150 L 320 170" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
        
        {/* Monitoring lines */}
        <path d="M 100 250 Q 150 220 200 240 Q 250 220 300 240" 
              stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
        <circle cx="100" cy="250" r="5" fill="currentColor" opacity="0.6"/>
        <circle cx="300" cy="240" r="5" fill="currentColor" opacity="0.6"/>
      </svg>
    )
  };
  
  return svgs[projectId] || <div className={className}>No graphic available</div>;
}

