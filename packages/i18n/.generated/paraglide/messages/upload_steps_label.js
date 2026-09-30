/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Steps_LabelInputs */

const en_upload_steps_label = /** @type {(inputs: Upload_Steps_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing steps`)
};

const es_upload_steps_label = /** @type {(inputs: Upload_Steps_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pasos de publicación`)
};

const de_upload_steps_label = /** @type {(inputs: Upload_Steps_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schritte der Veröffentlichung`)
};

const fr_upload_steps_label = /** @type {(inputs: Upload_Steps_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Étapes de publication`)
};

const it_upload_steps_label = /** @type {(inputs: Upload_Steps_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passaggi di pubblicazione`)
};

const nl_upload_steps_label = /** @type {(inputs: Upload_Steps_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicatiestappen`)
};

const pl_upload_steps_label = /** @type {(inputs: Upload_Steps_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kroki publikacji`)
};

const pt_upload_steps_label = /** @type {(inputs: Upload_Steps_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etapas da publicação`)
};

const ru_upload_steps_label = /** @type {(inputs: Upload_Steps_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Шаги публикации`)
};

const sv_upload_steps_label = /** @type {(inputs: Upload_Steps_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiceringssteg`)
};

const tr_upload_steps_label = /** @type {(inputs: Upload_Steps_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayınlama adımları`)
};

const zh_upload_steps_label = /** @type {(inputs: Upload_Steps_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布步骤`)
};

const ja_upload_steps_label = /** @type {(inputs: Upload_Steps_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開の手順`)
};

/**
* | output |
* | --- |
* | "Publishing steps" |
*
* @param {Upload_Steps_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_steps_label = /** @type {((inputs?: Upload_Steps_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Steps_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_steps_label(inputs)
	if (locale === "de") return de_upload_steps_label(inputs)
	if (locale === "fr") return fr_upload_steps_label(inputs)
	if (locale === "it") return it_upload_steps_label(inputs)
	if (locale === "nl") return nl_upload_steps_label(inputs)
	if (locale === "pl") return pl_upload_steps_label(inputs)
	if (locale === "pt") return pt_upload_steps_label(inputs)
	if (locale === "ru") return ru_upload_steps_label(inputs)
	if (locale === "sv") return sv_upload_steps_label(inputs)
	if (locale === "tr") return tr_upload_steps_label(inputs)
	if (locale === "zh") return zh_upload_steps_label(inputs)
	if (locale === "ja") return ja_upload_steps_label(inputs)
	return en_upload_steps_label(inputs)
});
