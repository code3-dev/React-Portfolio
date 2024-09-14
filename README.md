# Portfolio Resume Website

The Portfolio Resume Website built with React, TailwindCSS, and Vite.

## Getting Started

To get started with this project, follow the instructions below:

### Clone the Repository

```bash
git clone https://github.com/code3-dev/React-Portfolio.git
cd React-Portfolio
```

### Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

### Run the Development Server

Start the development server to see your changes in real-time:

```bash
npm run dev
```

### Build for Production

To create a production build of your project, use:

```bash
npm run build
```

### Deploy

Deploy your project to Vercel using the following button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/code3-dev/React-Portfolio)

## Configuration

You can customize your portfolio by editing the following files:

### Edit Title and Favicon

Modify the title and favicon in `index.html`

### Update Personal Information

Edit your personal information in `src/constants/index.js`:

```javascript
export const INFO = {
  name: 'Hossein Pira',
  position: 'Full Stack Developer',
  resume: "/",
};

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 7 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PHP, Laravel, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const CONTACT = {
  address: "Omidiyeh, Khuzestan Province, Iran",
  phoneNo: "+98 9039484577",
  email: "h3dev.pira@gmail.com",
  api: "https://contact.nativecity.io/api.php",
};
```

### Edit Projects

Update your projects in `src/components/Projects.jsx`

### Edit Technologies

Modify the list of technologies in `src/components/Technologies.jsx`

## Example PHP API for Contact Form

You can use this example PHP code for handling contact form submissions. Make sure to configure it in `src/constants/index.js` by updating the `api` URL as needed:

```php
<?php
// Set response to UTF-8 to support Farsi characters
header('Content-Type: application/json; charset=utf-8');

// Allow CORS (you can remove or adjust this if not needed)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle OPTIONS preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Return only the headers for CORS without processing the request further
    http_response_code(200);
    exit();
}

// Configurable Telegram bot token and chat ID
$telegram_token = 'YOUR_BOT_TOKEN';
$chat_id = 'YOUR_CHAT_ID';

// Function to send data to Telegram
function sendToTelegram($message, $token, $chatId)
{
    $url = "https://api.telegram.org/bot$token/sendMessage";
    $data = [
        'chat_id' => $chatId,
        'text' => $message,
        'parse_mode' => 'HTML'
    ];

    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        ]
    ];

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === FALSE) {
        return false;
    }

    return true;
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get input data and decode JSON
    $input = json_decode(file_get_contents("php://input"), true);

    // Check if all fields are set
    if (isset($input['name'], $input['email'], $input['message'])) {
        $name = htmlspecialchars($input['name'], ENT_QUOTES, 'UTF-8');
        $email = htmlspecialchars($input['email'], ENT_QUOTES, 'UTF-8');
        $message = htmlspecialchars($input['message'], ENT_QUOTES, 'UTF-8');

        // Prepare the message to send to Telegram
        $telegram_message = "New Contact Form Submission:\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Message:\n$message";

        // Send message to Telegram
        if (sendToTelegram($telegram_message, $telegram_token, $chat_id)) {
            // Success response
            echo json_encode(['status' => 'success', 'message' => 'Form submitted successfully']);
        } else {
            // Telegram sending failed
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Failed to send message to Telegram']);
        }
    } else {
        // Bad request
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid form data']);
    }
} else {
    // Method not allowed
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
}
```

### Update the API URL

Ensure you edit the `api` field in `src/constants/index.js` to point to your custom API URL:

```javascript
export const CONTACT = {
  address: "Omidiyeh, Khuzestan Province, Iran",
  phoneNo: "+98 9039484577",
  email: "h3dev.pira@gmail.com",
  api: "https://your-custom-api.com/api.php",
};
```

## Contact

- **Name**: Hossein Pira
- **Email**: [h3dev.pira@gmail.com](mailto:h3dev.pira@gmail.com)
- **Instagram**: [h3dev.pira](https://instagram.com/h3dev.pira)
- **Telegram**: [h3dev](https://t.me/h3dev)