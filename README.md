# WordPress Update Scripts

Scripts to automate updates on Wordpress sites.

## Prerequisites
- `node` installed locally

## Installation

1. Clone this repo

    `git clone git@github.com:dylanjameswagner/WordPress-Update-Scripts.git`

    For this example to `~/Projects/WordPress-Update-Scripts`

2. Make the update files executable

    `chmod +x ~/Projects/WordPress-Update-Scripts/update-plugins ~/Projects/WordPress-Update-Scripts/update-themes`

3. From your terminal change directory into your project

    `cd ~/Projects/exampleproject.com/`

4. Start your local Lando site `lando start`, pull a database as needed

    `lando pull --code=none --database=live --files=none`

5. Run the plugin update script as needed

    `~/Projects/WordPress-Update-Scripts/update-plugins`

6. Run the theme update script as needed

    `~/Projects/WordPress-Update-Scripts/update-themes`
