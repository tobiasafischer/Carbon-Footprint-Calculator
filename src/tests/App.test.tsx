// @ts-nocheck
import React from 'react'
import { act, fireEvent, getByTestId, logRoles, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import App from '../App'

global.matchMedia =
   global.matchMedia ||
   function () {
      return {
         addListener: jest.fn(),
         removeListener: jest.fn(),
      }
   }

test('full app rendering/navigating', async () => {
   act(() => {
      render(<App />)
   })
   const user = userEvent.setup()

   // verify page content for default route
   expect(screen.getByText(/Calculate Housing Carbon Footprint/i)).toBeInTheDocument()

   // verify page content for expected route after navigating
   await user.click(screen.getByText(/Transportation/i))
   expect(screen.getByText(/Calculate Transportation Carbon Footprint/i)).toBeInTheDocument() //  // verify page content for expected route after navigating

   // verify page content for expected route after navigating
   await user.click(screen.getByText(/Food/i))
   expect(screen.getByText(/Calculate Food Carbon Footprint/i)).toBeInTheDocument()
})

test('onSubmit Fires for Housing', () => {
   act(async () => {
      const onSubmit = jest.fn()
      const { container, getByText } = render(<App onSubmit={onSubmit} />)

      const inputValue = '12'
      const element = container.querySelector('#electricity')
      logRoles(element)

      fireEvent.change(element, {
         target: { value: inputValue },
      })
      fireEvent.click(getByText(/Submit/i))
      expect(onSubmit).toBeCalled()
   })
})

test('onSubmit Fires for Transportation', () => {
   act(async () => {
      const onSubmit = jest.fn()
      const { getByText, container } = render(<App onSubmit={onSubmit} />)

      const user = userEvent.setup()

      // verify page content for expected route after navigating
      await user.click(screen.getByText(/Transportation/i))

      const inputValue = '12'
      const element = container.querySelector('#vehicle')
      fireEvent.change(element, {
         target: { value: inputValue },
      })
      fireEvent.click(getByText(/Submit/i))
      expect(onSubmit).toBeCalled()
   })
})

test('onSubmit Fires for Food', () => {
   act(async () => {
      const onSubmit = jest.fn()
      const { getByText, container } = render(<App onSubmit={onSubmit} />)
      const user = userEvent.setup()

      // verify page content for expected route after navigating
      await user.click(screen.getByText(/Food/i))

      const inputValue = '12'
      const element = container.querySelector('#redMeat')
      fireEvent.change(element, {
         target: { value: inputValue },
      })
      fireEvent.click(getByText(/Submit/i))
      expect(onSubmit).toBeCalled()
   })
})
