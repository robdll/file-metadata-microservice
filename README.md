# **File metadata parser microservice**

Microservice API to get file metadata information such us name, type and size.

[Demo](https://file-metadata-microservice-alpha.vercel.app/)

## **Installation**

1. clone this repository

```bash
git clone git@github.com/robdll/file-metadata-microservice.git
```

2. move to the project directory and install dependecies

```bash
cd file-metadata-microservice
yarn
```

3. run locally

```bash
yarn dev
```

4. visit [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## **API usage**

### **URL**

> `<projecturl>`/api/fileanalyse

### **RETURNED VALUE**

json object containing the following key/value

`name`: file name
`size`: file size in byte
`type`: file type

### **EXAMPLE**

> `<projecturl>`/api/fileanalyse

{"name":"2022-05-19 Straordinaria allegato.pdf","type":"application/pdf","size":113260}

```
{
    "name":"myfile.pdf",
    "type":"application/pdf",
    "size":"113260"
}

```

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
