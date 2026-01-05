import { Clock, Zap, Layers, Image as ImageIcon, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SpriteSheetGuide = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-white py-24 px-6 lg:px-12 border-t border-gray-100">
            <div className="max-w-[1600px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#1957BC] font-bold tracking-wider uppercase text-sm mb-2 block">{t('guide.premium_guide')}</span>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-[#243179] mb-6 tracking-tight">
                        {t('guide.title')}
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        {t('guide.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* 1. Frame Count Section */}
                    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden group h-full">
                        <div className="p-8 border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#1957BC] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                    <Layers className="text-[#1957BC]" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#243179]">{t('guide.section_1_title')}</h3>
                                    <p className="text-gray-500 text-sm mt-1">
                                        <span className="font-semibold text-[#1957BC]">{t('guide.section_1_subtitle')}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col divide-y divide-gray-100">
                            {[
                                { title: t('guide.idle_title'), frames: t('guide.idle_frames'), desc: t('guide.idle_desc'), icon: <Clock size={20} /> },
                                { title: t('guide.walk_title'), frames: t('guide.walk_frames'), desc: t('guide.walk_desc'), icon: <CheckCircle size={20} /> },
                                { title: t('guide.run_title'), frames: t('guide.run_frames'), desc: t('guide.run_desc'), icon: <Zap size={20} /> },
                                { title: t('guide.attack_title'), frames: t('guide.attack_frames'), desc: t('guide.attack_desc'), icon: <AlertCircle size={20} /> },
                                { title: t('guide.fx_title'), frames: t('guide.fx_frames'), desc: t('guide.fx_desc'), icon: <Layers size={20} /> },
                            ].map((item, idx) => (
                                <div key={idx} className="p-7 hover:bg-blue-50/30 transition-colors group/item flex gap-5 items-start">
                                    <div className="mt-1 text-gray-600 group-hover/item:text-[#1957BC] transition-colors shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between gap-2 mb-2">
                                            <h4 className="text-base font-semibold text-[#343435]">{item.title}</h4>
                                            <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded whitespace-nowrap">{item.frames}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. FPS Section */}
                    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden group h-full">
                        <div className="p-8 border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#1957BC] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                    <Clock className="text-[#1957BC]" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#243179]">{t('guide.section_2_title')}</h3>
                                    <p className="text-gray-500 text-sm mt-1">
                                        {t('guide.section_2_subtitle')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col divide-y divide-gray-100">
                            {[
                                { fps: "8 ~ 12 FPS", type: t('guide.fps_retro_type'), desc: t('guide.fps_retro_desc'), color: "text-amber-500", bg: "bg-amber-50" },
                                { fps: "24 FPS", type: t('guide.fps_cinema_type'), desc: t('guide.fps_cinema_desc'), color: "text-emerald-600", bg: "bg-emerald-50" },
                                { fps: "30 FPS", type: t('guide.fps_game_type'), desc: t('guide.fps_game_desc'), color: "text-[#1957BC]", bg: "bg-blue-50" },
                            ].map((item, idx) => (
                                <div key={idx} className="p-7 hover:bg-gray-50 transition-colors group/item relative overflow-hidden">
                                    <div className="flex items-baseline justify-between mb-3">
                                        <div className={`font-mono text-2xl font-bold ${item.color} tracking-tight`}>{item.fps}</div>
                                        <div className="font-semibold text-[#343435] text-base">
                                            {item.type}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                                        {item.desc}
                                    </p>
                                    <div className={`absolute top-0 right-0 w-20 h-20 ${item.bg} rounded-bl-full opacity-0 group-hover/item:opacity-50 transition-opacity duration-300 transform translate-x-4 -translate-y-4`}></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 3. Production Guidelines */}
                    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden group h-full">
                        <div className="p-8 border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#1957BC] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                    <ImageIcon className="text-[#1957BC]" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#243179]">{t('guide.section_3_title')}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{t('guide.section_3_subtitle')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col divide-y divide-gray-100">
                            {[
                                { title: t('guide.equal_sizing_title'), subtitle: "Equal Sizing", desc: t('guide.equal_sizing_desc') },
                                { title: t('guide.keyframes_first_title'), subtitle: "Keyframes First", desc: t('guide.keyframes_first_desc') },
                                { title: t('guide.looping_title'), subtitle: "Looping", desc: t('guide.looping_desc') },
                                { title: t('guide.padding_title'), subtitle: "Padding", desc: t('guide.padding_desc') }
                            ].map((item, idx) => (
                                <div key={idx} className="p-7 hover:bg-blue-50/30 transition-colors group/item relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-14 h-14 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-bl-full transform translate-x-6 -translate-y-6 group-hover/item:translate-x-2 group-hover/item:-translate-y-2 transition-transform duration-500"></div>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="text-base font-semibold text-[#343435] group-hover/item:text-[#1957BC] transition-colors">{item.title}</h4>
                                        <span className="text-xs font-bold text-gray-600 uppercase tracking-widest group-hover/item:text-blue-300 transition-colors">{item.subtitle}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed pt-1">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpriteSheetGuide;
