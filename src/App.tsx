import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  Github, 
  Download, 
  Play, 
  Monitor, 
  Shield, 
  Zap, 
  Clock, 
  Settings, 
  AlertTriangle,
  CheckCircle,
  Terminal,
  FileText,
  Globe,
  Youtube,
  TrendingUp,
  Server,
  Database,
  Code,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Star,
  Eye,
  GitFork,
  Tag,
  Calendar,
  Info,
  Heart
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("requirements");
  const [githubStats, setGithubStats] = useState({
    stars: 0,
    watchers: 0,
    forks: 0,
    version: '',
    description: '',
    releaseDate: ''
  });
  
  // Fetch GitHub stats
  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        // Fetch repository data
        const repoResponse = await fetch('https://api.github.com/repos/karstenlee10/Twitch_Stream_To_YouTube');
        const repoData = await repoResponse.json();
        
        // Fetch latest release data
        const releaseResponse = await fetch('https://api.github.com/repos/karstenlee10/Twitch_Stream_To_YouTube/releases/latest');
        let releaseData = null;
        
        if (releaseResponse.ok) {
          releaseData = await releaseResponse.json();
        }
        
        setGithubStats({
          stars: repoData.stargazers_count || 0,
          watchers: repoData.subscribers_count || 0,
          forks: repoData.forks_count || 0,
          version: (releaseData as any)?.tag_name || 'No releases',
          description: repoData.description || 'No description available',
          releaseDate: (releaseData as any)?.published_at ? new Date((releaseData as any).published_at).toLocaleDateString() : 'N/A'
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }
    };
    
    fetchGithubStats();
  }, []);
  
  const tabs = [
    { value: "requirements", label: "Requirements" },
    { value: "download", label: "Download" },
    { value: "setup", label: "Setup" },
    { value: "config", label: "Configuration" },
    { value: "run", label: "Run" }
  ];
  
  const currentTabIndex = tabs.findIndex(tab => tab.value === activeTab);
  const isFirstTab = currentTabIndex === 0;
  const isLastTab = currentTabIndex === tabs.length - 1;
  
  const scrollToInstallation = () => {
    const installationSection = document.getElementById('installation');
    if (installationSection) {
      installationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const goToNextTab = () => {
    if (!isLastTab) {
      setActiveTab(tabs[currentTabIndex + 1].value);
      setTimeout(() => scrollToInstallation(), 100);
    }
  };
  
  const goToPrevTab = () => {
    if (!isFirstTab) {
      setActiveTab(tabs[currentTabIndex - 1].value);
      setTimeout(() => scrollToInstallation(), 100);
    }
  };
  
  const TabNavigation = ({ showPrevious = true, showNext = true }) => (
    <div className="flex justify-between items-center pt-6 mt-6 border-t border-border/30">
      <div>
        {showPrevious && !isFirstTab && (
          <Button 
            variant="outline" 
            onClick={goToPrevTab}
            className="neon-border"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
        )}
      </div>
      <div className="text-center">
        <span className="text-sm text-muted-foreground">
          Step {currentTabIndex + 1} of {tabs.length}
        </span>
      </div>
      <div>
        {showNext && !isLastTab && (
          <Button 
            onClick={goToNextTab}
            className="neon-border"
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
  return (
    <div className="min-h-screen bg-background cyber-grid">
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-30" />
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-center max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Play className="h-4 w-4 text-primary" />
              </div>
              <span className="font-serif font-bold text-xl glow-text">Twitch Stream to YouTube</span>
            </div>
            <nav className="flex items-center gap-6">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
              <a href="#disadvantages" className="text-sm font-medium hover:text-primary transition-colors">Disadvantages</a>
              <a href="#installation" className="text-sm font-medium hover:text-primary transition-colors">Install</a>
              <a href="#support" className="text-sm font-medium hover:text-primary transition-colors">Support</a>
              <a href="#docs" className="text-sm font-medium hover:text-primary transition-colors">Docs</a>
              <Button variant="outline" size="sm" className="neon-border" asChild>
                <a href="https://github.com/karstenlee10/Twitch_Stream_To_YouTube" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 flex justify-center">
          <div className="max-w-6xl mx-auto px-4 text-center space-y-8">
            <div className="flex items-center justify-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm w-fit mx-auto">
              <Zap className="h-3 w-3" />
              <span>Real-time Stream Archiving Solution</span>
            </div>
            
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl glow-text">
              Twitch Stream to{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                YouTube
              </span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl leading-relaxed">
              Professional automated solution for archiving Twitch streams to YouTube in real-time. 
              Run 24/7 rebroadcast streams with intelligent monitoring and failure recovery.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row justify-center items-center">
              <Button size="lg" className="group neon-border" asChild>
                <a href="#installation">
                  <Download className="mr-2 h-5 w-5" />
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="neon-border" asChild>
                <a href="https://github.com/karstenlee10/Twitch_Stream_To_YouTube" target="_blank">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Automated Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Real-time</div>
                <div className="text-sm text-muted-foreground">Stream Processing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Auto-Recovery</div>
                <div className="text-sm text-muted-foreground">Failure Handling</div>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub Stats Section */}
        <section className="py-12 w-full flex justify-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold tracking-tight font-serif glow-text mb-2">
                Live Repository Stats
              </h3>
              <p className="text-muted-foreground">
                Real-time GitHub statistics and release information
              </p>
            </div>
            
            {/* Repository Description */}
            <Card className="neon-border bg-card/50 mb-8">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Info className="h-5 w-5 text-primary" />
                  <h4 className="text-lg font-semibold">Repository Description</h4>
                </div>
                <p className="text-muted-foreground text-lg">{githubStats.description}</p>
              </CardContent>
            </Card>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <Card className="neon-border bg-card/50 text-center">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-2">
                    <Star className="h-8 w-8 text-yellow-400" />
                    <div className="text-3xl font-bold text-primary">{githubStats.stars.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Stars</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="neon-border bg-card/50 text-center">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-2">
                    <Eye className="h-8 w-8 text-blue-400" />
                    <div className="text-3xl font-bold text-primary">{githubStats.watchers.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Watching</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="neon-border bg-card/50 text-center">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-2">
                    <GitFork className="h-8 w-8 text-green-400" />
                    <div className="text-3xl font-bold text-primary">{githubStats.forks.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Forks</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Release Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="neon-border bg-card/50 text-center">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-2">
                    <Tag className="h-8 w-8 text-purple-400" />
                    <div className="text-2xl font-bold text-primary">{githubStats.version}</div>
                    <div className="text-sm text-muted-foreground">Latest Version</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="neon-border bg-card/50 text-center">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-2">
                    <Calendar className="h-8 w-8 text-orange-400" />
                    <div className="text-2xl font-bold text-primary">{githubStats.releaseDate}</div>
                    <div className="text-sm text-muted-foreground">Release Date</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-card/30 w-full flex justify-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-serif glow-text mb-4">
                🧐 Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Here're some of the project's best features
              </p>
            </div>
            
            <Card className="neon-border bg-card/50 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span>You can set the script to public the stream after the streamer finish <strong><em>(for no permission restreaming someones content)</em></strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span>Archive and play back twitch stream in real time <strong><em>(On youtube streams after opening dvr)</em></strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span>Save VODS forever <strong><em>(unless YouTube delete it)</em></strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span>VODS don't have muted copyrighted music <strong><em>(Unless YouTube copyrighted it)</em></strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span>It is <strong><em>automated</em></strong> no need for human</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span>Don't need to <strong><em>download the vods and upload it back to youtube</em></strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong><em>Faster than other vods archivers (e.g. they will need to wait for youtube processing)</em></strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span>If the stream is almost over 12 hours It will cut the stream for not losing the video after 12 hours <strong><em>(e.g. subathon)</em></strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span>When receive third-party takedown notice It will stop immediately and start another stream to protect from getting copyrighted strikes on your channel <strong><em>(e.g. playing music or video may cause this)</em></strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong><em>WHATEVER LANGUAGE IS SUPPORTED USING THIS SCRIPT</em></strong></span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Disadvantages Section */}
        <section id="disadvantages" className="py-20 w-full flex justify-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-serif glow-text mb-4">
                👎 Disadvantages
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Here're some of the project's disadvantages
              </p>
            </div>
            
            <Card className="neon-border bg-card/50 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>If you don't have <strong><em>twitch turbo</em></strong> or you have turbo but didn't input your token to streamlink, there will be <strong><em>ads(commercial break) on the vods</em></strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>Sometimes youtube will cut the stream for no reason or <strong><em>third-party takedown</em></strong> and it will causes a <strong><em>few minutes of archive video loss</em></strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>This project is still in <strong><em>beta</em></strong> may have some bugs that didn't fix or found</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>Setup can be difficult for people who are not computer savvy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 w-full flex justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif glow-text mb-8">
              Built with Modern Technology
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Python</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Streamlink</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Selenium</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Youtube className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">YouTube API</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Twitch API</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">FFmpeg</span>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Guide */}
        <section id="installation" className="py-20 bg-card/30 w-full flex justify-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-serif glow-text mb-4">
                Installation Guide
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Complete step-by-step instructions to get started
              </p>
            </div>
            
            <Alert className="mb-8 neon-border">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Important:</strong> This script currently supports Windows only and is still in beta development.
              </AlertDescription>
            </Alert>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="requirements" className="tabs-trigger">Requirements</TabsTrigger>
                <TabsTrigger value="download" className="tabs-trigger">Download</TabsTrigger>
                <TabsTrigger value="setup" className="tabs-trigger">Setup</TabsTrigger>
                <TabsTrigger value="config" className="tabs-trigger">Configuration</TabsTrigger>
                <TabsTrigger value="run" className="tabs-trigger">Run</TabsTrigger>
              </TabsList>
              
              <TabsContent value="requirements" className="space-y-6 tabs-content">
                <Card className="neon-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      System Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Required Software</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">✓</Badge>
                            Windows 10/11
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">✓</Badge>
                            Python (any version)
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">⚠</Badge>
                            <span className="font-semibold text-red-400">Google Chrome ≤ 130.0.6723.70 (CRITICAL)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">⚠</Badge>
                            <span className="font-semibold text-red-400">Streamlink executable ≤ 7.4.0 (CRITICAL)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">✓</Badge>
                            FFmpeg
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">API Access</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">✓</Badge>
                            YouTube Data API v3
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">✓</Badge>
                            Gmail API (for monitoring)
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">✓</Badge>
                            Twitch API credentials
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">✓</Badge>
                            YouTube Studio RTMP keys
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <Alert className="neon-border mt-6">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>CRITICAL VERSION WARNING:</strong> Using newer versions of Chrome (above 130.0.6723.70) 
                        or Streamlink (above 7.4.0) will cause <strong>SERIOUS COMPATIBILITY PROBLEMS</strong> and may prevent 
                        the script from functioning entirely. These version limits are absolutely critical for proper operation.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
                <TabNavigation showPrevious={false} />
              </TabsContent>
              
              <TabsContent value="download" className="space-y-6 tabs-content">
                <Card className="neon-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Download className="h-5 w-5 text-primary" />
                      Download and Setup
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">1. Clone the Repository</h4>
                        <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto">
                          <code>git clone https://github.com/karstenlee10/Twitch_Stream_To_YouTube.git{"\n"}cd Twitch_Stream_To_YouTube</code>
                        </pre>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">2. Install Python Dependencies</h4>
                        <p className="text-sm text-muted-foreground mb-2">Python version is flexible - any version should work. Install Streamlink ≤ 7.4.0:</p>
                        <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto">
                          <code># Install specific Streamlink version{"\n"}pip install streamlink==7.4.0{"\n"}{"\n"}# Install other dependencies{"\n"}pip install selenium requests google-auth-oauthlib google-auth-httplib2 google-api-python-client psutil pillow emoji winreg</code>
                        </pre>
                        <p className="text-xs text-muted-foreground mt-2">
                          Note: You still need to install the Streamlink executable separately (see next step).
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">3. Download and Install Streamlink Executable (CRITICAL VERSION)</h4>
                        <p className="text-sm text-red-400 font-semibold mb-2">⚠ <strong>CRITICAL:</strong> You MUST use Streamlink executable version 7.4.0-1. Newer versions will cause serious problems!</p>
                        <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto">
                          <code># Download EXACT version from GitHub:{"\n"}# https://github.com/streamlink/windows-builds/releases/tag/7.4.0-1{"\n"}{"\n"}# Install the .exe installer (not just pip package){"\n"}# Choose the Windows installer for your system architecture</code>
                        </pre>
                        <div className="mt-3">
                          <a 
                            href="https://github.com/streamlink/windows-builds/releases/tag/7.4.0-1" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                          >
                            🔗 Download Streamlink 7.4.0-1 Windows Build
                          </a>
                        </div>
                        <Alert className="neon-border mt-2 bg-red-500/10 border-red-500/30">
                          <AlertTriangle className="h-4 w-4 text-red-400" />
                          <AlertDescription className="text-red-300">
                            You must install the Streamlink <strong>executable</strong> version, not just the Python package. Using version 7.4.1 or higher will break the script functionality entirely.
                          </AlertDescription>
                        </Alert>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">4. Download and Setup FFmpeg</h4>
                        <p className="text-sm text-muted-foreground mb-2">Download FFmpeg from the official website, extract it, and create two copies of the executable in your project folder.</p>
                        <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto">
                          <code># Download from: https://ffmpeg.org/download.html{"\n"}# Extract the ffmpeg.exe file{"\n"}{"\n"}# Copy the same ffmpeg.exe file twice:{"\n"}# 1. Keep one as: ffmpeg.exe{"\n"}# 2. Copy and rename the second to: ffmpeg111.exe{"\n"}{"\n"}# Both files should be identical - just different names</code>
                        </pre>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">5. Setup Chrome Profile</h4>
                        <p className="text-sm text-muted-foreground mb-2">Create a dedicated Chrome profile for the automation. <strong>Chrome version must be 130.0.6723.70 or lower.</strong></p>
                        <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto">
                          <code># Check your Chrome version in chrome://version/{"\n"}# If newer than 130.0.6723.70, consider downgrading{"\n"}# Create dedicated profile: Chrome Settings {">"}  Add Person</code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <TabNavigation />
              </TabsContent>
              
              <TabsContent value="setup" className="space-y-6 tabs-content">
                <Card className="neon-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      API Setup
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">1. Google APIs Setup (YouTube Data API v3 + Gmail API)</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Go to <a href="https://console.developers.google.com/" className="text-primary hover:underline" target="_blank">Google Cloud Console</a></li>
                        <li>Create a new project or select an existing one</li>
                        <li><strong>Enable Required APIs:</strong>
                          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li>Enable the <strong>YouTube Data API v3</strong></li>
                            <li>Enable the <strong>Gmail API</strong> (for monitoring takedown emails)</li>
                          </ul>
                        </li>
                        <li>Create credentials (OAuth 2.0 client ID)</li>
                        <li><strong>Configure OAuth Consent Screen:</strong>
                          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li>Choose "External" user type (unless you have Google Workspace)</li>
                            <li>Fill in App name and required information</li>
                            <li>Set <strong>User support email</strong> as your channel account email</li>
                            <li>Set <strong>Developer contact information</strong> as the same email</li>
                          </ul>
                        </li>
                        <li><strong>Add Required Scopes:</strong>
                          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li>Click "Add or Remove Scopes"</li>
                            <li>Add: <code className="text-xs bg-muted/50 px-1 rounded">https://www.googleapis.com/auth/youtube.force-ssl</code></li>
                            <li>Add: <code className="text-xs bg-muted/50 px-1 rounded">https://www.googleapis.com/auth/gmail.readonly</code></li>
                          </ul>
                        </li>
                        <li><strong>Add Test Users:</strong>
                          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li>In OAuth consent screen, go to "Test users"</li>
                            <li>Add your channel account's email as a test user</li>
                            <li>This email will be used for authentication</li>
                          </ul>
                        </li>
                        <li>Download the JSON file and save as <code>client_secret.json</code></li>
                      </ol>
                      
                      <Alert className="neon-border mt-4">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                          <strong>Important:</strong> Use the same email address for User support, Developer contact, 
                          and Test users. This should be the email associated with your YouTube channel. Both APIs 
                          use the same OAuth credentials and consent screen.
                        </AlertDescription>
                      </Alert>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">2. Twitch API Setup</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Go to <a href="https://dev.twitch.tv/console/apps" className="text-primary hover:underline" target="_blank">Twitch Developer Console</a></li>
                        <li>Create a new application</li>
                        <li><strong>Choose Category:</strong> Select "Website Integration" as the category</li>
                        <li>Fill in OAuth Redirect URLs (can use http://localhost for testing)</li>
                        <li>Copy the <strong>Client ID</strong> and <strong>Client Secret</strong></li>
                        <li>Add these to your config_tv.py file:
                          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li><code className="text-xs bg-muted/50 px-1 rounded">client_id = "your_twitch_client_id"</code></li>
                            <li><code className="text-xs bg-muted/50 px-1 rounded">client_secret = "your_twitch_client_secret"</code></li>
                          </ul>
                        </li>
                      </ol>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-3">3. YouTube Studio RTMP Keys Setup (Detailed)</h4>
                      <p className="text-sm text-muted-foreground mb-4">You need to create <strong>two separate</strong> RTMP stream keys in YouTube Studio for redundancy and multi-streaming support.</p>
                      
                      <div className="space-y-4">
                        <div className="bg-card/30 p-4 rounded-lg border border-border/50">
                          <h5 className="font-semibold text-primary mb-2">Step 4.1: Create First RTMP Key</h5>
                          <ol className="list-decimal list-inside space-y-1 text-sm ml-4">
                            <li>Go to <a href="https://studio.youtube.com/" className="text-primary hover:underline" target="_blank">YouTube Studio</a></li>
                            <li>Navigate to "Go Live" → "Stream"</li>
                            <li>Click "Create Stream" or "Manage" if you have existing streams</li>
                            <li>Create a new stream key with name: <code className="bg-muted/50 px-2 py-1 rounded text-xs">[streamer_username]</code></li>
                            <li className="text-muted-foreground">Example: If archiving "caseoh", name it: <code className="bg-muted/50 px-2 py-1 rounded text-xs">caseoh</code></li>
                            <li>Copy the generated Stream Key</li>
                            <li>In config_tv.py, set: <code className="bg-muted/50 px-2 py-1 rounded text-xs">rtmpkeyname = "caseoh"</code></li>
                            <li>In config_tv.py, set: <code className="bg-muted/50 px-2 py-1 rounded text-xs">rtmp_key = "your_first_stream_key_here"</code></li>
                          </ol>
                        </div>
                        
                        <div className="bg-card/30 p-4 rounded-lg border border-border/50">
                          <h5 className="font-semibold text-primary mb-2">Step 4.2: Create Second RTMP Key (Backup)</h5>
                          <ol className="list-decimal list-inside space-y-1 text-sm ml-4">
                            <li>In the same YouTube Studio, create another stream key</li>
                            <li>Name it: <code className="bg-muted/50 px-2 py-1 rounded text-xs">1[streamer_username]mult</code></li>
                            <li className="text-muted-foreground">Example: If archiving "caseoh", name it: <code className="bg-muted/50 px-2 py-1 rounded text-xs">1caseohmult</code></li>
                            <li>Copy the generated Stream Key</li>
                            <li>In config_tv.py, set: <code className="bg-muted/50 px-2 py-1 rounded text-xs">rtmpkeyname1 = "1caseohmult"</code></li>
                            <li>In config_tv.py, set: <code className="bg-muted/50 px-2 py-1 rounded text-xs">rtmp_key_1 = "your_second_stream_key_here"</code></li>
                          </ol>
                        </div>
                      </div>
                      
                      <Alert className="neon-border mt-4">
                        <CheckCircle className="h-4 w-4" />
                        <AlertDescription>
                          <strong>Why Two Keys?</strong> The script uses two RTMP keys for redundancy. If the first stream fails, 
                          it automatically switches to the second key to maintain continuous archiving without interruption.
                        </AlertDescription>
                      </Alert>
                      
                      <div className="mt-4 p-4 bg-muted/20 rounded-lg">
                        <h5 className="font-semibold mb-2">Configuration Summary:</h5>
                        <pre className="bg-muted/50 p-3 rounded text-xs overflow-x-auto">
                          <code>{"# Example for streamer 'caseoh'\n"}rtmpkeyname = "caseoh"  # First key name{"\n"}rtmpkeyname1 = "1caseohmult"  # Second key name{"\n"}rtmp_key = "a1b2-c3d4-e5f6-g7h8"  # First stream key{"\n"}rtmp_key_1 = "x9y8-z7w6-v5u4-t3s2"  # Second stream key</code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <TabNavigation />
              </TabsContent>
              
              <TabsContent value="config" className="space-y-6 tabs-content">
                <Card className="neon-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Configuration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      Edit the <code>config_tv.py</code> file with your settings:
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Basic Settings</h4>
                        <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto">
                          <code># Archive Settings{"\n"}username = "twitch_username_to_archive"  # The Twitch streamer to archive{"\n"}playvideo = True  # Play ending/error screens{"\n"}unliststream = False  # Make streams public after completion{"\n"}disablechat = True  # Disable chat on live stream</code>
                        </pre>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">RTMP Configuration (Based on Setup Step 3)</h4>
                        <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto">
                          <code># YouTube RTMP Settings (use keys from Setup step 3){"\n"}rtmpkeyname = "streamer_username"  # First key name{"\n"}rtmpkeyname1 = "1streamer_usernamemult"  # Second key name{"\n"}rtmp_key = "your_first_youtube_stream_key_here"{"\n"}rtmp_key_1 = "your_second_youtube_stream_key_here"</code>
                        </pre>
                        <p className="text-xs text-muted-foreground mt-2">
                          Replace "streamer_username" with the actual Twitch username you're archiving (e.g., "caseoh").
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Chrome & API Configuration</h4>
                        <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto">
                          <code># Chrome Profile{"\n"}Chrome_Profile = "your_chrome_profile_name"{"\n"}{"\n"}# Google API{"\n"}accountname = "your_google_account_email"{"\n"}brandacc = False  # Set to True if using brand account{"\n"}brandaccname = "Null"  # Brand account name if brandacc is True{"\n"}{"\n"}# Twitch API{"\n"}client_id = "your_twitch_client_id"{"\n"}client_secret = "your_twitch_client_secret"</code>
                        </pre>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Advanced Options</h4>
                        <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto">
                          <code># Playlist Settings{"\n"}playlist = False  # Add streams to playlist{"\n"}playlist_id0 = "YOUR_PLAYLIST_ID"{"\n"}playlist_id1 = "YOUR_SECOND_PLAYLIST_ID"  # For multiple playlists{"\n"}{"\n"}# Local Archive{"\n"}local_archive = False  # Save local copies{"\n"}{"\n"}# Stream Features{"\n"}show_twitch_category = True  # Show game category in description{"\n"}public_notification = False  # Send notifications{"\n"}thumbnail = False  # Upload custom thumbnails</code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <TabNavigation />
              </TabsContent>
              
              <TabsContent value="run" className="space-y-6 tabs-content">
                <Card className="neon-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Terminal className="h-5 w-5 text-primary" />
                      Running the Archiver
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">1. First Run - Authentication</h4>
                        <p className="text-sm text-muted-foreground mb-2">Run the main script to authenticate with Google APIs:</p>
                        <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto">
                          <code>python check_tv.py</code>
                        </pre>
                        <p className="text-sm text-muted-foreground mt-2">Follow the browser prompts to authorize the application.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">2. Normal Operation</h4>
                        <p className="text-sm text-muted-foreground mb-2">Once configured, the script runs automatically:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                          <li>Monitors the specified Twitch channel</li>
                          <li>Starts YouTube stream when Twitch goes live</li>
                          <li>Handles failures and restarts automatically</li>
                          <li>Stops when Twitch stream ends</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">3. Monitoring</h4>
                        <p className="text-sm text-muted-foreground mb-2">The script provides logging and monitoring:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                          <li>Check console output for real-time status</li>
                          <li>Monitor email for takedown notices</li>
                          <li>Review YouTube Studio for stream health</li>
                        </ul>
                      </div>
                    </div>
                    
                    <Alert className="neon-border">
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Pro Tip:</strong> Run the script in a dedicated environment or server for 24/7 operation. 
                        Consider using Windows Task Scheduler for automatic startup.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
                <TabNavigation showNext={false} />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Troubleshooting & Support */}
        <section id="docs" className="py-20 w-full flex justify-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif glow-text mb-4">
                Troubleshooting & Support
              </h2>
              <p className="text-xl text-muted-foreground">
                Common issues and solutions
              </p>
            </div>
            
            <div className="space-y-8">
              <Card className="neon-border">
                <CardHeader>
                  <CardTitle>Common Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Google API Authentication Failed</h4>
                      <p className="text-sm text-muted-foreground mb-2">If you can't authenticate with Google APIs:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>Make an issue on GitHub with your channel email</li>
                        <li>The developer will provide a working client_secret</li>
                        <li>Ensure your OAuth consent screen is properly configured</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Stream Quality Issues</h4>
                      <p className="text-sm text-muted-foreground mb-2">For better stream quality:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>Get Twitch Turbo to avoid ads in VODs</li>
                        <li>Configure Streamlink with your Twitch token</li>
                        <li>Adjust FFmpeg bitrate settings in the script</li>
                        <li>Ensure stable internet connection</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Chrome Browser Issues</h4>
                      <p className="text-sm text-muted-foreground mb-2">If Chrome automation fails:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>Ensure Chrome version is ≤ 130.0.6723.70 (critical requirement)</li>
                        <li>Use a dedicated Chrome profile for the script</li>
                        <li>Disable Chrome extensions in the automation profile</li>
                        <li>Make sure Chrome profile path is correctly configured in config_tv.py</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="neon-border">
                <CardHeader>
                  <CardTitle>Getting Help</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Documentation</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a href="https://deepwiki.com/karstenlee10/Twitch_Stream_To_YouTube" className="text-primary hover:underline" target="_blank">
                            📖 Detailed Wiki Documentation
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/karstenlee10/Twitch_Stream_To_YouTube" className="text-primary hover:underline" target="_blank">
                            🐙 GitHub Repository
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Support</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a href="https://github.com/karstenlee10/Twitch_Stream_To_YouTube/issues" className="text-primary hover:underline" target="_blank">
                            🐛 Report Issues on GitHub
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support & Donations Section */}
        <section id="support" className="py-20 bg-card/30 w-full flex justify-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif glow-text mb-4">
                💲 Support the Project
              </h2>
              <p className="text-xl text-muted-foreground">
                Help support development and maintenance of this project
              </p>
            </div>
            
            <Card className="neon-border bg-card/50 mb-8">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Heart className="h-6 w-6 text-red-400" />
                  <h3 className="text-xl font-semibold">Why Support?</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-6">
                  The gifted sub will help provide more ad-free VODs to other people watching and better archiving quality.
                </p>
                
                <div className="flex justify-center">
                  <div className="max-w-md">
                    <Card className="neon-border bg-background/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <div className="h-16 w-16 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">🎮</span>
                          </div>
                          <h4 className="font-semibold text-lg mb-2">Twitch Gift Sub</h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            Go to a streamer's page you want ad-free content from, 
                            press "give sub to a specific user" and then type <strong>karsteniee</strong> as the twitch id
                          </p>
                        </div>
                        <Button className="neon-border w-full" asChild>
                          <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer">
                            <span className="mr-2">💜</span>
                            Gift Sub on Twitch
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <p className="text-muted-foreground">
                Every contribution helps maintain and improve this free, open-source project. Thank you for your support! ❤️
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/95 backdrop-blur w-full flex justify-center">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Play className="h-3 w-3 text-primary" />
              </div>
              <span className="font-serif font-semibold">Twitch Stream to YouTube</span>
              <span className="text-muted-foreground">by karstenlee10</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/karstenlee10/Twitch_Stream_To_YouTube" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <p className="text-sm text-muted-foreground">
                Please credit this project when using: 
                <a href="https://is.gd/archivescript" className="text-primary hover:underline ml-1" target="_blank">
                  is.gd/archivescript
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}