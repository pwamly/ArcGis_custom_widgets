/** @jsx jsx */
import { React, AllWidgetProps, jsx } from "jimu-core";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
import { Card, Button } from "jimu-ui";
import { ScreenOutlined } from "jimu-icons/outlined/brand/screen";
import Sketch from "esri/widgets/Sketch";
import GraphicsLayer from "esri/layers/GraphicsLayer";
import { TrashOutlined } from "jimu-icons/outlined/editor/trash";
import { InfoOutlined } from "jimu-icons/outlined/suggested/info";
import LayerList from "esri/widgets/LayerList";



export default class Widget extends React.PureComponent<
  AllWidgetProps<any>,
  any
> {
  // Initializing glaphic layer
  graphicsLayer = new GraphicsLayer({
    id: "export-map",
    listMode: "hide",
    visible: true,
  });

  // initial state values
  state = {
    jimuMapView: null,
    snap: null,
    saveImage: null,
    deleteL: null,
    btnfocus: false,
    exposeSketch: null,
  };

  activeViewChangeHandler = (jmv: JimuMapView) => {
    let area = null;
   
    if (jmv) {
      
    }
    // create a new layer list
    const layerList = new LayerList({
      view: jmv.view
    });
    
  };
  render() {
    if (this.props.state == "CLOSED") {
      
    }
    return (
      <div
        className="widget-starter jimu-widget"
        id="pwamly"
        style={{ display: "flex", flexDirection: "column", gap: "8%" }}
      >
        {this.props.hasOwnProperty("useMapWidgetIds") &&
          this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds[0] && (
            <JimuMapViewComponent
              useMapWidgetId={this.props.useMapWidgetIds?.[0]}
              onActiveViewChange={this.activeViewChangeHandler}
            />
          )}
        <Card>
          <p>joel</p>
        </Card>
        

      </div>
    );
  }
}
