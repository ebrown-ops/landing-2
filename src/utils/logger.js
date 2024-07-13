const logger = {
  info: (message) => {
    console.log(`[INFO] ${message}`);
  },
  error: (message, error) => {
    console.error(`[ERROR] ${message}`, error);
  },
  warn: (message) => {
    console.warn(`[WARN] ${message}`);
  },
  debug: (message) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[DEBUG] ${message}`);
    }
  },
};

export default logger;