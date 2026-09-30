/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dedicated_YesInputs */

const en_upload_dedicated_yes = /** @type {(inputs: Upload_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes`)
};

const es_upload_dedicated_yes = /** @type {(inputs: Upload_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sí`)
};

const de_upload_dedicated_yes = /** @type {(inputs: Upload_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ja`)
};

const fr_upload_dedicated_yes = /** @type {(inputs: Upload_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oui`)
};

const it_upload_dedicated_yes = /** @type {(inputs: Upload_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sì`)
};

const nl_upload_dedicated_yes = /** @type {(inputs: Upload_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ja`)
};

const pl_upload_dedicated_yes = /** @type {(inputs: Upload_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tak`)
};

const pt_upload_dedicated_yes = /** @type {(inputs: Upload_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sim`)
};

const ru_upload_dedicated_yes = /** @type {(inputs: Upload_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Да`)
};

const sv_upload_dedicated_yes = /** @type {(inputs: Upload_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ja`)
};

const tr_upload_dedicated_yes = /** @type {(inputs: Upload_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Evet`)
};

const zh_upload_dedicated_yes = /** @type {(inputs: Upload_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`能`)
};

const ja_upload_dedicated_yes = /** @type {(inputs: Upload_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`はい`)
};

/**
* | output |
* | --- |
* | "Yes" |
*
* @param {Upload_Dedicated_YesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dedicated_yes = /** @type {((inputs?: Upload_Dedicated_YesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dedicated_YesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dedicated_yes(inputs)
	if (locale === "de") return de_upload_dedicated_yes(inputs)
	if (locale === "fr") return fr_upload_dedicated_yes(inputs)
	if (locale === "it") return it_upload_dedicated_yes(inputs)
	if (locale === "nl") return nl_upload_dedicated_yes(inputs)
	if (locale === "pl") return pl_upload_dedicated_yes(inputs)
	if (locale === "pt") return pt_upload_dedicated_yes(inputs)
	if (locale === "ru") return ru_upload_dedicated_yes(inputs)
	if (locale === "sv") return sv_upload_dedicated_yes(inputs)
	if (locale === "tr") return tr_upload_dedicated_yes(inputs)
	if (locale === "zh") return zh_upload_dedicated_yes(inputs)
	if (locale === "ja") return ja_upload_dedicated_yes(inputs)
	return en_upload_dedicated_yes(inputs)
});
