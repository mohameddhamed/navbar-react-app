//in JSX expressions that contain both an opening tag and a closing tag, 
//the content between those tags is passed as a special prop: props.children

//import BrowserRouter in index and wrap your app within it

//in app import route and routes then delete switch and wrap all the route components in Routes
//each route has path and element attributes

//in navbar import Link then replace <a with <Link and href with to

//import useResolvedPath and useMatch
//then in customLink take the useResolvedPath(to) as variable then create a isActive var
//which takes the useMatch(path:resolvedPath, end:true) then put it in className