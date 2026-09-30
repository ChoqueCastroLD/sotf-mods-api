/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dedicated_UnknownInputs */

const en_upload_dedicated_unknown = /** @type {(inputs: Upload_Dedicated_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not sure`)
};

const es_upload_dedicated_unknown = /** @type {(inputs: Upload_Dedicated_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No lo sé`)
};

const de_upload_dedicated_unknown = /** @type {(inputs: Upload_Dedicated_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsicher`)
};

const fr_upload_dedicated_unknown = /** @type {(inputs: Upload_Dedicated_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je ne sais pas`)
};

const it_upload_dedicated_unknown = /** @type {(inputs: Upload_Dedicated_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non so`)
};

const nl_upload_dedicated_unknown = /** @type {(inputs: Upload_Dedicated_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weet ik niet`)
};

const pl_upload_dedicated_unknown = /** @type {(inputs: Upload_Dedicated_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie wiem`)
};

const pt_upload_dedicated_unknown = /** @type {(inputs: Upload_Dedicated_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não sei`)
};

const ru_upload_dedicated_unknown = /** @type {(inputs: Upload_Dedicated_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не знаю`)
};

const sv_upload_dedicated_unknown = /** @type {(inputs: Upload_Dedicated_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vet inte`)
};

const tr_upload_dedicated_unknown = /** @type {(inputs: Upload_Dedicated_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Emin değilim`)
};

const zh_upload_dedicated_unknown = /** @type {(inputs: Upload_Dedicated_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不确定`)
};

const ja_upload_dedicated_unknown = /** @type {(inputs: Upload_Dedicated_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`わからない`)
};

/**
* | output |
* | --- |
* | "Not sure" |
*
* @param {Upload_Dedicated_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dedicated_unknown = /** @type {((inputs?: Upload_Dedicated_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dedicated_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dedicated_unknown(inputs)
	if (locale === "de") return de_upload_dedicated_unknown(inputs)
	if (locale === "fr") return fr_upload_dedicated_unknown(inputs)
	if (locale === "it") return it_upload_dedicated_unknown(inputs)
	if (locale === "nl") return nl_upload_dedicated_unknown(inputs)
	if (locale === "pl") return pl_upload_dedicated_unknown(inputs)
	if (locale === "pt") return pt_upload_dedicated_unknown(inputs)
	if (locale === "ru") return ru_upload_dedicated_unknown(inputs)
	if (locale === "sv") return sv_upload_dedicated_unknown(inputs)
	if (locale === "tr") return tr_upload_dedicated_unknown(inputs)
	if (locale === "zh") return zh_upload_dedicated_unknown(inputs)
	if (locale === "ja") return ja_upload_dedicated_unknown(inputs)
	return en_upload_dedicated_unknown(inputs)
});
