// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as axios from 'axios';
const animals = ['🐶', '🐱', '🐰', '🐻', '🐨', '🦊', '🐼', '🐯', '🦁', '🐮'];

const getRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex];
};
const getMotivationalQuote = async () => {
    const response = await axios.default.get('https://api.quotable.io/random');
    return response.data.content;
};

const showNotification = async () => {
    const animal = getRandomAnimal();
    const quote = await getMotivationalQuote();
    const message = `${animal} ${quote}`;
	// console.log(message);
	vscode.window.showInformationMessage(message);
};
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "pet-maheshwari" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('pet-maheshwari.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		setInterval(showNotification, 0.1 * 60 * 1000);
		// Display a message box to the user
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
