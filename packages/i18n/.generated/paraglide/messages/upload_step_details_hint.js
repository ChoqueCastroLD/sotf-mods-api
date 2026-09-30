/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Step_Details_HintInputs */

const en_upload_step_details_hint = /** @type {(inputs: Upload_Step_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name, description, tags`)
};

const es_upload_step_details_hint = /** @type {(inputs: Upload_Step_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre, descripción, etiquetas`)
};

const de_upload_step_details_hint = /** @type {(inputs: Upload_Step_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name, Beschreibung, Tags`)
};

const fr_upload_step_details_hint = /** @type {(inputs: Upload_Step_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom, description, tags`)
};

const it_upload_step_details_hint = /** @type {(inputs: Upload_Step_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome, descrizione, tag`)
};

const nl_upload_step_details_hint = /** @type {(inputs: Upload_Step_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam, beschrijving, tags`)
};

const pl_upload_step_details_hint = /** @type {(inputs: Upload_Step_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa, opis, tagi`)
};

const pt_upload_step_details_hint = /** @type {(inputs: Upload_Step_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome, descrição, tags`)
};

const ru_upload_step_details_hint = /** @type {(inputs: Upload_Step_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название, описание, теги`)
};

const sv_upload_step_details_hint = /** @type {(inputs: Upload_Step_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namn, beskrivning, taggar`)
};

const tr_upload_step_details_hint = /** @type {(inputs: Upload_Step_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad, açıklama, etiketler`)
};

const zh_upload_step_details_hint = /** @type {(inputs: Upload_Step_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称、描述、标签`)
};

const ja_upload_step_details_hint = /** @type {(inputs: Upload_Step_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前、説明、タグ`)
};

/**
* | output |
* | --- |
* | "Name, description, tags" |
*
* @param {Upload_Step_Details_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_step_details_hint = /** @type {((inputs?: Upload_Step_Details_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Step_Details_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_step_details_hint(inputs)
	if (locale === "de") return de_upload_step_details_hint(inputs)
	if (locale === "fr") return fr_upload_step_details_hint(inputs)
	if (locale === "it") return it_upload_step_details_hint(inputs)
	if (locale === "nl") return nl_upload_step_details_hint(inputs)
	if (locale === "pl") return pl_upload_step_details_hint(inputs)
	if (locale === "pt") return pt_upload_step_details_hint(inputs)
	if (locale === "ru") return ru_upload_step_details_hint(inputs)
	if (locale === "sv") return sv_upload_step_details_hint(inputs)
	if (locale === "tr") return tr_upload_step_details_hint(inputs)
	if (locale === "zh") return zh_upload_step_details_hint(inputs)
	if (locale === "ja") return ja_upload_step_details_hint(inputs)
	return en_upload_step_details_hint(inputs)
});
