(function functionName() {
  "use strict";
  var formData = [
    {
      "type": "text",
      "label": "First Name",
      "id": "user-first-name",
      "icon": "fa-user",
      "options": []
    },
    {
      "type": "text",
      "label": "Last Name",
      "id": "user-last-name",
      "icon": "fa-user",
      "options": []
    },
    {
      "type": "email",
      "label": "Email Address",
      "id": "user-email",
      "icon": "fa-envelope",
      "options": []
    },
    {
      "type": "text",
      "label": "Current website url",
      "id": "user-website",
      "icon": "fa-globe",
      "options": []
    },
    {
      "type": "select",
      "label": "Select Language",
      "id": "user-language",
      "icon": "",
      "options": [
        {
          "label": "English",
          "value": "EN"
        },
        {
          "label": "French",
          "value": "FR"
        },
        {
          "label": "Spanish",
          "value": "SP"
        },
        {
          "label": "Chinese",
          "value": "CH"
        },
        {
          "label": "Japanese",
          "value": "JP"
        }
      ]
    },
    {
      "type": "textarea",
      "label": "Your Comment",
      "id": "user-comment",
      "icon": "fa-comments",
      "options": []
    },
    {
      "type": "tel",
      "label": "Mobile Number",
      "id": "user-mobile",
      "icon": "fa-mobile-phone",
      "options": []
    },
    {
      "type": "tel",
      "label": "Home Number",
      "id": "user-phone",
      "icon": "fa-phone",
      "options": []
    }
  ];

  for (var i = 0; i < formData.length; i++) {
    var input = formData[i]; //All info for each item
    var labelLay = document.querySelector('#signup');
    var inputElement = document.createElement('input');
    inputElement.id = input.id;
    inputElement.type = input.type;
    inputElement.placeholder = input.label;
    inputElement.class = input.icon;
    inputElement.options = input.options;


    for (var m = 0; m < inputElement.options.length; m++) {
      var optionFive = inputElement.options[m];
      var SelLang = inputElement.placeholder;
      console.log(SelLang);
      var selectTag = document.querySelector('.dropDown');
      var optionList = document.createElement('option');
      optionList.label = optionFive.label;
      optionList.value = optionFive.value;
      selectTag.appendChild(optionList);
  }
    labelLay.appendChild(inputElement);

    }

  var formLay = document.querySelector('.layout');
  var headerTitle = document.createElement('h1');
  headerTitle.id = 'header';
  headerTitle.textContent = "Sign Up For My Web App";
  formLay.appendChild(headerTitle);

  var formButton = document.querySelector('.button');
  var buttonElement = document.createElement('input');
  console.log(buttonElement);
  buttonElement.id = 'submit';
  buttonElement.type = 'submit';
  buttonElement.value = "Submit Form";
  formButton.appendChild(buttonElement);




}());
