/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Name_OkInputs */

const en_upload_preflight_name_ok = /** @type {(inputs: Upload_Preflight_Name_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name set.`)
};

const es_upload_preflight_name_ok = /** @type {(inputs: Upload_Preflight_Name_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre listo.`)
};

const de_upload_preflight_name_ok = /** @type {(inputs: Upload_Preflight_Name_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name gesetzt.`)
};

const fr_upload_preflight_name_ok = /** @type {(inputs: Upload_Preflight_Name_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom renseigné.`)
};

const it_upload_preflight_name_ok = /** @type {(inputs: Upload_Preflight_Name_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome impostato.`)
};

const nl_upload_preflight_name_ok = /** @type {(inputs: Upload_Preflight_Name_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam ingevuld.`)
};

const pl_upload_preflight_name_ok = /** @type {(inputs: Upload_Preflight_Name_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa ustawiona.`)
};

const pt_upload_preflight_name_ok = /** @type {(inputs: Upload_Preflight_Name_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome definido.`)
};

const ru_upload_preflight_name_ok = /** @type {(inputs: Upload_Preflight_Name_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название указано.`)
};

const sv_upload_preflight_name_ok = /** @type {(inputs: Upload_Preflight_Name_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namn angivet.`)
};

const tr_upload_preflight_name_ok = /** @type {(inputs: Upload_Preflight_Name_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad girildi.`)
};

const zh_upload_preflight_name_ok = /** @type {(inputs: Upload_Preflight_Name_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已填写名称。`)
};

const ja_upload_preflight_name_ok = /** @type {(inputs: Upload_Preflight_Name_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前が入力されています。`)
};

/**
* | output |
* | --- |
* | "Name set." |
*
* @param {Upload_Preflight_Name_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_name_ok = /** @type {((inputs?: Upload_Preflight_Name_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Name_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_name_ok(inputs)
	if (locale === "de") return de_upload_preflight_name_ok(inputs)
	if (locale === "fr") return fr_upload_preflight_name_ok(inputs)
	if (locale === "it") return it_upload_preflight_name_ok(inputs)
	if (locale === "nl") return nl_upload_preflight_name_ok(inputs)
	if (locale === "pl") return pl_upload_preflight_name_ok(inputs)
	if (locale === "pt") return pt_upload_preflight_name_ok(inputs)
	if (locale === "ru") return ru_upload_preflight_name_ok(inputs)
	if (locale === "sv") return sv_upload_preflight_name_ok(inputs)
	if (locale === "tr") return tr_upload_preflight_name_ok(inputs)
	if (locale === "zh") return zh_upload_preflight_name_ok(inputs)
	if (locale === "ja") return ja_upload_preflight_name_ok(inputs)
	return en_upload_preflight_name_ok(inputs)
});
