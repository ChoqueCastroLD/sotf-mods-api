/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dependency_DuplicateInputs */

const en_upload_dependency_duplicate = /** @type {(inputs: Upload_Dependency_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That dependency is already listed.`)
};

const es_upload_dependency_duplicate = /** @type {(inputs: Upload_Dependency_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esa dependencia ya está en la lista.`)
};

const de_upload_dependency_duplicate = /** @type {(inputs: Upload_Dependency_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Abhängigkeit steht schon in der Liste.`)
};

const fr_upload_dependency_duplicate = /** @type {(inputs: Upload_Dependency_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette dépendance est déjà dans la liste.`)
};

const it_upload_dependency_duplicate = /** @type {(inputs: Upload_Dependency_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa dipendenza è già nell’elenco.`)
};

const nl_upload_dependency_duplicate = /** @type {(inputs: Upload_Dependency_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die afhankelijkheid staat al in de lijst.`)
};

const pl_upload_dependency_duplicate = /** @type {(inputs: Upload_Dependency_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta zależność jest już na liście.`)
};

const pt_upload_dependency_duplicate = /** @type {(inputs: Upload_Dependency_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essa dependência já está na lista.`)
};

const ru_upload_dependency_duplicate = /** @type {(inputs: Upload_Dependency_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта зависимость уже есть в списке.`)
};

const sv_upload_dependency_duplicate = /** @type {(inputs: Upload_Dependency_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det beroendet finns redan i listan.`)
};

const tr_upload_dependency_duplicate = /** @type {(inputs: Upload_Dependency_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu bağımlılık zaten listede.`)
};

const zh_upload_dependency_duplicate = /** @type {(inputs: Upload_Dependency_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这个依赖已在列表中。`)
};

const ja_upload_dependency_duplicate = /** @type {(inputs: Upload_Dependency_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その依存関係はすでにリストにあります。`)
};

/**
* | output |
* | --- |
* | "That dependency is already listed." |
*
* @param {Upload_Dependency_DuplicateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependency_duplicate = /** @type {((inputs?: Upload_Dependency_DuplicateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependency_DuplicateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependency_duplicate(inputs)
	if (locale === "de") return de_upload_dependency_duplicate(inputs)
	if (locale === "fr") return fr_upload_dependency_duplicate(inputs)
	if (locale === "it") return it_upload_dependency_duplicate(inputs)
	if (locale === "nl") return nl_upload_dependency_duplicate(inputs)
	if (locale === "pl") return pl_upload_dependency_duplicate(inputs)
	if (locale === "pt") return pt_upload_dependency_duplicate(inputs)
	if (locale === "ru") return ru_upload_dependency_duplicate(inputs)
	if (locale === "sv") return sv_upload_dependency_duplicate(inputs)
	if (locale === "tr") return tr_upload_dependency_duplicate(inputs)
	if (locale === "zh") return zh_upload_dependency_duplicate(inputs)
	if (locale === "ja") return ja_upload_dependency_duplicate(inputs)
	return en_upload_dependency_duplicate(inputs)
});
