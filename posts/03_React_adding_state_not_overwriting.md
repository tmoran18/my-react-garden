---
title: "Using Python & Pandas to split a CSV File"
author: "Tim"
tag: "Python"
datePub: "02/11/2020"
blurb: "How to split a CSV file on a value using Python, Pandas & Argparse"
color: "yellow"
---

# Using Python & Pandas to split up a CSV File.

## Setup virtual environment

Before you start this tutorial you will need Python & PIP installed. I currently use windows, so this tutorial will be using windows. Make sure you add python to your path, theres a checkbox on the windows installer to check to do this.

[Install Python Guide](https://realpython.com/installing-python/)<br>
[Python Installer](https://www.python.org/downloads/)

We will be using [Pipenv (see installation guide here)](https://docs.pipenv.org/) & VS Code to create a virtual environment to run our script in.

Create a folder for your script and open with VS Code. You will want to have a CSV file handy for testing also.
```bash
mkdir splitCSV
cd splitCSV
code .
```
If your on windows, type cmd into your search to bring up the command prompt to install pipenv using pip install pipenv.

```bash
pip install pipenv
```

Bring up your VS Code terminal and create your virtual environment.

```bash
pipenv install
```
This will create a Pipfile and Piplock file.

If in VS Code you will then need to choose select your Python interpreter / Environment. Hit F1 select - **Python: Select Interpreter** - Give it a couple of seconds, and the list of virtual environments to choose from will show up.

![enter image description here](https://res.cloudinary.com/dsjhcek2q/image/upload/v1603937213/blog/Screen_Shot_2020-10-29_at_12.06.01_pm_hvtbqf.png)

You should then have a list of Virtual Environments to choose from, choose the one you would have made when entering Pipenv Install.

![enter image description here](https://res.cloudinary.com/dsjhcek2q/image/upload/v1603937217/blog/Screen_Shot_2020-10-29_at_12.05.44_pm_shwv9v.png)

## Install modules

The only module we need to for this script is [pandas.](https://pandas.pydata.org/) Make sure you are cd into the folder you created and install pandas using pipenv.
```bash
pipenv install pandas
```

## The Python Script

Ok, now we are ready to write the script. We are going to start with [Argparse](https://docs.python.org/3/library/argparse.html). Argparse makes it easy for us to pass arguments to the script via the command line.

```python
if __name__ == "__main__":
	# Brief description of what the program does and how it works
	parser = argparse.ArugmentParser(description="Split a CSV file on a value")
	# Add parameter you want to pass in to the function
	parser.add_argument("filename")
	parser.add_argument("output_path")

	# parse the arguments
	args = parser.parse_args()
	
	# Give the arguments to the main function
	main(args.filename, args.output_path)
```
if \_\_name\_\_ == "\_\_main\_\_":  is a tricky concept to understand, I still get a bit hung up on it. However, to put it as simply as possible, Python is checking if it is running the file directly rather than running from an import. This happens because the interpreter automatically defines \_\_name\_\_ == "\_\_main\_\_" on intialisation. For more info check out this [video](https://www.youtube.com/watch?v=sugvnHA7ElY&ab_channel=CoreySchafer) by Corey Schafer.

We have now set up a simple Argparse for the main function to take a filename and output_path as arguments. 

Lets get our **imports** done at the top of the script. The if \_\_name\_\_  == "\_\_main\_\_" will stay at the bottom of the script.

```python
import argparse
from datetime import datetime
from pathlib import Path
import pandas as pd

# Main Script body here.....


if __name__ == "__main__":
	# Brief description of what the program does and how it works
	parser = argparse.ArugmentParser(description="Split a CSV file on a value")
	# Add parameter you want to pass in to the function
	parser.add_argument("filename")
	parser.add_argument("output_path")

	# parse the arguments
	args = parser.parse_args()
	
	# Give the arguments to the main function
	main(args.filename, args.output_path)
```
<br>
Main Script body where the magic happens...


```python
# Create a timestamp to append to the filename
timestamp = datetime.now().strftime("%Y%m%d%H%M%S")

# Read the CSV into the dataFrame
df = pd.read_csv(filename, sep=",", dtype=str)

# Create lists containing the values you want to split the CSV on
	# The test CSV file I am splitting has some QLD and NSW addresses, 
	# we will split them up into their respective states
QLD_CUSTOMERS = ["QLD"]
NSW_CUSTOMERS = ["NSW"]

# Create empty lists for your new split data frames to go in.
QLD_Customer_df = []
NSW_Customer_df = []

# df[df["State"] is looking in the Column named state in the data frame.
# It then checks if the values from QLD_CUSTOMERS/NSW_CUSTOMERS is in that column.
# If so add it to the new list
QLD_Customer_df = df[df["State"].str.upper().isin(QLD_CUSTOMERS)]
NSW_Customer_df = df[df["State"].str.upper().isin(NSW_CUSTOMERS)]

# If the new df's are not empty, write the list to a new CSV with appropriate naming.
if len(QLD_Customer_df):
	QLD_Customer_df.to_csv(
		Path.joinpath(output_path, f"QLD_Customers_{timestamp.}.csv"), sep=",", index=False
		)
if len(NSW_Customer_df):
	NSW_Customer_df.to_csv(
		Path.joinpath(output_path, f"NSW_Customers_{timestamp.}.csv"), sep=",", index=False
		)
```

### Full Script - all together now...
```python
import argparse
from datetime import datetime
from pathlib import Path
import pandas as pd

# Create a timestamp to append to the filename
timestamp = datetime.now().strftime("%Y%m%d%H%M%S")

# Read the CSV into the dataFrame
df = pd.read_csv(filename, sep=",", dtype=str)

# Create lists containing the values you want to split the CSV on
	# The test CSV file I am splitting has some QLD and NSW addresses, 
	# we will split them up into their respective states
QLD_CUSTOMERS = ["QLD"]
NSW_CUSTOMERS = ["NSW"]

# Create empty lists for your new split data frames to go in.
QLD_Customer_df = []
NSW_Customer_df = []

# df[df["State"] is looking in the Column named state in the data frame.
# It then checks if the values from QLD_CUSTOMERS/NSW_CUSTOMERS is in that column.
# If so add it to the new list
QLD_Customer_df = df[df["State"].str.upper().isin(QLD_CUSTOMERS)]
NSW_Customer_df = df[df["State"].str.upper().isin(NSW_CUSTOMERS)]

# If the new df's are not empty, write the list to a new CSV with appropriate naming.
if len(QLD_Customer_df):
	QLD_Customer_df.to_csv(
		Path.joinpath(output_path, f"QLD_Customers_{timestamp.}.csv"), sep=",", index=False
		)
if len(NSW_Customer_df):
	NSW_Customer_df.to_csv(
		Path.joinpath(output_path, f"NSW_Customers_{timestamp.}.csv"), sep=",", index=False
		)
		
if __name__ == "__main__":
	# Brief description of what the program does and how it works
	parser = argparse.ArugmentParser(description="Split a CSV file on a value")
	# Add parameter you want to pass in to the function
	parser.add_argument("filename")
	parser.add_argument("output_path")

	# parse the arguments
	args = parser.parse_args()
	
	# Give the arguments to the main function
	main(args.filename, args.output_path)
```

Now you could just jump into your pipenv shell to run the script like so, parsing in the file and output path, however I strongly suggest using the VS Code debugger if you have any issues getting it to work. 

Follow on further down to see VS Codes awesome debugging tool.
```python
pipenv shell

pipenv run scriptName.py sample_data.csv "C:\yourOutputPath"
```
## Using VS Code Debugger
Click on the little debug icon on the left or hit F1 to search Launch in the command pallete. You want to create a launch.json file for your debugging. Choose the Python File config.

![enter image description here](https://res.cloudinary.com/dsjhcek2q/image/upload/v1604230285/blog/Debug_Icon_szp7ij.png)

Think of it as a way to parse in your parameters to your function.

Add an args property to your JSON object, giving it your two parameters. **Make sure you escape your slashes in your outputh path.** The launch file will run on debug launch.

![enter image description here](https://res.cloudinary.com/dsjhcek2q/image/upload/v1604230285/blog/Debug_Icon_2_zgh4yl.png)

Add a breakpoint somewhere in your code where you want the debugger to stop the function to you can check out variables and what's going on. You do this by clicking to the left of the line number.

![enter image description here](https://res.cloudinary.com/dsjhcek2q/image/upload/v1604230285/blog/Debug_Icon_3_z8jtv3.png)

Start the debugger by hitting F5 or click Run -> Start Debugging.

![enter image description here](https://res.cloudinary.com/dsjhcek2q/image/upload/v1604230543/blog/Debug_Icon_4_jhdlhv.png)


You can see all the variables and lists that have been initialised, and you can also hover over the dataframe to see the data, which can be very helpful.

![enter image description here](https://res.cloudinary.com/dsjhcek2q/image/upload/v1604230711/blog/Debug_Icon_5_uimtpg.png)

Pandas is very powerful when working with data in Python, if you haven't checked it out yet do yourself a favour and do so. Corey Schafer has some great [Pandas Tutorials](https://www.youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS) or you can check out the documentation [here.](https://pandas.pydata.org/)

Thanks for tuning in.

