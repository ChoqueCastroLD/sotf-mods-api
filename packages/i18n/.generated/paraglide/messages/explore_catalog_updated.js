/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Explore_Catalog_UpdatedInputs */

const en_explore_catalog_updated = /** @type {(inputs: Explore_Catalog_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Updated ${i?.when}`)
};

const es_explore_catalog_updated = /** @type {(inputs: Explore_Catalog_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actualizado ${i?.when}`)
};

const de_explore_catalog_updated = /** @type {(inputs: Explore_Catalog_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aktualisiert ${i?.when}`)
};

const fr_explore_catalog_updated = /** @type {(inputs: Explore_Catalog_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mis à jour ${i?.when}`)
};

const it_explore_catalog_updated = /** @type {(inputs: Explore_Catalog_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiornato ${i?.when}`)
};

const nl_explore_catalog_updated = /** @type {(inputs: Explore_Catalog_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bijgewerkt ${i?.when}`)
};

const pl_explore_catalog_updated = /** @type {(inputs: Explore_Catalog_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zaktualizowano ${i?.when}`)
};

const pt_explore_catalog_updated = /** @type {(inputs: Explore_Catalog_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Atualizado ${i?.when}`)
};

const ru_explore_catalog_updated = /** @type {(inputs: Explore_Catalog_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Обновлено ${i?.when}`)
};

const sv_explore_catalog_updated = /** @type {(inputs: Explore_Catalog_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uppdaterad ${i?.when}`)
};

const tr_explore_catalog_updated = /** @type {(inputs: Explore_Catalog_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Güncellendi: ${i?.when}`)
};

const zh_explore_catalog_updated = /** @type {(inputs: Explore_Catalog_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`更新于${i?.when}`)
};

const ja_explore_catalog_updated = /** @type {(inputs: Explore_Catalog_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when}に更新`)
};

/**
* | output |
* | --- |
* | "Updated {when}" |
*
* @param {Explore_Catalog_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_updated = /** @type {((inputs: Explore_Catalog_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_updated(inputs)
	if (locale === "de") return de_explore_catalog_updated(inputs)
	if (locale === "fr") return fr_explore_catalog_updated(inputs)
	if (locale === "it") return it_explore_catalog_updated(inputs)
	if (locale === "nl") return nl_explore_catalog_updated(inputs)
	if (locale === "pl") return pl_explore_catalog_updated(inputs)
	if (locale === "pt") return pt_explore_catalog_updated(inputs)
	if (locale === "ru") return ru_explore_catalog_updated(inputs)
	if (locale === "sv") return sv_explore_catalog_updated(inputs)
	if (locale === "tr") return tr_explore_catalog_updated(inputs)
	if (locale === "zh") return zh_explore_catalog_updated(inputs)
	if (locale === "ja") return ja_explore_catalog_updated(inputs)
	return en_explore_catalog_updated(inputs)
});
