/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Kit_TitleInputs */

const en_landing_kit_title = /** @type {(inputs: Landing_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Featured Kit`)
};

const es_landing_kit_title = /** @type {(inputs: Landing_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit destacado`)
};

const de_landing_kit_title = /** @type {(inputs: Landing_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit im Fokus`)
};

const fr_landing_kit_title = /** @type {(inputs: Landing_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit à la une`)
};

const it_landing_kit_title = /** @type {(inputs: Landing_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit in evidenza`)
};

const nl_landing_kit_title = /** @type {(inputs: Landing_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitgelichte Kit`)
};

const pl_landing_kit_title = /** @type {(inputs: Landing_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Polecany zestaw`)
};

const pt_landing_kit_title = /** @type {(inputs: Landing_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit em destaque`)
};

const ru_landing_kit_title = /** @type {(inputs: Landing_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Набор в центре внимания`)
};

const sv_landing_kit_title = /** @type {(inputs: Landing_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utvalt kit`)
};

const tr_landing_kit_title = /** @type {(inputs: Landing_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öne çıkan kit`)
};

const zh_landing_kit_title = /** @type {(inputs: Landing_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`精选套装`)
};

const ja_landing_kit_title = /** @type {(inputs: Landing_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注目のキット`)
};

/**
* | output |
* | --- |
* | "Featured Kit" |
*
* @param {Landing_Kit_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_kit_title = /** @type {((inputs?: Landing_Kit_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Kit_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_kit_title(inputs)
	if (locale === "de") return de_landing_kit_title(inputs)
	if (locale === "fr") return fr_landing_kit_title(inputs)
	if (locale === "it") return it_landing_kit_title(inputs)
	if (locale === "nl") return nl_landing_kit_title(inputs)
	if (locale === "pl") return pl_landing_kit_title(inputs)
	if (locale === "pt") return pt_landing_kit_title(inputs)
	if (locale === "ru") return ru_landing_kit_title(inputs)
	if (locale === "sv") return sv_landing_kit_title(inputs)
	if (locale === "tr") return tr_landing_kit_title(inputs)
	if (locale === "zh") return zh_landing_kit_title(inputs)
	if (locale === "ja") return ja_landing_kit_title(inputs)
	return en_landing_kit_title(inputs)
});
