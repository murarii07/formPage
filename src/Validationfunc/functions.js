export const obj = {
    isNumber: (text) => {
        const regex = /^\d+$/;

        // Test the input against the regex
        return regex.test(text);
    },
    isPercentValidate: (text) => {
        const regex = /^\d+(\.\d+)?$/;
        if (regex.test(text) && (parseFloat(text) >= 0 && parseFloat(text) <= 100)) {
            return true;
        }
        return false;
    },
    isCharacter: (text) => {
        const regex =/^[^\d]*$/;
        return regex.test(text);
    },
    validationFileSize:(file,maxSize)=>{
        const filesize=maxSize *1024*1024;
        if(file.size>filesize)
            return false;
        return true;       
    }
}