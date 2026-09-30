/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dedicated_NoInputs */

const en_upload_dedicated_no = /** @type {(inputs: Upload_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No`)
};

const es_upload_dedicated_no = /** @type {(inputs: Upload_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No`)
};

const de_upload_dedicated_no = /** @type {(inputs: Upload_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nein`)
};

const fr_upload_dedicated_no = /** @type {(inputs: Upload_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non`)
};

const it_upload_dedicated_no = /** @type {(inputs: Upload_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No`)
};

const nl_upload_dedicated_no = /** @type {(inputs: Upload_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nee`)
};

const pl_upload_dedicated_no = /** @type {(inputs: Upload_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie`)
};

const pt_upload_dedicated_no = /** @type {(inputs: Upload_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não`)
};

const ru_upload_dedicated_no = /** @type {(inputs: Upload_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет`)
};

const sv_upload_dedicated_no = /** @type {(inputs: Upload_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nej`)
};

const tr_upload_dedicated_no = /** @type {(inputs: Upload_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hayır`)
};

const zh_upload_dedicated_no = /** @type {(inputs: Upload_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不能`)
};

const ja_upload_dedicated_no = /** @type {(inputs: Upload_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`いいえ`)
};

/**
* | output |
* | --- |
* | "No" |
*
* @param {Upload_Dedicated_NoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dedicated_no = /** @type {((inputs?: Upload_Dedicated_NoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dedicated_NoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dedicated_no(inputs)
	if (locale === "de") return de_upload_dedicated_no(inputs)
	if (locale === "fr") return fr_upload_dedicated_no(inputs)
	if (locale === "it") return it_upload_dedicated_no(inputs)
	if (locale === "nl") return nl_upload_dedicated_no(inputs)
	if (locale === "pl") return pl_upload_dedicated_no(inputs)
	if (locale === "pt") return pt_upload_dedicated_no(inputs)
	if (locale === "ru") return ru_upload_dedicated_no(inputs)
	if (locale === "sv") return sv_upload_dedicated_no(inputs)
	if (locale === "tr") return tr_upload_dedicated_no(inputs)
	if (locale === "zh") return zh_upload_dedicated_no(inputs)
	if (locale === "ja") return ja_upload_dedicated_no(inputs)
	return en_upload_dedicated_no(inputs)
});
