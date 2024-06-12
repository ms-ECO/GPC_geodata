
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "gadm36_SLE_2_1": {
            "type": "geojson",
            "data": json_gadm36_SLE_2_1
        }
                    ,
        "Settlement_2": {
            "type": "geojson",
            "data": json_Settlement_2
        }
                    ,
        "projects_2021_road_3": {
            "type": "geojson",
            "data": json_projects_2021_road_3
        }
                    ,
        "projects_2021_grainstore_4": {
            "type": "geojson",
            "data": json_projects_2021_grainstore_4
        }
                    ,
        "projects_2021_bridge_5": {
            "type": "geojson",
            "data": json_projects_2021_bridge_5
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_gadm36_SLE_2_1_0",
            "type": "fill",
            "source": "gadm36_SLE_2_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0}
        }
,
        {
            "id": "lyr_gadm36_SLE_2_1_1",
            "type": "symbol",
            "source": "gadm36_SLE_2_1",
            "layout": {'text-offset': [0.0, 0.0], 'text-field': ['get', 'NAME_2'], 'text-size': '15.128571428571426', 'text-font': ['Open Sans Regular']},
            "paint": {'text-color': '#000000'}
        }
,
        {
            "id": "lyr_Settlement_2_0",
            "type": "circle",
            "source": "Settlement_2",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'fclass'], 'city'], ['/', 10.714285714285714, 2], ['==', ['get', 'fclass'], 'town'], ['/', 7.142857142857142, 2], ['==', ['get', 'fclass'], 'village'], ['/', 3.571428571428571, 2], 0], 'circle-color': ['case', ['==', ['get', 'fclass'], 'city'], '#e31a1c', ['==', ['get', 'fclass'], 'town'], '#e31a1c', ['==', ['get', 'fclass'], 'village'], '#e31a1c', '#ffffff'], 'circle-opacity': ['case', ['==', ['get', 'fclass'], 'city'], 1.0, ['==', ['get', 'fclass'], 'town'], 1.0, ['==', ['get', 'fclass'], 'village'], 1.0, 0], 'circle-stroke-width': ['case', ['==', ['get', 'fclass'], 'city'], 1, ['==', ['get', 'fclass'], 'town'], 1, ['==', ['get', 'fclass'], 'village'], 1, 0], 'circle-stroke-color': ['case', ['==', ['get', 'fclass'], 'city'], '#232323', ['==', ['get', 'fclass'], 'town'], '#232323', ['==', ['get', 'fclass'], 'village'], '#232323', '#000000']}
        }
,
        {
            "id": "lyr_Settlement_2_3",
            "type": "symbol",
            "source": "Settlement_2",
            "layout": {'text-offset': [0.0, 0.0], 'text-field': ['get', 'name'], 'text-size': '11.34642857142857', 'text-font': ['Open Sans Regular']},
            "paint": {'text-color': '#000000'}
        }
,
        {
            "id": "lyr_projects_2021_road_3_0",
            "type": "line",
            "source": "projects_2021_road_3",
            "layout": {},
            "paint": {'line-width': 1.6428571428571428, 'line-opacity': 1.0, 'line-color': '#1f78b4'}
        }
,
        {
            "id": "lyr_projects_2021_grainstore_4_0",
            "type": "circle",
            "source": "projects_2021_grainstore_4",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#ffb300', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_projects_2021_bridge_5_0",
            "type": "circle",
            "source": "projects_2021_bridge_5",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#1f78b4', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}