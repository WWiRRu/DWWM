export default class Error {
  constructor(errorCode, errorMessage, errorContainer, timeout = 5000) {
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
    if (typeof errorContainer === "string") {
      this.errorContainer = document.querySelector(errorContainer);
    } else {
      this.errorContainer = errorContainer;
    }

    this.errorContainer.innerHTML = `
    <div class="container-error">
      <h2>Une erreur a eu lieu : CODE ERROR ${errorCode}</h2>
      <p>${errorMessage}</p>
    </div>
    `;
    this.applyStyles();
    this.startTimeout(timeout);
  }

  applyStyles() {
    const containerError =
      this.errorContainer.querySelector(".container-error");
    containerError.style.backgroundColor = "#f8d7da";
    containerError.style.color = "#721c24";
    containerError.style.padding = "20px";
    containerError.style.margin = "20px 0";
    containerError.style.border = "1px solid #f5c6cb";
    containerError.style.borderRadius = "5px";
    containerError.style.fontFamily = "Arial, sans-serif";
    containerError.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    containerError.style.opacity = "1";
    containerError.style.transition = "opacity 0.5s ease-out";

    const errorTitle = containerError.querySelector("h2");
    errorTitle.style.marginTop = "0";
    errorTitle.style.fontSize = "18px";
    errorTitle.style.fontWeight = "bold";

    const errorMessage = containerError.querySelector("p");
    errorMessage.style.margin = "10px 0 0";
    errorMessage.style.fontSize = "14px";
  }

  startTimeout(timeout) {
    setTimeout(() => {
      this.clearError();
    }, timeout);
  }

  clearError() {
    const containerError =
      this.errorContainer.querySelector(".container-error");
    if (containerError) {
      containerError.styles.opacity = "0";
      setTimeout(() => {
        this.errorContainer.innerHTML = "";
      }, 500);
    }
  }
}
