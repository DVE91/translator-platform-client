export function documentUploaded(file) {
  console.log("WHATS PAYLOAD DOC?", file);
  return {
    type: "TRANSLATION_DOCUMENT_UPLOADED",
    payload: file,
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

export function datesAdded(date) {
  return {
    type: "DATES_ADDED",
    payload: date,
  };
}
