/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Details_IdentityInputs */

const en_upload_details_identity = /** @type {(inputs: Upload_Details_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name and address`)
};

const es_upload_details_identity = /** @type {(inputs: Upload_Details_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre y dirección`)
};

const de_upload_details_identity = /** @type {(inputs: Upload_Details_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name und Adresse`)
};

const fr_upload_details_identity = /** @type {(inputs: Upload_Details_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom et adresse`)
};

const it_upload_details_identity = /** @type {(inputs: Upload_Details_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome e indirizzo`)
};

const nl_upload_details_identity = /** @type {(inputs: Upload_Details_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam en adres`)
};

const pl_upload_details_identity = /** @type {(inputs: Upload_Details_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa i adres`)
};

const pt_upload_details_identity = /** @type {(inputs: Upload_Details_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome e endereço`)
};

const ru_upload_details_identity = /** @type {(inputs: Upload_Details_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название и адрес`)
};

const sv_upload_details_identity = /** @type {(inputs: Upload_Details_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namn och adress`)
};

const tr_upload_details_identity = /** @type {(inputs: Upload_Details_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad ve adres`)
};

const zh_upload_details_identity = /** @type {(inputs: Upload_Details_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称和地址`)
};

const ja_upload_details_identity = /** @type {(inputs: Upload_Details_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前とアドレス`)
};

/**
* | output |
* | --- |
* | "Name and address" |
*
* @param {Upload_Details_IdentityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_details_identity = /** @type {((inputs?: Upload_Details_IdentityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Details_IdentityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_details_identity(inputs)
	if (locale === "de") return de_upload_details_identity(inputs)
	if (locale === "fr") return fr_upload_details_identity(inputs)
	if (locale === "it") return it_upload_details_identity(inputs)
	if (locale === "nl") return nl_upload_details_identity(inputs)
	if (locale === "pl") return pl_upload_details_identity(inputs)
	if (locale === "pt") return pt_upload_details_identity(inputs)
	if (locale === "ru") return ru_upload_details_identity(inputs)
	if (locale === "sv") return sv_upload_details_identity(inputs)
	if (locale === "tr") return tr_upload_details_identity(inputs)
	if (locale === "zh") return zh_upload_details_identity(inputs)
	if (locale === "ja") return ja_upload_details_identity(inputs)
	return en_upload_details_identity(inputs)
});
