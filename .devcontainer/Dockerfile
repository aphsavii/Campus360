FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Set the default shell to Zsh
SHELL ["/bin/zsh", "-c"]

# Switch to the vscode user
USER vscode

# Set Git configurations
RUN git config --global user.email "2010215@sliet.ac.in" \
    && git config --global user.name "Avinash Kumar"



# Install Node.js v18.15.0 using NVM
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash \
    && echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc \
    && echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.zshrc \
    && echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> ~/.zshrc

RUN . ~/.nvm/nvm.sh && nvm install 18.15.0

# Create symbolic link for Node.js and npm
RUN . ~/.nvm/nvm.sh && sudo ln -s "$(which node)" /usr/bin/node
RUN . ~/.nvm/nvm.sh && sudo ln -s "$(which npm)" /usr/bin/npm

# Expose ports for Angular, Node.js, and MongoDB
EXPOSE 4200
EXPOSE 5001
EXPOSE 27017

# Install Angular CLI
RUN npm install -g @angular/cli@16.0.3

# Set the working directory inside the container
WORKDIR /workspace
