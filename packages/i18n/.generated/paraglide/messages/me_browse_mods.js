/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Browse_ModsInputs */

const en_me_browse_mods = /** @type {(inputs: Me_Browse_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse mods`)
};

const es_me_browse_mods = /** @type {(inputs: Me_Browse_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar mods`)
};

const de_me_browse_mods = /** @type {(inputs: Me_Browse_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods durchsuchen`)
};

const fr_me_browse_mods = /** @type {(inputs: Me_Browse_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parcourir les mods`)
};

const it_me_browse_mods = /** @type {(inputs: Me_Browse_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esplora le mod`)
};

const nl_me_browse_mods = /** @type {(inputs: Me_Browse_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods bekijken`)
};

const pl_me_browse_mods = /** @type {(inputs: Me_Browse_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj mody`)
};

const pt_me_browse_mods = /** @type {(inputs: Me_Browse_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar mods`)
};

const ru_me_browse_mods = /** @type {(inputs: Me_Browse_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть моды`)
};

const sv_me_browse_mods = /** @type {(inputs: Me_Browse_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bläddra bland moddar`)
};

const tr_me_browse_mods = /** @type {(inputs: Me_Browse_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlara göz at`)
};

const zh_me_browse_mods = /** @type {(inputs: Me_Browse_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览模组`)
};

const ja_me_browse_mods = /** @type {(inputs: Me_Browse_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODを探す`)
};

/**
* | output |
* | --- |
* | "Browse mods" |
*
* @param {Me_Browse_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_browse_mods = /** @type {((inputs?: Me_Browse_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Browse_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_browse_mods(inputs)
	if (locale === "de") return de_me_browse_mods(inputs)
	if (locale === "fr") return fr_me_browse_mods(inputs)
	if (locale === "it") return it_me_browse_mods(inputs)
	if (locale === "nl") return nl_me_browse_mods(inputs)
	if (locale === "pl") return pl_me_browse_mods(inputs)
	if (locale === "pt") return pt_me_browse_mods(inputs)
	if (locale === "ru") return ru_me_browse_mods(inputs)
	if (locale === "sv") return sv_me_browse_mods(inputs)
	if (locale === "tr") return tr_me_browse_mods(inputs)
	if (locale === "zh") return zh_me_browse_mods(inputs)
	if (locale === "ja") return ja_me_browse_mods(inputs)
	return en_me_browse_mods(inputs)
});
