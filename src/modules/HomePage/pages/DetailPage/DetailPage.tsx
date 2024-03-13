import { Fragment } from 'react'
import Header from '../../components/Header'
import DetailJob from '../../components/DetailJob'
import Footer from '../../components/Footer'
import useQueryJobConfig from '../../hooks/useQueryJobConfig'
import { GetJobQuery } from '../../services'

const DetailPage = () => {
  const queryJobConfig = useQueryJobConfig()

  const getJobQuery = new GetJobQuery(queryJobConfig.id as string)
  const job = getJobQuery.fetch()

  return (
    <Fragment>
      <Header />
      <DetailJob job={job} />
      <Footer />
    </Fragment>
  )
}

export default DetailPage
