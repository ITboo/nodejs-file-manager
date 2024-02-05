# nodejs-file-manager

This is a CLI File Manager made as a part of RS School NodeJS course.

The file manager can do the following:

- Perform basic file operations (copy, move, delete, rename, etc.)
- Get information about the host machine operating system
- Perform hash calculations (sha256)
- Compress and decompress files, using Brotli Algorithm

How to use:
1. Clone this repo 

```https://github.com/ITboo/nodejs-file-manager.git```

2. Go to task repo

```cd nodejs-file-manager```

3. Start the program by running:

```npm run start -- --username=your_username```

Default username is 'UserName'

4. Type ```help``` to see command list (optional)

5. To exit the program type ```.exit``` or press ```Ctrl+C```


- ### COMMAND LIST

## Navigation
Go to dedicated folder from current directory

```cd path_to_directory```

Example: 
``` cd d: ```

Go upper from current directory

```up```

Print in console list of all files and folders in current directory

```ls```

- ## Basic operations with files
Read file and print it's content in console (should be done using Readable stream):

```cat path_to_file```

Create empty file in current working directory:

```add new_file_name```

Rename file:

```rn path_to_file new_filename```

Copy file:

```cp path_to_file path_to_new_directory```

Move file:

```mv path_to_file path_to_new_directory```

Delete file:

```rm path_to_file```

- ## Operating system info (prints following information in console)

Get EOL (default system End-Of-Line) and print it to console

```os --EOL```

Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to console

```os --cpus```

Get home directory and print it to console

```os --homedir```

Get current system user name and print it to console

```os --username```

Get CPU architecture for which Node.js binary has compiled and print it to console

```os --architecture```

- ## Hash calculation
Calculate hash for file and print it into console

```hash path_to_file```

- ## Compress and decompress operations

Compress file

```compress path_to_file path_to_destination```

Decompress file 

```decompress path_to_file path_to_destination```

Example:

```compress test.txt test```

```decompress ./test.txt.br test```