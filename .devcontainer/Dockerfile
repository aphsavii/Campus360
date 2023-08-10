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
    && echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> ~/.zshrc \
    && . ~/.nvm/nvm.sh && nvm install 18.15.0 \
    && . ~/.nvm/nvm.sh && sudo ln -s "$(which node)" /usr/bin/node \
    && . ~/.nvm/nvm.sh && sudo ln -s "$(which npm)" /usr/bin/npm

# Install Angular CLI
RUN npm install -g @angular/cli@16.0.3

# Set the working directory inside the container
WORKDIR /workspace
