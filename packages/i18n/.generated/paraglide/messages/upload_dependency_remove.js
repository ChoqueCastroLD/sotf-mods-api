/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ id: NonNullable<unknown> }} Upload_Dependency_RemoveInputs */

const en_upload_dependency_remove = /** @type {(inputs: Upload_Dependency_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove ${i?.id}`)
};

const es_upload_dependency_remove = /** @type {(inputs: Upload_Dependency_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quitar ${i?.id}`)
};

const de_upload_dependency_remove = /** @type {(inputs: Upload_Dependency_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.id} entfernen`)
};

const fr_upload_dependency_remove = /** @type {(inputs: Upload_Dependency_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer ${i?.id}`)
};

const it_upload_dependency_remove = /** @type {(inputs: Upload_Dependency_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rimuovi ${i?.id}`)
};

const nl_upload_dependency_remove = /** @type {(inputs: Upload_Dependency_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.id} verwijderen`)
};

const pl_upload_dependency_remove = /** @type {(inputs: Upload_Dependency_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usuń ${i?.id}`)
};

const pt_upload_dependency_remove = /** @type {(inputs: Upload_Dependency_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remover ${i?.id}`)
};

const ru_upload_dependency_remove = /** @type {(inputs: Upload_Dependency_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Удалить ${i?.id}`)
};

const sv_upload_dependency_remove = /** @type {(inputs: Upload_Dependency_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort ${i?.id}`)
};

const tr_upload_dependency_remove = /** @type {(inputs: Upload_Dependency_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.id} kaldır`)
};

const zh_upload_dependency_remove = /** @type {(inputs: Upload_Dependency_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`移除 ${i?.id}`)
};

const ja_upload_dependency_remove = /** @type {(inputs: Upload_Dependency_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.id} を削除`)
};

/**
* | output |
* | --- |
* | "Remove {id}" |
*
* @param {Upload_Dependency_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependency_remove = /** @type {((inputs: Upload_Dependency_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependency_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependency_remove(inputs)
	if (locale === "de") return de_upload_dependency_remove(inputs)
	if (locale === "fr") return fr_upload_dependency_remove(inputs)
	if (locale === "it") return it_upload_dependency_remove(inputs)
	if (locale === "nl") return nl_upload_dependency_remove(inputs)
	if (locale === "pl") return pl_upload_dependency_remove(inputs)
	if (locale === "pt") return pt_upload_dependency_remove(inputs)
	if (locale === "ru") return ru_upload_dependency_remove(inputs)
	if (locale === "sv") return sv_upload_dependency_remove(inputs)
	if (locale === "tr") return tr_upload_dependency_remove(inputs)
	if (locale === "zh") return zh_upload_dependency_remove(inputs)
	if (locale === "ja") return ja_upload_dependency_remove(inputs)
	return en_upload_dependency_remove(inputs)
});
