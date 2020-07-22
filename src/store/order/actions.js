export function documentUploaded(files) {
  return {
    type: "TRANSLATION_DOCUMENT_UPLOADED",
    payload: files,
  };
}

export function titleAdded(title) {
  return {
    type: "TITLE_ADDED",
    payload: title,
  };
}

export function typeAdded(type) {
  return {
    type: "TYPE_ADDED",
    payload: type,
  };
}
