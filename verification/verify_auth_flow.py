from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        # Set viewport to desktop to ensure menu is visible
        page.set_viewport_size({"width": 1280, "height": 720})

        print("Navigating to Homepage...")
        page.goto("http://localhost:3001")
        page.screenshot(path="verification/homepage.png")
        print("Homepage screenshot taken.")

        # Try navigating directly to account page to avoid selector issues if the icon is hidden/tricky
        print("Navigating directly to /account...")
        page.goto("http://localhost:3001/account")

        # Check if we are on login page
        # Since we are not logged in in this new browser context, /account should redirect to /auth/login
        print("Waiting for redirection...")
        page.wait_for_url(lambda u: "/auth/login" in u)

        print("On Login Page. Logging in...")
        page.screenshot(path="verification/login_page.png")

        page.fill("input[name='email']", "test@example.com")
        page.fill("input[name='password']", "password123")
        page.click("button[type='submit']")

        # Should redirect to /account
        print("Waiting for redirection to Account...")
        page.wait_for_url("**/account")
        print("Redirected to Account.")

        print("On Account Page.")
        # Ensure data is loaded
        page.wait_for_selector("text=Test User")

        expect(page.get_by_text("Test User")).to_be_visible()
        expect(page.get_by_text("test@example.com")).to_be_visible()
        page.screenshot(path="verification/account_page.png")
        print("Account page screenshot taken.")

        # Test Dropdown
        print("Testing Products Dropdown...")
        page.goto("http://localhost:3001")

        # Wait for hydration/JS
        page.wait_for_load_state("networkidle")

        try:
             # Force click if needed or ensure visibility
             page.click("button:has-text('Produits')", force=True)

             # The dropdown might be absolutely positioned and off-screen or transparent if not rendering correctly?
             # Let's wait a bit
             page.wait_for_timeout(500)

             # Check if menu exists in DOM
             if page.is_visible("text=Formations Vidéo"):
                 print("Dropdown is visible.")
             else:
                 print("Dropdown text not visible immediately.")

             page.screenshot(path="verification/dropdown_menu.png")
             print("Dropdown screenshot taken.")
        except Exception as e:
             print(f"Dropdown test failed: {e}")
             page.screenshot(path="verification/dropdown_fail.png")

        browser.close()

if __name__ == "__main__":
    run()
