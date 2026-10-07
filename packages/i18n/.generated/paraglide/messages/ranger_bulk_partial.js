/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ failed: NonNullable<unknown> }} Ranger_Bulk_PartialInputs */

const en_ranger_bulk_partial = /** @type {(inputs: Ranger_Bulk_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.failed} could not be changed. Try those again.`)
};

const es_ranger_bulk_partial = /** @type {(inputs: Ranger_Bulk_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No se pudieron cambiar ${i?.failed}. Inténtalo de nuevo con ellos.`)
};

const de_ranger_bulk_partial = /** @type {(inputs: Ranger_Bulk_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.failed} konnten nicht geändert werden. Versuche es mit diesen noch einmal.`)
};

const fr_ranger_bulk_partial = /** @type {(inputs: Ranger_Bulk_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.failed} n’ont pas pu être modifiés. Réessayez avec ceux-là.`)
};

const it_ranger_bulk_partial = /** @type {(inputs: Ranger_Bulk_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.failed} non sono stati modificati. Riprova con questi.`)
};

const nl_ranger_bulk_partial = /** @type {(inputs: Ranger_Bulk_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.failed} konden niet worden gewijzigd. Probeer die opnieuw.`)
};

const pl_ranger_bulk_partial = /** @type {(inputs: Ranger_Bulk_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nie udało się zmienić pozycji: ${i?.failed}. Spróbuj ponownie.`)
};

const pt_ranger_bulk_partial = /** @type {(inputs: Ranger_Bulk_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.failed} não puderam ser alterados. Tente esses de novo.`)
};

const ru_ranger_bulk_partial = /** @type {(inputs: Ranger_Bulk_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Не удалось изменить: ${i?.failed}. Повторите для них.`)
};

const sv_ranger_bulk_partial = /** @type {(inputs: Ranger_Bulk_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.failed} kunde inte ändras. Försök igen med dem.`)
};

const tr_ranger_bulk_partial = /** @type {(inputs: Ranger_Bulk_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.failed} öğe değiştirilemedi. Bunları yeniden deneyin.`)
};

const zh_ranger_bulk_partial = /** @type {(inputs: Ranger_Bulk_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`有 ${i?.failed} 项未能更改，请重试。`)
};

const ja_ranger_bulk_partial = /** @type {(inputs: Ranger_Bulk_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.failed} 件は変更できませんでした。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "{failed} could not be changed. Try those again." |
*
* @param {Ranger_Bulk_PartialInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_partial = /** @type {((inputs: Ranger_Bulk_PartialInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_PartialInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_partial(inputs)
	if (locale === "de") return de_ranger_bulk_partial(inputs)
	if (locale === "fr") return fr_ranger_bulk_partial(inputs)
	if (locale === "it") return it_ranger_bulk_partial(inputs)
	if (locale === "nl") return nl_ranger_bulk_partial(inputs)
	if (locale === "pl") return pl_ranger_bulk_partial(inputs)
	if (locale === "pt") return pt_ranger_bulk_partial(inputs)
	if (locale === "ru") return ru_ranger_bulk_partial(inputs)
	if (locale === "sv") return sv_ranger_bulk_partial(inputs)
	if (locale === "tr") return tr_ranger_bulk_partial(inputs)
	if (locale === "zh") return zh_ranger_bulk_partial(inputs)
	if (locale === "ja") return ja_ranger_bulk_partial(inputs)
	return en_ranger_bulk_partial(inputs)
});
