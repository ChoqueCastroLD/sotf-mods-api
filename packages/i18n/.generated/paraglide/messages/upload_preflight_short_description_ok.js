/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Short_Description_OkInputs */

const en_upload_preflight_short_description_ok = /** @type {(inputs: Upload_Preflight_Short_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Short description set.`)
};

const es_upload_preflight_short_description_ok = /** @type {(inputs: Upload_Preflight_Short_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descripción corta lista.`)
};

const de_upload_preflight_short_description_ok = /** @type {(inputs: Upload_Preflight_Short_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurzbeschreibung gesetzt.`)
};

const fr_upload_preflight_short_description_ok = /** @type {(inputs: Upload_Preflight_Short_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description courte renseignée.`)
};

const it_upload_preflight_short_description_ok = /** @type {(inputs: Upload_Preflight_Short_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrizione breve impostata.`)
};

const nl_upload_preflight_short_description_ok = /** @type {(inputs: Upload_Preflight_Short_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korte beschrijving ingevuld.`)
};

const pl_upload_preflight_short_description_ok = /** @type {(inputs: Upload_Preflight_Short_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krótki opis ustawiony.`)
};

const pt_upload_preflight_short_description_ok = /** @type {(inputs: Upload_Preflight_Short_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrição curta definida.`)
};

const ru_upload_preflight_short_description_ok = /** @type {(inputs: Upload_Preflight_Short_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Краткое описание есть.`)
};

const sv_upload_preflight_short_description_ok = /** @type {(inputs: Upload_Preflight_Short_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kort beskrivning angiven.`)
};

const tr_upload_preflight_short_description_ok = /** @type {(inputs: Upload_Preflight_Short_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısa açıklama girildi.`)
};

const zh_upload_preflight_short_description_ok = /** @type {(inputs: Upload_Preflight_Short_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已填写简短描述。`)
};

const ja_upload_preflight_short_description_ok = /** @type {(inputs: Upload_Preflight_Short_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`短い説明が入力されています。`)
};

/**
* | output |
* | --- |
* | "Short description set." |
*
* @param {Upload_Preflight_Short_Description_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_short_description_ok = /** @type {((inputs?: Upload_Preflight_Short_Description_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Short_Description_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_short_description_ok(inputs)
	if (locale === "de") return de_upload_preflight_short_description_ok(inputs)
	if (locale === "fr") return fr_upload_preflight_short_description_ok(inputs)
	if (locale === "it") return it_upload_preflight_short_description_ok(inputs)
	if (locale === "nl") return nl_upload_preflight_short_description_ok(inputs)
	if (locale === "pl") return pl_upload_preflight_short_description_ok(inputs)
	if (locale === "pt") return pt_upload_preflight_short_description_ok(inputs)
	if (locale === "ru") return ru_upload_preflight_short_description_ok(inputs)
	if (locale === "sv") return sv_upload_preflight_short_description_ok(inputs)
	if (locale === "tr") return tr_upload_preflight_short_description_ok(inputs)
	if (locale === "zh") return zh_upload_preflight_short_description_ok(inputs)
	if (locale === "ja") return ja_upload_preflight_short_description_ok(inputs)
	return en_upload_preflight_short_description_ok(inputs)
});
