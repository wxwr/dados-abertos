# Graph visualization for brazilian federal representatives expenses
URL: https://wxwr.github.io/dados-abertos/

Datasource: https://dadosabertos.camara.leg.br/

## Tech stack:

- Python/Jupyter( jupyter.org ) to process .csv files* with all expenses and create nodes/edges json files.
- Vis.js( https://visjs.org/ ) for graph visualization 
- UI is just a simple static html(Bootstrap/Select2)
- Azure Application Insights for metrics

*Source .csv files processed by Jupyter are ignored on the repo, but they can be downloaded here ( https://dadosabertos.camara.leg.br/swagger/api.html#staticfile > it is the first set of .csv files on the page)