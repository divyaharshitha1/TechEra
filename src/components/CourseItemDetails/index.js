import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import Navbar from '../Navbar'

const apiStatusConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class CourseItemDetails extends Component {
  state = {
    courseDetails: {},
    apiStatus: apiStatusConstraints.initial,
  }

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    this.setState({apiStatus: apiStatusConstraints.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/te/courses/${id}`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
        name: data.course_details.name,
        id: data.course_details.id,
      }
      this.setState({
        courseDetails: updatedData,
        apiStatus: apiStatusConstraints.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstraints.failure})
    }
  }

  onRetryBtn = () => {
    this.getCourseDetails()
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure-head">Oops! Something Went Wrong</h1>
      <p className="failure-para">
        We cannot seem to find the page you are looking for.
      </p>
      <button className="failure-btn" type="button" onClick={this.onRetryBtn}>
        Retry
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#00bfff" height={50} width={50} />
    </div>
  )

  renderCourseDetails = () => {
    const {courseDetails} = this.state
    const {name, imageUrl, description} = courseDetails
    return (
      <div className="items">
        <div className="item-container">
          <img src={imageUrl} className="image" alt={name} />
          <div className="name-container">
            <h1 className="course-name">{name}</h1>
            <p className="course-desc">{description}</p>
          </div>
        </div>
      </div>
    )
  }

  renderConditions = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstraints.success:
        return this.renderCourseDetails()
      case apiStatusConstraints.failure:
        return this.renderFailureView()
      case apiStatusConstraints.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="responsive-container">{this.renderConditions()}</div>
      </>
    )
  }
}

export default CourseItemDetails
