const users = [
    {
        name: "John Smith",
        age: 32,
        phoneNumber: "(555) 123-4567",
        address: "123 Main Street, Anytown, USA"
    },
    {
        name: "Emily Johnson",
        age: 25,
        phoneNumber: "(555) 987-6543",
        address: "456 Elm Avenue, Springfield, USA"
    },
    {
        name: "David Lee",
        age: 40,
        phoneNumber: "(555) 555-5555",
        address: "789 Oak Drive, Cityville, USA"
    },
    {
        name: "Sarah Davis",
        age: 28,
        phoneNumber: "(555) 111-2222",
        address: "321 Pine Road, Townsville, USA"
    },
    {
        name: "Michael Brown",
        age: 35,
        phoneNumber: "(555) 444-3333",
        address: "987 Maple Lane, Villagetown, USA"
    },
    {
        name: "Jessica Wilson",
        age: 29,
        phoneNumber: "(555) 222-1111",
        address: "654 Cedar Street, Metropolis, USA"
    },
    {
        name: "Andrew Miller",
        age: 42,
        phoneNumber: "(555) 777-8888",
        address: "741 Birch Court, Countyville, USA"
    },
    {
        name: "Olivia Taylor",
        age: 31,
        phoneNumber: "(555) 333-7777",
        address: "852 Walnut Avenue, Villageville, USA"
    },
    {
        name: "Daniel Anderson",
        age: 27,
        phoneNumber: "(555) 666-9999",
        address: "369 Spruce Lane, Riverside, USA"
    },
    {
        name: "Sophia Martinez",
        age: 33,
        phoneNumber: "(555) 888-0000",
        address: "963 Cherry Road, Townville, USA"
    }
];


for (let a in users) {
    console.log(users[a].name)
    document.write(users[a].name)
}
    //    console.log(typeof users)