import React,{createContext} from 'react';
import data from '../data.json'

export const FilterContext = createContext()
class FilterContextProvider extends React.Component {
  state= {
  	filter:[],
  	jobData: data,
  }
  
  addFilter=(newFilter)=>{
  	if(this.state.filter.some((any)=>(any===newFilter))){
  		return
  	}
  	this.setState({
	  filter: this.state.filter.concat(newFilter)
	})
  }
  removeFilter=(filterToRemove)=>{
        console.log(filterToRemove)
        this.setState({
          filter: this.state.filter.filter(x=>{ return x !==filterToRemove})
        })
        
  }
  render() {
  	const {filter,jobData} = this.state
  	const newData = jobData.filter(each=>{
		let jobTag = [each.role,each.level,...(each.languages) || [],...(each.tools)||[]]
		return filter.every(value=>{
			return jobTag.includes(value)
		})
	})
	console.log(this.state.filter)
    return (
    <FilterContext.Provider value={{...this.state,addFilter:this.addFilter,newData:newData,removeFilter:this.removeFilter }}>
    	{this.props.children}
    </FilterContext.Provider>
  )
  }
}

export default FilterContextProvider;