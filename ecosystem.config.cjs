module.exports = {
   apps : [
      {
         name: 'yesno',
         script: './yesno.js',
         watch: false,

         env: {
            PORT : 3000,
         },
      },
   ]
}
