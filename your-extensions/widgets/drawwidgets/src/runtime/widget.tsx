
import {React,jsx,AllWidgetProps, WidgetManager, appActions} from 'jimu-core'
import { JimuMapViewComponent,JimuMapView } from 'jimu-arcgis'
import Sketch from "@arcgis/core/widgets/Sketch";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";

export default class DrawingWidget extends React.PureComponent<AllWidgetProps<any>,any>{
    
    sketch = null;
    graphicsLayer=null

    _init(){
        this.graphicsLayer = new GraphicsLayer();
        const map = new Map({
            basemap:"topo-vector",
            layers:[this.graphicsLayer],
        })

 

        const view = new MapView({
            container:"display_map",
            map:map,
            zoom:5,
            center:[90,45],
            
        })

        view.when(()=>{
            const sketch = new Sketch({
                layer:this.graphicsLayer,
                view:view,
                creationMode:"update"
            })
            view.ui.add(sketch,"top-right");
            sketch.on("create",(event)=>{
                if(event.state === "complete"){
                  console.log(event.graphic.geometry.toJSON());
                  // console.log(webMercatorUtils.webMercatorToGeographic(event.graphic.geometry).toJSON());
                  this.openOff(event.graphic.geometry.toJSON());
                
                }
              
            })
        })
    }

    openOff=(data={})=>{
      this.props.dispatch(appActions.widgetStatePropChange("widget_3","spatialData",data));
    }

    componentDidMount(): void {
        this._init();
    }

    render(): React.ReactNode {
        return (
            <div 
                id = "display_map" 
                style = {{   
                    padding: 0,
                    margin:0,
                    height:900,
                    width: "100%"
                }}
            >
            </div>
        )
    }
}