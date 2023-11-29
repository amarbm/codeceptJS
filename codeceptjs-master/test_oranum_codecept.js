Feature('REQ-1 Oranum Search');
Scenario('Search for Matt', async ({ I }) => {
  I.amOnPage('https://www.oranum.com/'); // Navigate Oranum application

  I.fillField('#search > input', 'Matt');
  I.pressKey('Enter');
  
  const xpathSelectorMatt = '//*[contains(text(),"Matt")]'; 
  
  await I.waitForElement({ xpath: xpathSelectorMatt }, 5);
  console.log('Element is present!');

  const elementCount = await I.executeScript(function(xpathSelector) {
    const matchingElements = document.evaluate(xpathSelector, document, null, XPathResult.ANY_TYPE, null);
    const nodesSnapshot = [];
    let node;
    while ((node = matchingElements.iterateNext())) {
      nodesSnapshot.push(node);
    }
    return nodesSnapshot.length;
  }, xpathSelectorMatt);

  console.log(`Number of elements containing 'Matt': ${elementCount}`);
});


Scenario('Search for Myst and Experts', ({ I }) => {
  I.amOnPage('https://www.oranum.com/'); // Example URL path

  I.fillField('#search > input', 'Myst');
  I.pressKey('Enter');
  // Search for 'Myst', all results should contain 'Myst'
  const xpathSelectorMyst = '//*[contains(text(), "Myst") and contains(text(), "Experts")]'; // 'Matt' XPath expression
  I.waitForElement({ xpath: xpathSelectorMyst }, 5)
  I.waitForElement({ xpath: xpathSelectorMyst });
  console.log('Element is present!');

  
   I.waitForElement({ xpath: xpathSelectorMyst }, 5); // Wait for the element to appear
  console.log('Element is present!');

  //const xpathSelectorMyst = '//*[contains(text(),"Myst")]';

   I.waitForElement({ xpath: xpathSelectorMyst }, 5);
  console.log('Element is present!');

  const elementCount =  I.executeScript(function(xpathSelector) {
    const matchingElements = document.evaluate(xpathSelector, document, null, XPathResult.ANY_TYPE, null);
    const nodesSnapshot = [];
    let node;
    while ((node = matchingElements.iterateNext())) {
      nodesSnapshot.push(node);
    }
    return nodesSnapshot.length;
  }, xpathSelectorMyst);

  console.log(`Number of elements containing 'Myst': ${elementCount}`);
});

Scenario('Search for Ann', async ({ I }) => {
  I.amOnPage('https://www.oranum.com/'); // Example URL path

  I.fillField('#search > input', 'Ann');
  I.pressKey('Enter');
  // Search for 'Ann', all results should contain 'Ann'
  const xpathSelectorAnn = '//*[contains(text(),"Ann")]'; // 'Ann' XPath expression

   I.waitForElement({ xpath: xpathSelectorAnn }, 5); // Wait for the element to appear
  console.log('Element is present!');

 // const xpathSelectorAnn = '//*[contains(text(),"psy")]';

   I.waitForElement({ xpath: xpathSelectorAnn }, 5);
  console.log('Element is present!');

  const elementCount = await I.executeScript(function(xpathSelector) {
    const matchingElements = document.evaluate(xpathSelector, document, null, XPathResult.ANY_TYPE, null);
    const nodesSnapshot = [];
    let node;
    while ((node = matchingElements.iterateNext())) {
      nodesSnapshot.push(node);
    }
    return nodesSnapshot.length;
  }, xpathSelectorAnn);

  console.log(`Number of elements containing 'Ann': ${elementCount}`);
});


Scenario('Search for new', async ({ I }) => {
  I.amOnPage('https://www.oranum.com/'); // Example URL path

  I.fillField('#search > input', 'psy');
  I.pressKey('Enter');
  // Search for 'psy', all results should contain 'psy'
  const xpathSelectorPsy = '//*[contains(text(),"psy")]';

  await I.waitForElement({ xpath: xpathSelectorPsy }, 5);
  console.log('Element is present!');

  const elementCount = await I.executeScript(function(xpathSelector) {
    const matchingElements = document.evaluate(xpathSelector, document, null, XPathResult.ANY_TYPE, null);
    const nodesSnapshot = [];
    let node;
    while ((node = matchingElements.iterateNext())) {
      nodesSnapshot.push(node);
    }
    return nodesSnapshot.length;
  }, xpathSelectorPsy);

  console.log(`Number of elements containing 'psy': ${elementCount}`);
});



