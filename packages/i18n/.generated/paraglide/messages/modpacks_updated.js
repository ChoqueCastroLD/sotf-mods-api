/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Modpacks_UpdatedInputs */

const en_modpacks_updated = /** @type {(inputs: Modpacks_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Updated ${i?.date}`)
};

const es_modpacks_updated = /** @type {(inputs: Modpacks_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actualizado el ${i?.date}`)
};

const de_modpacks_updated = /** @type {(inputs: Modpacks_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aktualisiert am ${i?.date}`)
};

const fr_modpacks_updated = /** @type {(inputs: Modpacks_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mis à jour le ${i?.date}`)
};

const it_modpacks_updated = /** @type {(inputs: Modpacks_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiornato il ${i?.date}`)
};

const nl_modpacks_updated = /** @type {(inputs: Modpacks_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bijgewerkt op ${i?.date}`)
};

const pl_modpacks_updated = /** @type {(inputs: Modpacks_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zaktualizowano ${i?.date}`)
};

const pt_modpacks_updated = /** @type {(inputs: Modpacks_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Atualizado em ${i?.date}`)
};

const ru_modpacks_updated = /** @type {(inputs: Modpacks_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Обновлён ${i?.date}`)
};

const sv_modpacks_updated = /** @type {(inputs: Modpacks_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uppdaterad ${i?.date}`)
};

const tr_modpacks_updated = /** @type {(inputs: Modpacks_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Güncellendi: ${i?.date}`)
};

const zh_modpacks_updated = /** @type {(inputs: Modpacks_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`更新于 ${i?.date}`)
};

const ja_modpacks_updated = /** @type {(inputs: Modpacks_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`更新日: ${i?.date}`)
};

/**
* | output |
* | --- |
* | "Updated {date}" |
*
* @param {Modpacks_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_updated = /** @type {((inputs: Modpacks_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_updated(inputs)
	if (locale === "de") return de_modpacks_updated(inputs)
	if (locale === "fr") return fr_modpacks_updated(inputs)
	if (locale === "it") return it_modpacks_updated(inputs)
	if (locale === "nl") return nl_modpacks_updated(inputs)
	if (locale === "pl") return pl_modpacks_updated(inputs)
	if (locale === "pt") return pt_modpacks_updated(inputs)
	if (locale === "ru") return ru_modpacks_updated(inputs)
	if (locale === "sv") return sv_modpacks_updated(inputs)
	if (locale === "tr") return tr_modpacks_updated(inputs)
	if (locale === "zh") return zh_modpacks_updated(inputs)
	if (locale === "ja") return ja_modpacks_updated(inputs)
	return en_modpacks_updated(inputs)
});
