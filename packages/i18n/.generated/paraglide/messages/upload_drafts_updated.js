/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Upload_Drafts_UpdatedInputs */

const en_upload_drafts_updated = /** @type {(inputs: Upload_Drafts_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Edited ${i?.when}`)
};

const es_upload_drafts_updated = /** @type {(inputs: Upload_Drafts_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Editado ${i?.when}`)
};

const de_upload_drafts_updated = /** @type {(inputs: Upload_Drafts_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bearbeitet ${i?.when}`)
};

const fr_upload_drafts_updated = /** @type {(inputs: Upload_Drafts_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modifié ${i?.when}`)
};

const it_upload_drafts_updated = /** @type {(inputs: Upload_Drafts_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modificata ${i?.when}`)
};

const nl_upload_drafts_updated = /** @type {(inputs: Upload_Drafts_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bewerkt ${i?.when}`)
};

const pl_upload_drafts_updated = /** @type {(inputs: Upload_Drafts_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Edytowano ${i?.when}`)
};

const pt_upload_drafts_updated = /** @type {(inputs: Upload_Drafts_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Editado ${i?.when}`)
};

const ru_upload_drafts_updated = /** @type {(inputs: Upload_Drafts_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Изменён ${i?.when}`)
};

const sv_upload_drafts_updated = /** @type {(inputs: Upload_Drafts_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Redigerat ${i?.when}`)
};

const tr_upload_drafts_updated = /** @type {(inputs: Upload_Drafts_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Düzenlendi: ${i?.when}`)
};

const zh_upload_drafts_updated = /** @type {(inputs: Upload_Drafts_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`编辑于 ${i?.when}`)
};

const ja_upload_drafts_updated = /** @type {(inputs: Upload_Drafts_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when}に編集`)
};

/**
* | output |
* | --- |
* | "Edited {when}" |
*
* @param {Upload_Drafts_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_updated = /** @type {((inputs: Upload_Drafts_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_updated(inputs)
	if (locale === "de") return de_upload_drafts_updated(inputs)
	if (locale === "fr") return fr_upload_drafts_updated(inputs)
	if (locale === "it") return it_upload_drafts_updated(inputs)
	if (locale === "nl") return nl_upload_drafts_updated(inputs)
	if (locale === "pl") return pl_upload_drafts_updated(inputs)
	if (locale === "pt") return pt_upload_drafts_updated(inputs)
	if (locale === "ru") return ru_upload_drafts_updated(inputs)
	if (locale === "sv") return sv_upload_drafts_updated(inputs)
	if (locale === "tr") return tr_upload_drafts_updated(inputs)
	if (locale === "zh") return zh_upload_drafts_updated(inputs)
	if (locale === "ja") return ja_upload_drafts_updated(inputs)
	return en_upload_drafts_updated(inputs)
});
