/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Conflicts_TitleInputs */

const en_modpacks_conflicts_title = /** @type {(inputs: Modpacks_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Some mods in this modpack are not compatible with each other`)
};

const es_modpacks_conflicts_title = /** @type {(inputs: Modpacks_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algunos mods de este modpack no son compatibles entre sí`)
};

const de_modpacks_conflicts_title = /** @type {(inputs: Modpacks_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einige Mods in diesem Modpack sind nicht miteinander kompatibel`)
};

const fr_modpacks_conflicts_title = /** @type {(inputs: Modpacks_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Certains mods de ce modpack ne sont pas compatibles entre eux`)
};

const it_modpacks_conflicts_title = /** @type {(inputs: Modpacks_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alcune mod di questo modpack non sono compatibili tra loro`)
};

const nl_modpacks_conflicts_title = /** @type {(inputs: Modpacks_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sommige mods in deze modpack zijn niet compatibel met elkaar`)
};

const pl_modpacks_conflicts_title = /** @type {(inputs: Modpacks_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niektóre mody w tym modpacku nie są ze sobą zgodne`)
};

const pt_modpacks_conflicts_title = /** @type {(inputs: Modpacks_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguns mods deste modpack não são compatíveis entre si`)
};

const ru_modpacks_conflicts_title = /** @type {(inputs: Modpacks_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Некоторые моды этого модпака несовместимы друг с другом`)
};

const sv_modpacks_conflicts_title = /** @type {(inputs: Modpacks_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vissa moddar i det här modpaketet är inte kompatibla med varandra`)
};

const tr_modpacks_conflicts_title = /** @type {(inputs: Modpacks_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu paketteki bazı modlar birbiriyle uyumlu değil`)
};

const zh_modpacks_conflicts_title = /** @type {(inputs: Modpacks_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此整合包中的部分模组互不兼容`)
};

const ja_modpacks_conflicts_title = /** @type {(inputs: Modpacks_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この Modパックには互いに互換性のない Mod が含まれています`)
};

/**
* | output |
* | --- |
* | "Some mods in this modpack are not compatible with each other" |
*
* @param {Modpacks_Conflicts_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_conflicts_title = /** @type {((inputs?: Modpacks_Conflicts_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Conflicts_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_conflicts_title(inputs)
	if (locale === "de") return de_modpacks_conflicts_title(inputs)
	if (locale === "fr") return fr_modpacks_conflicts_title(inputs)
	if (locale === "it") return it_modpacks_conflicts_title(inputs)
	if (locale === "nl") return nl_modpacks_conflicts_title(inputs)
	if (locale === "pl") return pl_modpacks_conflicts_title(inputs)
	if (locale === "pt") return pt_modpacks_conflicts_title(inputs)
	if (locale === "ru") return ru_modpacks_conflicts_title(inputs)
	if (locale === "sv") return sv_modpacks_conflicts_title(inputs)
	if (locale === "tr") return tr_modpacks_conflicts_title(inputs)
	if (locale === "zh") return zh_modpacks_conflicts_title(inputs)
	if (locale === "ja") return ja_modpacks_conflicts_title(inputs)
	return en_modpacks_conflicts_title(inputs)
});