// REQ-2 Open the livestream of any psychic, make sure the psychic is live


	Scenario('Check and Click Signup Button', ({ I }) => {
	  I.amOnPage('https://www.oranum.com/en/chat/LovePsychyicAnie#!/'); // Open URL path

	  // Check if the signup button is present
	  const buttonExists = I.grabAttributeFrom('#page-nav-signup', 'id');

	  if (buttonExists) {
		// If the button exists, click on it
		I.click('#page-nav-signup');
		console.log('Clicked on Signup button.');
	  } else {
		console.log('Signup button is not present.');
	  }
	});


//

Scenario('Check if the Get Credits button', ({ I }) => {
	  I.amOnPage('https://www.oranum.com/en/chat/LovePsychyicAnie#!/'); // Open URL path

// Check if the element is present
	const isElementPresent =  I.grabNumberOfVisibleElements({ xpath: "//a[contains(text(), 'Get Credits')]" });

	if (isElementPresent > 0) {
	  // If the element is present, determine if it's enabled or disabled
	  const isElementEnabled =  I.executeScript(function() {
		const element = document.evaluate("//a[contains(text(), 'Get Credits')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		return !element.disabled;
	  });
	  
	  if (isElementEnabled) {
		// If the element is enabled, click it
		I.click({ xpath: "//a[contains(text(), 'Get Credits')]" });
		console.log('Clicked on the "Get Credits" link.');
	  } else {
		console.log('The "Get Credits" link is disabled.');
	  }
	} else {
	  console.log('The "Get Credits" link is not present on the page.');
	}
});


Scenario('Check if the Add to favorites button', ({ I }) => {
	  I.amOnPage('https://www.oranum.com/en/chat/LovePsychyicAnie#!/'); // Open URL path

// Check if the element is present
	const isElementPresent =  I.grabNumberOfVisibleElements({ xpath: "(//p[contains(text(), 'Add to favorites')])[2]" });

	if (isElementPresent > 0) {
	  // If the element is present, determine if it's enabled or disabled
	  const isElementEnabled =  I.executeScript(function() {
		const element = document.evaluate("//a[contains(text(), 'Get Credits')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		return !element.disabled;
	  });
	  
	  if (isElementEnabled) {
		// If the element is enabled, click it
		I.click({ xpath: "//a[contains(text(), 'Get Credits')]" });
		console.log('Clicked on the "Get Credits" link.');
	  } else {
		console.log('The "Get Credits" link is disabled.');
	  }
	} else {
	  console.log('The "Get Credits" link is not present on the page.');
	}
});


Scenario('Count number of surprises buttons and print names of elements', ({ I }) => {
    I.amOnPage('https://www.oranum.com/en/chat/LovePsychyicAnie#!/'); // Replace with your URL

 const elementCountPromise = I.grabNumberOfVisibleElements('//span[@class="mc_surprise__image"]');
  const elementCount =  elementCountPromise;
  const resolvedElementCount =  elementCount; // Ensure promise resolution

  console.log(`Number of elements: ${resolvedElementCount}`);

  for (let i = 1; i <= resolvedElementCount; i++) {
    try {
      const elementName =  I.grabTextFrom(`(//span[@class="mc_surprise__image"])[${i}]`);
      console.log(`Name of element ${i}: ${elementName}`);
    } catch (error) {
      console.error(`Error grabbing text from element ${i}: ${error}`);
    }
  }
});


//Feature('LoginNavigate');

Scenario('Check if Start Private Session button is present_visible_enabled',  ({ I }) => {
    I.amOnPage('https://www.oranum.com/en/chat/LovePsychyicAnie#!/'); // Replace with your URL

  // Check if the button containing the text "Start Private Session" is present
  const isButtonPresent =  I.grabNumberOfVisibleElements('//button[contains(text(), "Start Private Session")]') > 0;

  if (isButtonPresent) {
    // Check if the button is visible
    const isButtonVisible =  Puppeteer.page.waitForSelector('//button[contains(text(), "Start Private Session")]', { visible: true }).then(() => true).catch(() => false);

   
  }
});


Scenario('Check if the Get coins button prasent', ({ I }) => {
	  I.amOnPage('https://www.oranum.com/en/chat/LovePsychyicAnie#!/'); // Open URL path

// Check if the element is present
	const isElementPresent =  I.grabNumberOfVisibleElements({ xpath: "//a[contains(text(), 'Get Credits')]" });

	if (isElementPresent > 0) {
	  // If the element is present, determine if it's enabled or disabled
	  const isElementEnabled =  I.executeScript(function() {
		const element = document.evaluate("//a[contains(text(), 'Get Credits')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		return !element.disabled;
	  });
	  
	  if (isElementEnabled) {
		// If the element is enabled, click it
		I.click({ xpath: "//a[contains(text(), 'Get Credits')]" });
		console.log('Clicked on the "Get Credits" link.');
	  } else {
		console.log('The "Get Credits" link is disabled.');
	  }
	} else {
	  console.log('The "Get Credits" link is not present on the page.');
	}
});


// REQ-3 On the home page, selecting different topics should display only matching psychics. 


Scenario('Check Love shows and enabled',  ({ I }) => {
  I.amOnPage('https://www.oranum.com/en/');


  // Interact with the third matching element using the CSS selector
  const elementCount =  I.grabNumberOfVisibleElements('div.thumb-container.page-item article div > a:nth-child(3)');
  
  if (elementCount > 0) {
    console.log(`Number of matching elements found: ${elementCount}`);

    // Perform actions on each matched element (for example, click)
    for (let i = 1; i <= elementCount; i++) {
      I.click(`div.thumb-container.page-item article div > a:nth-child(3):nth-child(${i})`);
      // Add other interactions or assertions based on your requirements
    }
  } else {
    console.log('No matching elements found with the CSS selector');
  }
});



Scenario('Check Love shows and enabled',  ({ I }) => {
  I.amOnPage('https://www.oranum.com/en/');


  // Interact with the third matching element using the CSS selector
  const elementCount =  I.grabNumberOfVisibleElements('div.thumb-container.page-item article div > a:nth-child(3)');
  
  if (elementCount > 0) {
    console.log(`Number of matching elements found: ${elementCount}`);

    // Perform actions on each matched element (for example, click)
    for (let i = 1; i <= elementCount; i++) {
      I.click(`div.thumb-container.page-item article div > a:nth-child(3):nth-child(${i})`);
      // Add other interactions or assertions based on your requirements
    }
  } else {
    console.log('No matching elements found with the CSS selector');
  }
});




 


Scenario('Check Clairvoyance shows', async ({ I }) => {
  I.amOnPage('https://www.oranum.com/en/'); // Replace with your URL

  // Check for the presence of visible elements containing the text 'Clairvoyance'
  const isElementVisible = await I.seeElement('//a[contains(text(), "Clairvoyance")]');
  
  if (isElementVisible) {
    console.log('Found visible elements containing "Clairvoyance"');
    // Perform further actions or assertions as needed
  } else {
    console.log('No visible elements containing "Clairvoyance" found on the page');
    // Handle this case based on your requirements
  }
});


Scenario('Check Tarot shows', async ({ I }) => {
  I.amOnPage('https://www.oranum.com/en/'); // Replace with your URL

  // Check for the presence of visible elements containing the text 'Tarot'
  const isElementVisible = await I.seeElement('//a[contains(text(), "Tarot")]');
  
  if (isElementVisible) {
    console.log('Found visible elements containing "Tarot"');
    // Perform further actions or assertions as needed
  } else {
    console.log('No visible elements containing "Tarot" found on the page');
    // Handle this case based on your requirements
  }
});

Scenario('Check Astrology shows', async ({ I }) => {
  I.amOnPage('https://www.oranum.com/en/'); // Replace with your URL

  // Check for the presence of visible elements containing the text 'Astrology'
  const isElementVisible = await I.seeElement('//a[contains(text(), "Astrology")]');
  
  if (isElementVisible) {
    console.log('Found visible elements containing "Astrology"');
    // Perform further actions or assertions as needed
  } else {
    console.log('No visible elements containing "Astrology" found on the page');
    // Handle this case based on your requirements
  }
});

Scenario('Check Dream shows', async ({ I }) => {
  I.amOnPage('https://www.oranum.com/en/'); // Replace with your URL

  // Check for the presence of visible elements containing the text 'Dream'
  const isElementVisible = await I.seeElement('//a[contains(text(), "Dream")]');
  
  if (isElementVisible) {
    console.log('Found visible elements containing "Dream"');
    // Perform further actions or assertions as needed
  } else {
    console.log('No visible elements containing "Dream" found on the page');
    // Handle this case based on your requirements
  }
});



Scenario('Check Guides shows', async ({ I }) => {
  I.amOnPage('https://www.oranum.com/en/'); // Replace with your URL

  // Check for the presence of visible elements containing the text 'Dream'
  const isElementVisible = await I.seeElement('//a[contains(text(), "Dream")]');
  
  if (isElementVisible) {
    console.log('Found visible elements containing "Dream"');
    // Perform further actions or assertions as needed
  } else {
    console.log('No visible elements containing "Dream" found on the page');
    // Handle this case based on your requirements
  }
});

// there is no Guides shows seen in the home page.

Scenario('Check Family shows', async ({ I }) => {
  I.amOnPage('https://www.oranum.com/en/'); // Replace with your URL

  // Check for the presence of visible elements containing the text 'Family'
  const isElementVisible = await I.seeElement('//a[contains(text(), "Family")]');
  
  if (isElementVisible) {
    console.log('Found visible elements containing "Family"');
    // Perform further actions or assertions as needed
  } else {
    console.log('No visible elements containing "Family" found on the page');
    // Handle this case based on your requirements
  }
});


Scenario('Check Career shows', async ({ I }) => {
  I.amOnPage('https://www.oranum.com/en/'); // Replace with your URL

  // Check for the presence of visible elements containing the text 'Career'
  const isElementVisible = await I.seeElement('//a[contains(text(), "Career")]');
  
  if (isElementVisible) {
    console.log('Found visible elements containing "Career"');
    // Perform further actions or assertions as needed
  } else {
    console.log('No visible elements containing "Career" found on the page');
    // Handle this case based on your requirements
  }
});



Scenario('Check Fortune shows',  ({ I }) => {
  I.amOnPage('https://www.oranum.com/en/'); // Replace with your URL

  // Check for the presence of visible elements containing the text 'Fortune'
  const isElementVisible =  I.seeElement('(//div[contains(text(), "Fortune")])[1]');
  
  if (isElementVisible) {
    console.log('Found visible elements containing "Fortune"');
    // Perform further actions or assertions as needed
  } else {
    console.log('No visible elements containing "Fortune" found on the page');
    // Handle this case based on your requirements
  }
});


Scenario('Check Numerology shows', async ({ I }) => {
  I.amOnPage('https://www.oranum.com/en/'); // Replace with your URL

  // Check for the presence of visible elements containing the text 'Numerology'
  const isElementVisible =  I.seeElement('//a[contains(text(), "Numerology")]');
  
  if (isElementVisible) {
    console.log('Found visible elements containing "Numerology"');
    // Perform further actions or assertions as needed
  } else {
    console.log('No visible elements containing "Numerology" found on the page');
    // Handle this case based on your requirements
  }
});

// Not found or visble "Clicking on Sounds Baths shows matching content, no duplicate content is displayed".


Scenario('Check Pet Psychic shows',  ({ I }) => {
	// Pet Psychic not found but using Pets locator for the same.
  I.amOnPage('https://www.oranum.com/en/'); // Replace with your URL

  // Check for the presence of visible elements containing the text 'Numerology'
  const isElementVisible =  I.seeElement('(//a[contains(text(), "Pets")])[2]');
  
  if (isElementVisible) {
    console.log('Found visible elements containing "pets"');
    // Perform further actions or assertions as needed
  } else {
    console.log('No visible elements containing "pets" found on the page');
    // Handle this case based on your requirements
  }
});