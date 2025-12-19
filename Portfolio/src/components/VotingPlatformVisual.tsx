import { motion } from 'framer-motion';
import { Database, Shield, Code2, CheckCircle } from 'lucide-react';

export const VotingPlatformVisual = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden flex items-center justify-center">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

            {/* Floating Background Icons */}
            <motion.div
                initial={{ opacity: 0, scale: 0, x: 50, y: -50 }}
                whileInView={{ opacity: 0.2, scale: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-1/4 right-1/4"
            >
                <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Database className="w-16 h-16 text-cyan-400" />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0, x: -50, y: 50 }}
                whileInView={{ opacity: 0.2, scale: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-1/4 left-1/4"
            >
                <motion.div
                    animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <Shield className="w-14 h-14 text-blue-400" />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0, y: -50 }}
                whileInView={{ opacity: 0.2, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-1/3 left-1/3"
            >
                <motion.div
                    animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <Code2 className="w-12 h-12 text-slate-400" />
                </motion.div>
            </motion.div>

            {/* Central Interactive Element */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="relative z-10 p-6 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 shadow-2xl shadow-cyan-500/20 group cursor-pointer"
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />

                <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-full">
                    <CheckCircle className="w-12 h-12 text-white drop-shadow-lg" />
                </div>

                {/* Pulsing Ring */}
                <div className="absolute inset-0 rounded-full border border-cyan-500/30 scale-125 animate-ping opacity-20" />
            </motion.div>
        </div>
    );
};
