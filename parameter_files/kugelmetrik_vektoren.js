/*
------Parameter-------
turnLorentzTransformOn = 0
nSectorRowsFromSphere = 9
nSectorColumnsFromSphere = 18
radius = 500
nRowsInModel = 3
nColumnsInModel = 3
sectorDistance_x = 30
sectorDistance_y = 30
startZoom =1.0
startViewportTransform_4 =0
startViewportTransform_5 =0
fontSize = 15
startGeodesicsSectors = []
startGeodesicsAngle = []
startGeodesicsOffset_x = []
startGeodesicsOffset_y = []
startGeodesicsLength = []
startGeodesicsOperational = []
startMarksSectors = [0, 1, 2, 3, 4, 4, 5]
startMarksRadius = [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5]
startMarksOffset_x = [0.52, 0.8, 0.68, 0.36, 0.25, 0.35, 0.4]
startMarksOffset_y = [0.27, 0.68, 0.68, 0.8, 0.2, 0.8, 0.84]
startTextsSectors = [0, 1, 2, 3, 4, 4, 5]
startTextContent = ['Reykjavik', 'Dublin', 'Casablanca', 'Helsinki', 'Monaco', 'Kopenhagen', 'Tunis']
startTextsOffset_x = [0.5, 0.62, 0.42, 0.65, 0.45, 0.62, 0.55]
startTextsOffset_y = [0.37, 0.68, 0.68, 0.8, 0.2, 0.8, 0.84]
----------------------
*/

startZoom =1.0
startViewportTransform_4 =0
startViewportTransform_5 =0

let turnLorentzTransformOn =0

