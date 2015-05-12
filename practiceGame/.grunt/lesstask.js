module.exports =  {

    src: {
        cwd: 'main-app/app/Less/',
        src: 'main.less',
        dest: '.build/main-app/app/less',
        expand: true,
        ext: '.min.css'
    },

    options:{
        compress: true,
        csslint:{
            'unique-headings':false,
        }
    }
};
