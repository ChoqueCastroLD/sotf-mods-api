/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Explore_Hub_UpdatedInputs */

const en_explore_hub_updated = /** @type {(inputs: Explore_Hub_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Updated ${i?.date}`)
};

const es_explore_hub_updated = /** @type {(inputs: Explore_Hub_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actualizado el ${i?.date}`)
};

const de_explore_hub_updated = /** @type {(inputs: Explore_Hub_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aktualisiert am ${i?.date}`)
};

const fr_explore_hub_updated = /** @type {(inputs: Explore_Hub_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mis à jour le ${i?.date}`)
};

const it_explore_hub_updated = /** @type {(inputs: Explore_Hub_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiornato il ${i?.date}`)
};

const nl_explore_hub_updated = /** @type {(inputs: Explore_Hub_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bijgewerkt op ${i?.date}`)
};

const pl_explore_hub_updated = /** @type {(inputs: Explore_Hub_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zaktualizowano ${i?.date}`)
};

const pt_explore_hub_updated = /** @type {(inputs: Explore_Hub_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Atualizado em ${i?.date}`)
};

const ru_explore_hub_updated = /** @type {(inputs: Explore_Hub_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Обновлено ${i?.date}`)
};

const sv_explore_hub_updated = /** @type {(inputs: Explore_Hub_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uppdaterad ${i?.date}`)
};

const tr_explore_hub_updated = /** @type {(inputs: Explore_Hub_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Güncellenme: ${i?.date}`)
};

const zh_explore_hub_updated = /** @type {(inputs: Explore_Hub_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`更新于 ${i?.date}`)
};

const ja_explore_hub_updated = /** @type {(inputs: Explore_Hub_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} 更新`)
};

/**
* | output |
* | --- |
* | "Updated {date}" |
*
* @param {Explore_Hub_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_hub_updated = /** @type {((inputs: Explore_Hub_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Hub_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_hub_updated(inputs)
	if (locale === "de") return de_explore_hub_updated(inputs)
	if (locale === "fr") return fr_explore_hub_updated(inputs)
	if (locale === "it") return it_explore_hub_updated(inputs)
	if (locale === "nl") return nl_explore_hub_updated(inputs)
	if (locale === "pl") return pl_explore_hub_updated(inputs)
	if (locale === "pt") return pt_explore_hub_updated(inputs)
	if (locale === "ru") return ru_explore_hub_updated(inputs)
	if (locale === "sv") return sv_explore_hub_updated(inputs)
	if (locale === "tr") return tr_explore_hub_updated(inputs)
	if (locale === "zh") return zh_explore_hub_updated(inputs)
	if (locale === "ja") return ja_explore_hub_updated(inputs)
	return en_explore_hub_updated(inputs)
});
