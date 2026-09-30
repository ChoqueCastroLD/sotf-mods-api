/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Summary_AddressInputs */

const en_upload_summary_address = /** @type {(inputs: Upload_Summary_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Address`)
};

const es_upload_summary_address = /** @type {(inputs: Upload_Summary_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dirección`)
};

const de_upload_summary_address = /** @type {(inputs: Upload_Summary_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresse`)
};

const fr_upload_summary_address = /** @type {(inputs: Upload_Summary_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresse`)
};

const it_upload_summary_address = /** @type {(inputs: Upload_Summary_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indirizzo`)
};

const nl_upload_summary_address = /** @type {(inputs: Upload_Summary_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres`)
};

const pl_upload_summary_address = /** @type {(inputs: Upload_Summary_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres`)
};

const pt_upload_summary_address = /** @type {(inputs: Upload_Summary_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endereço`)
};

const ru_upload_summary_address = /** @type {(inputs: Upload_Summary_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Адрес`)
};

const sv_upload_summary_address = /** @type {(inputs: Upload_Summary_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adress`)
};

const tr_upload_summary_address = /** @type {(inputs: Upload_Summary_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres`)
};

const zh_upload_summary_address = /** @type {(inputs: Upload_Summary_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地址`)
};

const ja_upload_summary_address = /** @type {(inputs: Upload_Summary_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アドレス`)
};

/**
* | output |
* | --- |
* | "Address" |
*
* @param {Upload_Summary_AddressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_summary_address = /** @type {((inputs?: Upload_Summary_AddressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Summary_AddressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_summary_address(inputs)
	if (locale === "de") return de_upload_summary_address(inputs)
	if (locale === "fr") return fr_upload_summary_address(inputs)
	if (locale === "it") return it_upload_summary_address(inputs)
	if (locale === "nl") return nl_upload_summary_address(inputs)
	if (locale === "pl") return pl_upload_summary_address(inputs)
	if (locale === "pt") return pt_upload_summary_address(inputs)
	if (locale === "ru") return ru_upload_summary_address(inputs)
	if (locale === "sv") return sv_upload_summary_address(inputs)
	if (locale === "tr") return tr_upload_summary_address(inputs)
	if (locale === "zh") return zh_upload_summary_address(inputs)
	if (locale === "ja") return ja_upload_summary_address(inputs)
	return en_upload_summary_address(inputs)
});
