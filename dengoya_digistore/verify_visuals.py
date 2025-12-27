import os
import sys
from playwright.sync_api import sync_playwright

def verify_visuals():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Base URL - assuming server is running on port 3000
        base_url = "http://localhost:3003"

        # 1. Verify Home Page
        print("Checking Home Page...")
        page.goto(base_url)
        page.wait_for_selector('h1') # Wait for hero text
        page.screenshot(path="dengoya_digistore/public/screenshots/home_final.png", full_page=True)
        print("Home Page Screenshot taken.")

        # 2. Verify Products Page
        print("Checking Products Page...")
        page.goto(f"{base_url}/products")
        page.wait_for_selector('h1')
        page.screenshot(path="dengoya_digistore/public/screenshots/products_final.png", full_page=True)
        print("Products Page Screenshot taken.")

        # 3. Verify Cart Page
        print("Checking Cart Page...")
        page.goto(f"{base_url}/achats")
        page.wait_for_selector('h1')
        page.screenshot(path="dengoya_digistore/public/screenshots/cart_final.png", full_page=True)
        print("Cart Page Screenshot taken.")

        browser.close()

if __name__ == "__main__":
    verify_visuals()
