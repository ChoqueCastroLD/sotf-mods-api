/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_IntroInputs */

const en_profile_achievements_intro = /** @type {(inputs: Profile_Achievements_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every rule of the island’s rewards, in the open. They recognise quality and help, never raw volume.`)
};

const es_profile_achievements_intro = /** @type {(inputs: Profile_Achievements_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las reglas de las recompensas de la isla, a la vista. Reconocen la calidad y la ayuda, nunca el volumen.`)
};

const de_profile_achievements_intro = /** @type {(inputs: Profile_Achievements_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Regeln der Belohnungen auf der Insel, offen einsehbar. Sie würdigen Qualität und Hilfe, niemals bloße Masse.`)
};

const fr_profile_achievements_intro = /** @type {(inputs: Profile_Achievements_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les règles des récompenses de l’île, en toute transparence. Elles saluent la qualité et l’entraide, jamais le simple volume.`)
};

const it_profile_achievements_intro = /** @type {(inputs: Profile_Achievements_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le regole delle ricompense dell’isola, alla luce del sole. Premiano la qualità e l’aiuto, mai il semplice volume.`)
};

const nl_profile_achievements_intro = /** @type {(inputs: Profile_Achievements_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle regels van de beloningen op het eiland, voor iedereen zichtbaar. Ze waarderen kwaliteit en hulp, nooit puur volume.`)
};

const pl_profile_achievements_intro = /** @type {(inputs: Profile_Achievements_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie zasady nagród na wyspie, jawnie. Doceniają jakość i pomoc, nigdy samą ilość.`)
};

const pt_profile_achievements_intro = /** @type {(inputs: Profile_Achievements_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as regras das recompensas da ilha, às claras. Elas reconhecem qualidade e ajuda, nunca volume puro.`)
};

const ru_profile_achievements_intro = /** @type {(inputs: Profile_Achievements_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все правила наград острова — открыто. Они отмечают качество и помощь, а не голое количество.`)
};

const sv_profile_achievements_intro = /** @type {(inputs: Profile_Achievements_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla regler för öns belöningar, helt öppet. De uppmärksammar kvalitet och hjälp, aldrig ren volym.`)
};

const tr_profile_achievements_intro = /** @type {(inputs: Profile_Achievements_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adanın ödüllerinin tüm kuralları, açıkça. Hacmi değil, kaliteyi ve yardımı takdir ederler.`)
};

const zh_profile_achievements_intro = /** @type {(inputs: Profile_Achievements_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小岛奖励的全部规则，公开透明。它们认可质量与互助，绝不只看数量。`)
};

const ja_profile_achievements_intro = /** @type {(inputs: Profile_Achievements_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島の報酬のルールをすべて公開しています。評価するのは質と助け合いで、単なる量ではありません。`)
};

/**
* | output |
* | --- |
* | "Every rule of the island’s rewards, in the open. They recognise quality and help, never raw volume." |
*
* @param {Profile_Achievements_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_intro = /** @type {((inputs?: Profile_Achievements_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_intro(inputs)
	if (locale === "de") return de_profile_achievements_intro(inputs)
	if (locale === "fr") return fr_profile_achievements_intro(inputs)
	if (locale === "it") return it_profile_achievements_intro(inputs)
	if (locale === "nl") return nl_profile_achievements_intro(inputs)
	if (locale === "pl") return pl_profile_achievements_intro(inputs)
	if (locale === "pt") return pt_profile_achievements_intro(inputs)
	if (locale === "ru") return ru_profile_achievements_intro(inputs)
	if (locale === "sv") return sv_profile_achievements_intro(inputs)
	if (locale === "tr") return tr_profile_achievements_intro(inputs)
	if (locale === "zh") return zh_profile_achievements_intro(inputs)
	if (locale === "ja") return ja_profile_achievements_intro(inputs)
	return en_profile_achievements_intro(inputs)
});
