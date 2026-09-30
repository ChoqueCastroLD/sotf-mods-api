/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dependency_Range_PlaceholderInputs */

const en_upload_dependency_range_placeholder = /** @type {(inputs: Upload_Dependency_Range_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any version (e.g. >=1.2.0)`)
};

const es_upload_dependency_range_placeholder = /** @type {(inputs: Upload_Dependency_Range_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cualquier versión (p. ej. >=1.2.0)`)
};

const de_upload_dependency_range_placeholder = /** @type {(inputs: Upload_Dependency_Range_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jede Version (z. B. >=1.2.0)`)
};

const fr_upload_dependency_range_placeholder = /** @type {(inputs: Upload_Dependency_Range_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`N’importe quelle version (ex. >=1.2.0)`)
};

const it_upload_dependency_range_placeholder = /** @type {(inputs: Upload_Dependency_Range_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualsiasi versione (es. >=1.2.0)`)
};

const nl_upload_dependency_range_placeholder = /** @type {(inputs: Upload_Dependency_Range_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke versie (bijv. >=1.2.0)`)
};

const pl_upload_dependency_range_placeholder = /** @type {(inputs: Upload_Dependency_Range_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dowolna wersja (np. >=1.2.0)`)
};

const pt_upload_dependency_range_placeholder = /** @type {(inputs: Upload_Dependency_Range_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer versão (ex.: >=1.2.0)`)
};

const ru_upload_dependency_range_placeholder = /** @type {(inputs: Upload_Dependency_Range_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Любая версия (например, >=1.2.0)`)
};

const sv_upload_dependency_range_placeholder = /** @type {(inputs: Upload_Dependency_Range_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valfri version (t.ex. >=1.2.0)`)
};

const tr_upload_dependency_range_placeholder = /** @type {(inputs: Upload_Dependency_Range_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herhangi bir sürüm (ör. >=1.2.0)`)
};

const zh_upload_dependency_range_placeholder = /** @type {(inputs: Upload_Dependency_Range_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任意版本（例如 >=1.2.0）`)
};

const ja_upload_dependency_range_placeholder = /** @type {(inputs: Upload_Dependency_Range_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任意のバージョン（例：>=1.2.0）`)
};

/**
* | output |
* | --- |
* | "Any version (e.g. >=1.2.0)" |
*
* @param {Upload_Dependency_Range_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependency_range_placeholder = /** @type {((inputs?: Upload_Dependency_Range_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependency_Range_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependency_range_placeholder(inputs)
	if (locale === "de") return de_upload_dependency_range_placeholder(inputs)
	if (locale === "fr") return fr_upload_dependency_range_placeholder(inputs)
	if (locale === "it") return it_upload_dependency_range_placeholder(inputs)
	if (locale === "nl") return nl_upload_dependency_range_placeholder(inputs)
	if (locale === "pl") return pl_upload_dependency_range_placeholder(inputs)
	if (locale === "pt") return pt_upload_dependency_range_placeholder(inputs)
	if (locale === "ru") return ru_upload_dependency_range_placeholder(inputs)
	if (locale === "sv") return sv_upload_dependency_range_placeholder(inputs)
	if (locale === "tr") return tr_upload_dependency_range_placeholder(inputs)
	if (locale === "zh") return zh_upload_dependency_range_placeholder(inputs)
	if (locale === "ja") return ja_upload_dependency_range_placeholder(inputs)
	return en_upload_dependency_range_placeholder(inputs)
});
