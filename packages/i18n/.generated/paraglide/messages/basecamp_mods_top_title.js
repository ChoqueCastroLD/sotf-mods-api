/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Top_TitleInputs */

const en_basecamp_mods_top_title = /** @type {(inputs: Basecamp_Mods_Top_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busiest mods`)
};

const es_basecamp_mods_top_title = /** @type {(inputs: Basecamp_Mods_Top_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods con más descargas`)
};

const de_basecamp_mods_top_title = /** @type {(inputs: Basecamp_Mods_Top_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meistgeladene Mods`)
};

const fr_basecamp_mods_top_title = /** @type {(inputs: Basecamp_Mods_Top_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods les plus téléchargés`)
};

const it_basecamp_mods_top_title = /** @type {(inputs: Basecamp_Mods_Top_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod più scaricati`)
};

const nl_basecamp_mods_top_title = /** @type {(inputs: Basecamp_Mods_Top_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meest gedownloade mods`)
};

const pl_basecamp_mods_top_title = /** @type {(inputs: Basecamp_Mods_Top_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej pobierane mody`)
};

const pt_basecamp_mods_top_title = /** @type {(inputs: Basecamp_Mods_Top_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods com mais downloads`)
};

const ru_basecamp_mods_top_title = /** @type {(inputs: Basecamp_Mods_Top_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Самые загружаемые моды`)
};

const sv_basecamp_mods_top_title = /** @type {(inputs: Basecamp_Mods_Top_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mest nedladdade moddar`)
};

const tr_basecamp_mods_top_title = /** @type {(inputs: Basecamp_Mods_Top_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok indirilen modlar`)
};

const zh_basecamp_mods_top_title = /** @type {(inputs: Basecamp_Mods_Top_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载最多的模组`)
};

const ja_basecamp_mods_top_title = /** @type {(inputs: Basecamp_Mods_Top_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロードが多い MOD`)
};

/**
* | output |
* | --- |
* | "Busiest mods" |
*
* @param {Basecamp_Mods_Top_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_top_title = /** @type {((inputs?: Basecamp_Mods_Top_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Top_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_top_title(inputs)
	if (locale === "de") return de_basecamp_mods_top_title(inputs)
	if (locale === "fr") return fr_basecamp_mods_top_title(inputs)
	if (locale === "it") return it_basecamp_mods_top_title(inputs)
	if (locale === "nl") return nl_basecamp_mods_top_title(inputs)
	if (locale === "pl") return pl_basecamp_mods_top_title(inputs)
	if (locale === "pt") return pt_basecamp_mods_top_title(inputs)
	if (locale === "ru") return ru_basecamp_mods_top_title(inputs)
	if (locale === "sv") return sv_basecamp_mods_top_title(inputs)
	if (locale === "tr") return tr_basecamp_mods_top_title(inputs)
	if (locale === "zh") return zh_basecamp_mods_top_title(inputs)
	if (locale === "ja") return ja_basecamp_mods_top_title(inputs)
	return en_basecamp_mods_top_title(inputs)
});
