import { motion } from 'framer-motion';
import { Clapperboard, Search, Star, Film } from 'lucide-react';

export const MovieExplorerVisual = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 to-purple-900/40 relative overflow-hidden flex items-center justify-center">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            {/* Floating Background Icons */}
            <motion.div
                initial={{ opacity: 0, scale: 0, x: -50, y: -50 }}
                whileInView={{ opacity: 0.2, scale: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-1/4 left-1/4"
            >
                <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Search className="w-14 h-14 text-purple-400" />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0, x: 50, y: 50 }}
                whileInView={{ opacity: 0.2, scale: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-1/4 right-1/4"
            >
                <motion.div
                    animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <Star className="w-12 h-12 text-yellow-400" />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0, y: -50 }}
                whileInView={{ opacity: 0.2, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-1/3 right-1/4"
            >
                <motion.div
                    animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <Film className="w-10 h-10 text-pink-400" />
                </motion.div>
            </motion.div>

            {/* Central Interactive Element */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="relative z-10 p-6 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-white/10 shadow-2xl shadow-purple-500/20 group cursor-pointer"
            >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />

                <div className="relative bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-xl">
                    <Clapperboard className="w-12 h-12 text-white drop-shadow-lg" />
                </div>

                {/* Pulsing Effect */}
                <div className="absolute inset-0 rounded-2xl border border-purple-500/30 scale-125 animate-pulse opacity-0 group-hover:opacity-20 transition-opacity" />
            </motion.div>
        </div>
    );
};
