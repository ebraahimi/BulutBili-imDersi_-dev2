/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Globe, Github, Linkedin, Sparkles, UserCircle, Briefcase, GraduationCap, Triangle, Circle, Hexagon, Plus, Square, Star, Cloud, Zap, Moon } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 p-4 sm:p-8 relative overflow-hidden flex flex-col items-center justify-center selection:bg-fuchsia-500 selection:text-white">
      {/* Background Animated Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: ['-5%', '5%', '-5%'],
            y: ['-5%', '5%', '-5%'],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px]"
        />
        <motion.div
           animate={{
            x: ['5%', '-5%', '5%'],
            y: ['5%', '-5%', '5%'],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-fuchsia-600/20 blur-[120px]"
        />
        <motion.div
           animate={{
            x: ['0%', '10%', '0%'],
            y: ['10%', '0%', '10%'],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[100px]"
        />

        {/* Geometric Shapes */}
        <motion.div animate={{y: [0, -50, 0], rotate: [0, 180, 360]}} transition={{duration: 20, repeat: Infinity, ease: 'linear'}} className="absolute top-[10%] left-[15%] opacity-20">
          <Triangle className="w-16 h-16 text-indigo-400" />
        </motion.div>
        <motion.div animate={{x: [0, 50, 0], rotate: [0, -180, -360]}} transition={{duration: 25, repeat: Infinity, ease: 'linear'}} className="absolute top-[20%] right-[20%] opacity-20">
          <Circle className="w-12 h-12 text-fuchsia-400" />
        </motion.div>
        <motion.div animate={{y: [0, 60, 0], rotate: [0, 90, 180]}} transition={{duration: 22, repeat: Infinity, ease: 'linear'}} className="absolute bottom-[20%] left-[25%] opacity-20">
          <Hexagon className="w-20 h-20 text-blue-400" />
        </motion.div>
        <motion.div animate={{x: [0, -40, 0], rotate: [0, -90, -180]}} transition={{duration: 18, repeat: Infinity, ease: 'linear'}} className="absolute bottom-[30%] right-[15%] opacity-20">
          <Plus className="w-14 h-14 text-purple-400" />
        </motion.div>
        <motion.div animate={{y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 180, 360]}} transition={{duration: 28, repeat: Infinity, ease: 'linear'}} className="absolute top-[45%] left-[5%] opacity-15">
          <Square className="w-10 h-10 text-pink-400" />
        </motion.div>
        <motion.div animate={{y: [0, 40, 0], rotate: [0, -180, -360]}} transition={{duration: 24, repeat: Infinity, ease: 'linear'}} className="absolute top-[65%] right-[5%] opacity-15">
          <Triangle className="w-12 h-12 text-indigo-300" />
        </motion.div>
        
        {/* Additional Shapes */}
        <motion.div animate={{y: [0, -60, 0], x: [0, -30, 0], scale: [1, 1.2, 1]}} transition={{duration: 21, repeat: Infinity, ease: 'linear'}} className="absolute top-[10%] right-[40%] opacity-10">
          <Star className="w-16 h-16 text-yellow-300 fill-yellow-300" />
        </motion.div>
        <motion.div animate={{x: [0, -80, 0]}} transition={{duration: 35, repeat: Infinity, ease: 'linear'}} className="absolute top-[5%] left-[45%] opacity-10">
          <Cloud className="w-24 h-24 text-slate-300 fill-slate-300" />
        </motion.div>
        <motion.div animate={{y: [0, 20, 0], rotate: [0, 15, -15, 0]}} transition={{duration: 15, repeat: Infinity, ease: 'linear'}} className="absolute bottom-[10%] left-[8%] opacity-20">
          <Zap className="w-12 h-12 text-yellow-400 fill-yellow-400" />
        </motion.div>
        <motion.div animate={{y: [0, -20, 0], rotate: [0, -10, 10, 0]}} transition={{duration: 26, repeat: Infinity, ease: 'linear'}} className="absolute top-[35%] right-[8%] opacity-20">
          <Moon className="w-14 h-14 text-indigo-200 fill-indigo-200" />
        </motion.div>
        <motion.div animate={{scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1]}} transition={{duration: 10, repeat: Infinity, ease: 'linear'}} className="absolute bottom-[40%] left-[45%] opacity-10">
          <Circle className="w-8 h-8 text-fuchsia-300 fill-fuchsia-300" />
        </motion.div>

      </div>

      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 z-10"
      >
        {/* Profile Card */}
        <motion.div variants={itemVariants} className="md:col-span-1 flex flex-col gap-6">
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl h-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
            
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-fuchsia-500 rounded-full blur-xl opacity-50" />
              <div className="bg-slate-900 rounded-full p-1 relative z-10 border-2 border-white/10">
                <UserCircle strokeWidth={1} className="w-32 h-32 text-slate-300" />
              </div>
            </motion.div>

            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-fuchsia-300 tracking-tight mb-2">
              Sara Ebrahimi
            </h1>
            
            <div className="flex flex-col items-center text-indigo-300/80 mb-6 gap-2 bg-indigo-500/10 px-4 py-3 rounded-xl border border-indigo-500/20 text-sm relative z-10 w-full">
              <span className="font-semibold text-indigo-200">Bilgisayar Programcılığı Öğrencisi</span>
              <span className="text-center text-xs opacity-80">Pamukkale Üniversitesi<br/>Denizli Teknik Bilimler MYO</span>
            </div>

            <div className="bg-indigo-900/40 border border-indigo-500/20 p-4 rounded-xl mb-6 w-full text-left relative z-10">
              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-indigo-400" /> Kariyer Hedefi
              </h3>
              <p className="text-xs text-indigo-200/80 leading-relaxed font-medium">
                <strong>DevOps Mühendisliği</strong> rolünde iş arıyorum. Yazılım ve altyapı alanında <strong>2 yıllık tecrübem</strong> bulunmaktadır.
              </p>
            </div>

            <div className="flex gap-4 mt-auto relative z-10 w-full justify-center">
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://github.com/ebraahimi/" 
                target="_blank" rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-xl transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5 text-slate-300" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://www.linkedin.com/in/ebraahimi/" 
                target="_blank" rel="noopener noreferrer"
                className="bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 p-3 rounded-xl transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5 }}
                href="mailto:ebraahimisara@gmail.com"
                className="bg-fuchsia-500/10 hover:bg-fuchsia-500/20 border border-fuchsia-500/20 p-3 rounded-xl transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5 text-fuchsia-400" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Info Grid */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* About Section */}
          <motion.div variants={itemVariants} className="sm:col-span-2 bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-fuchsia-500" />
             <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-white">
               <GraduationCap className="text-indigo-400 w-6 h-6" />
               Hakkımda
             </h3>
             <p className="text-slate-300 leading-relaxed">
               Merhaba! Ben Sara Ebrahimi. Pamukkale Üniversitesi Bilgisayar Programcılığı bölümü 2022 girişli, 22331817 numaralı öğrencisiyim. Bu sayfa, Bulut Bilişim dersi ödevi için hazırlanmıştır. Kullanılan kod ve teknolojiler hakkında daha fazla bilgi README dosyasında mevcuttur.
               <br/><br/>
               DevOps alanında çalışmaya istekliyim ve bu alanda bir iş fırsatı arıyorum. Türkiye'de olmaktan dolayı mutluyum ve burada kalmayı umuyorum.
             </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.a 
            variants={itemVariants} 
            whileHover={{ scale: 1.02 }}
            href="https://ebraahimi.net/en/" 
            target="_blank" rel="noopener noreferrer"
            className="bg-gradient-to-br from-indigo-900/40 to-slate-900/40 border border-indigo-500/20 backdrop-blur-lg rounded-3xl p-6 shadow-2xl flex flex-col justify-between group"
          >
            <div className="bg-indigo-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Globe className="text-indigo-400 w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-indigo-200/60 font-medium mb-1">Web Sitem</p>
              <h4 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">ebraahimi.net/en/</h4>
            </div>
          </motion.a>

          <motion.div 
            variants={itemVariants} 
            className="bg-gradient-to-br from-fuchsia-900/40 to-slate-900/40 border border-fuchsia-500/20 backdrop-blur-lg rounded-3xl p-6 shadow-2xl flex flex-col justify-between group"
          >
            <div className="bg-fuchsia-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-fuchsia-400 w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-fuchsia-200/60 font-medium mb-2">E-Posta Adresleri</p>
              <a href="mailto:ebraahimisara@gmail.com" className="block text-sm font-semibold text-white hover:text-fuchsia-300 transition-colors truncate mb-1" title="ebraahimisara@gmail.com">ebraahimisara@gmail.com</a>
              <a href="mailto:sebrahimi221@posta.pau.edu.tr" className="block text-sm font-semibold text-white hover:text-fuchsia-300 transition-colors truncate" title="sebrahimi221@posta.pau.edu.tr">sebrahimi221@posta.pau.edu.tr</a>
            </div>
          </motion.div>

          {/* Footer Card */}
          <motion.div variants={itemVariants} className="sm:col-span-2 bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400">
             <div className="flex flex-col gap-1 mb-4 sm:mb-0">
               <div className="flex items-center gap-2 text-white font-medium">
                 <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                 Bulut Bilişim Dersi - Ödev 2
               </div>
               <span className="text-xs text-slate-400 italic">Değerli hocama ilgisi ve emekleri için teşekkür ederim.</span>
             </div>
             <div className="flex gap-4">
               <span>#Docker</span>
               <span>#GitHub</span>
             </div>
          </motion.div>

        </div>
      </motion.main>
    </div>
  );
}
