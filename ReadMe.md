# Word Counter

This is a very simple sample extension for Standard Notes.

## Building

To build the extension, run the following commands:

1. `npm install`
2. `grunt`
3. Host the local directory. In python 3: `python -m http.server --bind localhost 8000`

## Installing

1. To install the component in Standard Notes you need to provide a json manifest from the URL. The included `extension.json` file will be used for this sample. It assumes you are hosting the extension at `http://localhost:8000` (production extensions should be hosted over https). At minimum this file should include:
    * identifier - a unique identifier for your extension.
    * name - the name of the extension.
    * content_type - the type of component.
    * area - the area the component should be added to.
    * url - the hosted url of the extension.

2. Open the Extensions menu, click Install Extension, enter the link to the json file (`http://localhost:8000/extension.json`) in the text box, and press enter. This will show you information about the extension, press Install to complete installation.
    * You will get an error installing locally if you don't manually create the zip file mentioned in the manifest. This won't affect your usage unless you want to run the extension without hosting it on the local URL.

3. Activate the extension and confirm the permission prompt to allow it to activate.

4. You will now have a word count displayed at the bottom of the editor.