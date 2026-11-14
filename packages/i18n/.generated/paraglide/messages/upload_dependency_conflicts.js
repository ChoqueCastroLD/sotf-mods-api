/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dependency_ConflictsInputs */

const en_upload_dependency_conflicts = /** @type {(inputs: Upload_Dependency_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not compatible`)
};

const es_upload_dependency_conflicts = /** @type {(inputs: Upload_Dependency_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No compatible`)
};

const de_upload_dependency_conflicts = /** @type {(inputs: Upload_Dependency_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht kompatibel`)
};

const fr_upload_dependency_conflicts = /** @type {(inputs: Upload_Dependency_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incompatible`)
};

const it_upload_dependency_conflicts = /** @type {(inputs: Upload_Dependency_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non compatibile`)
};

const nl_upload_dependency_conflicts = /** @type {(inputs: Upload_Dependency_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet compatibel`)
};

const pl_upload_dependency_conflicts = /** @type {(inputs: Upload_Dependency_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niezgodny`)
};

const pt_upload_dependency_conflicts = /** @type {(inputs: Upload_Dependency_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não compatível`)
};

const ru_upload_dependency_conflicts = /** @type {(inputs: Upload_Dependency_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Несовместим`)
};

const sv_upload_dependency_conflicts = /** @type {(inputs: Upload_Dependency_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte kompatibel`)
};

const tr_upload_dependency_conflicts = /** @type {(inputs: Upload_Dependency_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumsuz`)
};

const zh_upload_dependency_conflicts = /** @type {(inputs: Upload_Dependency_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不兼容`)
};

const ja_upload_dependency_conflicts = /** @type {(inputs: Upload_Dependency_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性なし`)
};

/**
* | output |
* | --- |
* | "Not compatible" |
*
* @param {Upload_Dependency_ConflictsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependency_conflicts = /** @type {((inputs?: Upload_Dependency_ConflictsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependency_ConflictsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependency_conflicts(inputs)
	if (locale === "de") return de_upload_dependency_conflicts(inputs)
	if (locale === "fr") return fr_upload_dependency_conflicts(inputs)
	if (locale === "it") return it_upload_dependency_conflicts(inputs)
	if (locale === "nl") return nl_upload_dependency_conflicts(inputs)
	if (locale === "pl") return pl_upload_dependency_conflicts(inputs)
	if (locale === "pt") return pt_upload_dependency_conflicts(inputs)
	if (locale === "ru") return ru_upload_dependency_conflicts(inputs)
	if (locale === "sv") return sv_upload_dependency_conflicts(inputs)
	if (locale === "tr") return tr_upload_dependency_conflicts(inputs)
	if (locale === "zh") return zh_upload_dependency_conflicts(inputs)
	if (locale === "ja") return ja_upload_dependency_conflicts(inputs)
	return en_upload_dependency_conflicts(inputs)
});
