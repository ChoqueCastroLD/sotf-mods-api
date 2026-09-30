/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_NextInputs */

const en_upload_next = /** @type {(inputs: Upload_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next`)
};

const es_upload_next = /** @type {(inputs: Upload_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siguiente`)
};

const de_upload_next = /** @type {(inputs: Upload_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weiter`)
};

const fr_upload_next = /** @type {(inputs: Upload_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivant`)
};

const it_upload_next = /** @type {(inputs: Upload_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avanti`)
};

const nl_upload_next = /** @type {(inputs: Upload_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgende`)
};

const pl_upload_next = /** @type {(inputs: Upload_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dalej`)
};

const pt_upload_next = /** @type {(inputs: Upload_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avançar`)
};

const ru_upload_next = /** @type {(inputs: Upload_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Далее`)
};

const sv_upload_next = /** @type {(inputs: Upload_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nästa`)
};

const tr_upload_next = /** @type {(inputs: Upload_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İleri`)
};

const zh_upload_next = /** @type {(inputs: Upload_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一步`)
};

const ja_upload_next = /** @type {(inputs: Upload_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次へ`)
};

/**
* | output |
* | --- |
* | "Next" |
*
* @param {Upload_NextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_next = /** @type {((inputs?: Upload_NextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_NextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_next(inputs)
	if (locale === "de") return de_upload_next(inputs)
	if (locale === "fr") return fr_upload_next(inputs)
	if (locale === "it") return it_upload_next(inputs)
	if (locale === "nl") return nl_upload_next(inputs)
	if (locale === "pl") return pl_upload_next(inputs)
	if (locale === "pt") return pt_upload_next(inputs)
	if (locale === "ru") return ru_upload_next(inputs)
	if (locale === "sv") return sv_upload_next(inputs)
	if (locale === "tr") return tr_upload_next(inputs)
	if (locale === "zh") return zh_upload_next(inputs)
	if (locale === "ja") return ja_upload_next(inputs)
	return en_upload_next(inputs)
});
