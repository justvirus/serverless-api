export default function handler(req, res) {
    const a=10,b=20;
    
    res.status(200).json({ message: "Hello World!", passedvalue : `a=${a}`});
}
