" Use VimPlug for plugins
call plug#begin()

" NERDTree my beloved
Plug 'preservim/nerdtree', { 'on': 'NERDTreeToggle' }

call plug#end()

" Keep 500 commands in history
set history=500

filetype plugin on
filetype indent on

" Re-read files from disk (if changed)
set autoread
au FocusGained,BufEnter * silent! checktime

" Use space for leader
let mapleader = " "

" English
let $LANG='en'
set langmenu=en


" Ignore compiled files
set wildignore=*.0,*~,*.pyc,*/.git/*

set wildmenu
set ruler
set cmdheight=1
set ignorecase
set smartcase
set hlsearch
set incsearch
set lazyredraw
set showmatch
set mat=2
set noerrorbells
set novisualbell
set t_vb=
set tm=500
set foldcolumn=1
syntax enable
set encoding=utf8
set ffs=unix,dos,mac
set nobackup
set nowb
set noswapfile
set expandtab
set smarttab
set shiftwidth=2
set tabstop=2
set lbr
set number
set tw=500
map <C-j> <C-W>j
map <C-k> <C-W>k
map <C-h> <C-W>h
map <C-l> <C-W>l
map <C-n> :tabnext<cr>
map <C-b> :tabprev<cr>
set switchbuf=useopen,usetab,newtab
set stal=2
set mouse
set nolist

" Highlight trailing whitespace
syn match WhiteSpace "\s\+$" containedin=ALL conceal cchar=◦
set conceallevel=2
set concealcursor=nv
highlight Conceal ctermfg=red

" Allow backspacing linebreaks
set backspace=indent,eol,start

" Make 0 go to the first non-empty character
map 0 ^

" Default colorscheme is fine
colorscheme default
