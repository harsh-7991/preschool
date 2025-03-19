
import './Programs.css'
import preprimary from '../../assets/preprimary.jpg'
import pre from '../../assets/pre.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import Secondary from '../../assets/Secondary.jpg'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={preprimary} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Preprimary Education</p>
        </div>
      </div>
      <div className="program">
        <img src={pre} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Primary Education</p>
        </div>
      </div>
      <div className="program">
        <img src={Secondary} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Secondary Education</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
