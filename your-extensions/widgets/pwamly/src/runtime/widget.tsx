/** @jsx jsx */
/**
  Licensing

  Copyright 2022 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/
import {React, FormattedMessage, defaultMessages as jimuCoreDefaultMessage, AllWidgetProps, css, jsx, styled} from 'jimu-core';
import {IMConfig} from '../config';
import { Tabs, Tab, Button} from 'jimu-ui';

export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig>, any>{
  nls = (id: string) => {
    return this.props.intl ? this.props.intl.formatMessage({ id: id, defaultMessage: defaultMessages[id] }) : id;
  }

  render(){
    

 

    const propsTr = Object.keys(this.props).map((prop, i) => {
    

      return <tr key={i}>
        <td>{prop}</td>
        <td>
          {
            JSON.stringify(this.props[prop], null, 2)
          }
        </td></tr>;
    });

    return <div className="widget-demo jimu-widget" style={{overflow: 'auto'}}>
    
    </div>;
  }
}
