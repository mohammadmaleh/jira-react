/** @format */

import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(
    <App
      test={function (): void {
        throw new Error('Function not implemented.')
      }}
    />
  )
})
