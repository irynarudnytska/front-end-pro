const phoneBook = {
  contacts: [
    {
      name: "user1",
      mobile: "+15551234567",
      email: "user1@gmail.com",
    },
    {
      name: "user2",
      mobile: "+447700900123",
      email: "user2@gmail.com",
    },
  ],
  getContactByName(name) {
    for (const contact of this.contacts) {
      if (contact.name === name.toLowerCase()) {
        return contact;
      }
    }
  },
  addContact(name, mobile, email) {
    const newContact = {
      name: name.toLowerCase(),
      mobile: mobile,
      email: email.toLowerCase(),
    };
    this.contacts.push(newContact);
    return this.contacts;
  },
};

console.log(phoneBook.getContactByName("User1"));
console.log(phoneBook.addContact("USER3", "+33612345678", "USER3@GMAIL.COM"));
