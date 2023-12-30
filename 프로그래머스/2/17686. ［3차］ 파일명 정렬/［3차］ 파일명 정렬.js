function solution(files) {
    // 파일명을 HEAD, NUMBER, TAIL로 나누고
    // HEAD를 기준으로 묶고 정렬
    const splitFiles = files.reduce((obj, file) => {
       
        let HEAD = '';
        let NUMBER = '';
        let TAILIDX = 0;
        let section = 'HEAD';
        
        for(let i = 0; i < file.length; i++){
            
            if(section === 'HEAD' && (isNaN(Number(file[i])) || file[i] === ' ')){

                HEAD = HEAD + file[i];
                
                if(!isNaN(Number(file[i+1])) && file[i+1] !== ' '){
                    section = 'NUMBER';
                }
                
            }else if(section === 'NUMBER' && !isNaN(Number(file[i])) && file[i] !== ' '){
                
                NUMBER = NUMBER + file[i];
                
                if(NUMBER.length >= 5){
                    section = 'TAIL';
                }
            }else{
                
                TAILIDX = i;
                section = 'HEAD';
                
                break;
                
            }
            
        }
        
        const convertHEAD = HEAD.toLowerCase()
        
        if(!obj[convertHEAD]){
            
            if(TAILIDX !== 0){
                obj[convertHEAD] = [[HEAD, NUMBER, file.slice(TAILIDX)]];
            }else{
                obj[convertHEAD] = [[HEAD, NUMBER, '']];
            }
                
        }else{
                
            if(TAILIDX !== 0){
                obj[convertHEAD] = [...obj[convertHEAD], [HEAD, NUMBER, file.slice(TAILIDX)]];
            }else{
                obj[convertHEAD] = [...obj[convertHEAD], [HEAD, NUMBER, '']];
            }
                
        }
        
        return obj;
        
    },{})
    
    const splitFilesKeys = Object.keys(splitFiles).sort();
    
    // number를 기준으로 정렬
    
    splitFilesKeys.forEach((splitFilesKey)=>{
        
        splitFiles[splitFilesKey] = splitFiles[splitFilesKey].sort((a, b)=>a[1]-b[1])        
        
    })
    
    // 원하는 형태로 출력
    
    return splitFilesKeys.map((splitFilesKey)=>{
        let result = [];
        
        for(let i = 0; i < splitFiles[splitFilesKey].length; i++){
            result.push(splitFiles[splitFilesKey][i][0]+splitFiles[splitFilesKey][i][1]+splitFiles[splitFilesKey][i][2])
        }
        
        return result
        
    }).reduce((acc, cur)=>{
        return [...acc, ...cur]
    })
}