/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Description_OkInputs */

const en_upload_preflight_description_ok = /** @type {(inputs: Upload_Preflight_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The description is detailed.`)
};

const es_upload_preflight_description_ok = /** @type {(inputs: Upload_Preflight_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La descripción es detallada.`)
};

const de_upload_preflight_description_ok = /** @type {(inputs: Upload_Preflight_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Beschreibung ist ausführlich.`)
};

const fr_upload_preflight_description_ok = /** @type {(inputs: Upload_Preflight_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La description est détaillée.`)
};

const it_upload_preflight_description_ok = /** @type {(inputs: Upload_Preflight_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La descrizione è dettagliata.`)
};

const nl_upload_preflight_description_ok = /** @type {(inputs: Upload_Preflight_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De beschrijving is uitgebreid.`)
};

const pl_upload_preflight_description_ok = /** @type {(inputs: Upload_Preflight_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis jest szczegółowy.`)
};

const pt_upload_preflight_description_ok = /** @type {(inputs: Upload_Preflight_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A descrição está detalhada.`)
};

const ru_upload_preflight_description_ok = /** @type {(inputs: Upload_Preflight_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание подробное.`)
};

const sv_upload_preflight_description_ok = /** @type {(inputs: Upload_Preflight_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskrivningen är utförlig.`)
};

const tr_upload_preflight_description_ok = /** @type {(inputs: Upload_Preflight_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıklama ayrıntılı.`)
};

const zh_upload_preflight_description_ok = /** @type {(inputs: Upload_Preflight_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`描述很详细。`)
};

const ja_upload_preflight_description_ok = /** @type {(inputs: Upload_Preflight_Description_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明は十分に詳しいです。`)
};

/**
* | output |
* | --- |
* | "The description is detailed." |
*
* @param {Upload_Preflight_Description_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_description_ok = /** @type {((inputs?: Upload_Preflight_Description_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Description_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_description_ok(inputs)
	if (locale === "de") return de_upload_preflight_description_ok(inputs)
	if (locale === "fr") return fr_upload_preflight_description_ok(inputs)
	if (locale === "it") return it_upload_preflight_description_ok(inputs)
	if (locale === "nl") return nl_upload_preflight_description_ok(inputs)
	if (locale === "pl") return pl_upload_preflight_description_ok(inputs)
	if (locale === "pt") return pt_upload_preflight_description_ok(inputs)
	if (locale === "ru") return ru_upload_preflight_description_ok(inputs)
	if (locale === "sv") return sv_upload_preflight_description_ok(inputs)
	if (locale === "tr") return tr_upload_preflight_description_ok(inputs)
	if (locale === "zh") return zh_upload_preflight_description_ok(inputs)
	if (locale === "ja") return ja_upload_preflight_description_ok(inputs)
	return en_upload_preflight_description_ok(inputs)
});
