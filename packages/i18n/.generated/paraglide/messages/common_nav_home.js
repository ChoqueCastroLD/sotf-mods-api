/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Nav_HomeInputs */

const en_common_nav_home = /** @type {(inputs: Common_Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Home`)
};

const es_common_nav_home = /** @type {(inputs: Common_Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicio`)
};

const de_common_nav_home = /** @type {(inputs: Common_Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start`)
};

const fr_common_nav_home = /** @type {(inputs: Common_Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accueil`)
};

const it_common_nav_home = /** @type {(inputs: Common_Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Home`)
};

const nl_common_nav_home = /** @type {(inputs: Common_Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Home`)
};

const pl_common_nav_home = /** @type {(inputs: Common_Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strona główna`)
};

const pt_common_nav_home = /** @type {(inputs: Common_Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Início`)
};

const ru_common_nav_home = /** @type {(inputs: Common_Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Главная`)
};

const sv_common_nav_home = /** @type {(inputs: Common_Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hem`)
};

const tr_common_nav_home = /** @type {(inputs: Common_Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ana sayfa`)
};

const zh_common_nav_home = /** @type {(inputs: Common_Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`首页`)
};

const ja_common_nav_home = /** @type {(inputs: Common_Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ホーム`)
};

/**
* | output |
* | --- |
* | "Home" |
*
* @param {Common_Nav_HomeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_nav_home = /** @type {((inputs?: Common_Nav_HomeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Nav_HomeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_nav_home(inputs)
	if (locale === "de") return de_common_nav_home(inputs)
	if (locale === "fr") return fr_common_nav_home(inputs)
	if (locale === "it") return it_common_nav_home(inputs)
	if (locale === "nl") return nl_common_nav_home(inputs)
	if (locale === "pl") return pl_common_nav_home(inputs)
	if (locale === "pt") return pt_common_nav_home(inputs)
	if (locale === "ru") return ru_common_nav_home(inputs)
	if (locale === "sv") return sv_common_nav_home(inputs)
	if (locale === "tr") return tr_common_nav_home(inputs)
	if (locale === "zh") return zh_common_nav_home(inputs)
	if (locale === "ja") return ja_common_nav_home(inputs)
	return en_common_nav_home(inputs)
});
