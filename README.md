# Email Phishing Detector Chrome Extension

## Overview

The **Email Phishing Detector** is a Chrome extension that allows users to detect whether an email might be a phishing attempt. This tool helps enhance security by providing an additional layer of protection against malicious phishing attacks. It analyzes email content and alerts users to potentially dangerous elements, making it easier to identify fraudulent emails.

## Features

- **Real-time Email Analysis**: Detects phishing elements in emails, including suspicious links, attachments, and domain mismatches.
- **Machine Learning Integration**: Utilizes machine learning models to increase accuracy in detecting phishing patterns.
- **Easy-to-use Interface**: Simple design that integrates directly into the Chrome browser for seamless email scanning.
- **Privacy-first Approach**: Does not store any sensitive information or emails on external servers.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/1solomonwakhungu/email-phishing-detector.git
   ```
2. Navigate to the project directory:
   ```bash
   cd email-phishing-detector
   ```
3. Open Chrome and go to `chrome://extensions/`.
4. Enable **Developer mode** (top right corner).
5. Click **Load unpacked** and select the cloned project folder.

## How It Works

1. When a user opens an email, the extension analyzes the email content for potential phishing indicators, such as:
   - Unusual links or attachments.
   - Domain mismatches in URLs.
   - Keywords commonly used in phishing attempts (e.g., urgent action required, password reset, etc.).
2. The extension displays a percentage the email is suspected to be phishing.
3. Users can choose to ignore the alert or take further action, such as reporting the email to their security team.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to open issues or submit pull requests if you have any questions or suggestions. We look forward to your contributions!
