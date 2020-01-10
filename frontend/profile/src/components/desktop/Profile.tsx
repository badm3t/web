import React from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Column, Layout, Row } from '@ui/layout'
import { Text } from '@ui/text'
import { Input } from '@ui/input'
import { Button } from '@ui/button'
import { RouteLink } from '@ui/link'
import messages from '../../messages'

interface IErrors {
  email?: string
  password?: string
}

interface Props {
  intl: InjectedIntl
  firstName: string
  lastName: string
  onSave: () => void
  onChangeLastName: (value: string) => void
  onChangeFirstName: (value: string) => void
  // onChangeSaveProfile: (value: string) => void
}

const Registration = ({
  firstName,
  lastName,
  intl,
  onChangeFirstName,
  onChangeLastName,
  onSave,
}: Props) => (
  <Column align='center'>
    <Layout basis={60} />
    <Text size='2xl' height='xs' weight='bold'>
      {intl.formatMessage(messages.edit)}
    </Text>
    <Layout basis={40} />
    <Row justify='center'>
      <Layout basis={360}>
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.firstName)}
        </Text>
      </Layout>
    </Row>
    <Layout basis={12} />
    <Row justify='center'>
      <Layout basis={360}>
        <Input
          type='text'
          border='lightGray'
          // error={!!errors.firstName}
          value={firstName}
          onChange={onChangeFirstName}
          placeholder={intl.formatMessage(messages.enterFirstName)}
        />
      </Layout>
    </Row>
    <Layout basis={24} />
    <Row justify='center'>
      <Layout basis={360}>
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.lastName)}
        </Text>
      </Layout>
    </Row>
    <Layout basis={12} />
    <Row justify='center'>
      <Layout basis={360}>
        <Input
          type='text'
          border='lightGray'
          // error={!!errors.password}
          value={lastName}

          onChange={onChangeLastName}
          placeholder={intl.formatMessage(messages.enterLastName)}
        />
      </Layout>
    </Row>
    <Layout basis={24} />
    <Row justify='center'>
      <Layout basis={360}>
        <Button
          text
          onClick={onSave}
        >
          {intl.formatMessage(messages.save)}
        </Button>
      </Layout>
    </Row>
    <Layout basis={16} />
    <RouteLink
      to='/'
      size='s'
      height='xs'
      weight='medium'
      color='black'
      hoverColor='blueBayoux'
    >
      {intl.formatMessage(messages.root)}
    </RouteLink>
  </Column>
)

export default injectIntl(Registration)
