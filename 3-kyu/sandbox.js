function list(names){
    if (names.length > 0) {
      const namesList = names.map(({ name }) => name);
      const finalName = namesList.pop();
      return namesList.length ? 
        namesList.join(', ') + ` & ${finalName}` :
      finalName;
    } else {
      return "";
    }
  };