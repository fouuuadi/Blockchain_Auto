
import { Provider } from "../../public/components/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
      </head>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
