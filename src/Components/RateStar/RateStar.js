import { Rate } from 'antd';

function RateStar({evaluation}){

    return (
        <div>
        <Rate allowHalf disabled defaultValue={evaluation} />
        </div>
    )

}
export default RateStar