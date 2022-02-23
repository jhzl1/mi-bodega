export const regexEmail =
  /^([\w.-]{3,50})@([\w-]{3,50})\.(\D[a-zA-Z]{1,50})\.?(\D[a-zA-Z]{2})?$/;

export const regexPassword =
  /^(?=\D)(?=\w*)(?=\w*[A-Z])(?=.*[@()#*"%&!;_,.:<>])(?=\w*[a-z])\S{7,}$/;
