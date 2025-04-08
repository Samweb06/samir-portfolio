import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Moon, Download, Mail } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Samir Patel</h1>
          <div className="flex gap-3">
            <Button onClick={toggleDarkMode} variant="outline">
              {darkMode ? <Sun /> : <Moon />}
            </Button>
            <a href="/samir cv pro 2025.pdf" download>
              <Button variant="outline">
                <Download className="mr-2" /> Download CV
              </Button>
            </a>
            <a href="mailto:samirpatel997916@gmail.com">
              <Button variant="outline">
                <Mail className="mr-2" /> Contact
              </Button>
            </a>
          </div>
        </div>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p>
              Versatile IT & Telecommunications Specialist with expertise in fiber installations,
              network infrastructure, and software development. Known for delivering full-scope
              solutions and proactive problem-solving.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Skills & Tools</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fiber & Data Cabling, Security Systems, AV Tech</li>
              <li>LAN/WAN Maintenance, IP Security, VOIP</li>
              <li>Web Dev: HTML, CSS, JavaScript, React.js, C#, .NET</li>
              <li>DBMS: MySQL, Oracle, MS SQL | Tools: Git, Docker, Azure</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Experience</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Profiber Solution Ltd – IT/Telecom Technician (2023–Present)</li>
              <li>UCG – Lead Technician (2023)</li>
              <li>Matrixm Infotech – IT Help Desk (2018–2019)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Data & Fiber Cabling – NZICC, Auckland</li>
              <li>Security Cabling Supervision – Mason Clinic</li>
              <li>Fiber and Data Setup – Correctional Facilities, Auckland</li>
              <li>Network Installations – Massey University & Onehunga School</li>
              <li>Multiple MDU Installations – Auckland Suburbs</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Education & Certifications</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Diploma in Software Dev, Web Design – Toi Ohomai</li>
              <li>Telecom Training – Avetta</li>
              <li>Certs: Microsoft 365, SCCM, HTML/CSS, Site Safe</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
