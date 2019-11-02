var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "FrontierWorld",
        "FrontierWorld - nether"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1572573349",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Overworld Render of My World",
            "zoomLevels": 11,
            "defaultZoom": 1,
            "maxZoom": 11,
            "path": "FrontierOverworld",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "FrontierWorld",
            "last_rendertime": 1572567988,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                2,
                93,
                2
            ],
            "minZoom": 0,
            "spawn": [
                2,
                93,
                2
            ],
            "north_direction": 0
        },
        {
            "name": "Overworld Render of Nether",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "FrontierNetherSplit",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "FrontierWorld - nether",
            "last_rendertime": 1572481672,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                2,
                93,
                2
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
