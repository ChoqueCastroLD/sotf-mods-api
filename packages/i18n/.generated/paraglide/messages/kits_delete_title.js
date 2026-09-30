/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kits_Delete_TitleInputs */

const en_kits_delete_title = /** @type {(inputs: Kits_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete “${i?.name}”?`)
};

const es_kits_delete_title = /** @type {(inputs: Kits_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Eliminar «${i?.name}»?`)
};

const de_kits_delete_title = /** @type {(inputs: Kits_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.name}“ löschen?`)
};

const fr_kits_delete_title = /** @type {(inputs: Kits_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Supprimer « ${i?.name} » ?`)
};

const it_kits_delete_title = /** @type {(inputs: Kits_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Eliminare «${i?.name}»?`)
};

const nl_kits_delete_title = /** @type {(inputs: Kits_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`‘${i?.name}’ verwijderen?`)
};

const pl_kits_delete_title = /** @type {(inputs: Kits_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usunąć „${i?.name}”?`)
};

const pt_kits_delete_title = /** @type {(inputs: Kits_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Excluir “${i?.name}”?`)
};

const ru_kits_delete_title = /** @type {(inputs: Kits_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Удалить «${i?.name}»?`)
};

const sv_kits_delete_title = /** @type {(inputs: Kits_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Radera ”${i?.name}”?`)
};

const tr_kits_delete_title = /** @type {(inputs: Kits_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” silinsin mi?`)
};

const zh_kits_delete_title = /** @type {(inputs: Kits_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`删除“${i?.name}”？`)
};

const ja_kits_delete_title = /** @type {(inputs: Kits_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.name}」を削除しますか？`)
};

/**
* | output |
* | --- |
* | "Delete “{name}”?" |
*
* @param {Kits_Delete_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_delete_title = /** @type {((inputs: Kits_Delete_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Delete_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_delete_title(inputs)
	if (locale === "de") return de_kits_delete_title(inputs)
	if (locale === "fr") return fr_kits_delete_title(inputs)
	if (locale === "it") return it_kits_delete_title(inputs)
	if (locale === "nl") return nl_kits_delete_title(inputs)
	if (locale === "pl") return pl_kits_delete_title(inputs)
	if (locale === "pt") return pt_kits_delete_title(inputs)
	if (locale === "ru") return ru_kits_delete_title(inputs)
	if (locale === "sv") return sv_kits_delete_title(inputs)
	if (locale === "tr") return tr_kits_delete_title(inputs)
	if (locale === "zh") return zh_kits_delete_title(inputs)
	if (locale === "ja") return ja_kits_delete_title(inputs)
	return en_kits_delete_title(inputs)
});
