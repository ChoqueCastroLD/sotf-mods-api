/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Not_An_ObjectInputs */

const en_upload_issue_not_an_object = /** @type {(inputs: Upload_Issue_Not_An_ObjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The JSON must be an object.`)
};

const es_upload_issue_not_an_object = /** @type {(inputs: Upload_Issue_Not_An_ObjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El JSON debe ser un objeto.`)
};

const de_upload_issue_not_an_object = /** @type {(inputs: Upload_Issue_Not_An_ObjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das JSON muss ein Objekt sein.`)
};

const fr_upload_issue_not_an_object = /** @type {(inputs: Upload_Issue_Not_An_ObjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le JSON doit être un objet.`)
};

const it_upload_issue_not_an_object = /** @type {(inputs: Upload_Issue_Not_An_ObjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il JSON deve essere un oggetto.`)
};

const nl_upload_issue_not_an_object = /** @type {(inputs: Upload_Issue_Not_An_ObjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De JSON moet een object zijn.`)
};

const pl_upload_issue_not_an_object = /** @type {(inputs: Upload_Issue_Not_An_ObjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`JSON musi być obiektem.`)
};

const pt_upload_issue_not_an_object = /** @type {(inputs: Upload_Issue_Not_An_ObjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O JSON precisa ser um objeto.`)
};

const ru_upload_issue_not_an_object = /** @type {(inputs: Upload_Issue_Not_An_ObjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`JSON должен быть объектом.`)
};

const sv_upload_issue_not_an_object = /** @type {(inputs: Upload_Issue_Not_An_ObjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`JSON måste vara ett objekt.`)
};

const tr_upload_issue_not_an_object = /** @type {(inputs: Upload_Issue_Not_An_ObjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`JSON bir nesne olmalı.`)
};

const zh_upload_issue_not_an_object = /** @type {(inputs: Upload_Issue_Not_An_ObjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`JSON 必须是对象。`)
};

const ja_upload_issue_not_an_object = /** @type {(inputs: Upload_Issue_Not_An_ObjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`JSONはオブジェクトである必要があります。`)
};

/**
* | output |
* | --- |
* | "The JSON must be an object." |
*
* @param {Upload_Issue_Not_An_ObjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_not_an_object = /** @type {((inputs?: Upload_Issue_Not_An_ObjectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Not_An_ObjectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_not_an_object(inputs)
	if (locale === "de") return de_upload_issue_not_an_object(inputs)
	if (locale === "fr") return fr_upload_issue_not_an_object(inputs)
	if (locale === "it") return it_upload_issue_not_an_object(inputs)
	if (locale === "nl") return nl_upload_issue_not_an_object(inputs)
	if (locale === "pl") return pl_upload_issue_not_an_object(inputs)
	if (locale === "pt") return pt_upload_issue_not_an_object(inputs)
	if (locale === "ru") return ru_upload_issue_not_an_object(inputs)
	if (locale === "sv") return sv_upload_issue_not_an_object(inputs)
	if (locale === "tr") return tr_upload_issue_not_an_object(inputs)
	if (locale === "zh") return zh_upload_issue_not_an_object(inputs)
	if (locale === "ja") return ja_upload_issue_not_an_object(inputs)
	return en_upload_issue_not_an_object(inputs)
});
