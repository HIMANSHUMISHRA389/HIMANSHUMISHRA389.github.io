import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import "./GitHub.css";
import { ThemeContext } from "../../Context/theme";

const GitHub = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [width, setWidth] = useState(window.innerWidth);
  
  // Update width on window resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // For custom theming of the calendar
  const lightTheme = {
    level0: '#ebedf0',
    level1: '#9be9a8',
    level2: '#40c463',
    level3: '#30a14e',
    level4: '#216e39',
  };
  
  const darkTheme = {
    level0: '#161b22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };
  
  // Format tooltip text
  const tooltipFormatter = day => {
    return `${day.count} contributions on ${day.date}`;
  };

  // Responsive values based on screen width
  const getResponsiveValues = () => {
    if (width < 480) {
      return {
        blockSize: 8,
        blockMargin: 2,
        fontSize: 12,
        showWeekdayLabels: false
      };
    } else if (width < 768) {
      return {
        blockSize: 10,
        blockMargin: 3,
        fontSize: 14,
        showWeekdayLabels: true
      };
    } else {
      return {
        blockSize: 15,
        blockMargin: 5,
        fontSize: 16,
        showWeekdayLabels: true
      };
    }
  };

  const { blockSize, blockMargin, fontSize, showWeekdayLabels } = getResponsiveValues();

  return (
    <section className="github-section section">
      <div className="github-container" data-aos="fade-up">
        <div className="github-header">
          <h2 className="section__title different">GitHub Contributions</h2>
          <p className="github-description">
            My coding activity over the past year
          </p>
        </div>

        <div className={`github-calendar-wrapper ${themename}`}>
          <GitHubCalendar
            username="HIMANSHUMISHRA389"
            blockSize={blockSize}
            blockMargin={blockMargin}
            fontSize={fontSize}
            colorScheme={themename === "dark" ? darkTheme : lightTheme}
            tooltipFormatter={tooltipFormatter}
            showWeekdayLabels={showWeekdayLabels}
            hideColorLegend={width < 480}
            labels={{
              months: width < 480 ? 
                ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] :
                ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              weekdays: width < 480 ? 
                ["S", "M", "T", "W", "T", "F", "S"] :
                ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              totalCount: "{{count}} contributions in the last year"
            }}
          />
        </div>
        
        <div className="github-cta">
          <a 
            href="https://github.com/HIMANSHUMISHRA389" 
            target="_blank"
            rel="noreferrer"
            className="github-button"
          >
            View My GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
