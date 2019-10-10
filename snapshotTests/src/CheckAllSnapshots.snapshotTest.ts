function imagesHaveLoaded() { return Array.from(document.images).every((image) => image.complete); }


describe('PokeCard', () => {
  it('visually looks correct', async () => {
    await page.goto('http://localhost:6006/iframe.html?id=pokecard--card&viewMode=story');
    await page.waitForFunction(imagesHaveLoaded);

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
