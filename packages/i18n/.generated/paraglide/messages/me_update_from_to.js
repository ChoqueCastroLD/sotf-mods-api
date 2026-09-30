/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ from: NonNullable<unknown>, to: NonNullable<unknown> }} Me_Update_From_ToInputs */

const en_me_update_from_to = /** @type {(inputs: Me_Update_From_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Update: ${i?.from} → ${i?.to}`)
};

const es_me_update_from_to = /** @type {(inputs: Me_Update_From_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actualización: ${i?.from} → ${i?.to}`)
};

const de_me_update_from_to = /** @type {(inputs: Me_Update_From_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Update: ${i?.from} → ${i?.to}`)
};

const fr_me_update_from_to = /** @type {(inputs: Me_Update_From_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mise à jour : ${i?.from} → ${i?.to}`)
};

const it_me_update_from_to = /** @type {(inputs: Me_Update_From_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiornamento: ${i?.from} → ${i?.to}`)
};

const nl_me_update_from_to = /** @type {(inputs: Me_Update_From_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Update: ${i?.from} → ${i?.to}`)
};

const pl_me_update_from_to = /** @type {(inputs: Me_Update_From_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aktualizacja: ${i?.from} → ${i?.to}`)
};

const pt_me_update_from_to = /** @type {(inputs: Me_Update_From_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Atualização: ${i?.from} → ${i?.to}`)
};

const ru_me_update_from_to = /** @type {(inputs: Me_Update_From_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Обновление: ${i?.from} → ${i?.to}`)
};

const sv_me_update_from_to = /** @type {(inputs: Me_Update_From_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uppdatering: ${i?.from} → ${i?.to}`)
};

const tr_me_update_from_to = /** @type {(inputs: Me_Update_From_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Güncelleme: ${i?.from} → ${i?.to}`)
};

const zh_me_update_from_to = /** @type {(inputs: Me_Update_From_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`更新：${i?.from} → ${i?.to}`)
};

const ja_me_update_from_to = /** @type {(inputs: Me_Update_From_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`アップデート：${i?.from} → ${i?.to}`)
};

/**
* | output |
* | --- |
* | "Update: {from} → {to}" |
*
* @param {Me_Update_From_ToInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_update_from_to = /** @type {((inputs: Me_Update_From_ToInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Update_From_ToInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_update_from_to(inputs)
	if (locale === "de") return de_me_update_from_to(inputs)
	if (locale === "fr") return fr_me_update_from_to(inputs)
	if (locale === "it") return it_me_update_from_to(inputs)
	if (locale === "nl") return nl_me_update_from_to(inputs)
	if (locale === "pl") return pl_me_update_from_to(inputs)
	if (locale === "pt") return pt_me_update_from_to(inputs)
	if (locale === "ru") return ru_me_update_from_to(inputs)
	if (locale === "sv") return sv_me_update_from_to(inputs)
	if (locale === "tr") return tr_me_update_from_to(inputs)
	if (locale === "zh") return zh_me_update_from_to(inputs)
	if (locale === "ja") return ja_me_update_from_to(inputs)
	return en_me_update_from_to(inputs)
});
