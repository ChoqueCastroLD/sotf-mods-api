/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kits_DeletedInputs */

const en_kits_deleted = /** @type {(inputs: Kits_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” deleted`)
};

const es_kits_deleted = /** @type {(inputs: Kits_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.name}» eliminado`)
};

const de_kits_deleted = /** @type {(inputs: Kits_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.name}“ gelöscht`)
};

const fr_kits_deleted = /** @type {(inputs: Kits_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`« ${i?.name} » supprimé`)
};

const it_kits_deleted = /** @type {(inputs: Kits_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.name}» eliminato`)
};

const nl_kits_deleted = /** @type {(inputs: Kits_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`‘${i?.name}’ verwijderd`)
};

const pl_kits_deleted = /** @type {(inputs: Kits_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usunięto „${i?.name}”`)
};

const pt_kits_deleted = /** @type {(inputs: Kits_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” excluído`)
};

const ru_kits_deleted = /** @type {(inputs: Kits_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.name}» удалён`)
};

const sv_kits_deleted = /** @type {(inputs: Kits_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`”${i?.name}” har raderats`)
};

const tr_kits_deleted = /** @type {(inputs: Kits_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” silindi`)
};

const zh_kits_deleted = /** @type {(inputs: Kits_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已删除“${i?.name}”`)
};

const ja_kits_deleted = /** @type {(inputs: Kits_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.name}」を削除しました`)
};

/**
* | output |
* | --- |
* | "“{name}” deleted" |
*
* @param {Kits_DeletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_deleted = /** @type {((inputs: Kits_DeletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_DeletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_deleted(inputs)
	if (locale === "de") return de_kits_deleted(inputs)
	if (locale === "fr") return fr_kits_deleted(inputs)
	if (locale === "it") return it_kits_deleted(inputs)
	if (locale === "nl") return nl_kits_deleted(inputs)
	if (locale === "pl") return pl_kits_deleted(inputs)
	if (locale === "pt") return pt_kits_deleted(inputs)
	if (locale === "ru") return ru_kits_deleted(inputs)
	if (locale === "sv") return sv_kits_deleted(inputs)
	if (locale === "tr") return tr_kits_deleted(inputs)
	if (locale === "zh") return zh_kits_deleted(inputs)
	if (locale === "ja") return ja_kits_deleted(inputs)
	return en_kits_deleted(inputs)
});
