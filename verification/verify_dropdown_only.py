from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        page.set_viewport_size({"width": 1280, "height": 720})

        print("Navigating to Homepage...")
        page.goto("http://localhost:3001")
        page.wait_for_load_state("networkidle")

        print("Opening Dropdown...")
        try:
             # Click the button
             page.click("button:has-text('Produits')", force=True)

             # Wait specifically for the menu item
             # The layout is:
             # <button>Produits</button>
             # <div ...> <Link ...>Formations Vidéo</Link> ... </div>

             menu_item = page.get_by_role("menuitem", name="Formations Vidéo").first

             # Wait for it to be visible
             menu_item.wait_for(state="visible", timeout=5000)

             if menu_item.is_visible():
                 print("Dropdown is visible.")
                 page.screenshot(path="verification/dropdown_success.png")
             else:
                 print("Dropdown not visible.")
                 page.screenshot(path="verification/dropdown_fail.png")

        except Exception as e:
             print(f"Dropdown test failed: {e}")
             page.content() # Dump content for debug if needed
             page.screenshot(path="verification/dropdown_error.png")

        browser.close()

if __name__ == "__main__":
    run()
