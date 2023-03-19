module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
         type: 'select',
         name: 'category',
         message: 'Which is the component level?',
         choices: ['base', 'partial', 'layout']
       },
      {
        type: 'input',
        name: 'componentName',
        message: `What's the component name? (for multiple word name, use blank space as separator. e.g. "my component")`
      }
    ]

    return inquirer.prompt(questions).then(answers => {
      const { componentName, category } = answers
      const capitalizedComponentName = componentName
        .trim()
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.substring(1))
        .join('')

      const absPath = `src/components/${category}/${capitalizedComponentName}`

      return { ...answers, absPath, capitalizedComponentName, category }
    })
  }
}
