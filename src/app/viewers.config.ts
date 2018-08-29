// import { CesiumViewerComponent } from './viewers-extra/cesium-viewer/cesium-viewer.component';
//import { GeometryViewerComponent } from './viewers-extra/geometry-viewer/geometry-viewer.component';

import { DEFAULT_VIEWERS } from './viewers-default';

const EXTRA_VIEWERS = [
/*		{
			name: "cesium-viewer",
			tip: "To View Geospatial Data",
			icon: "public",
			viewer: CesiumViewerComponent
		}*/
]

export const VIEWERS = [ ...DEFAULT_VIEWERS, ...EXTRA_VIEWERS ]
