class CodeBuilder
{
  constructor(className)
  {
    this.class = new Class(className);
  }

  addField(name)
  {
    this.class.fields.push(new Field(name))
    return this;
  }

  toString()
  {
    return this.class.toString();
  }
}

class Class
{
    constructor(className) {
        this.name = className
        this.fields = [];
    }

    toString() {
        const buffer = [];

        buffer.push(`class ${this.name} {\n`);

        if (this.fields.length > 0) {
            buffer.push('  constructor(')
            buffer.push(this.fields.map((field, i) => i === 0 ? field.name : ` ${field.name}`))
            buffer.push(') {\n');

            for (const field of this.fields) {
                buffer.push(`    this.${field.name} = ${field.name};\n`)
            }
            buffer.push('  }\n')
        }
        buffer.push('}')
        return buffer.join('')
    }
}

class Field
{
    constructor(name) {
        this.name = name;
    }
}

let cb = new CodeBuilder('myClass');
let myClass = cb
    .addField('propertyOne')
    .addField('propertyTwo')
console.log(myClass.toString());
