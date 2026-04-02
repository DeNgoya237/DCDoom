
import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={"width": 1280, "height": 720})
        page = await context.new_page()

        # Define pages to verify
        base_url = "http://localhost:3003"
        pages_to_verify = [
            {"path": "/", "name": "home_full.png"},
            {"path": "/products", "name": "products_full.png"},
            {"path": "/products/formation", "name": "category_formation.png"},
            {"path": "/purchases", "name": "purchases_full.png"},
            {"path": "/support", "name": "support_full.png"},
            {"path": "/account", "name": "account_full.png"},
        ]

        output_dir = "/home/jules/verification"
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)

        for item in pages_to_verify:
            url = f"{base_url}{item['path']}"
            print(f"Navigating to {url}...")
            try:
                await page.goto(url)
                # Wait for network idle to ensure CSS is loaded
                await page.wait_for_load_state("networkidle")

                filepath = os.path.join(output_dir, item['name'])
                await page.screenshot(path=filepath, full_page=True)
                print(f"Screenshot saved to {filepath}")
            except Exception as e:
                print(f"Error capturing {url}: {e}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
