# Chicksgold Design Challenge

After cloning this repository, run the following commands to run the development environment:
```sh
npm install
npm run dev
```

## Challenge's Goal
The goal of this challenge was to recreate a template provided by the chicksgold team.

# Logical Thinking to Solve the Challenge

I started by separating the logic of the header, footer and main tags.
I created a Component called Layout that renders the header and footer instantly, sending the main tag with the main content as a child.

I made a grid to display the items of the Home component, and used mediaquerys to obtain a responsive result for the entire template.

It was difficult for me to carry out this process because I did not have the mobile view. (working without mobile first is not very comfortable for making responsive views).