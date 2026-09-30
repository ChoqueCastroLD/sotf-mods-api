/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ id: NonNullable<unknown> }} Upload_Dependency_KindInputs */

const en_upload_dependency_kind = /** @type {(inputs: Upload_Dependency_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Relation with ${i?.id}`)
};

const es_upload_dependency_kind = /** @type {(inputs: Upload_Dependency_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Relación con ${i?.id}`)
};

const de_upload_dependency_kind = /** @type {(inputs: Upload_Dependency_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beziehung zu ${i?.id}`)
};

const fr_upload_dependency_kind = /** @type {(inputs: Upload_Dependency_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Relation avec ${i?.id}`)
};

const it_upload_dependency_kind = /** @type {(inputs: Upload_Dependency_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Relazione con ${i?.id}`)
};

const nl_upload_dependency_kind = /** @type {(inputs: Upload_Dependency_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Relatie met ${i?.id}`)
};

const pl_upload_dependency_kind = /** @type {(inputs: Upload_Dependency_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Relacja z ${i?.id}`)
};

const pt_upload_dependency_kind = /** @type {(inputs: Upload_Dependency_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Relação com ${i?.id}`)
};

const ru_upload_dependency_kind = /** @type {(inputs: Upload_Dependency_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Связь с ${i?.id}`)
};

const sv_upload_dependency_kind = /** @type {(inputs: Upload_Dependency_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Relation till ${i?.id}`)
};

const tr_upload_dependency_kind = /** @type {(inputs: Upload_Dependency_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.id} ile ilişki`)
};

const zh_upload_dependency_kind = /** @type {(inputs: Upload_Dependency_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`与 ${i?.id} 的关系`)
};

const ja_upload_dependency_kind = /** @type {(inputs: Upload_Dependency_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.id} との関係`)
};

/**
* | output |
* | --- |
* | "Relation with {id}" |
*
* @param {Upload_Dependency_KindInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependency_kind = /** @type {((inputs: Upload_Dependency_KindInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependency_KindInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependency_kind(inputs)
	if (locale === "de") return de_upload_dependency_kind(inputs)
	if (locale === "fr") return fr_upload_dependency_kind(inputs)
	if (locale === "it") return it_upload_dependency_kind(inputs)
	if (locale === "nl") return nl_upload_dependency_kind(inputs)
	if (locale === "pl") return pl_upload_dependency_kind(inputs)
	if (locale === "pt") return pt_upload_dependency_kind(inputs)
	if (locale === "ru") return ru_upload_dependency_kind(inputs)
	if (locale === "sv") return sv_upload_dependency_kind(inputs)
	if (locale === "tr") return tr_upload_dependency_kind(inputs)
	if (locale === "zh") return zh_upload_dependency_kind(inputs)
	if (locale === "ja") return ja_upload_dependency_kind(inputs)
	return en_upload_dependency_kind(inputs)
});
