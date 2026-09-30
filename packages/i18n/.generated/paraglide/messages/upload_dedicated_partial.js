/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dedicated_PartialInputs */

const en_upload_dedicated_partial = /** @type {(inputs: Upload_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partly`)
};

const es_upload_dedicated_partial = /** @type {(inputs: Upload_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En parte`)
};

const de_upload_dedicated_partial = /** @type {(inputs: Upload_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teilweise`)
};

const fr_upload_dedicated_partial = /** @type {(inputs: Upload_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En partie`)
};

const it_upload_dedicated_partial = /** @type {(inputs: Upload_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In parte`)
};

const nl_upload_dedicated_partial = /** @type {(inputs: Upload_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gedeeltelijk`)
};

const pl_upload_dedicated_partial = /** @type {(inputs: Upload_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Częściowo`)
};

const pt_upload_dedicated_partial = /** @type {(inputs: Upload_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em parte`)
};

const ru_upload_dedicated_partial = /** @type {(inputs: Upload_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Частично`)
};

const sv_upload_dedicated_partial = /** @type {(inputs: Upload_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delvis`)
};

const tr_upload_dedicated_partial = /** @type {(inputs: Upload_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısmen`)
};

const zh_upload_dedicated_partial = /** @type {(inputs: Upload_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`部分可以`)
};

const ja_upload_dedicated_partial = /** @type {(inputs: Upload_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一部のみ`)
};

/**
* | output |
* | --- |
* | "Partly" |
*
* @param {Upload_Dedicated_PartialInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dedicated_partial = /** @type {((inputs?: Upload_Dedicated_PartialInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dedicated_PartialInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dedicated_partial(inputs)
	if (locale === "de") return de_upload_dedicated_partial(inputs)
	if (locale === "fr") return fr_upload_dedicated_partial(inputs)
	if (locale === "it") return it_upload_dedicated_partial(inputs)
	if (locale === "nl") return nl_upload_dedicated_partial(inputs)
	if (locale === "pl") return pl_upload_dedicated_partial(inputs)
	if (locale === "pt") return pt_upload_dedicated_partial(inputs)
	if (locale === "ru") return ru_upload_dedicated_partial(inputs)
	if (locale === "sv") return sv_upload_dedicated_partial(inputs)
	if (locale === "tr") return tr_upload_dedicated_partial(inputs)
	if (locale === "zh") return zh_upload_dedicated_partial(inputs)
	if (locale === "ja") return ja_upload_dedicated_partial(inputs)
	return en_upload_dedicated_partial(inputs)
});
