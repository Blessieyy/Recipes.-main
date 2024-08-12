export default function Recipes(){
    const searches = ["Pizza", "Burger", "juice", "biriyani", "salad", "ice cream", "lasanga", "pudding", "soup"]
    
    return(
        <div>
            <div className="previous-searches">
                <h2>Previous Searches</h2>
                <div className="previous-searches-container">
                    { searches.map (search =>(<div className="search-item">
                            {search}
                    </div>))}
                </div>
            </div>
        </div>
    )
}