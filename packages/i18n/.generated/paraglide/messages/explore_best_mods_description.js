/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Best_Mods_DescriptionInputs */

const en_explore_best_mods_description = /** @type {(inputs: Explore_Best_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The most downloaded Sons of the Forest mods on SOTF Mods, with compatibility on the current patch and direct downloads for RedLoader.`)
};

const es_explore_best_mods_description = /** @type {(inputs: Explore_Best_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los mods de Sons of the Forest más descargados en SOTF Mods, con compatibilidad en el parche actual y descarga directa para RedLoader.`)
};

const de_explore_best_mods_description = /** @type {(inputs: Explore_Best_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die meistgeladenen Sons-of-the-Forest-Mods auf SOTF Mods, mit Kompatibilität zum aktuellen Patch und Direkt-Download für RedLoader.`)
};

const fr_explore_best_mods_description = /** @type {(inputs: Explore_Best_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les mods Sons of the Forest les plus téléchargés sur SOTF Mods, avec la compatibilité du patch actuel et le téléchargement direct pour RedLoader.`)
};

const it_explore_best_mods_description = /** @type {(inputs: Explore_Best_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mod di Sons of the Forest più scaricate su SOTF Mods, con la compatibilità sulla patch attuale e il download diretto per RedLoader.`)
};

const nl_explore_best_mods_description = /** @type {(inputs: Explore_Best_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De meest gedownloade Sons of the Forest-mods op SOTF Mods, met compatibiliteit op de huidige patch en directe downloads voor RedLoader.`)
};

const pl_explore_best_mods_description = /** @type {(inputs: Explore_Best_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej pobierane mody do Sons of the Forest w SOTF Mods, ze zgodnością z obecną łatką i bezpośrednim pobieraniem dla RedLoadera.`)
};

const pt_explore_best_mods_description = /** @type {(inputs: Explore_Best_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os mods de Sons of the Forest mais baixados no SOTF Mods, com compatibilidade no patch atual e download direto para RedLoader.`)
};

const ru_explore_best_mods_description = /** @type {(inputs: Explore_Best_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Самые скачиваемые моды для Sons of the Forest на SOTF Mods с совместимостью на текущем патче и прямыми загрузками для RedLoader.`)
};

const sv_explore_best_mods_description = /** @type {(inputs: Explore_Best_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mest nedladdade moddarna till Sons of the Forest på SOTF Mods, med kompatibilitet på aktuell patch och direkt nedladdning för RedLoader.`)
};

const tr_explore_best_mods_description = /** @type {(inputs: Explore_Best_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’ta en çok indirilen Sons of the Forest modları; güncel yama uyumluluğu ve RedLoader için doğrudan indirme ile.`)
};

const zh_explore_best_mods_description = /** @type {(inputs: Explore_Best_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods 上下载最多的 Sons of the Forest 模组，附当前补丁兼容性和 RedLoader 直接下载。`)
};

const ja_explore_best_mods_description = /** @type {(inputs: Explore_Best_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods で最もダウンロードされている Sons of the Forest の MOD。現行パッチでの互換性と RedLoader 向け直接ダウンロード付き。`)
};

/**
* | output |
* | --- |
* | "The most downloaded Sons of the Forest mods on SOTF Mods, with compatibility on the current patch and direct downloads for RedLoader." |
*
* @param {Explore_Best_Mods_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_best_mods_description = /** @type {((inputs?: Explore_Best_Mods_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Best_Mods_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_best_mods_description(inputs)
	if (locale === "de") return de_explore_best_mods_description(inputs)
	if (locale === "fr") return fr_explore_best_mods_description(inputs)
	if (locale === "it") return it_explore_best_mods_description(inputs)
	if (locale === "nl") return nl_explore_best_mods_description(inputs)
	if (locale === "pl") return pl_explore_best_mods_description(inputs)
	if (locale === "pt") return pt_explore_best_mods_description(inputs)
	if (locale === "ru") return ru_explore_best_mods_description(inputs)
	if (locale === "sv") return sv_explore_best_mods_description(inputs)
	if (locale === "tr") return tr_explore_best_mods_description(inputs)
	if (locale === "zh") return zh_explore_best_mods_description(inputs)
	if (locale === "ja") return ja_explore_best_mods_description(inputs)
	return en_explore_best_mods_description(inputs)
});
