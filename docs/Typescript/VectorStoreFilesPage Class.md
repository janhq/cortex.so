
  
  # **VectorStoreFilesPage**

**High Level**

The `VectorStoreFilesPage` class is part of the `cortex` Node.js SDK, specifically within the `cortex.beta.vectorStores` module. It is a subclass of the `CursorPage` class and is designed to handle pagination for vector store files. The `cortex` object is initialized as follows:

```javascript
import Cortex from "@janhq/cortex-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "",
});
```

**Why should I use this class?**

The `VectorStoreFilesPage` class should be used when you need to retrieve a paginated list of vector store files from the Cortex API. It simplifies the process of handling pagination and provides a convenient way to iterate through the results.

**Methods Overview and Code Examples**

The `VectorStoreFilesPage` class inherits all methods from the `CursorPage` class, including:

- `nextPage()`: Fetches the next page of results.
- `prevPage()`: Fetches the previous page of results.
- `goToPage(pageNumber)`: Fetches a specific page of results.

Example usage:

```javascript
const vectorStoreFilesPage = await cortex.beta.vectorStores.listFiles();

// Get the first page of results
const firstPage = await vectorStoreFilesPage.nextPage();

// Iterate over the results
for (const file of firstPage.data) {
  console.log(file.id, file.name);
}

// Get the next page of results
const nextPage = await vectorStoreFilesPage.nextPage();
```

**What are the required parameters?**

The `VectorStoreFilesPage` class does not require any parameters to be instantiated. However, when calling the `cortex.beta.vectorStores.listFiles()` method, you can provide optional parameters to filter or sort the results.

**Prerequisites**

Before using the `VectorStoreFilesPage` class, make sure you have:

1. Installed the `@janhq/cortex-node` package.
2. Initialized the `cortex` object with a valid API key and base URL.

**How do I use this class?**

To use the `VectorStoreFilesPage` class, follow these steps:

1. Import the `Cortex` class from the `@janhq/cortex-node` package.
2. Initialize the `cortex` object with your API key and base URL.
3. Call the `cortex.beta.vectorStores.listFiles()` method to retrieve an instance of the `VectorStoreFilesPage` class.
4. Use the methods provided by the `CursorPage` class (`nextPage()`, `prevPage()`, `goToPage()`) to navigate through the paginated results.
5. Iterate over the `data` property of the retrieved page to access the vector store file objects.

The `VectorStoreFilesPage` class simplifies the process of retrieving and working with paginated vector store files, providing a convenient and efficient way to interact with the Cortex API.
  
  