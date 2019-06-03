import React, { Component, Fragment } from 'react'

class QuantityTable extends Component {
  state = {
    // quantity:''
  }

  renderColorColumn(color){
    switch(color){
      case 'red':
        return '红色';
      case 'orange':
        return '橙色';
      case 'yellow':
        return '黄色';
      case 'green':
        return '绿色';
      case 'cyan':
        return '青色';
      case 'blue':
        return '蓝色';
      case 'purple':
        return '紫色';
      case 'brown':
        return '棕色';
      default:
        return '';
    }
  }

  render () {
    let color = this.props.color;
    let size = this.props.size;
    let selectedColor = {
      red: 0,
      orange: 0,
      yellow: 0,
      green: 0,
      cyan: 0,
      blue: 0,
      purple: 0
    }
    return (
      <tbody>
        {
          Object.keys(color).map((colorKey, colorIndex) => {
            // console.log(color[colorKey]);
            if(color[colorKey]){
              selectedColor[colorKey] = 0;
              return (
                <Fragment key={colorIndex}>
                  {
                    Object.keys(size).map((sizeKey, sizeIndex)=> {
                      if(size[sizeKey]){
                        selectedColor[colorKey]++;
                        return (
                          <tr key={sizeIndex}>
                            {
                              selectedColor[colorKey] === 1 
                              ? 
                              <td rowSpan={(Object.keys(size).filter(value => size[value]===true)).length}>
                                {this.renderColorColumn(colorKey)}
                              </td>
                              : 
                              null
                            }
                            <td>{sizeKey}</td>
                            <td>
                              <input 
                                type="text" 
                                onChange={(e)=>this.props.changeQuantity({
                                  color: colorKey,
                                  size: sizeKey,
                                  quantity: e.target.value   
                                })} 
                                // name={this.state.quantity}
                              />
                            </td>
                          </tr>
                        )
                      }
                    })
                  }
                </Fragment>
              )
            }
          }
        )
      }
      </tbody>
    )
  }
}

export default QuantityTable