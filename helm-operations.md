# Helm Operations

This file will serve as a list of the helm cli subcommands we need to research in order to implement in our API.
If you research any of these subcommands, please populate the api-spec.yaml file with the information you find.


### Operations

It is likely that the following subcommands use the same API for downloading charts and their metadata.

* pull       -  download a chart from a repository and (optionally) unpack it in local directory
* install    -  install a chart
* upgrade    -  upgrade a release
* rollback   -  roll back a release to a previous revision
* verify     -  verify that a chart at the given path has been signed and is valid # https://helm.sh/docs/topics/provenance/#chart-repositories
---

It is likely that the following subcommands use the same API to get information from the index.yaml file

* repo         -  add, list, remove, update, and index chart repositories
* search       -  search for a keyword in charts
* show         -  show information of a chart
---

This subcommand likely use both the APIs alluded to above
* push         -  push a chart to remote

This subcommand is likely unrelated to the repository but we need to research it on the offchance
* status       -  display the status of the named release