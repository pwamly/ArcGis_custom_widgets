/** @jsx jsx */
import { React, AllWidgetProps, jsx } from "jimu-core";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
import { Card, CardHeader, CardBody, CardFooter, Button } from "jimu-ui";
import { ScreenOutlined } from "jimu-icons/outlined/brand/screen";
import Sketch from "esri/widgets/Sketch";
import GraphicsLayer from "esri/layers/GraphicsLayer";
import { TrashOutlined } from "jimu-icons/outlined/editor/trash";
import { InfoOutlined } from "jimu-icons/outlined/suggested/info";
import '../../core.css';

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
    deleteL:null
  };

  activeViewChangeHandler = (jmv: JimuMapView) => {
    let area = null;

    function clamp(value, from, to) {
      return value < from ? from : value > to ? to : value;
    }
    if (jmv) {
      this.setState({
        jimuMapView: jmv,
      });
      jmv.view.when(() => {
        const sketch = new Sketch({
          layer: this.graphicsLayer,
          view: jmv.view,
          creationMode: "update",
        });

        function sketchsnap() {
          sketch.layer.removeAll();
          sketch.create("rectangle");
        }

        jmv.view.on("drag", (event) => {
          // prevent navigation in the view
          event.stopPropagation();
          // when the user starts dragging or is dragging
          if (event.action !== "end") {
            // calculate the extent of the area selected by dragging the cursor
            const xmin = clamp(
              Math.min(event.origin.x, event.x),
              0,
              jmv.view.width
            );

            const xmax = clamp(
              Math.max(event.origin.x, event.x),
              0,
              jmv.view.width
            );
            const ymin = clamp(
              Math.min(event.origin.y, event.y),
              0,
              jmv.view.height
            );
            const ymax = clamp(
              Math.max(event.origin.y, event.y),
              0,
              jmv.view.height
            );
            area = {
              x: xmin,
              y: ymin,
              width: xmax - xmin,
              height: ymax - ymin,
            };
            // assign exposing area value
            area = area;
          }
        });

        const takeScreenshot = () => {
          jmv.view
            .takeScreenshot({
              area: area,
              format: "jpg",
              quality: 96,
            })
            .then((screenshot) => {
              downloadImage("Mappa.jpg", screenshot.dataUrl);
            });
        };

        function downloadImage(filename, dataUrl) {
          // a link is created and a programmatic click will trigger the download
          const element = document.createElement("a");
          element.setAttribute("href", dataUrl);
          element.setAttribute("download", filename);
          element.style.display = "none";
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);
        }

        function deleteLayer(){
          sketch.layer.removeAll();
        }

        this.setState({
          snap: sketchsnap,
          saveImage: takeScreenshot,
          deleteL:deleteLayer
        });

        this.state.jimuMapView.view.map.add(this.graphicsLayer);

        sketch.on("create", (event) => {
          if (event.state === "complete") {
          }
        });
      });
    }
  };

  render() {
    return (
      <div className="widget-starter jimu-widget" style={{display:'flex',flexDirection:'column',gap:'8%'}}>
        {this.props.hasOwnProperty("useMapWidgetIds") &&
          this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds[0] && (
            <JimuMapViewComponent
              useMapWidgetId={this.props.useMapWidgetIds?.[0]}
              onActiveViewChange={this.activeViewChangeHandler}
            />
          )}
        <Card>
          
            <div style={{display:'flex',flexDirection:'row',gap:'5%'}}>
              <div style={{paddingTop:'13%',paddingLeft:'3%'}}><InfoOutlined color="blue" size="s"  /></div>
              <h5 style={{width:'90%'}}>Seleziona I'area da esporta. Una volta cliccato il rettangolo si avviera I'azione che permette di itneragire con la mappa</h5>
            </div>
        </Card>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <div>
            <span style={{ fontSize: "14" }}>Disegna I'area</span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "25%",
              }}
            >
              {" "}
              <ScreenOutlined className="btn"
                onClick={() => this.state.snap()}
                size={30}
                color="blue"
              />
              <TrashOutlined className="btn"
                onClick={() => this.state.deleteL()}
                size={30}
                color="red"
              />
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          {" "}
          <Button onClick={() => this.state.saveImage()}>Esporta mappa</Button>
        </div>
      </div>
    );
  }
}