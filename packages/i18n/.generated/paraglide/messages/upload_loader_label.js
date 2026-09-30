/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Loader_LabelInputs */

const en_upload_loader_label = /** @type {(inputs: Upload_Loader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimum RedLoader`)
};

const es_upload_loader_label = /** @type {(inputs: Upload_Loader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader mínimo`)
};

const de_upload_loader_label = /** @type {(inputs: Upload_Loader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mindestversion von RedLoader`)
};

const fr_upload_loader_label = /** @type {(inputs: Upload_Loader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader minimum`)
};

const it_upload_loader_label = /** @type {(inputs: Upload_Loader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader minimo`)
};

const nl_upload_loader_label = /** @type {(inputs: Upload_Loader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimale RedLoader`)
};

const pl_upload_loader_label = /** @type {(inputs: Upload_Loader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimalny RedLoader`)
};

const pt_upload_loader_label = /** @type {(inputs: Upload_Loader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader mínimo`)
};

const ru_upload_loader_label = /** @type {(inputs: Upload_Loader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Минимальная версия RedLoader`)
};

const sv_upload_loader_label = /** @type {(inputs: Upload_Loader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägsta RedLoader`)
};

const tr_upload_loader_label = /** @type {(inputs: Upload_Loader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En düşük RedLoader`)
};

const zh_upload_loader_label = /** @type {(inputs: Upload_Loader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最低 RedLoader 版本`)
};

const ja_upload_loader_label = /** @type {(inputs: Upload_Loader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`必要なRedLoaderの最低バージョン`)
};

/**
* | output |
* | --- |
* | "Minimum RedLoader" |
*
* @param {Upload_Loader_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_loader_label = /** @type {((inputs?: Upload_Loader_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Loader_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_loader_label(inputs)
	if (locale === "de") return de_upload_loader_label(inputs)
	if (locale === "fr") return fr_upload_loader_label(inputs)
	if (locale === "it") return it_upload_loader_label(inputs)
	if (locale === "nl") return nl_upload_loader_label(inputs)
	if (locale === "pl") return pl_upload_loader_label(inputs)
	if (locale === "pt") return pt_upload_loader_label(inputs)
	if (locale === "ru") return ru_upload_loader_label(inputs)
	if (locale === "sv") return sv_upload_loader_label(inputs)
	if (locale === "tr") return tr_upload_loader_label(inputs)
	if (locale === "zh") return zh_upload_loader_label(inputs)
	if (locale === "ja") return ja_upload_loader_label(inputs)
	return en_upload_loader_label(inputs)
});
