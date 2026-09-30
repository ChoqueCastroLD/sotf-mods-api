/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Meta_DescriptionInputs */

const en_profile_achievements_meta_description = /** @type {(inputs: Profile_Achievements_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How Survivor ranks, XP, creator tiers, badges and mod milestones work on SOTF Mods. Public rules that reward quality and help, not volume.`)
};

const es_profile_achievements_meta_description = /** @type {(inputs: Profile_Achievements_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo funcionan los rangos de superviviente, la XP, los niveles de creador, las insignias y los hitos de los mods en SOTF Mods. Reglas públicas que premian la calidad y la ayuda, no el volumen.`)
};

const de_profile_achievements_meta_description = /** @type {(inputs: Profile_Achievements_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So funktionieren Überlebenden-Ränge, XP, Ersteller-Stufen, Abzeichen und Mod-Meilensteine auf SOTF Mods. Öffentliche Regeln, die Qualität und Hilfe belohnen, nicht Masse.`)
};

const fr_profile_achievements_meta_description = /** @type {(inputs: Profile_Achievements_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment fonctionnent les rangs de survivant, l’XP, les paliers de créateur, les badges et les jalons des mods sur SOTF Mods. Des règles publiques qui récompensent la qualité et l’entraide, pas le volume.`)
};

const it_profile_achievements_meta_description = /** @type {(inputs: Profile_Achievements_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come funzionano gradi di sopravvissuto, XP, livelli da creatore, distintivi e traguardi delle mod su SOTF Mods. Regole pubbliche che premiano qualità e aiuto, non il volume.`)
};

const nl_profile_achievements_meta_description = /** @type {(inputs: Profile_Achievements_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zo werken overlevingsrangen, XP, makersniveaus, badges en modmijlpalen op SOTF Mods. Openbare regels die kwaliteit en hulp belonen, geen volume.`)
};

const pl_profile_achievements_meta_description = /** @type {(inputs: Profile_Achievements_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak działają rangi ocalałych, XP, poziomy twórców, odznaki i kamienie milowe modów na SOTF Mods. Publiczne zasady, które nagradzają jakość i pomoc, a nie ilość.`)
};

const pt_profile_achievements_meta_description = /** @type {(inputs: Profile_Achievements_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como funcionam as patentes de sobrevivente, o XP, os níveis de criador, as insígnias e os marcos dos mods no SOTF Mods. Regras públicas que premiam qualidade e ajuda, não volume.`)
};

const ru_profile_achievements_meta_description = /** @type {(inputs: Profile_Achievements_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как устроены ранги выживших, XP, уровни авторов, значки и вехи модов на SOTF Mods. Открытые правила, которые награждают качество и помощь, а не количество.`)
};

const sv_profile_achievements_meta_description = /** @type {(inputs: Profile_Achievements_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så fungerar överlevarranger, XP, skaparnivåer, märken och moddmilstolpar på SOTF Mods. Offentliga regler som belönar kvalitet och hjälp, inte volym.`)
};

const tr_profile_achievements_meta_description = /** @type {(inputs: Profile_Achievements_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’ta hayatta kalan rütbeleri, XP, üretici seviyeleri, rozetler ve mod kilometre taşları nasıl çalışır. Hacmi değil kaliteyi ve yardımı ödüllendiren herkese açık kurallar.`)
};

const zh_profile_achievements_meta_description = /** @type {(inputs: Profile_Achievements_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods 的幸存者等级、XP、创作者段位、徽章和模组里程碑如何运作。公开的规则奖励质量与互助，而非数量。`)
};

const ja_profile_achievements_meta_description = /** @type {(inputs: Profile_Achievements_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods のサバイバーランク、XP、クリエイターティア、バッジ、MOD マイルストーンの仕組み。量ではなく質と助け合いを評価する公開ルールです。`)
};

/**
* | output |
* | --- |
* | "How Survivor ranks, XP, creator tiers, badges and mod milestones work on SOTF Mods. Public rules that reward quality and help, not volume." |
*
* @param {Profile_Achievements_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_meta_description = /** @type {((inputs?: Profile_Achievements_Meta_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Meta_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_meta_description(inputs)
	if (locale === "de") return de_profile_achievements_meta_description(inputs)
	if (locale === "fr") return fr_profile_achievements_meta_description(inputs)
	if (locale === "it") return it_profile_achievements_meta_description(inputs)
	if (locale === "nl") return nl_profile_achievements_meta_description(inputs)
	if (locale === "pl") return pl_profile_achievements_meta_description(inputs)
	if (locale === "pt") return pt_profile_achievements_meta_description(inputs)
	if (locale === "ru") return ru_profile_achievements_meta_description(inputs)
	if (locale === "sv") return sv_profile_achievements_meta_description(inputs)
	if (locale === "tr") return tr_profile_achievements_meta_description(inputs)
	if (locale === "zh") return zh_profile_achievements_meta_description(inputs)
	if (locale === "ja") return ja_profile_achievements_meta_description(inputs)
	return en_profile_achievements_meta_description(inputs)
});
