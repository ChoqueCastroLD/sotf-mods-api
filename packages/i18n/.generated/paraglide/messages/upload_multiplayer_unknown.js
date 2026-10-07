/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Multiplayer_UnknownInputs */

const en_upload_multiplayer_unknown = /** @type {(inputs: Upload_Multiplayer_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I don’t know`)
};

const es_upload_multiplayer_unknown = /** @type {(inputs: Upload_Multiplayer_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No lo sé`)
};

const de_upload_multiplayer_unknown = /** @type {(inputs: Upload_Multiplayer_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsicher`)
};

const fr_upload_multiplayer_unknown = /** @type {(inputs: Upload_Multiplayer_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je ne sais pas`)
};

const it_upload_multiplayer_unknown = /** @type {(inputs: Upload_Multiplayer_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non so`)
};

const nl_upload_multiplayer_unknown = /** @type {(inputs: Upload_Multiplayer_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weet ik niet`)
};

const pl_upload_multiplayer_unknown = /** @type {(inputs: Upload_Multiplayer_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie wiem`)
};

const pt_upload_multiplayer_unknown = /** @type {(inputs: Upload_Multiplayer_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não sei`)
};

const ru_upload_multiplayer_unknown = /** @type {(inputs: Upload_Multiplayer_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не знаю`)
};

const sv_upload_multiplayer_unknown = /** @type {(inputs: Upload_Multiplayer_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vet inte`)
};

const tr_upload_multiplayer_unknown = /** @type {(inputs: Upload_Multiplayer_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Emin değilim`)
};

const zh_upload_multiplayer_unknown = /** @type {(inputs: Upload_Multiplayer_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不确定`)
};

const ja_upload_multiplayer_unknown = /** @type {(inputs: Upload_Multiplayer_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`わからない`)
};

/**
* | output |
* | --- |
* | "I don’t know" |
*
* @param {Upload_Multiplayer_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_multiplayer_unknown = /** @type {((inputs?: Upload_Multiplayer_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Multiplayer_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_multiplayer_unknown(inputs)
	if (locale === "de") return de_upload_multiplayer_unknown(inputs)
	if (locale === "fr") return fr_upload_multiplayer_unknown(inputs)
	if (locale === "it") return it_upload_multiplayer_unknown(inputs)
	if (locale === "nl") return nl_upload_multiplayer_unknown(inputs)
	if (locale === "pl") return pl_upload_multiplayer_unknown(inputs)
	if (locale === "pt") return pt_upload_multiplayer_unknown(inputs)
	if (locale === "ru") return ru_upload_multiplayer_unknown(inputs)
	if (locale === "sv") return sv_upload_multiplayer_unknown(inputs)
	if (locale === "tr") return tr_upload_multiplayer_unknown(inputs)
	if (locale === "zh") return zh_upload_multiplayer_unknown(inputs)
	if (locale === "ja") return ja_upload_multiplayer_unknown(inputs)
	return en_upload_multiplayer_unknown(inputs)
});
