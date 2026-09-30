/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dependency_RequiredInputs */

const en_upload_dependency_required = /** @type {(inputs: Upload_Dependency_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Required`)
};

const es_upload_dependency_required = /** @type {(inputs: Upload_Dependency_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obligatoria`)
};

const de_upload_dependency_required = /** @type {(inputs: Upload_Dependency_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erforderlich`)
};

const fr_upload_dependency_required = /** @type {(inputs: Upload_Dependency_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requise`)
};

const it_upload_dependency_required = /** @type {(inputs: Upload_Dependency_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obbligatoria`)
};

const nl_upload_dependency_required = /** @type {(inputs: Upload_Dependency_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vereist`)
};

const pl_upload_dependency_required = /** @type {(inputs: Upload_Dependency_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wymagana`)
};

const pt_upload_dependency_required = /** @type {(inputs: Upload_Dependency_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrigatória`)
};

const ru_upload_dependency_required = /** @type {(inputs: Upload_Dependency_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обязательная`)
};

const sv_upload_dependency_required = /** @type {(inputs: Upload_Dependency_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krävs`)
};

const tr_upload_dependency_required = /** @type {(inputs: Upload_Dependency_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerekli`)
};

const zh_upload_dependency_required = /** @type {(inputs: Upload_Dependency_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`必需`)
};

const ja_upload_dependency_required = /** @type {(inputs: Upload_Dependency_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`必須`)
};

/**
* | output |
* | --- |
* | "Required" |
*
* @param {Upload_Dependency_RequiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependency_required = /** @type {((inputs?: Upload_Dependency_RequiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependency_RequiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependency_required(inputs)
	if (locale === "de") return de_upload_dependency_required(inputs)
	if (locale === "fr") return fr_upload_dependency_required(inputs)
	if (locale === "it") return it_upload_dependency_required(inputs)
	if (locale === "nl") return nl_upload_dependency_required(inputs)
	if (locale === "pl") return pl_upload_dependency_required(inputs)
	if (locale === "pt") return pt_upload_dependency_required(inputs)
	if (locale === "ru") return ru_upload_dependency_required(inputs)
	if (locale === "sv") return sv_upload_dependency_required(inputs)
	if (locale === "tr") return tr_upload_dependency_required(inputs)
	if (locale === "zh") return zh_upload_dependency_required(inputs)
	if (locale === "ja") return ja_upload_dependency_required(inputs)
	return en_upload_dependency_required(inputs)
});
