
# AI CCTV Event Viewer 🎥🤖

An AI-based smart CCTV footage viewer that automatically filters out unimportant parts and shows **only key moments** like **cash drawer opening**, **unauthorized access**, or **suspicious hand movement**.

## 🧠 Tech Stack

- React (Frontend)
- Custom AI model (YOLOv8 or OpenCV)
- Vercel (Hosting)
- Optional backend (Node.js or Flask)

## 📦 Future Roadmap

- [ ] Multi-camera support  
- [ ] Date & time filtering  
- [ ] Upload new footage directly  
- [ ] Role-based access (admin/viewer)  
- [ ] Push alerts for new suspicious events  

## 🤝 Contribute / Partner

Have a store or restaurant & want this AI in your setup?  
Ping me at **shori10** or open an issue!

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/shori10/Ai-cctv-event-viewer.git
cd Ai-cctv-event-viewer
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add your video clip
Place your `detected_clip.mp4` file inside the `public/` folder.

### 4. Start the development server
```bash
npm start
```

> App will open at `http://localhost:3000`

## 🔐 Security & Privacy
This app runs fully on your machine. No video data is uploaded anywhere.