let line_colors = ['blue', 'black', 'grey', 'purple', 'orange', 'fuchsia', 'deepskyblue', 'gold', 'silver', 'lightskyblue', 'lightsteelblue', 'greenyellow', 'tomato', 'darkorchid', 'mistyrose', 'salmon'];
let mark_colors = ['black', 'black','black','black','black','black','black','black','black', 'grey', 'grey', 'grey'];
let vector_colors = ['blue', 'black'];
let lineStrokeWidthWhenNotSelected = 2
let lineStrokeWidthWhenSelected =5
sec_name= [ 1, 2, 3, 4, 5, '6.', 7, 8, '9.', ];
sec_fill= [ 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', ];
sec_ID= [ 0, 1, 2, 3, 4, 5, 6, 7, 8, ];
sec_type= [ [], [], [], [], [], [], [], [], [], ];
sec_fontSize= [ 15, 15, 15, 15, 15, 15, 15, 15, 15, ];
sec_top= [ 151.14994701951812, 171.88137789230134, 171.88137789230134, 151.14994701951812, 171.88137789230134, 171.88137789230134, 151.14994701951812, 171.88137789230134, 171.88137789230134, ];
sec_bottom= [ 171.88137789230134, 171.88137789230134, 151.14994701951815, 171.88137789230134, 171.88137789230134, 151.14994701951815, 171.88137789230134, 171.88137789230134, 151.14994701951815, ];
sec_height= [ 174.22483727116122, 174.53292519943295, 174.22483727116122, 174.22483727116122, 174.53292519943295, 174.22483727116122, 174.22483727116122, 174.53292519943295, 174.22483727116122, ];
sec_width= [ 171.88137789230134, 171.88137789230134, 171.88137789230134, 171.88137789230134, 171.88137789230134, 171.88137789230134, 171.88137789230134, 171.88137789230134, 171.88137789230134, ];
sec_offset= [ -10.36571543639161, 0.0, 10.365715436391596, -10.36571543639161, 0.0, 10.365715436391596, -10.36571543639161, 0.0, 10.365715436391596, ];
sec_coords= [ [10.36571543639161, 0, 161.51566245590973, 0, 171.88137789230134, 174.22483727116122, 0, 174.22483727116122], [0, 0, 171.88137789230134, 0, 171.88137789230134, 174.53292519943295, 0, 174.53292519943295], [0, 0, 171.88137789230134, 0, 161.51566245590976, 174.22483727116122, 10.365715436391596, 174.22483727116122], [10.36571543639161, 0, 161.51566245590973, 0, 171.88137789230134, 174.22483727116122, 0, 174.22483727116122], [0, 0, 171.88137789230134, 0, 171.88137789230134, 174.53292519943295, 0, 174.53292519943295], [0, 0, 171.88137789230134, 0, 161.51566245590976, 174.22483727116122, 10.365715436391596, 174.22483727116122], [10.36571543639161, 0, 161.51566245590973, 0, 171.88137789230134, 174.22483727116122, 0, 174.22483727116122], [0, 0, 171.88137789230134, 0, 171.88137789230134, 174.53292519943295, 0, 174.53292519943295], [0, 0, 171.88137789230134, 0, 161.51566245590976, 174.22483727116122, 10.365715436391596, 174.22483727116122], ];
sec_neighbour_top= [ -1, 0, 1, -1, 3, 4, -1, 6, 7, ];
sec_neighbour_right= [ 3, 4, 5, 6, 7, 8, -1, -1, -1, ];
sec_neighbour_bottom= [ 1, 2, -1, 4, 5, -1, 7, 8, -1, ];
sec_neighbour_left= [ -1, -1, -1, 0, 1, 2, 3, 4, 5, ];
sec_posx= [ -201.88137789230134, -201.88137789230134, -201.88137789230134, 0.0, 0.0, 0.0, 201.88137789230134, 201.88137789230134, 201.88137789230134, ];
sec_posy= [ -202.1124186355806, 2.2664625997164762, 206.3372559067418, -202.1124186355806, 2.2664625997164762, 206.3372559067418, -202.1124186355806, 2.2664625997164762, 206.3372559067418, ];
sec_angle= [ 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
startSectors= [ ];
x_Start= [ ];
y_Start= [ ];
x_End= [ ];
y_End= [ ];
startStrokeWidth= [ ];
startFill= [ ];
startStroke= [ ];
startParentSector= [ ];
startLineID= [ ];
markStart_x= [ -198.44375033445533, -150.31696452461094, -170.9427298716871, -24.06339290492219, -42.970344473075336, -25.782206683845203, -17.188137789230126, ];
markStart_y= [ -162.04070606321352, -29.149463936181462, 174.9767851979328, -254.379869816929, 54.62634015954636, -50.09341496011342, 147.10081123454702, ];
markStartStrokeWidth= [ 2, 2, 2, 2, 2, 2, 2, ];
markStartRadius= [ 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, ];
markStartFill= [ mark_colors[0], mark_colors[1], mark_colors[2], mark_colors[3], mark_colors[4], mark_colors[5], mark_colors[6], ];
markStartStroke= [ mark_colors[0], mark_colors[1], mark_colors[2], mark_colors[3], mark_colors[4], mark_colors[5], mark_colors[6], ];
markStartParentSector= [ [0,0], [1,0], [2,0], [3,0], [4,0], [4,1], [5,0], ];
markStartID= [ [0], [1], [2], [3], [4], [5], [6], ];
textStart_x= [ -201.88137789230137, -181.2556125452252, -215.63188812368548, 25.782206683845203, -8.594068894615063, 20.625765347076154, 8.594068894615077, ];
textStart_y= [ -179.46318979032964, -29.149463936181462, 174.9767851979328, -254.379869816929, 54.62634015954636, -50.09341496011342, 147.10081123454702, ];
textStartContent= [ 'Reykjavik', 'Dublin', 'Casablanca', 'Helsinki', 'Monaco', 'Kopenhagen', 'Tunis', ];
textStartFontSize= [ 15, 15, 15, 15, 15, 15, 15, ];
textStartParentSector= [ [0,0], [1,0], [2,0], [3,0], [4,0], [4,1], [5,0], ];
textStartID= [ [0], [1], [2], [3], [4], [5], [6], ];
textStartAngle= [ 0, 0, 0, 0, 0, 0, 0, ];
vectorStartSectors= [ 2, ];
vectorStart_x= [ -201.88137789230137, ];
vectorStart_y= [ 258.6047070880902, ];
vectorEnd_x= [ -180.66817445670495, ];
vectorEnd_y= [ 237.39150365249378, ];
vectorStartStrokeWidth= [ 2, ];
vectorStartFill= [ vector_colors[0], ];
vectorStartStroke= [ vector_colors[0], ];
vectorStartParentSector= [ [2,0], ];
vectorStartstartID= [ 0, ];
