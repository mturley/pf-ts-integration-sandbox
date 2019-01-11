import React from 'react';
import ReactDOM from 'react-dom';
import puppeteer from 'puppeteer';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('loads properly in a browser', async () => {
  let browser = await puppeteer.launch({
    headless: true,
  });
  let page = await browser.newPage();

  await page.goto('http://localhost:3030');
  const found = (await page.content()).match(/Tooltip/gi)
  expect(found).toBeTruthy();
});

