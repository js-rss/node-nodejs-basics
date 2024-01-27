const Start__Str = 'RSS_';

const parseEnv = () => {
    const Env = Object.entries(process.env);
    const change = Env.reduce((acc, [key, value]) =>
    key.startsWith(Start__Str) ? 
    [...acc, `${key +"="+ value}`] : 
    acc, []).join('; ');
    console.log(change);
};

parseEnv();
//RSS_name1=value1; RSS_name2=value2