/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Title_ModInputs */

const en_upload_title_mod = /** @type {(inputs: Upload_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New mod`)
};

const es_upload_title_mod = /** @type {(inputs: Upload_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo mod`)
};

const de_upload_title_mod = /** @type {(inputs: Upload_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neuer Mod`)
};

const fr_upload_title_mod = /** @type {(inputs: Upload_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau mod`)
};

const it_upload_title_mod = /** @type {(inputs: Upload_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuova mod`)
};

const nl_upload_title_mod = /** @type {(inputs: Upload_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe mod`)
};

const pl_upload_title_mod = /** @type {(inputs: Upload_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowy mod`)
};

const pt_upload_title_mod = /** @type {(inputs: Upload_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo mod`)
};

const ru_upload_title_mod = /** @type {(inputs: Upload_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый мод`)
};

const sv_upload_title_mod = /** @type {(inputs: Upload_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny mod`)
};

const tr_upload_title_mod = /** @type {(inputs: Upload_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni mod`)
};

const zh_upload_title_mod = /** @type {(inputs: Upload_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新模组`)
};

const ja_upload_title_mod = /** @type {(inputs: Upload_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいMOD`)
};

/**
* | output |
* | --- |
* | "New mod" |
*
* @param {Upload_Title_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_title_mod = /** @type {((inputs?: Upload_Title_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Title_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_title_mod(inputs)
	if (locale === "de") return de_upload_title_mod(inputs)
	if (locale === "fr") return fr_upload_title_mod(inputs)
	if (locale === "it") return it_upload_title_mod(inputs)
	if (locale === "nl") return nl_upload_title_mod(inputs)
	if (locale === "pl") return pl_upload_title_mod(inputs)
	if (locale === "pt") return pt_upload_title_mod(inputs)
	if (locale === "ru") return ru_upload_title_mod(inputs)
	if (locale === "sv") return sv_upload_title_mod(inputs)
	if (locale === "tr") return tr_upload_title_mod(inputs)
	if (locale === "zh") return zh_upload_title_mod(inputs)
	if (locale === "ja") return ja_upload_title_mod(inputs)
	return en_upload_title_mod(inputs)
});
