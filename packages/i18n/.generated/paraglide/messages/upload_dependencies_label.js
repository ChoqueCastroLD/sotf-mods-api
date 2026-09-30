/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dependencies_LabelInputs */

const en_upload_dependencies_label = /** @type {(inputs: Upload_Dependencies_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependencies`)
};

const es_upload_dependencies_label = /** @type {(inputs: Upload_Dependencies_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependencias`)
};

const de_upload_dependencies_label = /** @type {(inputs: Upload_Dependencies_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abhängigkeiten`)
};

const fr_upload_dependencies_label = /** @type {(inputs: Upload_Dependencies_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dépendances`)
};

const it_upload_dependencies_label = /** @type {(inputs: Upload_Dependencies_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dipendenze`)
};

const nl_upload_dependencies_label = /** @type {(inputs: Upload_Dependencies_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afhankelijkheden`)
};

const pl_upload_dependencies_label = /** @type {(inputs: Upload_Dependencies_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zależności`)
};

const pt_upload_dependencies_label = /** @type {(inputs: Upload_Dependencies_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependências`)
};

const ru_upload_dependencies_label = /** @type {(inputs: Upload_Dependencies_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зависимости`)
};

const sv_upload_dependencies_label = /** @type {(inputs: Upload_Dependencies_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beroenden`)
};

const tr_upload_dependencies_label = /** @type {(inputs: Upload_Dependencies_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağımlılıklar`)
};

const zh_upload_dependencies_label = /** @type {(inputs: Upload_Dependencies_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依赖`)
};

const ja_upload_dependencies_label = /** @type {(inputs: Upload_Dependencies_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依存関係`)
};

/**
* | output |
* | --- |
* | "Dependencies" |
*
* @param {Upload_Dependencies_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependencies_label = /** @type {((inputs?: Upload_Dependencies_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependencies_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependencies_label(inputs)
	if (locale === "de") return de_upload_dependencies_label(inputs)
	if (locale === "fr") return fr_upload_dependencies_label(inputs)
	if (locale === "it") return it_upload_dependencies_label(inputs)
	if (locale === "nl") return nl_upload_dependencies_label(inputs)
	if (locale === "pl") return pl_upload_dependencies_label(inputs)
	if (locale === "pt") return pt_upload_dependencies_label(inputs)
	if (locale === "ru") return ru_upload_dependencies_label(inputs)
	if (locale === "sv") return sv_upload_dependencies_label(inputs)
	if (locale === "tr") return tr_upload_dependencies_label(inputs)
	if (locale === "zh") return zh_upload_dependencies_label(inputs)
	if (locale === "ja") return ja_upload_dependencies_label(inputs)
	return en_upload_dependencies_label(inputs)
});
