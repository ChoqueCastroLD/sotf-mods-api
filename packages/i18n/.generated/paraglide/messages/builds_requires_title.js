/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Requires_TitleInputs */

const en_builds_requires_title = /** @type {(inputs: Builds_Requires_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Required mods`)
};

const es_builds_requires_title = /** @type {(inputs: Builds_Requires_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods necesarios`)
};

const de_builds_requires_title = /** @type {(inputs: Builds_Requires_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benötigte Mods`)
};

const fr_builds_requires_title = /** @type {(inputs: Builds_Requires_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods requis`)
};

const it_builds_requires_title = /** @type {(inputs: Builds_Requires_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod richieste`)
};

const nl_builds_requires_title = /** @type {(inputs: Builds_Requires_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vereiste mods`)
};

const pl_builds_requires_title = /** @type {(inputs: Builds_Requires_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wymagane mody`)
};

const pt_builds_requires_title = /** @type {(inputs: Builds_Requires_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods necessários`)
};

const ru_builds_requires_title = /** @type {(inputs: Builds_Requires_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужные моды`)
};

const sv_builds_requires_title = /** @type {(inputs: Builds_Requires_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar som krävs`)
};

const tr_builds_requires_title = /** @type {(inputs: Builds_Requires_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerekli modlar`)
};

const zh_builds_requires_title = /** @type {(inputs: Builds_Requires_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所需模组`)
};

const ja_builds_requires_title = /** @type {(inputs: Builds_Requires_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`必要な MOD`)
};

/**
* | output |
* | --- |
* | "Required mods" |
*
* @param {Builds_Requires_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_requires_title = /** @type {((inputs?: Builds_Requires_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Requires_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_requires_title(inputs)
	if (locale === "de") return de_builds_requires_title(inputs)
	if (locale === "fr") return fr_builds_requires_title(inputs)
	if (locale === "it") return it_builds_requires_title(inputs)
	if (locale === "nl") return nl_builds_requires_title(inputs)
	if (locale === "pl") return pl_builds_requires_title(inputs)
	if (locale === "pt") return pt_builds_requires_title(inputs)
	if (locale === "ru") return ru_builds_requires_title(inputs)
	if (locale === "sv") return sv_builds_requires_title(inputs)
	if (locale === "tr") return tr_builds_requires_title(inputs)
	if (locale === "zh") return zh_builds_requires_title(inputs)
	if (locale === "ja") return ja_builds_requires_title(inputs)
	return en_builds_requires_title(inputs)
});
