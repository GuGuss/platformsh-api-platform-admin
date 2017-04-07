# API Platform with an admin client on Platform.sh

This repository provides a simple configuration to deploy [API Platform](https://api-platform.com) with the ReactJS [admin client](https://github.com/api-platform/admin) on [Platform.sh](http://platform.sh).

The Git repository contains the two following applications: `api` and `admin`.

## Setup

[Create a Platform.sh project](https://platform.sh/free-trial).

Clone the GitHub repository and push its content to your Platform.sh project:

```
git clone git@github.com:GuGuss/platformsh-api-platform-admin.git
cd platformsh-api-platform-admin/
git remote add platform [project-id]@git.eu.platform.sh:[project-id].git
git push platform master
```

SSH to the API remote application and create the database schema:

```
ssh [project-id]-master-[string-identifier]--api@ssh.eu.platform.sh
php bin/console doctrine:schema:create
```

That's it, you can now access:
* The [API backend](https://api---master-7rqtwti-kpfnplkpyfk2k.eu.platform.sh)
* The [admin frontend](https://master-7rqtwti-kpfnplkpyfk2k.eu.platform.sh)
