/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Nsfw_LabelInputs */

const en_upload_nsfw_label = /** @type {(inputs: Upload_Nsfw_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adult content (NSFW)`)
};

const es_upload_nsfw_label = /** @type {(inputs: Upload_Nsfw_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido adulto (NSFW)`)
};

const de_upload_nsfw_label = /** @type {(inputs: Upload_Nsfw_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhalte für Erwachsene (NSFW)`)
};

const fr_upload_nsfw_label = /** @type {(inputs: Upload_Nsfw_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu pour adultes (NSFW)`)
};

const it_upload_nsfw_label = /** @type {(inputs: Upload_Nsfw_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenuti per adulti (NSFW)`)
};

const nl_upload_nsfw_label = /** @type {(inputs: Upload_Nsfw_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhoud voor volwassenen (NSFW)`)
};

const pl_upload_nsfw_label = /** @type {(inputs: Upload_Nsfw_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Treści dla dorosłych (NSFW)`)
};

const pt_upload_nsfw_label = /** @type {(inputs: Upload_Nsfw_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo adulto (NSFW)`)
};

const ru_upload_nsfw_label = /** @type {(inputs: Upload_Nsfw_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Контент для взрослых (NSFW)`)
};

const sv_upload_nsfw_label = /** @type {(inputs: Upload_Nsfw_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vuxeninnehåll (NSFW)`)
};

const tr_upload_nsfw_label = /** @type {(inputs: Upload_Nsfw_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yetişkin içerik (NSFW)`)
};

const zh_upload_nsfw_label = /** @type {(inputs: Upload_Nsfw_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成人内容（NSFW）`)
};

const ja_upload_nsfw_label = /** @type {(inputs: Upload_Nsfw_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成人向けコンテンツ（NSFW）`)
};

/**
* | output |
* | --- |
* | "Adult content (NSFW)" |
*
* @param {Upload_Nsfw_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_nsfw_label = /** @type {((inputs?: Upload_Nsfw_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Nsfw_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_nsfw_label(inputs)
	if (locale === "de") return de_upload_nsfw_label(inputs)
	if (locale === "fr") return fr_upload_nsfw_label(inputs)
	if (locale === "it") return it_upload_nsfw_label(inputs)
	if (locale === "nl") return nl_upload_nsfw_label(inputs)
	if (locale === "pl") return pl_upload_nsfw_label(inputs)
	if (locale === "pt") return pt_upload_nsfw_label(inputs)
	if (locale === "ru") return ru_upload_nsfw_label(inputs)
	if (locale === "sv") return sv_upload_nsfw_label(inputs)
	if (locale === "tr") return tr_upload_nsfw_label(inputs)
	if (locale === "zh") return zh_upload_nsfw_label(inputs)
	if (locale === "ja") return ja_upload_nsfw_label(inputs)
	return en_upload_nsfw_label(inputs)
});
