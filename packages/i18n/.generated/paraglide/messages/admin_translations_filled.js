/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ filled: NonNullable<unknown>, total: NonNullable<unknown> }} Admin_Translations_FilledInputs */

const en_admin_translations_filled = /** @type {(inputs: Admin_Translations_FilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.filled} of ${i?.total} filled`)
};

const es_admin_translations_filled = /** @type {(inputs: Admin_Translations_FilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.filled} de ${i?.total} completadas`)
};

const de_admin_translations_filled = /** @type {(inputs: Admin_Translations_FilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.filled} von ${i?.total} ausgefüllt`)
};

const fr_admin_translations_filled = /** @type {(inputs: Admin_Translations_FilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.filled} sur ${i?.total} remplies`)
};

const it_admin_translations_filled = /** @type {(inputs: Admin_Translations_FilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.filled} di ${i?.total} compilate`)
};

const nl_admin_translations_filled = /** @type {(inputs: Admin_Translations_FilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.filled} van ${i?.total} ingevuld`)
};

const pl_admin_translations_filled = /** @type {(inputs: Admin_Translations_FilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wypełniono ${i?.filled} z ${i?.total}`)
};

const pt_admin_translations_filled = /** @type {(inputs: Admin_Translations_FilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.filled} de ${i?.total} preenchidas`)
};

const ru_admin_translations_filled = /** @type {(inputs: Admin_Translations_FilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Заполнено ${i?.filled} из ${i?.total}`)
};

const sv_admin_translations_filled = /** @type {(inputs: Admin_Translations_FilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.filled} av ${i?.total} ifyllda`)
};

const tr_admin_translations_filled = /** @type {(inputs: Admin_Translations_FilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} alandan ${i?.filled} tanesi dolu`)
};

const zh_admin_translations_filled = /** @type {(inputs: Admin_Translations_FilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已填写 ${i?.filled}/${i?.total}`)
};

const ja_admin_translations_filled = /** @type {(inputs: Admin_Translations_FilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} 件中 ${i?.filled} 件入力済み`)
};

/**
* | output |
* | --- |
* | "{filled} of {total} filled" |
*
* @param {Admin_Translations_FilledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_translations_filled = /** @type {((inputs: Admin_Translations_FilledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Translations_FilledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_translations_filled(inputs)
	if (locale === "de") return de_admin_translations_filled(inputs)
	if (locale === "fr") return fr_admin_translations_filled(inputs)
	if (locale === "it") return it_admin_translations_filled(inputs)
	if (locale === "nl") return nl_admin_translations_filled(inputs)
	if (locale === "pl") return pl_admin_translations_filled(inputs)
	if (locale === "pt") return pt_admin_translations_filled(inputs)
	if (locale === "ru") return ru_admin_translations_filled(inputs)
	if (locale === "sv") return sv_admin_translations_filled(inputs)
	if (locale === "tr") return tr_admin_translations_filled(inputs)
	if (locale === "zh") return zh_admin_translations_filled(inputs)
	if (locale === "ja") return ja_admin_translations_filled(inputs)
	return en_admin_translations_filled(inputs)
});
