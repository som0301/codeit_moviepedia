function FileInput({ name, value, onChange }) {
  const handleChange = (e) => {
    const nextFileImg = e.target.files[0];
    onChange(name, nextFileImg);
  };
  return <input type="file" onChange={handleChange} />;
}

export default FileInput;
