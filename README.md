# API Platform with an admin client on Platform.sh

This repository provides a simple configuration to deploy [API Platform](https://api-platform.com) with the ReactJS [admin client](https://github.com/api-platform/admin) on [Platform.sh](http://platform.sh).

The Git repository contains the two following applications: `api` and `admin`.

## Setup

[Create a Platform.sh project](https://platform.sh/free-trial).

Clone the GitHub repository and push its content to your Platform.sh project:

```
git clone git@github.com:GuGuss/platformsh-api-platform-admin.git
cd platformsh-api-platform-admin/
platform project:set-remote [project-id]
git push platform master
```

SSH to the API remote application and create the database schema:

```
platform ssh --app api
php bin/console doctrine:schema:create
```

That's it, you can now access:
* The API backend
* The Admin frontend
