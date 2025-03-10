/**
 * Formats a date to a human-readable "time ago" string
 * @param {string|Date} date The date to format
 * @returns {string} A human-readable time ago string
 */
const TimeAgo = (date) => {
    if (!date) return '';
    
    // Convert to Date object if it's not already
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    // Get the difference in seconds
    const seconds = Math.floor((new Date() - dateObj) / 1000);
    
    // Less than a minute
    if (seconds < 60) {
      return 'just now';
    }
    
    // Less than an hour
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes}m`;
    }
    
    // Less than a day
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours}h`;
    }
    
    // Less than a week
    const days = Math.floor(hours / 24);
    if (days < 7) {
      return `${days}d`;
    }
    
    // Less than a month
    const weeks = Math.floor(days / 7);
    if (weeks < 4) {
      return `${weeks}w`;
    }
    
    // Format date as MM/DD/YYYY for older dates
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    
    return `${month}/${day}/${year}`;
  };
  
  export default TimeAgo;