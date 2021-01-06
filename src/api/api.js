const API_KEY="hnvtBcstD7gqHLiF47vPUDejKKn2";

export const getMatches=()=>{
	const url='https://cricapi.com/api/matches?apikey='+API_KEY;

	return fetch(url)
	.then((response)=>response.json())
	.catch((error)=> console.log("ERROR :",error));


}
//export default getMatches;
export const getMatchDetail =(id)=>{
	const url='https://cricapi.com/api/cricketScore?unique_id='+id+'&apikey='+API_KEY;

	return fetch(url)
	.then((response)=>response.json())
	.catch((error)=> console.log("ERROR :",error));


}
