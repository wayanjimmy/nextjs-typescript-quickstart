import { Fragment } from 'react'
import Link from 'next/link'

import Page from 'components/page'
import Navigation from 'components/navigation'
import Content from 'components/content'
import relativeTime from 'utils/relativeTime'

const lastUpdated = '2018-09-25T19:30:01+07:00'

export default () => (
  <Page title="About | Next.js TypeScript Quickstart">
    <Navigation />
    <Content>
      <Fragment>
        <h1 className="mt-0">About us.</h1>
        <p>
          Perge porro; Igitur ne dolorem quidem. Omnes enim iucundum motum, quo
          sensus hilaretur. Nam, ut sint illa vendibiliora, haec uberiora certe
          sunt. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne
          refers?
        </p>
        <p>
          Last updated:{' '}
          <time dateTime={lastUpdated}>
            {relativeTime(new Date(lastUpdated))}
          </time>{' '}
          |{' '}
          <Link href="/" passHref>
            <a>Return home</a>
          </Link>
        </p>
      </Fragment>
    </Content>
  </Page>
)
