import React from 'react'
import { connect } from 'react-redux'

import Waiting from './Waiting'
import ErrorComponent from './Error'
import FoodItem from './FoodItem'
import Filter from './Filter'
import { getInSeasonFoods } from '../actions/getInSeasonFoodsActions'
import { getFilteredArray } from '../utils/filiterUtils'

class FoodList extends React.Component {
  componentDidMount () {
    const { getInSeasonFoods } = this.props
    getInSeasonFoods(this.props.month)
  }

  componentDidUpdate (preProps) {
    const { getInSeasonFoods } = this.props
    if (this.props.month !== preProps.month) {
      getInSeasonFoods(this.props.month)
    }
  }

  render () {
    return (
      <>
        <div className="container">
          <Filter />
          <ErrorComponent />
          <Waiting />
          <main>
            {
              this.props.foods.map((food, index) => {
                return <FoodItem key={food.id} food={food} index={index} month={this.props.month}/>
              }
              )
            }
          </main>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    filter: state.filter,
    foods: getFilteredArray(state.foodList, state.month, state.filter),
    month: state.month
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInSeasonFoods: (m) => { dispatch(getInSeasonFoods(m)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)
