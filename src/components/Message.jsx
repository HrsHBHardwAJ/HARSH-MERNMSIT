export const Message=({msg, className,value=""})=>{
    const myclassname=`${className} text-center`
    return(<h1 className={myclassname}>{msg} {value}</h1>);
}