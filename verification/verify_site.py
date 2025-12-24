from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 720})
        page = context.new_page()

        # Homepage
        page.goto("http://localhost:3001")
        page.wait_for_load_state("networkidle")
        page.screenshot(path="verification/homepage.png")
        print("Homepage verified.")

        # Products
        page.goto("http://localhost:3001/products")
        page.wait_for_load_state("networkidle")
        page.screenshot(path="verification/products.png")
        print("Products verified.")

        # Checkout
        page.goto("http://localhost:3001/checkout")
        page.wait_for_load_state("networkidle")
        page.screenshot(path="verification/checkout.png")
        print("Checkout verified.")

        browser.close()

if __name__ == "__main__":
    run()
