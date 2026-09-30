/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Facet_UpdatedInputs */

const en_explore_facet_updated = /** @type {(inputs: Explore_Facet_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updated`)
};

const es_explore_facet_updated = /** @type {(inputs: Explore_Facet_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizado`)
};

const de_explore_facet_updated = /** @type {(inputs: Explore_Facet_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualisiert`)
};

const fr_explore_facet_updated = /** @type {(inputs: Explore_Facet_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis à jour`)
};

const it_explore_facet_updated = /** @type {(inputs: Explore_Facet_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornate`)
};

const nl_explore_facet_updated = /** @type {(inputs: Explore_Facet_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bijgewerkt`)
};

const pl_explore_facet_updated = /** @type {(inputs: Explore_Facet_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualizacja`)
};

const pt_explore_facet_updated = /** @type {(inputs: Explore_Facet_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizado`)
};

const ru_explore_facet_updated = /** @type {(inputs: Explore_Facet_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновлено`)
};

const sv_explore_facet_updated = /** @type {(inputs: Explore_Facet_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdaterad`)
};

const tr_explore_facet_updated = /** @type {(inputs: Explore_Facet_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncellenme`)
};

const zh_explore_facet_updated = /** @type {(inputs: Explore_Facet_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新时间`)
};

const ja_explore_facet_updated = /** @type {(inputs: Explore_Facet_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新`)
};

/**
* | output |
* | --- |
* | "Updated" |
*
* @param {Explore_Facet_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_facet_updated = /** @type {((inputs?: Explore_Facet_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Facet_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_facet_updated(inputs)
	if (locale === "de") return de_explore_facet_updated(inputs)
	if (locale === "fr") return fr_explore_facet_updated(inputs)
	if (locale === "it") return it_explore_facet_updated(inputs)
	if (locale === "nl") return nl_explore_facet_updated(inputs)
	if (locale === "pl") return pl_explore_facet_updated(inputs)
	if (locale === "pt") return pt_explore_facet_updated(inputs)
	if (locale === "ru") return ru_explore_facet_updated(inputs)
	if (locale === "sv") return sv_explore_facet_updated(inputs)
	if (locale === "tr") return tr_explore_facet_updated(inputs)
	if (locale === "zh") return zh_explore_facet_updated(inputs)
	if (locale === "ja") return ja_explore_facet_updated(inputs)
	return en_explore_facet_updated(inputs)
});
