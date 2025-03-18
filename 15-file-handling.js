/* Resources
https://hackernoon.com/next-level-javascript-file-handling-advanced-techniques-and-patterns
https://geekflare.com/dev/handling-files-in-javascript/
https://www.codeguage.com/courses/advanced-js/file-apis-introduction

What is File Handling? 
    Operations with files, CRUD. NodeJS provides a module called fs for this.
*/



/* fs.open(path, mode)
    Mode: - ‘r’	 Opens a file in reading mode
          - ‘a’	 Appending mode
          - ‘w’	 Writing mode
          - ‘a+’ Appending and reading mode
          - ‘w+’ Writing and reading mode
          - ‘r+’ Reading and writing mode
*/

import fs from 'fs';
fs.open("files/example.txt", "w", (err, file) => {
   if (err) throw err
   console.log(file)
});


/* fs.appendFile()
     Append the content at the end of the file. If the file doesn’t exist in the given path, then it will create a new one.
*/

fs.appendFile("files/example.txt", "Appending content", (err) => {
   if (err) throw err
   console.log("Append file Completed!")
})

// fs.writeFile()
fs.writeFile("files/example.txt", "Writing content helloooo", (err) => {
    if (err) throw err
    console.log("Write file Completed!")
 })

// fs.readFile()
fs.readFile("files/example.txt", (err, data) => {
    if (err) throw err
    console.log(data.toString())
 })

/* fs.unlink()
delete the file
*/
// fs.unlink("files/example.txt", (err) => {
//     if (err) throw err
//     console.log("File deleted!")
//  })

// fs.rename()
fs.rename("files/example.txt", "files/example1.txt", (err) => {
    if (err) throw err
    console.log("File renamed!")
 })


// Update a file reading an array with products
function updateProduct(name, newQuantitySold, newPrice) {
    let product = findProduct(name)
    if (product) {
        product.quantitySold = newQuantitySold
        product.price = newPrice

        let fileContent = ""
        products.forEach((product) => {
            fileContent += `Product: ${product.name}, Quantity sold: ${product.quantitySold}, Price: ${product.price}\n`
        })

        fs.writeFile("products.txt", fileContent, (err) => {
            if (err) throw err
            console.log("Product updated and file overwritten")
            showMenu()
        })

    } else {
        console.log("Product not found")
    }
}
